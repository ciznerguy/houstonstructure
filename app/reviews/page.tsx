import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Reviews",
  description: `${BUSINESS.name} holds a ${BUSINESS.rating.toFixed(1)}-star rating on Google.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Rated 5.0 stars on Google"
        subtitle="Verified Google reviews from Houston-area homeowners."
      />
      <section className="mx-auto max-w-3xl px-5 py-14 text-center">
        <div className="text-5xl font-bold text-[#0B1F3A]">
          {BUSINESS.rating.toFixed(1)}
        </div>
        <div className="mt-2 flex justify-center gap-1 text-2xl text-amber-500">
          {"★★★★★"}
        </div>
        <p className="mt-3 text-slate-600">
          Based on reviews on Google Business Profile
        </p>
        <a
          href={BUSINESS.googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-sm border border-[#0B1F3A] px-6 py-3 text-sm font-semibold text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white"
        >
          Read our reviews on Google →
        </a>
      </section>
      <CTASection />
    </>
  );
}
