import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Google Business Profile does not support service accounts (see CLAUDE.md),
// so GBP calls authenticate as ciznerguy@gmail.com via a stored OAuth refresh
// token. Mirrors scripts/google-auth.mjs, which covers GA4/GTM/Search Console.
//
// If this throws "invalid_grant", the refresh token has expired (7-day limit
// while the OAuth app is in Testing mode): run scratchpad/gbp-oauth-flow.mjs,
// sign in as ciznerguy@gmail.com, and the token file is rewritten.

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokenPath = join(__dirname, "..", ".secrets", "gbp-oauth-token.json");

export const GBP_LOCATION = "locations/7994953544673911814"; // Levi's Houston Structural Repairs
export const GBP_ACCOUNT = "accounts/117126009752898242838";

export async function getGbpAccessToken() {
  const { refresh_token, client_id, client_secret } = JSON.parse(readFileSync(tokenPath, "utf8"));
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ refresh_token, client_id, client_secret, grant_type: "refresh_token" }).toString(),
  });
  const data = await res.json();
  if (!data.access_token) {
    throw new Error(`GBP token refresh failed: ${data.error} ${data.error_description ?? ""}`.trim());
  }
  return data.access_token;
}
