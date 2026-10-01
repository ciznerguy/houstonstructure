import http from "node:http";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// One-time consent for the YouTube Data API, same shape as the GBP flow.
// Run it, open the printed URL as the account that OWNS the channel
// (me@ciznerguy.com today), approve, and the refresh token is written to
// .secrets/youtube-oauth-token.json. After that everything runs unattended.
//
// While the OAuth app is in Testing mode Google expires refresh tokens after
// seven days, so this will need re-running until the app is published.

const __dirname = dirname(fileURLToPath(import.meta.url));
// Reuses the existing Desktop OAuth client. Add http://localhost:51235 to its
// authorised redirect URIs if Google rejects the callback.
const clientPath = join(__dirname, "..", ".secrets", "gbp-oauth-client.json");
const tokenPath = join(__dirname, "..", ".secrets", "youtube-oauth-token.json");

const { client_id, client_secret } = JSON.parse(readFileSync(clientPath, "utf8"));

const PORT = 51235;
const REDIRECT_URI = `http://localhost:${PORT}`;
const SCOPE = [
  "https://www.googleapis.com/auth/youtube.upload",
  "https://www.googleapis.com/auth/youtube",
].join(" ");

const authUrl =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    client_id,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    prompt: "consent",
  }).toString();

console.log("\nOpen this URL signed in as the account that owns the channel:\n");
console.log(authUrl);
console.log("\nWaiting for consent...\n");

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error) {
    res.end(`Error: ${error}. You can close this tab.`);
    console.error("OAuth error:", error);
    server.close();
    process.exit(1);
  }
  if (!code) return;

  res.end("Success. You can close this tab and return to the terminal.");

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id,
      client_secret,
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
    }).toString(),
  });
  const data = await tokenRes.json();

  if (!tokenRes.ok || !data.refresh_token) {
    console.error("Token exchange failed:", JSON.stringify(data, null, 2));
    server.close();
    process.exit(1);
  }

  writeFileSync(
    tokenPath,
    JSON.stringify({ refresh_token: data.refresh_token, client_id, client_secret }, null, 2)
  );
  console.log("Saved .secrets/youtube-oauth-token.json");
  server.close();
  process.exit(0);
});

server.listen(PORT);
