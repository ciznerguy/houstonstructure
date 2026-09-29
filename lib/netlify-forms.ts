declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export async function submitNetlifyForm(formName: string, fields: Record<string, string>) {
  // Fire-and-forget: store a copy in Netlify Forms for a dashboard record (non-critical if it fails).
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ "form-name": formName, ...fields }).toString(),
  }).catch(() => {});

  // Actually sends the email — this is the one that must succeed.
  const res = await fetch("/.netlify/functions/send-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formName, fields }),
  });
  if (!res.ok) throw new Error(`Email send failed: ${res.status}`);

  // Only fires on a confirmed successful send, not on every submit attempt.
  //
  // This resolves only once GTM reports its tags have fired. The two-step lead
  // flow navigates to /estimate the moment this returns, and without the wait
  // the page can unload before the GA4 generate_lead event leaves the browser,
  // which would quietly lose the one number we actually care about. eventTimeout
  // makes GTM call back even if a tag stalls; the outer timer covers GTM being
  // blocked or never loading at all, in which case there is nothing to wait for.
  window.dataLayer = window.dataLayer || [];
  await new Promise<void>((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    setTimeout(finish, 1200);
    window.dataLayer!.push({
      event: "form_submit_success",
      form_name: formName,
      eventCallback: finish,
      eventTimeout: 1000,
    });
  });
}
