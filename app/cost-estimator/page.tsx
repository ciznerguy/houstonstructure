import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CostEstimatorTool from "@/components/CostEstimatorTool";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Home Addition Cost Estimator | Houston, TX",
  description:
    "Get a preliminary cost range for your Houston-area home addition in three quick steps, based on addition type, size, and finish level.",
};

export default function CostEstimatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Tool"
        title="Home Addition Cost Estimator"
        subtitle="Answer a few quick questions and get a preliminary cost range for your Houston-area home addition. This is a planning-stage ballpark, not a formal quote."
      />
      <CostEstimatorTool />
      {/* The percentages below mirror the constants in lib/cost-estimator.ts. Change both together. */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-2xl px-5 py-12 text-slate-700">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">How this estimate is calculated</h2>
          <p className="mt-4 leading-relaxed">
            The estimator starts from a cost per square foot for the finish level you pick. For additions, that
            rate reflects what Houston-area work costs today, and it runs above new construction, because tying
            new framing into an existing house costs more than building the same space from scratch. A second
            story is priced higher than a ground-floor addition. A garage conversion is priced lower, since the
            slab, walls and roof are already there.
          </p>
          <p className="mt-4 leading-relaxed">
            For additions we apply a Houston factor of +8%, taken from Craftsman&rsquo;s{" "}
            <a
              href="https://craftsman-book.com/national-building-cost-manual-book-2026"
              target="_blank"
              rel="noopener"
              className="font-medium text-[#0B1F3A] underline"
            >
              2026 National Building Cost Manual
            </a>
            , which builders and appraisers use to adjust national costs to a local market. Kitchen rates come
            from published Houston and Texas remodeling ranges and the{" "}
            <a
              href="https://zondahome.com/2025-cost-vs-value-report/"
              target="_blank"
              rel="noopener"
              className="font-medium text-[#0B1F3A] underline"
            >
              2025 Cost vs Value report
            </a>
            , so no extra regional factor is added to them.
          </p>
          <p className="mt-4 leading-relaxed">
            Larger projects cost less per square foot, because design, permits and site setup are fixed costs
            spread over more space.
          </p>
          <p className="mt-4 leading-relaxed">
            The estimate also includes costs that many online figures leave out: permits and engineering (10% on
            additions, 8% for design and permits on kitchens) and a contingency for surprises found once walls
            are open (12% on additions, 10% on kitchens). If you answer &ldquo;not sure&rdquo; about HVAC or
            electrical work, we count it in, so your final number is more likely to come down than go up.
          </p>
          <p className="mt-4 leading-relaxed">
            The range you see runs 15% on either side of the middle figure. These figures are set and reviewed by
            our team, working on Houston homes since 1990. Last reviewed November 2026.
          </p>
        </div>
      </section>
      <CTASection
        heading="Want an exact number instead of a range?"
        subheading="An on-site structural evaluation gives you a firm scope and price. Call now or request a callback."
      />
    </>
  );
}
