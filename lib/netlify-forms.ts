export async function submitNetlifyForm(formName: string, fields: Record<string, string>) {
  const body = new URLSearchParams({ "form-name": formName, ...fields }).toString();
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
}
