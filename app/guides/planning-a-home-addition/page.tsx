import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Planning a Home Addition in Houston? Start With the Foundation, Not the Floor Plan",
  description:
    "Why the engineering question should come before the floor plan, building out versus building up, Houston-specific permit issues, and answers to the questions homeowners ask most before adding onto their home.",
  openGraph: {
    images: [{ url: "/images/home-additions.jpg", width: 1600, height: 900 }],
  },
};

const faqs = [
  {
    q: "How do I know if my house can support a second-story addition?",
    a: "The only reliable way is an engineering assessment of your existing foundation and framing. Age and appearance aren't good indicators. Houses built decades apart can have very different foundation designs, and even homes built around the same time can differ based on the original soil conditions on that specific lot.",
  },
  {
    q: "Is it cheaper to build out or build up?",
    a: "Building out is usually cheaper per square foot, since it doesn't require reinforcing an existing structure. But lot size, setback rules, and what you actually need out of the space all factor in, so the cheaper option on paper isn't always the right one for a given property.",
  },
  {
    q: "Do I need a structural engineer for a single-story addition too?",
    a: "Yes, though the scope of the assessment is usually smaller than for a second story. Even a ground-floor addition needs its new foundation section engineered to match the existing one and avoid differential settlement between old and new.",
  },
  {
    q: "How long does the engineering assessment take before construction can start?",
    a: "For most single-story additions, the assessment and stamped documents can be turned around in about a week. Second-story additions or additions on a lot with floodplain or historic district considerations can take longer, since there's more to evaluate.",
  },
  {
    q: "Can you handle both the engineering and the actual construction?",
    a: "Yes. Since we're licensed and insured for both, we can size the addition's structural requirements and then build it ourselves, rather than handing our own calculations off to a separate contractor.",
  },
];

export default function HomeAdditionGuidePage() {
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
        title="Planning a Home Addition in Houston? Start With the Foundation, Not the Floor Plan"
        subtitle="Most addition projects start with a floor plan and a contractor's quote. The engineering question, whether the existing house can carry the new weight, usually comes up last, if at all. That order is backwards."
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <p className="mb-5">
              Most home addition projects in Houston start the same way: a
              homeowner sketches out a new room, a second story, or a bigger
              kitchen, then calls a contractor to price it out. The
              engineering question, whether the existing house can actually
              carry that new weight, usually comes up last, if it comes up at
              all. That order is backwards, and it&rsquo;s the single biggest
              reason addition projects run into expensive surprises
              mid-construction.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              What counts as a home addition
            </h2>
            <p className="mb-5">
              The term covers a wide range of projects, and each one puts a
              different kind of load on your existing structure:
            </p>
            <ul className="mb-5 list-disc space-y-2 pl-5">
              <li>
                <strong>Ground-floor additions</strong>, extending a room or
                adding a new one at the back or side of the house. These add
                weight to the foundation directly beneath the new footprint,
                and usually mean tying a new foundation section into an old
                one.
              </li>
              <li>
                <strong>Second-story additions</strong>, building up instead
                of out. These add load to the existing walls, framing, and
                foundation of a house that was often never designed to carry
                a second floor.
              </li>
              <li>
                <strong>Garage conversions</strong>, turning an attached
                garage into living space. The slab under most garages is
                thinner than a house foundation and wasn&rsquo;t built for
                the same loads.
              </li>
              <li>
                <strong>Sunrooms and enclosed patios</strong>, which seem
                minor but still need a proper foundation connection, not just
                a slab poured next to the house.
              </li>
            </ul>
            <p className="mb-5">
              Houston&rsquo;s older neighborhoods, especially homes built
              from the 1950s through the 1980s, were built to the standards
              and loads expected at the time. A lot has changed since then,
              and what a foundation was designed to carry decades ago
              isn&rsquo;t automatically what it can safely carry today.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              The question that actually matters: can your foundation take it
            </h2>
            <p className="mb-5">
              This is where an addition project should start, and where most
              don&rsquo;t. Before floor plans get finalized or a contractor
              gets hired, the real question is whether the existing
              foundation and framing can support the new load, and if not,
              what it takes to reinforce them so they can.
            </p>
            <p className="mb-5">
              For a ground-floor addition, this means checking whether the
              new section&rsquo;s foundation needs to match the depth and
              soil bearing capacity of the original, and how the two connect
              without creating a differential settlement problem down the
              road, one side of the house settling at a different rate than
              the other.
            </p>
            <p className="mb-5">
              For a second-story addition, it&rsquo;s a bigger question. The
              existing foundation, walls, and framing were sized for the load
              of a single story. Adding a second one means recalculating
              what the foundation carries and confirming it can take the
              additional weight, or determining what reinforcement is needed
              if it can&rsquo;t.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Building out versus building up
            </h2>
            <p className="mb-5">
              Both directions come with real engineering tradeoffs, and the
              right answer depends on the lot, not just preference.
            </p>
            <p className="mb-5">
              Building out is usually simpler from a structural standpoint,
              since you&rsquo;re adding a new, independently engineered
              foundation section rather than loading up an existing one. But
              it eats into yard space, and on a smaller Houston lot, setback
              requirements from the property line can limit how far you can
              actually go.
            </p>
            <p className="mb-5">
              Building up avoids the lot-size problem entirely, but it puts
              the entire question back on the existing foundation and
              framing. It&rsquo;s also usually the more expensive path per
              square foot, since it often requires reinforcing what&rsquo;s
              already there before anything new gets built.
            </p>
            <p className="mb-5">
              Neither direction is automatically right. It depends on the
              lot, the existing foundation&rsquo;s condition and original
              design, and what the homeowner actually needs.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Permits and Houston-specific rules
            </h2>
            <p className="mb-5">
              Houston and its surrounding cities don&rsquo;t operate under a
              single uniform building code applied the same way everywhere.
              A few things worth checking early, before a design is
              finalized:
            </p>
            <ul className="mb-5 list-disc space-y-2 pl-5">
              <li>
                <strong>Deed restrictions.</strong> Many Houston
                neighborhoods have private deed restrictions that limit
                setbacks, height, or footprint independently of city zoning,
                and these are enforced separately from the permitting
                process.
              </li>
              <li>
                <strong>Floodplain rules.</strong> Depending on the
                property&rsquo;s location relative to Harris County&rsquo;s
                floodplain maps, an addition may trigger elevation
                requirements or drainage rules that affect the foundation
                design itself.
              </li>
              <li>
                <strong>Historic district review.</strong> A handful of
                Houston neighborhoods have additional design review for any
                exterior changes, including additions.
              </li>
            </ul>
            <p className="mb-5">
              None of these are usually deal-breakers, but finding out about
              them after a contractor has already started work is a much
              more expensive way to learn.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              What the engineering process actually looks like
            </h2>
            <ol className="mb-5 list-decimal space-y-3 pl-5">
              <li>
                <strong>Foundation and framing assessment.</strong> We
                evaluate what the existing structure was designed for and
                what condition it&rsquo;s actually in today, since decades
                of Houston&rsquo;s clay soil movement can mean the current
                condition differs from the original design.
              </li>
              <li>
                <strong>Load calculation for the addition.</strong> We
                calculate what the new addition will actually add, in weight
                and in load path, and compare that against what the existing
                foundation and framing can take.
              </li>
              <li>
                <strong>Reinforcement design, if needed.</strong> Where the
                existing structure falls short, we design the specific
                reinforcement, additional piers, a wider footing, or
                reinforced framing, sized to the actual gap, not a generic
                safety margin.
              </li>
              <li>
                <strong>Stamped engineering documents.</strong> Permitting
                offices require a stamped structural letter and, for larger
                additions, full calculations. This is also the document that
                protects the project if a dispute comes up later.
              </li>
              <li>
                <strong>Construction.</strong> Since we&rsquo;re licensed
                and insured to build as well as design, we can carry the
                addition through construction ourselves, so the plan and the
                framing crew stay in sync the whole way through.
              </li>
            </ol>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              The mistake we see most often
            </h2>
            <p className="mb-5">
              A contractor gives a homeowner an addition quote based on the
              floor plan alone, without an engineer confirming the existing
              foundation can actually carry the new load. Construction
              starts, and only partway through does someone notice a
              settlement crack, a beam that&rsquo;s deflecting more than it
              should, or a foundation section that clearly wasn&rsquo;t built
              for what&rsquo;s now sitting on top of it. At that point,
              fixing it costs far more than it would have to check first,
              and it usually means opening up work that&rsquo;s already
              finished.
            </p>

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
              Before you finalize a floor plan or get a contractor&rsquo;s
              quote, get the foundation question answered first: can your
              existing structure actually carry what you&rsquo;re planning
              to add? It&rsquo;s a smaller step than it seems next to the
              size of the project, and it&rsquo;s the one that keeps the
              rest of the addition from running into an expensive surprise
              halfway through.
            </p>
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
        heading="Not sure if your foundation can carry an addition?"
        subheading="Call now or request a callback and we'll get back to you the same business day."
      />
    </>
  );
}
