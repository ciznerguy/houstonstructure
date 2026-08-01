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
      <CTASection
        heading="Want an exact number instead of a range?"
        subheading="An on-site structural evaluation gives you a firm scope and price. Call now or request a callback."
      />
    </>
  );
}
