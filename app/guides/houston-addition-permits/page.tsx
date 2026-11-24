import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Home Addition Permits in Houston: Who Approves What, City by City",
  description:
    "Who issues the permit for a room addition or second story in Houston, Sugar Land, Pearland, Bellaire, the Villages and unincorporated areas, and what else needs approval.",
};

const link = "text-[#0B1F3A] underline hover:no-underline";

type Row = { place: React.ReactNode; permit: string; structure: string; also: string };

const rows: Row[] = [
  {
    place: <>City of Houston, including <Link href="/locations/houston-heights" className={link}>the Heights</Link> and Spring Branch</>,
    permit: "City of Houston",
    structure: "Sealed structural drawings for anything that changes how the house carries load, a second story included",
    also: "Deed restrictions, which the city enforces. A Certificate of Appropriateness in a historic district. City floodplain rules.",
  },
  {
    place: <>The six Memorial Villages: <Link href="/locations/spring-valley-village" className={link}>Spring Valley</Link>, <Link href="/locations/piney-point-village" className={link}>Piney Point</Link>, <Link href="/locations/bunker-hill-village" className={link}>Bunker Hill</Link>, <Link href="/locations/hedwig-village" className={link}>Hedwig</Link>, <Link href="/locations/hilshire-village" className={link}>Hilshire</Link> and <Link href="/locations/hunters-creek-village" className={link}>Hunters Creek</Link></>,
    permit: "Each village's own building department, not the City of Houston",
    structure: "Expect sealed structural drawings with a second-story application",
    also: "The village's own height and setback rules. Floodplain rules on lots near the bayou.",
  },
  {
    place: <Link href="/locations/bellaire" className={link}>Bellaire</Link>,
    permit: "City of Bellaire",
    structure: "Sealed drawings or a stamped letter for any change to how the house carries load",
    also: "City zoning: setbacks and height.",
  },
  {
    place: <Link href="/locations/west-university-place" className={link}>West University Place</Link>,
    permit: "City of West University Place",
    structure: "Sealed structural drawings, reviewed closely",
    also: "Height, lot coverage and setbacks, which on small West U lots shape the design as much as the structure does.",
  },
  {
    place: <Link href="/locations/sugar-land" className={link}>Sugar Land</Link>,
    permit: "City of Sugar Land",
    structure: "A stamped engineering letter or drawings before anything structural is approved",
    also: "HOA architectural review in nearly every master-planned community.",
  },
  {
    place: <Link href="/locations/missouri-city" className={link}>Missouri City</Link>,
    permit: "City of Missouri City",
    structure: "Structural drawings for anything that adds a story",
    also: "HOA architectural review in the master-planned communities.",
  },
  {
    place: <Link href="/locations/pearland" className={link}>Pearland</Link>,
    permit: "City of Pearland",
    structure: "A sealed drawing or letter from a Texas licensed engineer for load-bearing changes",
    also: "Floodplain determination and drainage district requirements, which differ between the Brazoria, Harris and Fort Bend parts of the city.",
  },
  {
    place: <Link href="/locations/katy" className={link}>Katy</Link>,
    permit: "The City of Katy inside the city limits. Outside them, Harris, Fort Bend or Waller County",
    structure: "Depends on which side of the city line the address falls",
    also: "HOA review in the master-planned sections. Check the jurisdiction before drawings start.",
  },
  {
    place: <>Unincorporated Harris County, which covers most of <Link href="/locations/cypress" className={link}>Cypress</Link></>,
    permit: "Generally no residential building permit for a single-family home",
    structure: "Nobody asks for it, which is the reason to have it: the engineer's drawings are the only check on the structure",
    also: "Floodplain permits, HOA rules and deed restrictions still apply.",
  },
  {
    place: <>Unincorporated <Link href="/locations/fort-bend-county" className={link}>Fort Bend County</Link></>,
    permit: "The county does not review single-family structural work the way a city does",
    structure: "Same as unincorporated Harris County: worth having even where it is not required",
    also: "Floodplain and drainage rules, and HOA review in most subdivisions.",
  },
  {
    place: <Link href="/locations/the-woodlands" className={link}>The Woodlands</Link>,
    permit: "No city permit office. The Township's covenant process instead",
    structure: "Drawings that show the structure clearly help the review",
    also: "Your village's Residential Design Review Committee, and the Development Standards Committee for a variance. Tree removal is part of the review.",
  },
];

const faqs = [
  {
    q: "How do I find out who issues the permit for my address?",
    a: "Check whether the address is inside city limits. Many Houston-area addresses carry a Houston mailing address but sit in a separate city, such as one of the Villages or Bellaire, or in unincorporated county land. The county appraisal district record for the property lists the taxing jurisdictions, and a city listed there is the one that issues the permit.",
  },
  {
    q: "Does a room addition need an engineer's seal if the city does not require one?",
    a: "It should have one. In unincorporated Harris and Fort Bend County there is generally no plan review for a single-family addition, so nothing checks the foundation, the beams or the connection to the existing house except the engineer's design. A sealed set is also what the crew builds to and what a future buyer will ask about.",
  },
  {
    q: "Is HOA approval the same as a building permit?",
    a: "No. The HOA reviews how the addition looks and where it sits on the lot. The city reviews whether it is built safely and to code. In most master-planned communities you need both, and they do not talk to each other, so plan for two reviews.",
  },
  {
    q: "What is the 50 percent rule for homes in a floodplain?",
    a: "If a house sits in a mapped flood zone and the cost of the work reaches half of the building's market value, it counts as a substantial improvement, and the whole house, not only the addition, generally has to be brought up to current floodplain requirements. That can mean raising the house, so it is worth checking the flood zone before the scope is settled.",
  },
  {
    q: "Can deed restrictions stop a second story inside the City of Houston?",
    a: "They can. Houston has no zoning, but many older subdivisions have deed restrictions that limit height or the number of stories, and the city enforces them. Read yours before paying for plans.",
  },
];

export default function HoustonAdditionPermitsPage() {
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
        title="Who Approves a Home Addition in the Houston Area?"
        subtitle="A room addition or a second story can need a city permit, an HOA review, a historic district approval, or none of these. It depends on which side of a line your address falls. Here is the area, one jurisdiction at a time."
        ctaLabel="Talk to Our Professional Construction Expert"
        ctaHref="/contact"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
        current="Home Addition Permits in the Houston Area"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="min-w-0 md:col-span-2 text-slate-700 leading-relaxed">
            <p className="mb-5">
              &ldquo;Houston&rdquo; on a mailing address does not mean the City of Houston issues your permit. The
              metro is a patchwork of separate cities, villages, a township and large stretches of county land with
              no building department at all, and each one handles an addition differently. Owners usually find this
              out after the plans are drawn, which is the expensive time to find out.
            </p>
            <p className="mb-5">
              We prepare the structural drawings for additions across all of these places, so we deal with the
              differences every week. This page puts them side by side.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Three things to settle before anyone draws</h2>
            <ol className="mb-5 list-decimal space-y-3 pl-5">
              <li>
                <strong>Which jurisdiction you are in.</strong> City limits, not the mailing address, decide who
                reviews the work. In Katy and Pearland, a single street can sit in a different county from the next one.
              </li>
              <li>
                <strong>What your deed restrictions and HOA allow.</strong> These limit height, setbacks and
                appearance, and they are a separate approval from the permit.
              </li>
              <li>
                <strong>Whether the house is in a mapped flood zone.</strong> In a flood zone, the size of the job
                can change what the rest of the house has to meet.
              </li>
            </ol>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Who approves what, place by place</h2>
            <div className="mb-3 overflow-x-auto rounded-sm border border-slate-200">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-[0.08em] text-slate-500">
                  <tr>
                    <th className="px-3 py-2.5 font-semibold">Where the house is</th>
                    <th className="px-3 py-2.5 font-semibold">Who issues the permit</th>
                    <th className="px-3 py-2.5 font-semibold">Structural drawings</th>
                    <th className="px-3 py-2.5 font-semibold">Other approvals to plan for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 align-top">
                  {rows.map((r) => (
                    <tr key={r.permit + r.also}>
                      <td className="px-3 py-3 font-medium text-slate-800">{r.place}</td>
                      <td className="px-3 py-3">{r.permit}</td>
                      <td className="px-3 py-3">{r.structure}</td>
                      <td className="px-3 py-3">{r.also}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-5 text-sm text-slate-500">
              Rules and fees change. Confirm the current requirements with the permit office before you submit. Last
              reviewed November 2026.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The City of Houston: no zoning, plenty of rules</h2>
            <p className="mb-5">
              Houston is famous for having no zoning, and owners sometimes take that to mean anything goes. It does
              not. Many older subdivisions have deed restrictions that limit building height or the number of
              stories, and the city enforces them. In a designated historic district, an addition that changes how
              the house looks from the street needs a Certificate of Appropriateness from the historical commission
              before the building permit, and a second story is usually set back so the original front still reads
              as it did. Our guide to a{" "}
              <Link href="/guides/second-story-addition-cost" className={link}>
                second story addition in Houston
              </Link>{" "}
              covers what that review looks at.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Separate cities inside the map</h2>
            <p className="mb-5">
              Bellaire, West University Place and the six Memorial Villages are surrounded by Houston but are
              cities of their own, each with its own building department and its own idea of how much detail a
              structural set should carry. West U in particular reviews residential work closely, and on its small
              lots the height, coverage and setback limits shape the design as much as the structure does. In all of
              them, a submittal that leaves the foundation vague is the most common reason for a second round of
              review.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Floodplains and the 50 percent rule</h2>
            <p className="mb-5">
              A good part of the metro sits in mapped flood zones, and that changes the arithmetic of an addition.
              When the cost of the work on a house in a flood zone reaches half of the building&rsquo;s market value,
              the project is treated as a substantial improvement, and the whole house generally has to meet current
              floodplain requirements, which can mean raising it. The City of Houston tightened its own floodplain
              rules after Harvey, and the county and city floodplain offices each apply their own version. Check the
              flood zone before the scope is fixed, because a slightly smaller project can sometimes stay under the
              threshold.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Where nobody asks for a permit</h2>
            <p className="mb-5">
              Most of Cypress, Spring and the other unincorporated parts of Harris and Fort Bend County have no
              residential building permit program for single-family homes. Owners hear this as good news, and it is
              faster. It also means nobody looks at the beam sizes, the footings or how the new room is tied to the
              old one before it is built. In those places the engineer&rsquo;s drawings are not a formality for a
              reviewer. They are the only check there is. We cover what that design involves in our guide to{" "}
              <Link href="/guides/planning-a-home-addition" className={link}>
                planning a home addition in Houston
              </Link>
              .
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
              <Link href="/cost-estimator" className="mt-2 block font-semibold text-[#0B1F3A] hover:underline">
                Home Addition Cost Estimator
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
        heading="Not sure which rules apply to your house?"
        subheading="Call now or request a callback. We will tell you who reviews the work at your address before anyone draws a plan."
      />
    </>
  );
}
