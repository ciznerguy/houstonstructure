import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "How to Choose a Structural Engineer in Houston",
  description:
    "What to check before hiring a structural engineer in Houston: licensing, independence from repair sales, local soil experience, and the questions worth asking before you sign anything.",
};

const faqs = [
  {
    q: "Should I use the same company for the engineering evaluation and the repair?",
    a: "It depends on what you're optimizing for. Separate companies give you a built-in second opinion, since the evaluator has no financial stake in the repair. A single licensed firm that does both can mean fewer handoffs and less chance of miscommunication between the plan and the crew. Neither approach is automatically wrong, but you should know which one you're getting and ask how the company keeps the evaluation independent of the sales side.",
  },
  {
    q: "How much does a structural engineering evaluation cost in Houston?",
    a: "It depends heavily on the scope: a single load-bearing wall check is far less than a full foundation evaluation with a written report. Ask for a clear scope and price before the visit, not an estimate that turns into a different number once someone is at your house.",
  },
  {
    q: "Is a structural engineer the same thing as a foundation repair company?",
    a: "No. A foundation repair company sells and installs repairs, usually piers or leveling work. A structural engineer evaluates the problem and, when licensed to do so, can also stamp calculations or a scope of repair. Some foundation repair companies employ or contract an engineer, but that engineer's evaluation is happening inside a company whose revenue depends on selling a repair, which is worth knowing going in.",
  },
  {
    q: "What if two engineers give me different opinions?",
    a: "It happens, especially on borderline cases. Ask each one to walk you through the specific evidence behind their conclusion, not just the conclusion itself. A engineer who can point to exact measurements, photos, or framing details is giving you something you can evaluate. One who only offers a general impression is asking you to trust their judgment on faith.",
  },
];

export default function HowToChooseAStructuralEngineerPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <PageHero
        eyebrow="Guide"
        title="How to Choose a Structural Engineer"
        subtitle="The engineer you hire is the one whose judgment you're trusting on your home's structure. Here's what actually separates a good choice from a risky one."
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <p className="mb-5">
              Finding a{" "}
              <Link href="/" className="text-[#0B1F3A] underline hover:no-underline">
                structural engineer in Houston
              </Link>{" "}
              you can actually rely on takes more than a search and a phone
              call. The title isn&rsquo;t protected the way you might
              expect, and the range of people who advertise structural
              services, from licensed engineers to repair salespeople with an
              engineer on retainer, is wider than most homeowners realize
              until they&rsquo;re comparing quotes that don&rsquo;t agree with
              each other.
            </p>
            <p className="mb-5">
              None of this is complicated once you know what to check. It
              mostly comes down to a license, a bit of independence from the
              repair itself, and a few direct questions before you sign
              anything.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Confirm an actual Texas PE license
            </h2>
            <p className="mb-5">
              A Professional Engineer, or PE, license is issued by the Texas
              Board of Professional Engineers and Land Surveyors, and it&rsquo;s
              the credential that lets someone legally stamp structural
              calculations and letters. It&rsquo;s free to look up, and any
              legitimate engineer will give you their license number without
              being asked twice. If a company is vague about who exactly is
              licensed, or the license belongs to someone who never actually
              visits the property, that&rsquo;s worth asking about directly.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Understand who benefits from the diagnosis
            </h2>
            <p className="mb-5">
              This is the single biggest factor most homeowners overlook. If
              the person evaluating your foundation also profits from selling
              you a repair, their diagnosis carries a built-in incentive, even
              if they&rsquo;re being completely honest. That doesn&rsquo;t mean
              every repair company&rsquo;s in-house evaluation is wrong. It
              means the incentive exists, and it&rsquo;s reasonable to weigh
              that when you&rsquo;re deciding whether to get an independent
              second opinion before committing to a five-figure repair.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Ask about local soil and foundation experience
            </h2>
            <p className="mb-5">
              Structural engineering isn&rsquo;t one-size-fits-all across the
              country. Houston sits on expansive clay soil that swells and
              shrinks with moisture, which behaves very differently from the
              rocky or sandy soils common elsewhere. An engineer who mostly
              works on framing in a different climate isn&rsquo;t automatically
              wrong about Houston conditions, but direct experience with local
              soil, drainage patterns, and the area&rsquo;s older housing
              stock usually means fewer surprises in their evaluation.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              What to ask before you hire
            </h2>
            <ol className="mb-5 list-decimal space-y-3 pl-5">
              <li>
                <strong>What's your PE license number, and can I look it up?</strong>{" "}
                A direct, immediate answer is what you want here.
              </li>
              <li>
                <strong>Will you give me a written, stamped report, or just a verbal opinion?</strong>{" "}
                A verbal opinion doesn&rsquo;t help you at resale, with an
                insurance claim, or with a permitting office.
              </li>
              <li>
                <strong>Do you sell or install repairs yourself?</strong>{" "}
                Not a disqualifying answer either way, but you should know it
                going in.
              </li>
              <li>
                <strong>What's the exact scope and price for this visit?</strong>{" "}
                Get this before the visit, not after someone&rsquo;s already
                at your house.
              </li>
              <li>
                <strong>How long have you worked on Houston-area foundations specifically?</strong>{" "}
                Listen for a real answer, not a generic one.
              </li>
            </ol>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Red flags worth taking seriously
            </h2>
            <ul className="mb-5 list-disc space-y-2 pl-5">
              <li>
                A free inspection that always ends in a same-day repair quote,
                with pressure to sign before you leave the room.
              </li>
              <li>
                No willingness to provide a license number, or vague answers
                about who's actually licensed.
              </li>
              <li>
                A diagnosis with no specific evidence behind it, just a
                general impression that something needs fixing.
              </li>
              <li>
                Pricing that changes significantly between the phone call and
                the in-person visit, with no clear reason why.
              </li>
            </ul>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Questions we hear often
            </h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q}>
                  <div className="font-semibold text-slate-800">{f.q}</div>
                  <p className="mt-1.5 text-slate-600 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              The short version
            </h2>
            <p className="mb-5">
              Check the license, ask who benefits from the diagnosis, and
              confirm the person you're hiring actually knows Houston soil.
              Those three things filter out most of the risk before you ever
              sign anything.
            </p>
          </div>

          <div>
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Related service
              </div>
              <Link
                href="/services/inspections-reports"
                className="mt-3 block font-semibold text-[#0B1F3A] hover:underline"
              >
                Structural Inspections &amp; Engineering Reports
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
        heading="Want an independent evaluation, not a sales pitch?"
        subheading="Call now or request a callback and we'll get back to you the same business day."
      />
    </>
  );
}
