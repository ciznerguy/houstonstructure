import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// YouTube Data API auth. Mirrors scripts/gbp-auth.mjs: a stored refresh token
// is exchanged for a short-lived access token, so uploads run from the command
// line with no browser involved.
//
// Why not a service account: a service account has no YouTube channel of its
// own and cannot be added to one, the same limitation that forced the OAuth
// route for Google Business Profile.
//
// Why not drive YouTube Studio in a browser: Studio ignores a file set on its
// input by script, by design. The API is the only route that works unattended.
//
// First-time setup, and again if this throws invalid_grant:
//   node scripts/youtube-oauth-flow.mjs
// then open the printed URL as the account that owns the channel.

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokenPath = join(__dirname, "..", ".secrets", "youtube-oauth-token.json");

// Levi's Houston Structural Repairs & Engineering, created 2026-10-01.
// Lives on me@ciznerguy.com rather than ciznerguy@gmail.com, which holds the
// rest of the Google assets; ciznerguy@gmail.com is being added as a manager.
export const YOUTUBE_CHANNEL_ID = "UCSiXnBfAh8dPJyyXUpbqyyw";
export const YOUTUBE_HANDLE = "@houstonstructure";

export async function getYouTubeAccessToken() {
  const { refresh_token, client_id, client_secret } = JSON.parse(readFileSync(tokenPath, "utf8"));
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token,
      client_id,
      client_secret,
      grant_type: "refresh_token",
    }).toString(),
  });
  const data = await res.json();
  if (!data.access_token) {
    throw new Error(
      `YouTube token refresh failed: ${data.error} ${data.error_description ?? ""}`.trim() +
        "\nRun: node scripts/youtube-oauth-flow.mjs"
    );
  }
  return data.access_token;
}

// Small helper so callers do not repeat the auth header and error handling.
export async function youtube(path, { method = "GET", body, token } = {}) {
  const t = token ?? (await getYouTubeAccessToken());
  const res = await fetch(`https://www.googleapis.com/youtube/v3/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${t}`,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status} ${text.slice(0, 400)}`);
  return text ? JSON.parse(text) : {};
}
