import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import EstimateClient from "./EstimateClient";

// Step two of the lead flow, not a landing page. It is kept out of the sitemap
// and out of the index so it never competes with /cost-estimator, which covers
// the same ground for visitors arriving from search.
export const metadata: Metadata = {
  title: "Your Project Details | Houston, TX",
  description:
    "Tell us about your Houston-area project and see a preliminary cost range.",
  robots: { index: false, follow: true },
};

export default function EstimatePage() {
  return (
    <>
      <PageHero
        eyebrow="Step 2 of 2"
        title="Tell us about the project"
        subtitle="A few quick questions gives you a preliminary cost range and tells us what we're walking into. This is a planning-stage ballpark, not a formal quote."
      />
      <EstimateClient />
      <CTASection
        heading="Would rather just talk it through?"
        subheading="Call now and get a straight answer about what your house needs."
      />
    </>
  );
}
