import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${BUSINESS.name} — engineer-led structural evaluations, foundation repair, and consulting serving the Houston metro.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="An engineer's opinion, before a repair quote"
        subtitle={`${BUSINESS.name} serves homeowners across the Houston metro.`}
      />
      <section className="mx-auto max-w-3xl px-5 py-14 text-slate-700 leading-relaxed">
        <p className="mb-5">
          Most homeowners find a structural engineer after a foundation repair
          company has already given them a quote — and a reason to be
          skeptical of it. Our approach starts one step earlier: an
          independent engineering evaluation of what&rsquo;s actually
          happening to your home, before anyone proposes a fix.
        </p>
        <p className="mb-5">
          That distinction matters in Houston more than most places. The
          region&rsquo;s expansive clay soils mean foundation movement is
          common, but the right response to it varies enormously depending on
          the cause — soil movement, a plumbing leak, poor drainage, tree
          roots, or simple age and settling. We evaluate the actual cause
          first, then scope a repair (or tell you that none is needed).
        </p>
        <p className="mb-5">
          We work directly with homeowners, real estate agents, attorneys,
          and insurance adjusters who need a sealed engineering report they
          can rely on, and with contractors who need stamped calculations
          for a permit.
        </p>
        <div className="mt-8 rounded-sm border border-slate-200 bg-slate-50 p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            At a glance
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <strong>Category:</strong> {BUSINESS.category}
            </li>
            <li>
              <strong>Rating:</strong> {BUSINESS.rating.toFixed(1)} stars (Google reviews)
            </li>
            <li>
              <strong>Service area:</strong> Houston, TX and the surrounding metro
            </li>
            <li>
              <strong>Phone:</strong> {BUSINESS.phone}
            </li>
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
