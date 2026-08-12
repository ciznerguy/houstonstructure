import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Case Study: Adding a 380-Square-Foot Room to a 1970s Houston Home",
  description:
    "A start-to-finish look at how we evaluate an existing foundation, design the tie-in for a new room addition, and carry the project through permitting and construction.",
  openGraph: {
    images: [
      { url: "/images/room-addition-case-study-5-completed-exterior.jpg", width: 1600, height: 900 },
    ],
  },
};

const faqs = [
  {
    q: "Why did the foundation need its own engineering, instead of just matching the existing slab?",
    a: "Copying the visible thickness of an old slab doesn't account for what the soil underneath a specific lot can actually bear today. We size the new section based on current soil data, then design a connection that ties it to the original without the two settling at different rates.",
  },
  {
    q: "How long did the engineering and permitting take before construction started?",
    a: "For a ground-floor addition like this one, the evaluation and stamped calculations typically take about a week. Permitting timelines vary by city, but a plan sized to the actual site conditions usually avoids the back-and-forth that generic plans run into.",
  },
  {
    q: "Could this addition have been built without an engineer, just off a contractor's plan?",
    a: "Physically, yes. The risk is in what a visual match misses: soil bearing capacity and differential settlement aren't things you can judge by eye. That's exactly the gap that led this homeowner to get an independent evaluation after two contractors gave conflicting answers.",
  },
];

export default function RoomAdditionCaseStudyPage() {
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
        eyebrow="Case Study"
        title="Adding a 380-Square-Foot Room to a 1970s Houston Home"
        subtitle="A start-to-finish look at how we evaluate an existing foundation, design the tie-in for a new addition, and carry the project through permitting and construction."
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <h2 className="mt-0 mb-4 text-xl font-bold text-[#0B1F3A]">The situation</h2>
            <p className="mb-5">
              A homeowner in a single-story home built in the mid-1970s wanted to add a
              ground-floor family room off the back of the house, about 380 square feet, to
              make space for a growing family. They&rsquo;d already talked to two contractors
              and gotten two different answers about whether the existing foundation could
              handle a new section tied into it. One said it was a simple slab extension. The
              other wanted to tear out and repour a much larger section &ldquo;to be
              safe.&rdquo; Neither had actually evaluated the existing foundation&rsquo;s
              design or soil conditions before quoting.
            </p>
            <p className="mb-5">
              That&rsquo;s the situation that brings most Houston homeowners to us before an
              addition: not a known problem, but conflicting answers from people who
              haven&rsquo;t actually looked closely.
            </p>

            <img
              src="/images/room-addition-case-study-1-site-evaluation.jpg"
              srcSet="/images/room-addition-case-study-1-site-evaluation-800.jpg 800w, /images/room-addition-case-study-1-site-evaluation.jpg 1600w"
              sizes="(min-width: 768px) 66vw, 100vw"
              alt="Structural engineer kneeling at the edge of a Houston home's foundation, checking soil conditions with a probe before a room addition"
              fetchPriority="high"
              className="mb-2 h-[320px] w-full rounded-sm object-cover sm:h-[420px]"
            />
            <p className="mb-8 text-sm text-slate-500">
              Checking soil conditions at the foundation edge before designing the new section.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              The question we started with
            </h2>
            <p className="mb-5">
              Before anything else, we needed to answer one thing: what was the existing
              foundation actually designed to carry, and what condition was it in nearly five
              decades later?
            </p>
            <p className="mb-5">
              The house sat on a standard slab-on-grade foundation, typical for its era. We
              pulled what records existed (limited, as is common for a house this age), then
              confirmed the actual conditions on site: soil bearing capacity, existing slab
              thickness and reinforcement pattern, and how much movement the foundation had
              already experienced over its lifetime based on visible cracking and elevation
              survey.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">What we found</h2>
            <p className="mb-5">
              The existing slab was in reasonable condition for its age, with normal, minor
              settlement typical of Houston&rsquo;s clay soils, nothing that raised concern
              for the existing structure. But a new addition&rsquo;s foundation needed to be
              engineered as its own section, matched to the same soil bearing depth as the
              original, with a properly designed connection between old and new to prevent
              differential settlement, the two sections moving at different rates and
              cracking at the seam.
            </p>
            <p className="mb-5">
              This is the detail that gets skipped when an addition is quoted without an
              engineer involved. A contractor who simply matches the visible slab thickness
              without checking the actual soil bearing data underneath can end up with a new
              section that settles faster or slower than the original, and a crack right along
              the tie-in line within a year or two.
            </p>

            <div className="mb-2 grid gap-4 sm:grid-cols-2">
              <div>
                <img
                  src="/images/room-addition-case-study-2-foundation-forms.jpg"
                  srcSet="/images/room-addition-case-study-2-foundation-forms-800.jpg 800w, /images/room-addition-case-study-2-foundation-forms.jpg 1600w"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  alt="Wooden concrete forms and a rebar grid staked out for a new room addition foundation, tied into the existing house"
                  className="h-[240px] w-full rounded-sm object-cover"
                />
                <p className="mt-2 text-sm text-slate-600">
                  Forms and reinforcement set for the new foundation section.
                </p>
              </div>
              <div>
                <img
                  src="/images/room-addition-case-study-3-tie-in-detail.jpg"
                  srcSet="/images/room-addition-case-study-3-tie-in-detail-800.jpg 800w, /images/room-addition-case-study-3-tie-in-detail.jpg 1600w"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  alt="Close-up of steel dowel rods being installed to connect the existing concrete foundation to the new addition's foundation"
                  className="h-[240px] w-full rounded-sm object-cover"
                />
                <p className="mt-2 text-sm text-slate-600">
                  Doweled connection tying the new section to the original foundation.
                </p>
              </div>
            </div>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              The engineering solution
            </h2>
            <p className="mb-5">
              We designed the new foundation section to the same bearing depth as the
              original, sized independently based on current soil data for that specific lot,
              not just copied from the decades-old original design. We specified a doweled
              connection between the old and new slab sections to tie them structurally while
              still allowing for minor differential movement without cracking.
            </p>
            <p className="mb-5">
              For the framing, we sized the new roof structure to tie into the existing
              roofline without requiring modification to the original framing&rsquo;s load
              path, keeping the scope of structural work contained to the new section rather
              than triggering changes throughout the existing house.
            </p>

            <img
              src="/images/room-addition-case-study-4-framing.jpg"
              srcSet="/images/room-addition-case-study-4-framing-800.jpg 800w, /images/room-addition-case-study-4-framing.jpg 1600w"
              sizes="(min-width: 768px) 66vw, 100vw"
              alt="New wood roof trusses and wall framing for a room addition tied into the roofline of an existing brick Houston home"
              className="mb-2 h-[320px] w-full rounded-sm object-cover sm:h-[420px]"
            />
            <p className="mb-8 text-sm text-slate-500">
              Framing the new room, tied directly into the existing roofline.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Permitting</h2>
            <p className="mb-5">
              The addition required a permit through the local building department, with our
              stamped structural letter and calculations as part of that submission. Because
              we sized the work to the specific evaluation rather than a generic standard, the
              permitting review moved through without the delays that come from a generic plan
              not matching the actual site conditions.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Construction</h2>
            <p className="mb-5">
              Because we&rsquo;re licensed to build as well as design, we carried the project
              through construction ourselves: excavation and forming for the new foundation
              section, the tie-in connection, framing, and roof structure, with our own
              engineering calculations guiding every step rather than handing the plan off to
              a separate crew to interpret.
            </p>

            <img
              src="/images/room-addition-case-study-5-completed-exterior.jpg"
              srcSet="/images/room-addition-case-study-5-completed-exterior-800.jpg 800w, /images/room-addition-case-study-5-completed-exterior.jpg 1600w"
              sizes="(min-width: 768px) 66vw, 100vw"
              alt="Finished exterior of a Houston home addition with brick veneer matched to the original house"
              className="mb-2 h-[320px] w-full rounded-sm object-cover sm:h-[420px]"
            />
            <p className="mb-8 text-sm text-slate-500">
              The finished addition, brick-matched to the original house.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The result</h2>
            <p className="mb-5">
              The addition tied in cleanly, with no gap between what was designed and what was
              built. The homeowner got the space they needed without the guessing match
              between two contractors&rsquo; conflicting opinions, and with documentation on
              file that will matter at resale: a stamped engineering letter showing the
              addition was designed and inspected properly, not just built to a visual match.
            </p>

            <img
              src="/images/room-addition-case-study-6-engineering-letter.jpg"
              srcSet="/images/room-addition-case-study-6-engineering-letter-800.jpg 800w, /images/room-addition-case-study-6-engineering-letter.jpg 1600w"
              sizes="(min-width: 768px) 66vw, 100vw"
              alt="Stamped structural engineering letter and rolled construction drawings next to a hard hat"
              className="mb-2 h-[320px] w-full rounded-sm object-cover sm:h-[420px]"
            />
            <p className="mb-8 text-sm text-slate-500">
              The stamped engineering letter that goes on file with the permit and the sale.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The takeaway</h2>
            <p className="mb-5">
              The homeowner&rsquo;s original instinct, wanting a second opinion after getting
              two different contractor answers, was the right one. An addition&rsquo;s cost
              isn&rsquo;t just the framing and finishes. It&rsquo;s what the existing
              foundation can actually support, and that&rsquo;s a question worth answering
              with an evaluation, not a guess, before any concrete gets poured.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Questions we hear often
            </h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q}>
                  <div className="font-semibold text-slate-800">{f.q}</div>
                  <p className="mt-1.5 text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Related service
              </div>
              <Link
                href="/services/home-additions"
                className="mt-3 block font-semibold text-[#0B1F3A] hover:underline"
              >
                Home Additions &amp; Second-Story Additions
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="mt-5 block rounded-sm bg-[#EA580C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c94b0a]"
              >
                Call {BUSINESS.phone}
              </a>
            </div>

            <div className="mt-6 rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Free Tool
              </div>
              <Link
                href="/cost-estimator"
                className="mt-3 block font-semibold text-[#0B1F3A] hover:underline"
              >
                Get a Home Addition Cost Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Planning an addition of your own?"
        subheading="Call now or request a callback and we'll get back to you the same business day."
      />
    </>
  );
}
