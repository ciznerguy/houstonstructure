@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

- **Goal**: generate relevant leads in the Houston, TX metro area for structural engineering services and related renovation/design projects — not traffic or rankings for their own sake, actual leads that turn into paid work.
- **Target audience**: anyone in the Houston area who needs this kind of service (structural engineering, foundation repair, renovation, general contracting) — no narrower segment to assume.
- **Who's asking**: the user is an internet marketer handling marketing for Levi (the business owner), not the engineer/owner himself. He earns a significant payment from every job that closes through this site, so lead quality and conversion matter more than vanity metrics.

## How to Communicate

- Reply in Hebrew, in simple language. The user understands technology but always wants the simplest framing, not jargon.
- Whenever proposing what needs to be done, also propose how (concrete steps/commands) — never just the "what."
- If something becomes a recurring type of decision ("yes, always do X"), it goes through the **Pre-approved Actions** list below — never a blanket tool-level permission grant.
- End every task with a short summary of what was actually done.
- Before any big or significant action, present it first in planning mode: lay out benefits and risks before doing it, not after.

## Pre-approved Actions

This is a closed list of specific, named actions that can be done end-to-end without pausing to ask each time. **A new item is only added here after the user explicitly approves it in conversation — never add one unilaterally.** Everything not on this list defaults to asking first.

1. **Adding an image to a site page** (approved 2026-07-28): rename the file appropriately, optimize/resize it, wire it into `lib/business.ts`/the relevant page, and commit + push to `master` (Netlify auto-deploys from there).

   To actually get the no-prompt benefit from `.claude/settings.json`, execute this as **separate, atomic commands** — the permission matcher checks the literal command string, so chaining breaks it:
   - Run each step as its own Bash call: resize (PowerShell), `mv -f <old> <new>`, `rm <original>`, dev server start (use the Bash tool's own `run_in_background` param instead of manual `&`/log redirection), `sleep` + `curl` as separate calls, `taskkill` once you have the PID, then `git add public/images/<file>`, `git commit -m "<one line, no heredoc>"`, `git push` — each as its own call, never joined with `&&`/`;`/`$(...)`.
   - Two prompts can't be removed no matter how this is written: `mv` with flags (e.g. `-f`) always requires manual approval as a hard rule, and any command containing `$(...)`/heredocs/`if` is always flagged as "cannot be statically analyzed." A multi-line git commit message needs a heredoc, so keep those commit messages to a single `-m` line for this workflow specifically.
   - Workaround for scripts that need loops/variable expansion (e.g. a PowerShell resize script, a Netlify-deploy poll loop): write the script to a **fixed, reused file path** (e.g. `scratchpad/run.ps1`) and invoke it via a plain `powershell.exe -File "<fixed path>"` (or `node "<fixed path>"`) through Bash — the permission check matches the literal invoking command line, not the file's contents, so once that exact command line is approved once, overwriting the file's content for future runs doesn't re-trigger a prompt. This does NOT work for the invoking command itself if that line contains `$(...)`/loops — only the wrapped script's internals can be complex.

2. **Starting/stopping the local dev server for verification** (approved 2026-07-30): run `node node_modules/next/dist/bin/next dev --port <port>` in the background and `taskkill` it when done, without asking each time — this is just for checking a change works before pushing, not a site change itself.
   - `.claude/settings.json` permission changes may only take effect in a fresh session, not retroactively mid-session.

3. **Read-only analytics/Search Console queries** (approved 2026-08-02): running Node scripts against the GA4 Data API and/or Search Console API via `scripts/google-auth.mjs` to check traffic, impressions, clicks, etc. — GET-only, no writes, no side effects. Write the query script to a fixed path under `scratchpad/` (e.g. `scratchpad/ga4-check.mjs`) and invoke via `node "C:\Users\User\Desktop\levi-structural-site\scratchpad\<name>.mjs"` — matches the fixed-script-path permission workaround from item 1. When checking traffic/leads numbers, filter to United States only unless told otherwise — non-US sessions in this data are noise (bots, the user's own/team's out-of-country access), not real prospects.

## Commands

```bash
npm run dev      # dev server (localhost:3000, unless overridden)
npm run build    # production build / type-check (static export to /out)
npm run lint     # eslint
```

There are no tests in this repo. When invoking Next directly from a non-shell context (e.g. tooling that spawns `node <path>` rather than going through a shell), the `.bin/next` shim is a bash script and fails under `node` directly on Windows — call `node_modules/next/dist/bin/next` instead.

## Stack

- **Next.js 16** (App Router) + TypeScript, **static export** (`output: "export"` in `next.config.ts`) — every route is pre-rendered at build time. There is no server runtime: no route handlers, no dynamic SSR, no ISR. Dynamic segments (`[slug]`, `[city]`) must be enumerated via `generateStaticParams`.
- **Tailwind v4** — config lives in `app/globals.css` via `@theme inline {}`, no `tailwind.config.ts`. Styling is plain Tailwind utility classes throughout (not inline `style={{}}`).
- Single font: Geist via `next/font/google`, exposed as `--font-geist-sans`.
- Deploy: [GitHub](https://github.com/ciznerguy/houstonstructure) → Netlify auto-deploy on push to `master` (`netlify.toml`: build command `next build`, publish `out`, functions `netlify/functions`) → live at houstonstructure.com.

## Architecture

All business content — name, phone, hours, services, service areas — lives in one file, `lib/business.ts`, exporting `BUSINESS`, `SERVICES`, and `SERVICE_AREAS`. Every page reads from these rather than hardcoding copy, and the dynamic routes are generated directly from them:

```
app/
  page.tsx                    → homepage
  services/page.tsx           → service index, maps over SERVICES
  services/[slug]/page.tsx    → generateStaticParams from SERVICES; per-service Service JSON-LD
  locations/page.tsx          → location index, maps over SERVICE_AREAS
  locations/[city]/page.tsx   → generateStaticParams from SERVICE_AREAS; per-location FAQPage JSON-LD
  about/, contact/, reviews/  → static content pages
  sitemap.ts, robots.ts       → force-static, generated from BUSINESS/SERVICES/SERVICE_AREAS

components/
  Schema.tsx                  → site-wide JSON-LD (ProfessionalService/GeneralContractor, geo, OfferCatalog of all SERVICES)
  Header.tsx                  → mobile nav toggle is pure CSS (`group-has-checked/mobile:`); desktop Services/Service Areas/Guides also get pure-CSS hover dropdowns (`group/drop` + `group-hover/drop:block`) listing every item from SERVICES/SERVICE_AREAS/GUIDES — no client component/JS for any of it
  FloatingContactButton.tsx   → site-wide quick-contact modal
  PageHero.tsx, CTASection.tsx, Footer.tsx

lib/
  business.ts                 → BUSINESS / SERVICES / SERVICE_AREAS — single source of truth
  guides.ts                   → GUIDES array (slug, title, summary) driving /guides index, nav dropdown, homepage section, and sitemap
  netlify-forms.ts            → submitNetlifyForm(), the shared lead-submission path

netlify/functions/
  send-lead.ts                → Netlify Function; actually sends the lead email

scripts/
  google-auth.mjs             → service-account JWT auth for Google APIs (GTM/GA4/Search Console)
```

Next.js 16 breaking change (see `AGENTS.md`): in Server Components, `params` is a `Promise` and must be `await`ed — every dynamic route in this repo follows that pattern (`const { slug } = await params`).

### Lead capture

Forms (the floating contact button and `/contact`) call `submitNetlifyForm(formName, fields)`, which does two things in parallel:
1. Fire-and-forget POST to `/` for Netlify's static form scanner to log a copy — this only works if the form's HTML exists in the static output regardless of visibility state, so conditionally-rendered forms must stay mounted (toggle via CSS class, not by unmounting).
2. POST to `/.netlify/functions/send-lead`, which sends the actual email via Gmail SMTP (`GMAIL_APP_PASSWORD` env var) to `BUSINESS.leadEmails`. This one must succeed — a non-OK response throws.

Only on confirmed success does it push `{ event: "form_submit_success" }` to `window.dataLayer`, which GTM turns into a GA4 `generate_lead` event. Phone number clicks (`tel:` links) fire a GTM `linkClick` trigger into a `phone_call` GA4 event.

### Tracking/schema wiring

- GTM container ID is `BUSINESS.gtmId`, loaded via the standard snippet hardcoded in `app/layout.tsx`.
- `components/Schema.tsx` renders one global JSON-LD block; individual service/location pages add their own additional JSON-LD (`Service`, `FAQPage`) on top of it.
- `scripts/google-auth.mjs` exports `getAccessToken(scopes[])` for calling GTM/GA4/Search Console APIs directly from Node (no external deps, signs its own JWT), reading the service-account key from `.secrets/gcp-service-account.json` (gitignored).
- **Standing rule for any new page** (added 2026-08-02): if the page has FAQ-style content, give it `FAQPage` JSON-LD (see `app/guides/*/page.tsx` or `app/locations/[city]/page.tsx` for the pattern); if it's a service/offering page, give it `Service` JSON-LD with an `image` field when one exists (see `app/services/[slug]/page.tsx`). Before publishing, paste the live page URL into Google's [Rich Results Test](https://search.google.com/test/rich-results) to confirm it's error-free. **Never add `aggregateRating`/review-count schema** to any page, new or existing — see the declined-decision note below; this still applies no matter which page it's suggested for.

### Images & performance

- **Every image needs a mobile variant + `srcset`.** Convention: `<name>.jpg` (desktop, ~1600w) plus `<name>-800.jpg` (mobile, 800w, JPEG quality ~75), wired as `srcSet={"<name>-800.jpg 800w, <name>.jpg 1600w"} sizes="100vw"`. Skipping this measurably tanks mobile PageSpeed — confirmed 2026-07-30: adding it took the homepage and the load-bearing-wall guide from ~73-80 to ~98 on mobile (Slow 4G Lighthouse), LCP from 5-7s down to ~2s.
- **Never use a CSS `background-image` for a large hero visual.** The Largest Contentful Paint spec explicitly excludes CSS background images from LCP candidacy, AND the browser can't discover/fetch them via the preload scanner until CSS is parsed — both bad. Use a real `<img>` (absolutely positioned behind an overlay `<div>`, content `relative` on top) with `fetchPriority="high"`.
- **Any image visible above the fold on initial load should get `fetchPriority="high"`** (homepage hero, the service-page hero image, the about-page image). Images below the fold (e.g. a photo gallery lower on a guide page) don't need it — Lighthouse won't pick them as the LCP candidate if text/content above them paints first.
- **Known open issue** (as of 2026-07-30): service pages (e.g. `/services/foundation-repair`) still score ~78 mobile / LCP ~5.5s even after srcset + fetchPriority were added — improved from 74 but nowhere near the ~98 achieved on the homepage/guide page with the identical pattern. The real LCP element/blocker on the service-page template hasn't been identified yet (needs the actual "LCP breakdown" insight expanded on a live PageSpeed Insights report, not more guessing). Check for an open task/investigate before assuming this is fixed.
- To check real PageSpeed Insights scores (not guesses): the public `pagespeedonline.googleapis.com` REST API is unreliable here — anonymous calls hit a shared, already-exhausted daily quota (429), and calling it with this project's own OAuth token 403s (`insufficientPermissions` — the API is API-key-only, no key is provisioned). The working method is driving `https://pagespeed.web.dev/analysis?url=<encoded-url>&form_factor=mobile|desktop` in a real browser (this triggers a live run, unlike the plain form which is awkward to automate) and reading the rendered report.

### Content: Guides

- One-off informational articles (not a running blog) live at `app/guides/<slug>/page.tsx`, each a self-contained static page (no `[slug]` dynamic route — add a new folder per guide). Register every guide's `{slug, title, summary}` in `lib/guides.ts`'s `GUIDES` array; that alone wires it into the `/guides` index, the header dropdown, the homepage section, and `sitemap.ts`.
- A guide can cross-link to/from its related service page (see the `service.slug === "load-bearing-wall-removal"` conditional block in `app/services/[slug]/page.tsx`).
- Writing rule: no em-dashes or other AI-detectable phrasing patterns in any published content — the user explicitly checks for this.

### Analytics & Search integrations (current state, verify before trusting)

- **GA4**: property `Main` (399185368 / 543144214), stream `Main Website` (`G-DZZRLE7LND`). An Internal Traffic rule ("Guy's IP", `72.14.201.83/32`) plus an Active Data Filter excludes the user's own traffic going forward (not retroactive) — set up 2026-07-28, since there's no public API for this (`internalTrafficRules` isn't in the Admin API v1alpha discovery doc).
- **GTM**: container `GTM-W5HHXPXT` (account 6367968934, container 259368693). `phone_call` fires from a `linkClick` trigger on `tel:` hrefs; `generate_lead` fires from the custom `form_submit_success` event.
- **Search Console**: property `https://houstonstructure.com`, verified via HTML meta tag. A GA4 Free-form Exploration "Calls & Forms by Source" exists under Explore (Event name × Session source/medium, filtered to `phone_call`/`generate_lead`) — it defaults to **private** on creation, must be explicitly shared (Explore gallery → row menu → Share) or its creator is the only one who can see it.
- **Google Business Profile API: still not working.** Hard-blocked behind a manual Google review, tracked as case `5-6797000041158` (submitted 2026-07-26, stated 7-10 business days, last checked 2026-07-28 still pending/quota 0). Three earlier attempts (case IDs 8-8141000041253, 4-7018000041535, 1-7940000041911) are dead ends — they used the wrong request-type ("Quota Increase" instead of "Application For Basic API Access") and were auto-denied; don't repeat that path. Without this API, Google Local/Map Pack visibility cannot be checked programmatically — only via the (currently pending) GBP Performance API or a manual Google Maps check.
- **On hold, don't re-suggest until told otherwise**: adding `aggregateRating` schema back (would require exposing a review count, which the user wants hidden while it's still low — declined 2026-07-28, 2026-07-29, and again 2026-08-02 when it came up via a Schema-markup tip). Not a permanent no — revisit once the review count has grown enough that the user is comfortable showing it, but only when the user raises it, not proactively.
