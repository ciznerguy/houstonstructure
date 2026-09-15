import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FloatingCostEstimatorButton from "@/components/FloatingCostEstimatorButton";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "How Much Does a Second-Story Addition Cost in Houston?",
  description:
    "Typical cost ranges for second-story additions in the Houston area, what actually drives the price beyond square footage, and why the number depends on your existing foundation more than your floor plan.",
  openGraph: {
    images: [{ url: "/images/home-additions.jpg", width: 1600, height: 900 }],
  },
};

const faqs = [
  {
    q: "Why does a second-story addition cost more per square foot than building out?",
    a: "Building up means loading weight onto a foundation, walls, and framing that were likely only ever engineered for a single story. Before any framing goes up, that existing structure usually needs to be evaluated, and often reinforced, and that work isn't part of a simple per-square-foot number the way it is for a ground-floor addition with its own independent foundation.",
  },
  {
    q: "Can I get an accurate number without an engineer looking at my house first?",
    a: "You can get a realistic planning range, which is what our online tool gives you. An exact number needs an actual look at your foundation and framing, since two houses of the same size and age can need very different amounts of reinforcement depending on how they were originally built.",
  },
  {
    q: "Does the estimate include reinforcing my existing foundation if it needs it?",
    a: "The online estimate assumes typical reinforcement for a second-story addition based on the type you select. If your foundation turns out to need more extensive work than typical, that gets identified during the actual assessment and priced separately, before construction starts, not as a surprise mid-project.",
  },
  {
    q: "What adds the most to the cost: a bathroom, a kitchen, or HVAC work?",
    a: "A kitchen or kitchenette upstairs is usually the single biggest add, since it means running new plumbing and often a dedicated vent stack up through the existing house. HVAC comes next, particularly if your current system wasn't sized to also cool and heat a second floor. A bathroom is a meaningful add but typically smaller than either of those.",
  },
  {
    q: "How much does a typical second-story addition cost in Houston?",
    a: "For a straightforward bedroom or living space with no plumbing, we typically see somewhere in the neighborhood of $125,000 to $175,000 for a smaller addition at a builder-grade finish. Add a bathroom, HVAC extension, and a mid-range finish, and that range moves up toward $250,000 to $330,000. A larger second story with a kitchenette can run higher still. Our online tool walks through your specific scope and gives you a range based on those factors."
  },
  {
    q: "Is it worth getting a callback if I'm still just exploring the idea?",
    a: "Yes. Most of the homeowners we talk to at this stage haven't committed to anything yet, they're trying to figure out if a second story is realistic for their specific house before they invest time in floor plans or contractor quotes. That's exactly the point where an engineer's perspective is most useful.",
  },
];

export default function SecondStoryAdditionCostGuidePage() {
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
      <FloatingCostEstimatorButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <PageHero
        eyebrow="Guide"
        title="How Much Does a Second-Story Addition Cost in Houston?"
        subtitle="The honest answer is that it depends more on your existing foundation than on the floor plan you have in mind. Here's what actually drives the number."
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <p className="mb-5">
              Building up instead of out is one of the most common ways
              Houston homeowners add space without touching a smaller lot
              or eating into a backyard. It&rsquo;s also one of the harder
              projects to price accurately from a floor plan alone, because
              the cost isn&rsquo;t just about the new square footage. It&rsquo;s
              about what your existing house was built to carry, and what it
              takes to get it ready to carry more.
            </p>
            <p className="mb-5">
              If you&rsquo;ve gotten a few quotes already and noticed they
              don&rsquo;t agree with each other, that&rsquo;s usually why.
              A contractor pricing off the floor plan alone and one pricing
              after an actual structural evaluation can land on very
              different numbers for the same addition.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Why building up costs more than building out
            </h2>
            <p className="mb-5">
              A ground-floor addition gets its own foundation, engineered
              independently and tied into the existing one. A second-story
              addition doesn&rsquo;t get that luxury. It sits directly on top
              of walls, framing, and a foundation that were very likely
              designed decades ago for a single story, and that structure
              needs to be evaluated, and often reinforced, before it can
              safely carry a second one.
            </p>
            <p className="mb-5">
              That reinforcement work, additional piers, a wider footing,
              upgraded framing, isn&rsquo;t optional and it isn&rsquo;t
              something a generic per-square-foot number accounts for. It
              depends entirely on what your specific house was built with
              and how much of that capacity is already used up.
            </p>

            <img
              src="/images/second-story-addition-cost-1-before.jpg"
              srcSet="/images/second-story-addition-cost-1-before-800.jpg 800w, /images/second-story-addition-cost-1-before.jpg 1600w"
              sizes="(min-width: 768px) 66vw, 100vw"
              alt="The existing single-story home before any work begins (illustrative photo, not an actual job site)"
              className="mb-2 h-[320px] w-full rounded-sm object-cover sm:h-[420px]"
            />
            <p className="mt-2 mb-8 text-sm text-slate-500">
              The existing single-story home before any work begins.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              What a second-story addition typically costs
            </h2>
            <p className="mb-5">
              These are planning-stage ranges, not quotes, but they reflect
              what we actually see on projects in the Houston area:
            </p>
            <ul className="mb-5 list-disc space-y-2 pl-5">
              <li>
                <strong>A smaller bedroom or living space</strong>, no
                plumbing, builder-grade finish: roughly $125,000 to $175,000.
              </li>
              <li>
                <strong>A bedroom with a bathroom</strong>, HVAC extension,
                mid-range finish: roughly $250,000 to $330,000.
              </li>
              <li>
                <strong>A larger second story with a bathroom and
                kitchenette</strong>, mid-range finish: roughly $320,000 to
                $430,000.
              </li>
            </ul>
            <p className="mb-5">
              The gap between the low and high end of each range mostly
              comes down to finish level and exactly what your specific
              foundation needs. Our{" "}
              <Link href="/cost-estimator" className="text-[#0B1F3A] underline hover:no-underline">
                online cost estimator
              </Link>{" "}
              walks through the details of your project and narrows that
              range based on square footage, rooms included, and finish
              level.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              What actually goes into the number
            </h2>
            <ul className="mb-5 list-disc space-y-2 pl-5">
              <li>
                <strong>Shell and finish.</strong> Framing, roofing tie-in,
                exterior finish, and interior finish for the new space
                itself, scaled by finish level.
              </li>
              <li>
                <strong>Plumbing.</strong> A bathroom or kitchenette upstairs
                means new supply and drain lines routed up through the
                existing house, usually the single biggest add-on cost.
              </li>
              <li>
                <strong>HVAC and electrical.</strong> Most single-story
                Houston homes weren&rsquo;t built with enough HVAC capacity
                or electrical panel room for a second floor, so this often
                needs upgrading, not just extending.
              </li>
              <li>
                <strong>Structural work.</strong> Whatever reinforcement
                your existing foundation and framing need to safely carry
                the new load. This is the piece that varies most from house
                to house.
              </li>
              <li>
                <strong>Permitting and contingency.</strong> Stamped
                engineering documents, permit fees, and a reasonable
                contingency for what turns up once the work is underway.
              </li>
            </ul>

            <div className="mb-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  src: "/images/second-story-addition-cost-2-framing.jpg",
                  caption: "The new second story framed in, tied into the original roofline.",
                },
                {
                  src: "/images/second-story-addition-cost-3-sheathing.jpg",
                  caption: "Wrapped and roughed in, ready for windows and roofing.",
                },
              ].map((photo) => (
                <div key={photo.src}>
                  <img
                    src={photo.src}
                    srcSet={`${photo.src.replace(".jpg", "-800.jpg")} 800w, ${photo.src} 1600w`}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    alt={`${photo.caption} (illustrative photo, not an actual job site)`}
                    className="h-[220px] w-full rounded-sm object-cover"
                  />
                  <p className="mt-2 text-sm text-slate-600">{photo.caption}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Why we check the foundation before we give you a real number
            </h2>
            <p className="mb-5">
              A quote based on the floor plan alone is a guess about the one
              variable that matters most: what your house can actually
              carry. We walk through how that assessment works, and what
              happens if your foundation needs reinforcement, in our guide
              on{" "}
              <Link href="/guides/planning-a-home-addition" className="text-[#0B1F3A] underline hover:no-underline">
                planning a home addition in Houston
              </Link>
              . The short version: it&rsquo;s a smaller step than it seems
              next to the size of the project, and it&rsquo;s what keeps
              the number you&rsquo;re quoted from changing once
              construction starts.
            </p>

            <img
              src="/images/second-story-addition-cost-4-completed.jpg"
              srcSet="/images/second-story-addition-cost-4-completed-800.jpg 800w, /images/second-story-addition-cost-4-completed.jpg 1600w"
              sizes="(min-width: 768px) 66vw, 100vw"
              alt="The finished second story, brick-matched to the original house (illustrative photo, not an actual job site)"
              className="mb-2 h-[320px] w-full rounded-sm object-cover sm:h-[420px]"
            />
            <p className="mt-2 mb-8 text-sm text-slate-500">
              The finished second story, brick-matched to the original house.
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
              A second-story addition usually costs more per square foot
              than building out, because you&rsquo;re paying to prepare an
              existing structure to carry new weight, not just to build the
              new space itself. The fastest way to get a real number for
              your specific house is to start with our cost tool, then have
              us take an actual look at your foundation before you finalize
              a floor plan.
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
                Get Your Second-Story Cost Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Wondering if your house can carry a second story?"
        subheading="Call now or request a callback and we'll get back to you the same business day."
      />
    </>
  );
}
