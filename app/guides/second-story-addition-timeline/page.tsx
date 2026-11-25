import Img from "@/components/Img";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/business";

// Published 2026-11-24 at Guy's request without waiting for Levi's review.
// The durations are typical ranges; if Levi corrects them, update `steps` and the FAQ.
export const metadata: Metadata = {
  title: "Second Story Addition Timeline in Houston, Step by Step",
  description:
    "How long a second story addition takes in Houston, from the first structural check to moving upstairs, and when you can stay in the house.",
};

const link = "text-[#0B1F3A] underline hover:no-underline";

const steps = [
  {
    t: "The structural check",
    d: "One visit, written answer in 1 to 2 weeks",
    p: "We measure the footings, the bearing walls and the framing, and work out what the new floor and roof will weigh. You hear one of three answers: the house carries it as it is, it carries it with reinforcement we can describe and price, or building up is the wrong answer for this house.",
  },
  {
    t: "Design and structural drawings",
    d: "4 to 8 weeks",
    p: "The floor plan, the roofline and the structure are worked out together, because where the stair lands and where the new walls sit decide where the load goes. The result is a sealed set the permit office and the crew both work from.",
  },
  {
    t: "Approvals",
    d: "2 to 8 weeks, depending on where you live",
    p: "HOA or Township review, a historic district hearing in parts of Houston, and the building permit, in whatever combination applies at your address. In unincorporated county areas there may be no building permit at all, which shortens this step.",
  },
  {
    t: "Reinforcing what is below",
    d: "1 to 3 weeks, only if the check called for it",
    p: "New footings, posts or beams on the ground floor go in before anything is built on top, while the roof is still on and the house is still closed.",
  },
  {
    t: "Roof off, framing and dry-in",
    d: "2 to 4 weeks",
    p: "This is the part owners worry about most. The old roof comes off over the area being built up, the new floor and walls go up, and the new roof goes on. The work is sequenced so the house is open for as few days as possible and covered every night.",
  },
  {
    t: "Plumbing, wiring and air conditioning",
    d: "3 to 4 weeks, with inspections",
    p: "Lines are run up through the existing house, the air conditioning is extended or a second system added, and the rough work is inspected before the walls are closed.",
  },
  {
    t: "Insulation, drywall and the stair",
    d: "2 to 3 weeks",
    p: "The new rooms are insulated and closed in, and the stair is opened through the ceiling below, which is the dustiest few days downstairs.",
  },
  {
    t: "Finishes and final inspection",
    d: "4 to 6 weeks",
    p: "Flooring, trim, doors, paint, the bathroom if there is one, and the final inspection that closes the permit.",
  },
];

const faqs = [
  {
    q: "How long does a second story addition take in Houston?",
    a: "From the first visit to moving upstairs, usually somewhere around six to nine months. About half of that is design and approvals before construction starts, and construction itself commonly runs three to five months.",
  },
  {
    q: "Can we live in the house while the second story is built?",
    a: "Most families do, for most of the job. The days to plan around are when the roof is open over part of the house and when the stair is cut through, and those are a few days rather than weeks.",
  },
  {
    q: "What slows a second story down the most?",
    a: "Approvals and surprises in the existing structure. Settling the structural check before design starts removes most of the second kind, and submitting complete drawings the first time is what keeps the first kind short.",
  },
];

export default function SecondStoryTimelinePage() {
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <PageHero
        eyebrow="Guide"
        title="A Second Story Addition, Step by Step"
        subtitle="How long each part takes, what happens in it, and when you can keep living in the house."
        ctaLabel="Talk to Our Professional Construction Expert"
        ctaHref="/contact"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
        current="Second Story Addition Timeline"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="min-w-0 md:col-span-2 text-slate-700 leading-relaxed">
            <p className="mb-5">
              The first two questions people ask about building up are what it costs and how long it takes. The
              cost has its own guide,{" "}
              <Link href="/guides/second-story-addition-cost" className={link}>
                what a second story addition costs in Houston
              </Link>
              . This one is about time: the order things happen in, how long each step usually runs, and which parts
              you will actually notice while living in the house.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The steps, in order</h2>
            <ol className="space-y-4">
              {steps.map((s, i) => (
                <li key={s.t} className="rounded-sm border border-slate-200 p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-[#0B1F3A]">
                      {i + 1}. {s.t}
                    </h3>
                    <span className="text-sm font-medium text-[#EA580C]">{s.d}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">{s.p}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 mb-5 text-sm text-slate-500">
              Typical ranges for a second story of about 600 to 1,000 square feet. Your own schedule comes after the
              structural check.
            </p>

            <Img
              src="/images/project-katy-second-story-1-exterior.jpg"
              srcSet="/images/project-katy-second-story-1-exterior-800.jpg 800w, /images/project-katy-second-story-1-exterior.jpg 1600w"
              sizes="(min-width: 768px) 66vw, 100vw"
              alt="One-story brick home in Katy, Texas with a new second story in white board-and-batten siding (illustrative rendering, not a photo of the project)"
              loading="lazy"
              className="mt-8 mb-2 h-[280px] w-full rounded-sm object-cover sm:h-[380px]"
            />
            <p className="mt-2 mb-8 text-sm text-slate-500">A finished second story over a one-story brick house in Katy.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Living through it</h2>
            <p className="mb-5">
              Most of the construction happens above you, and most families stay. The disruption comes in a few
              short stretches: the days the roof is open, the days the stair is cut through, and the inspections
              when someone needs access to every room. We tell you the dates of those ahead of time so you can plan
              around them.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Questions we hear often</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-slate-800">{f.q}</h3>
                  <p className="mt-1.5 text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Related</div>
              <Link href="/services/second-story-addition" className="mt-3 block font-semibold text-[#0B1F3A] hover:underline">
                Second Story Additions
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="mt-5 block rounded-sm bg-[#EA580C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c94b0a]"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Want your own schedule?"
        subheading="It starts with the structural check. Call now or request a callback."
      />
    </>
  );
}
