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
   - `.claude/settings.json` permission changes may only take effect in a fresh session, not retroactively mid-session.

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
  Header.tsx                  → mobile nav toggle is pure CSS (`group-has-checked:`), no client component/JS needed
  FloatingContactButton.tsx   → site-wide quick-contact modal
  PageHero.tsx, CTASection.tsx, Footer.tsx

lib/
  business.ts                 → BUSINESS / SERVICES / SERVICE_AREAS — single source of truth
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
