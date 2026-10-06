import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import CostEstimatorCTA from "@/components/CostEstimatorCTA";
import { BUSINESS } from "@/lib/business";

// Written from photographs of the finished work. Nothing here states a size, a
// neighbourhood or a date, because none of those were given. What is described
// is what the photographs show and what an addition of this kind requires.

export const metadata: Metadata = {
  title: "Bedroom and Bathroom Addition in Houston, TX",
  description:
    "A room addition that put a new bedroom and a full bathroom onto an existing Houston house. The tile work is the visible half. The foundation, the drain layout set before the pour, and the framed arch are the half that makes it last.",
};

const faqs = [
  {
    q: "Does adding a bathroom mean the plumbing decisions come early?",
    a: "Earlier than most people expect. In an addition on a slab, the drains are laid out and the pipe is in the ground before the concrete is poured. Where the tub sits, where the shower drain lands, where the toilet flange comes up: all of that is fixed at foundation stage, weeks before anyone picks a tile. Moving a fixture afterwards means cutting the slab, so the layout gets drawn and agreed before the pour rather than during the fit-out.",
  },
  {
    q: "Can a freestanding tub go anywhere in a new room?",
    a: "Not anywhere, no. A freestanding tub full of water and a person is a concentrated load in one spot, and in an addition it also sits over the point where the supply and waste come up. The position gets chosen with both of those in mind, which is why it is worth settling at design stage rather than treating it as a furniture decision at the end.",
  },
  {
    q: "Why do tile floors in Houston additions crack along the join?",
    a: "Because the new slab and the old one are moving at different rates. Houston sits on clay that swells and shrinks with moisture, and a new foundation has not finished settling while the original one stopped decades ago. If the two are tied together without accounting for that, the movement finds the weakest line and the tile shows it. A tight geometric floor is the least forgiving finish there is, which makes it a reasonable test of whether the structure under it was done properly.",
  },
  {
    q: "Can you build an arch into a new wall?",
    a: "Yes, and it is a framing question before it is a finish question. A curved opening still has to carry whatever is above it, so the header is built to the arch rather than the arch being applied to a square opening afterwards. Doing it that way is what makes the curve read as part of the building instead of as trim.",
  },
  {
    q: "Is it cheaper to add a bedroom and bathroom together?",
    a: "Usually, yes, if they are adjacent. One foundation, one roof tie-in, one set of inspections and one run of plumbing serving both. Adding the bathroom later as a separate project means paying for the disruption twice and cutting into finished work to do it.",
  },
];

export default function BedroomBathroomAdditionPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A Bedroom and Bathroom Added to a Houston Home",
    description: metadata.description,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    about: {
      "@type": "Service",
      name: "Home Additions",
      areaServed: { "@type": "City", name: "Houston, TX" },
    },
    mainEntityOfPage: `${BUSINESS.siteUrl}/projects/bedroom-bathroom-addition-houston`,
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />

      <PageHero
        eyebrow="Project | Houston, TX"
        title="A Bedroom and Bathroom Added to a Houston Home"
        subtitle="The tile is what people notice. The reason it still looks like that in five years is the part nobody photographs."
        ctaLabel="Calculate Your Addition Cost in 2 Minutes"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
        current="A Bedroom and Bathroom Added to a Houston Home"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 leading-relaxed text-slate-700">
            <h2 className="mb-4 text-xl font-bold text-[#0B1F3A]">What was added</h2>
            <p className="mb-5">
              A bedroom and a full bathroom, added to a house that did not have them. That is one of the most
              common{" "}
              <Link href="/services/home-additions" className="text-[#0B1F3A] underline hover:no-underline">
                room additions in Houston
              </Link>{" "}
              we build, usually because a family needs a guest suite, an in-law room, or a primary bedroom that
              is not sharing a bathroom with the rest of the house.
            </p>
            <p className="mb-5">
              Putting the two together in one addition is the sensible way to do it. One foundation, one roof
              tie-in, one run of plumbing and one set of inspections covering both rooms. Adding the bathroom
              afterwards as a second project means paying for the disruption twice and cutting into finished work
              to reach the pipe.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The bathroom is the part you can see</h2>
            <p className="mb-5">
              The finish on this one is not restrained. Large format marble-look tile runs floor to ceiling. The
              floor is a geometric mosaic, octagons set with brass-toned inserts, laid so the pattern stays square
              to the room rather than to the walls, which is harder and looks deliberate rather than accidental.
            </p>
            <p className="mb-5">
              A freestanding tub sits in an arched alcove, with a chevron-textured panel running up the back of
              it and the arch itself turned in cut tile so the curve is continuous. A walk-in shower takes the
              other end of the room: a rain head, a handheld, a built-in bench finished in the same chevron, and a
              linear drain set flush so the floor pattern runs through it without a break.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              The part that decides whether it still looks like that in five years
            </h2>
            <p className="mb-5">
              A tight geometric tile floor is the least forgiving finish in a house. Every joint is a straight
              line across the room, and a straight line shows movement that a wood floor or a carpet would hide
              completely. Which makes it, by accident, a very good test of the structure underneath.
            </p>
            <p className="mb-5">
              Houston sits on clay that swells and shrinks with moisture. A new addition slab has not finished
              settling while the original foundation stopped moving decades ago. Tie the two together without
              accounting for that difference and the movement finds the weakest line, usually the join, and the
              tile reports it within a season or two.
            </p>
            <p className="mb-5">
              That tie-in is the engineering work on an addition like this, and it happens before anyone has
              looked at a tile sample. We do the engineering and the construction, so the detail that gets built
              is the detail that was designed for the soil the house is standing on.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Decisions that are locked at the pour</h2>
            <p className="mb-5">
              In a slab addition the drains go in the ground before the concrete does. The tub position, the
              shower drain, the toilet flange: all of it is fixed weeks before the first tile is ordered. People
              are often surprised by how early that conversation has to happen, but the alternative is cutting a
              finished slab later, which costs more than it sounds like.
            </p>
            <p className="mb-5">
              The arch is the same kind of decision. A curved opening still carries what is above it, so the
              header gets framed to the curve rather than the curve being applied to a square opening afterwards.
              That is the difference between an arch that reads as part of the building and one that reads as
              trim stuck on at the end.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Common questions</h2>
            <div className="mt-6 space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-slate-800">{f.q}</h3>
                  <p className="mt-2">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
                At a glance
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">Added</dt>
                  <dd className="text-slate-600">One bedroom and one full bathroom</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">Structural work</dt>
                  <dd className="text-slate-600">
                    New foundation tied into the existing slab, under-slab drainage set before the pour, framed
                    arch, roof tie-in
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">Finish</dt>
                  <dd className="text-slate-600">
                    Marble-look large format tile, chevron feature panel, geometric mosaic floor with brass
                    inserts, freestanding tub in an arched alcove, walk-in shower with a linear drain
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <CostEstimatorCTA label="Price a Similar Addition" className="w-full py-3" />
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
                Related
              </div>
              <ul className="mt-4 space-y-2 text-sm font-semibold">
                <li>
                  <Link href="/services/home-additions" className="text-[#0B1F3A] hover:text-orange-700">
                    Room additions in Houston →
                  </Link>
                </li>
                <li>
                  <Link href="/services/second-story-addition" className="text-[#0B1F3A] hover:text-orange-700">
                    Second story additions →
                  </Link>
                </li>
                <li>
                  <Link href="/projects/room-addition-houston-townhome" className="text-[#0B1F3A] hover:text-orange-700">
                    A thousand square feet found inside a townhome →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/planning-a-home-addition" className="text-[#0B1F3A] hover:text-orange-700">
                    Planning a home addition →
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
