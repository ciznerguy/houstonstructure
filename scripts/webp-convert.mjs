// Makes a WebP copy of every JPG in public/images (desktop and -800 mobile files),
// keeping the JPG as the fallback. components/Img.tsx serves the WebP copy
// automatically once it exists. Run after adding images:
//   node scripts/webp-convert.mjs
// Skips files whose WebP copy is newer than the JPG.
//
// FROZEN: images on the LBW30 experiment pages (wall removal, steel beams, and the
// home-additions control page) are not converted until the experiment ends on
// 2026-12-08, so those pages stay byte-for-byte the same. Empty this list after it ends.
import sharp from "sharp";
import { readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const FROZEN = [
  "load-bearing-wall-removal",
  "steel-beam-installation",
  "home-additions",
  "commercial-wall-removal",
  "project-bellaire-open-plan",
];

const dir = "public/images";
let made = 0, before = 0, after = 0;
for (const f of readdirSync(dir).filter((f) => f.endsWith(".jpg"))) {
  if (FROZEN.some((p) => f.startsWith(p))) continue;
  const src = path.join(dir, f);
  const out = src.replace(/\.jpg$/, ".webp");
  if (existsSync(out) && statSync(out).mtimeMs > statSync(src).mtimeMs) continue;
  await sharp(src).webp({ quality: 75 }).toFile(out);
  before += statSync(src).size;
  after += statSync(out).size;
  made++;
}
const kb = (b) => Math.round(b / 1024);
console.log(`${made} WebP files made. JPG ${kb(before)} KB -> WebP ${kb(after)} KB`);
