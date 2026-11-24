import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SecondStoryCheckTool from "@/components/SecondStoryCheckTool";

// DRAFT FOR LEVI'S REVIEW (2026-11-24). Deliberately an orphan: no page links
// here, it is not in the sitemap, and it is noindex. Before publishing, remove
// `robots` below, add it to app/sitemap.ts and scripts/gen-lastmod.mjs, and link it.
export const metadata: Metadata = {
  title: "Can Your House Take a Second Story? | Houston, TX",
  description:
    "Answer a few questions about your Houston house and see what an engineer will check before you build up, with a planning cost range.",
  robots: { index: false, follow: false },
};

export default function SecondStoryCheckPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Tool"
        title="Can Your House Take a Second Story?"
        subtitle="Answer eight quick questions about your house. You'll see what a structural engineer will check before you build up, and a planning cost range for the new floor."
      />
      <SecondStoryCheckTool />
    </>
  );
}
