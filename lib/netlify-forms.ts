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
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "form_submit_success", form_name: formName });
}
