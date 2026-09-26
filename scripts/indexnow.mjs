/**
 * Notify Bing (and the other IndexNow participants) that URLs changed.
 *
 * IndexNow is a push protocol: instead of waiting for a crawler to come back,
 * you tell it what changed and it fetches within minutes. Bing, Yandex, Seznam
 * and Naver share one endpoint. Google does not participate, so this does not
 * replace Search Console.
 *
 * Ownership is proved by a key file that must be live at
 * https://houstonstructure.com/<KEY>.txt containing exactly the key. That file
 * lives in public/ so it ships with every build. Deploy before pinging.
 *
 *   node scripts/indexnow.mjs                 # every URL in the built sitemap
 *   node scripts/indexnow.mjs https://houstonstructure.com/guides/foo
 *
 * Pass full URLs, not bare paths: Git Bash on Windows rewrites a leading "/"
 * into a drive path and you end up submitting nonsense.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const KEY = "067f1beb0514f4d5f5ec714b72e6b2dd";
const HOST = "houstonstructure.com";
const ORIGIN = `https://${HOST}`;

const __dirname = dirname(fileURLToPath(import.meta.url));

function urlsFromSitemap() {
  const xml = readFileSync(join(__dirname, "..", "out", "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => u.startsWith(ORIGIN));
}

const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((a) => (a.startsWith("http") ? a : `${ORIGIN}${a.startsWith("/") ? a : "/" + a}`))
  : urlsFromSitemap();

if (!urlList.length) {
  console.error("No URLs to submit. Run `npm run build` first, or pass paths.");
  process.exit(1);
}

// Confirm the key file is actually reachable, otherwise the API returns 403
// and it is not obvious why.
const keyUrl = `${ORIGIN}/${KEY}.txt`;
const keyRes = await fetch(keyUrl);
const keyBody = keyRes.ok ? (await keyRes.text()).trim() : "";
if (keyBody !== KEY) {
  console.error(`Key file not live or wrong contents at ${keyUrl} (status ${keyRes.status}).`);
  console.error("Deploy first, then run this again.");
  process.exit(1);
}

// The API takes up to 10,000 URLs per request; we are nowhere near that.
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList }),
});

console.log(`submitted ${urlList.length} URLs -> HTTP ${res.status}`);
// 200 accepted, 202 accepted but key still validating, 4xx means something is wrong.
if (res.status === 200 || res.status === 202) {
  urlList.forEach((u) => console.log("  " + u.replace(ORIGIN, "")));
} else {
  console.error(await res.text());
  process.exit(1);
}
