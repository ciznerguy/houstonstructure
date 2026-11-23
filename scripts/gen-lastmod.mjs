// Writes lib/lastmod.json: the real last-change date of every sitemap URL, from git.
// Run after committing content changes and before the build that deploys them:
//   node scripts/gen-lastmod.mjs
// Why: a sitemap that gives every page the build time as <lastmod> is ignored by
// Google. Per-page dates tell it which pages actually changed.
// Pages generated from lib/business.ts take the newest commit among the lines of
// their own entry (git blame), so editing one city does not re-date all sixteen.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";

const sh = (cmd) => execSync(cmd, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).trim();
const day = (unix) => new Date(unix * 1000).toISOString().slice(0, 10);
const fileDate = (path) => {
  const t = sh(`git log -1 --format=%ct -- "${path}"`);
  return t ? Number(t) : 0;
};

// Newest committer time per line of lib/business.ts.
const blameTimes = [];
{
  const out = sh("git blame --line-porcelain lib/business.ts");
  const commitTime = {};
  let sha = null;
  for (const line of out.split("\n")) {
    const head = line.match(/^([0-9a-f]{40}) \d+ (\d+)/);
    if (head) { sha = head[1]; continue; }
    const ct = line.match(/^committer-time (\d+)/);
    if (ct) { commitTime[sha] = Number(ct[1]); continue; }
    if (line.startsWith("\t")) blameTimes.push(commitTime[sha]);
  }
}
const src = readFileSync("lib/business.ts", "utf8").split("\n");
// The entry for a slug runs from its `slug: "x"` line up to the next line that opens a new entry.
const entryDate = (slug) => {
  const start = src.findIndex((l) => l.includes(`slug: "${slug}"`));
  if (start < 0) return 0;
  let end = start + 1;
  while (end < src.length && !/^\s{2}\{\s*$/.test(src[end]) && !/^\];/.test(src[end])) end++;
  return Math.max(...blameTimes.slice(start - 1, end));
};
const slugsOf = (name) => {
  const text = readFileSync("lib/business.ts", "utf8");
  const block = text.slice(text.indexOf(`export const ${name}`));
  const stop = block.indexOf("\n];");
  return [...block.slice(0, stop).matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]);
};

const map = {};
const staticPages = { "/": "app/page.tsx", "/services": "app/services/page.tsx", "/locations": "app/locations/page.tsx", "/guides": "app/guides/page.tsx", "/projects": "app/projects/page.tsx", "/cost-estimator": "app/cost-estimator/page.tsx", "/about": "app/about/page.tsx", "/reviews": "app/reviews/page.tsx", "/contact": "app/contact/page.tsx", "/privacy": "app/privacy/page.tsx" };
for (const [url, file] of Object.entries(staticPages)) if (existsSync(file)) map[url] = day(fileDate(file));
for (const s of slugsOf("SERVICES")) map[`/services/${s}`] = day(entryDate(s));
for (const s of slugsOf("SERVICE_AREAS")) map[`/locations/${s}`] = day(entryDate(s));
for (const dir of ["guides", "projects"]) {
  for (const s of readdirSync(`app/${dir}`, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
    const f = `app/${dir}/${s}/page.tsx`;
    if (existsSync(f)) map[`/${dir}/${s}`] = day(fileDate(f));
  }
}
writeFileSync("lib/lastmod.json", JSON.stringify(map, null, 2) + "\n");
console.log(Object.keys(map).length, "URLs dated");
