import Link from "next/link";
import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/business";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Structural Engineer in Houston, TX | General Contractor",
  description:
    "Levi's Houston Structural Repairs, Engineering & Consulting is a licensed and insured structural engineer in Houston and general contractor serving the metro: foundation repair, structural repairs, additions, commercial buildouts, and inspection reports. 5.0 stars on Google.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-[#0B1F3A] bg-cover bg-center text-white"
        style={{ backgroundImage: "linear-gradient(rgba(11,31,58,0.88), rgba(11,31,58,0.93)), url(/images/hero-framing.jpg)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-24 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-sm bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-orange-300">
              Structural Engineer in Houston, TX · General Contractor
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Straight answers on your foundation, from a licensed Houston
              structural engineer and general contractor.
            </h1>
            <p className="mt-5 max-w-lg text-slate-300">
              We diagnose foundation and structural issues first, then, as a
              licensed general contractor, build the fix ourselves. No
              repair-company sales pitch, no second company to coordinate
              with, just one licensed team from diagnosis to completion.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <div className="flex items-center gap-2 text-amber-400">
                {"★★★★★"}
                <span className="text-sm text-slate-300">
                  {BUSINESS.rating.toFixed(1)} rating · Google reviews
                </span>
              </div>
              {BUSINESS.licensedInsured && (
                <span className="text-sm font-medium text-slate-300">
                  Licensed &amp; Insured
                </span>
              )}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="rounded-sm bg-[#EA580C] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c94b0a]"
              >
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-sm border border-slate-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Request a Callback
              </Link>
            </div>
          </div>

          <div className="rounded-sm border border-slate-700 bg-white/5 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Signs you may need an engineer
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {[
                "Cracks near doors and windows",
                "Doors or windows that stick",
                "Sloping or uneven floors",
                "Sagging rooflines or ceilings",
                "Stair-step cracks in brick veneer",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-400">▸</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
          What we do
        </div>
        <h2 className="mt-2 max-w-2xl text-2xl font-bold text-[#0B1F3A] sm:text-3xl">
          Structural engineering and general contracting services
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col rounded-sm border border-slate-200 p-5 transition-colors hover:border-[#0B1F3A]"
            >
              <div className="text-base font-semibold text-[#0B1F3A]">{s.name}</div>
              <p className="mt-2 flex-1 text-sm text-slate-600">{s.summary}</p>
              <span className="mt-4 text-sm font-semibold text-orange-700 group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Houston is different */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
              Why Houston foundations move
            </div>
            <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A] sm:text-3xl">
              It&rsquo;s the soil, not bad luck.
            </h2>
            <p className="mt-4 text-slate-600">
              Much of the Houston metro sits on highly expansive clay. That
              soil swells when it&rsquo;s wet and shrinks when it dries,
              pulling and pushing on whatever foundation sits above it. Add
              in seasonal drought, tree roots competing for moisture, and
              drainage that concentrates water near the slab, and foundation
              movement becomes less a question of if than when.
            </p>
            <p className="mt-4 text-slate-600">
              That&rsquo;s why we start every job with an engineering
              evaluation, not a repair quote. The right fix depends on
              what&rsquo;s actually causing the movement, which is exactly
              what a structural engineer in Houston should be checking
              before anyone touches your foundation.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200 bg-white p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Serving the greater Houston area
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {SERVICE_AREAS.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="rounded-sm border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-[#0B1F3A] hover:text-[#0B1F3A]"
                >
                  {c.name}, TX
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
          Guides
        </div>
        <h2 className="mt-2 max-w-2xl text-2xl font-bold text-[#0B1F3A] sm:text-3xl">
          Straight answers, before you start a project
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group flex flex-col rounded-sm border border-slate-200 p-5 transition-colors hover:border-[#0B1F3A]"
            >
              <div className="text-base font-semibold text-[#0B1F3A]">{g.title}</div>
              <p className="mt-2 flex-1 text-sm text-slate-600">{g.summary}</p>
              <span className="mt-4 text-sm font-semibold text-orange-700 group-hover:underline">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
