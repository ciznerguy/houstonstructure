/**
 * Harvest what people actually type, from Google's own autocomplete.
 *
 * Search Console can only show queries we already appear for. Autocomplete
 * shows demand that exists whether or not we rank, which is the only way to
 * see a search before it reaches us. Suggestions are ordered by Google's own
 * popularity signal, so position in the list is itself information.
 *
 * Seeds are expanded with a-z and with question words, which is where the
 * long tail and the AI-friendly phrasings live.
 */
const SEEDS = [
  "second story addition houston",
  "home addition houston",
  "room addition houston",
  "load bearing wall houston",
  "load bearing wall removal",
  "steel beam houston",
  "structural engineer houston",
];
const QUESTION_PREFIXES = ["how much", "how to", "can i", "do i need", "what is", "who", "why", "is it"];
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

async function suggest(q) {
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=${encodeURIComponent(q)}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) return [];
    const j = await res.json();
    return Array.isArray(j?.[1]) ? j[1] : [];
  } catch {
    return [];
  }
}

const seen = new Map(); // suggestion -> {seeds:Set, bestRank}
async function collect(q, seed) {
  const out = await suggest(q);
  out.forEach((s, i) => {
    const k = s.toLowerCase().trim();
    const prev = seen.get(k);
    if (prev) { prev.seeds.add(seed); prev.bestRank = Math.min(prev.bestRank, i); }
    else seen.set(k, { seeds: new Set([seed]), bestRank: i });
  });
}

for (const seed of SEEDS) {
  await collect(seed, seed);
  for (const c of ALPHABET) await collect(`${seed} ${c}`, seed);
  for (const p of QUESTION_PREFIXES) await collect(`${p} ${seed}`, seed);
}

const rows = [...seen.entries()].filter(([q]) => q.length > 8);
console.log(`collected ${rows.length} distinct suggestions from ${SEEDS.length} seeds\n`);

const isQuestion = (q) => /^(how|what|why|when|who|which|can|do|does|is|are|should|will)\b/.test(q);
const houston = (q) => /houston|katy|bellaire|sugar land|pearland|cypress|woodlands|heights|missouri city|spring|texas|tx\b/i.test(q);

const show = (label, list) => {
  console.log(`== ${label} (${list.length})`);
  list.slice(0, 40).sort((a, b) => a[1].bestRank - b[1].bestRank).forEach(([q, v]) =>
    console.log(`  [${v.bestRank}] ${q}`)
  );
  console.log();
};

show("QUESTIONS, Houston area", rows.filter(([q]) => isQuestion(q) && houston(q)));
show("QUESTIONS, generic", rows.filter(([q]) => isQuestion(q) && !houston(q)));
show("LOCAL, not questions", rows.filter(([q]) => !isQuestion(q) && houston(q)));
