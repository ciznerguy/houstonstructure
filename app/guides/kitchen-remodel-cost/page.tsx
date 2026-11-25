import Img from "@/components/Img";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/business";

// Price ranges match the kitchen model in lib/cost-estimator.ts (builder $200,
// mid $380, high $650 per sq ft for a 150 sq ft kitchen, plus design, permits
// and contingency). Change both together.
export const metadata: Metadata = {
  title: "How Much Does a Kitchen Remodel Cost in Houston?",
  description:
    "Houston kitchen remodel costs at three finish levels, what moves the price most, and the slab, plumbing and permit issues that Houston houses add.",
};

const link = "text-[#0B1F3A] underline hover:no-underline";

const faqs = [
  {
    q: "How much does a kitchen remodel cost in Houston?",
    a: "For a typical kitchen of about 150 square feet, roughly $30,000 to $45,000 for a refresh that keeps the layout, $55,000 to $85,000 for a full mid-range remodel, and $100,000 and up for high-end work. Size, cabinets and whether plumbing moves account for most of the difference.",
  },
  {
    q: "Why does a small kitchen cost more per square foot?",
    a: "A small kitchen still has a sink, a range, a refrigerator, a dishwasher and the plumbing and circuits that go with them. Those costs do not shrink with the room, so they are spread over fewer square feet.",
  },
  {
    q: "Do I need a permit to remodel a kitchen in Houston?",
    a: "Replacing cabinets and counters in place usually does not. New plumbing, new circuits, gas work and any structural change do, and the permit comes from your city or, in unincorporated areas, may not be required for the building work itself. Our guide to home addition permits shows who reviews work in each part of the metro.",
  },
  {
    q: "How long does a kitchen remodel take?",
    a: "Once materials are on hand, a refresh can be done in a few weeks and a full remodel commonly takes two to three months. Cabinets are usually the item that sets the start date, so order them early.",
  },
  {
    q: "Can I add a sink to my island if the house is on a slab?",
    a: "Yes. A trench is cut in the slab for the new drain, the line is tied in at the right slope and the concrete is patched. If the slab is post-tensioned, the cables are located before any cutting starts.",
  },
];

export default function KitchenRemodelCostPage() {
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
        title="How Much Does a Kitchen Remodel Cost in Houston?"
        subtitle="Real ranges at three finish levels, what moves the number most, and the slab and plumbing issues that come with Houston houses."
        ctaLabel="Talk to Our Professional Construction Expert"
        ctaHref="/contact"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
        current="Kitchen Remodel Cost in Houston"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="min-w-0 md:col-span-2 text-slate-700 leading-relaxed">
            <p className="mb-5">
              Most kitchen price figures online are national averages, and Houston houses have a few habits that
              push the number one way or the other: slab floors that have to be cut when plumbing moves, drain lines
              that may be decades old, and kitchens in production homes that were laid out for a buyer who is not
              you. These are the ranges we see here, and what sits behind them.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Three levels, three price ranges</h2>
            <p className="mb-5">For a kitchen of about 150 square feet, which is typical in the houses we work on:</p>
            <ul className="mb-5 list-disc space-y-3 pl-5">
              <li>
                <strong>Refresh, about $30,000 to $45,000.</strong> The layout stays. New cabinet fronts or stock
                cabinets, new counters, a new sink and faucet, new appliances in the same places, lighting and paint.
              </li>
              <li>
                <strong>Full mid-range remodel, about $55,000 to $85,000.</strong> Semi-custom cabinets, stone
                counters, a tile backsplash, new flooring, better lighting, and usually one layout change, such as an
                island or a range moved to another wall.
              </li>
              <li>
                <strong>High end, $100,000 and up.</strong> Custom cabinetry to the ceiling, professional appliances,
                a ducted hood to the outside, a reworked layout and finishes chosen piece by piece.
              </li>
            </ul>
            <p className="mb-5">
              Each range includes design, permits and a contingency for what turns up once the old cabinets are out.
              For a number based on your own kitchen size and choices, the{" "}
              <Link href="/cost-estimator" className={link}>
                cost estimator
              </Link>{" "}
              gives a range in about two minutes.
            </p>

            <Img
              src="/images/kitchen-remodeling-1-layout-on-wall.jpg"
              srcSet="/images/kitchen-remodeling-1-layout-on-wall-800.jpg 800w, /images/kitchen-remodeling-1-layout-on-wall.jpg 1600w"
              sizes="(min-width: 768px) 66vw, 100vw"
              alt="Kitchen walls with every cabinet outlined at full size in marker during a Houston kitchen remodel"
              loading="lazy"
              className="mt-8 mb-2 h-[280px] w-full rounded-sm object-cover sm:h-[380px]"
            />
            <p className="mt-2 mb-8 text-sm text-slate-500">The cabinet layout drawn at full size on the wall, so nothing is a surprise when the boxes arrive.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">What moves the price most</h2>
            <p className="mb-5">
              <strong>Cabinets.</strong> They are the largest single line in almost every kitchen. The jump from
              stock to semi-custom to custom is where most of the difference between the three levels comes from.
            </p>
            <p className="mb-5">
              <strong>Moving plumbing.</strong> Keeping the sink where it is costs little. Moving it, or adding one
              to an island, means a new drain under the floor, and in a slab house that means cutting the concrete.
            </p>
            <p className="mb-5">
              <strong>Electrical and ventilation.</strong> Modern kitchens need more dedicated circuits than a 1980s
              panel was planned for, and a ducted hood needs a path to the outside through a wall or the roof.
            </p>
            <p className="mb-5">
              <strong>Size, in a way people do not expect.</strong> A small kitchen costs more per square foot than a
              large one, because it still has every appliance and every connection.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">What Houston houses add to the job</h2>
            <p className="mb-5">
              <strong>Slab floors.</strong> Most Houston houses sit on a concrete slab, so any new drain line runs
              through a trench cut in it. In many newer houses the slab is post-tensioned, with steel cables under
              high tension running through the concrete, and those cables have to be located before anyone cuts.
              Cutting one is dangerous at the moment it happens and a structural problem after.
            </p>
            <p className="mb-5">
              <strong>Old drain lines.</strong> Houses from the 1970s and earlier may still have cast iron drains
              under the slab. Opening the floor for a kitchen is a good time to run a camera through them, because
              tying new work into a failing line only moves the problem.
            </p>
            <p className="mb-5">
              <strong>Soffits.</strong> The boxed-in space above the upper cabinets in many 1980s and 1990s kitchens
              often hides ducts or plumbing vents. Taking it out to run cabinets to the ceiling starts with finding
              out what is inside and where it can go instead.
            </p>
            <p className="mb-5">
              <strong>Humidity.</strong> A range hood that only recirculates leaves moisture and grease in the room.
              In Houston&rsquo;s climate a hood ducted outside is worth the extra cost, and it should be planned with
              the cabinets, not added after.
            </p>
            <p className="mb-5">
              We write about these in the context of specific areas on our pages for{" "}
              <Link href="/locations/sugar-land" className={link}>
                Sugar Land
              </Link>{" "}
              and{" "}
              <Link href="/locations/cypress" className={link}>
                Cypress
              </Link>
              , and more about how we work is on our{" "}
              <Link href="/services/kitchen-remodeling" className={link}>
                kitchen design and remodeling
              </Link>{" "}
              page.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Permits</h2>
            <p className="mb-5">
              Swapping cabinets and counters in place usually needs no permit. New plumbing, new circuits, gas work
              and anything structural do. Who issues that permit depends on where the house is, and in the
              unincorporated parts of the metro there may be no building permit at all for some of the work. Our
              guide to{" "}
              <Link href="/guides/houston-addition-permits" className={link}>
                who approves work in each part of the Houston area
              </Link>{" "}
              lays it out place by place.
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
              <Link href="/services/kitchen-remodeling" className="mt-3 block font-semibold text-[#0B1F3A] hover:underline">
                Kitchen Design &amp; Remodeling
              </Link>
              <Link href="/cost-estimator" className="mt-2 block font-semibold text-[#0B1F3A] hover:underline">
                Cost Estimator
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
        heading="Want a real number for your kitchen?"
        subheading="Call now or request a callback, and we will look at the kitchen and the slab under it before giving you a price."
      />
    </>
  );
}
