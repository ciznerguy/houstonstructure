/**
 * Find search demand that is appearing or growing, from our own Search Console
 * data. Three 28-day windows, most recent first. A query is "new" when it has
 * impressions now and none in either earlier window, and "rising" when it is
 * growing meaningfully window over window.
 *
 * The "foundation engineer" rank-tracker bot is subtracted; see CLAUDE.md.
 */
import { getAccessToken } from "./google-auth.mjs";

const SITE = "https://houstonstructure.com/";
const fmt = (d) => d.toISOString().slice(0, 10);
const US = { dimension: "country", operator: "equals", expression: "usa" };
const BOT = "foundation engineer";

async function query(token, body) {
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
    { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(body) }
  );
  const d = await res.json();
  if (!res.ok) { console.error(JSON.stringify(d).slice(0, 300)); process.exit(1); }
  return d.rows || [];
}

const token = await getAccessToken(["https://www.googleapis.com/auth/webmasters.readonly"]);

// Windows end 3 days back because Search Console lags.
const end = new Date(); end.setDate(end.getDate() - 3);
function windowFrom(offsetPeriods) {
  const e = new Date(end); e.setDate(e.getDate() - 28 * offsetPeriods);
  const s = new Date(e); s.setDate(s.getDate() - 27);
  return [fmt(s), fmt(e)];
}
const W = [windowFrom(0), windowFrom(1), windowFrom(2)];
console.log(`now ${W[0].join("..")}\nprev ${W[1].join("..")}\nprev2 ${W[2].join("..")}\n`);

const snaps = [];
for (const [s, e] of W) {
  const rows = await query(token, {
    startDate: s, endDate: e, dimensions: ["query"],
    dimensionFilterGroups: [{ filters: [US] }], rowLimit: 1000,
  });
  const m = new Map();
  for (const r of rows) {
    if (r.keys[0] === BOT) continue;
    m.set(r.keys[0], { impr: r.impressions, clicks: r.clicks, pos: r.position });
  }
  snaps.push(m);
}
const [now, prev, prev2] = snaps;
console.log(`distinct queries: now ${now.size}, prev ${prev.size}, prev2 ${prev2.size}\n`);

const isCommercial = (q) =>
  /addition|second story|second floor|build up|wall|beam|remodel|contractor|engineer|foundation|permit|inspect|renovat|casita|adu|garage|mezzanine|buildout|tenant/i.test(q);

// NEW: present now, absent from both earlier windows.
const brandNew = [...now.entries()]
  .filter(([q, v]) => !prev.has(q) && !prev2.has(q) && v.impr >= 2)
  .sort((a, b) => b[1].impr - a[1].impr);

console.log("== NEW queries (no impressions in either earlier window, 2+ now)");
brandNew.slice(0, 30).forEach(([q, v]) =>
  console.log(`  ${isCommercial(q) ? "*" : " "} ${q} | impr ${v.impr} | pos ${v.pos.toFixed(1)}`)
);
console.log(`  (${brandNew.length} total, ${brandNew.filter(([q]) => isCommercial(q)).length} commercial)\n`);

// RISING: at least doubled and gained 3+ impressions.
const rising = [...now.entries()]
  .filter(([q, v]) => {
    const p = prev.get(q);
    return p && v.impr >= p.impr * 2 && v.impr - p.impr >= 3;
  })
  .sort((a, b) => b[1].impr - a[1].impr);

console.log("== RISING queries (at least doubled vs previous window)");
rising.slice(0, 25).forEach(([q, v]) => {
  const p = prev.get(q);
  console.log(`  ${isCommercial(q) ? "*" : " "} ${q} | ${p.impr} -> ${v.impr} impr | pos ${p.pos.toFixed(1)} -> ${v.pos.toFixed(1)}`);
});
console.log(`  (${rising.length} total)\n`);

// CLOSE TO PAGE 1: positions 8-20 carry the most upside per unit of work.
const nearMiss = [...now.entries()]
  .filter(([, v]) => v.pos >= 8 && v.pos <= 20 && v.impr >= 3)
  .sort((a, b) => b[1].impr - a[1].impr);

console.log("== CLOSE TO PAGE 1 (position 8-20, 3+ impressions)");
nearMiss.slice(0, 25).forEach(([q, v]) =>
  console.log(`  ${isCommercial(q) ? "*" : " "} ${q} | impr ${v.impr} | clicks ${v.clicks} | pos ${v.pos.toFixed(1)}`)
);
console.log(`\n* = commercially relevant to additions / walls / beams`);
