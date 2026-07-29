import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Straight answers to the questions Houston homeowners ask most about foundations, structural repairs, and renovations, from a licensed structural engineer.",
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Straight answers, before you start a project"
        subtitle="Plain-language guides to the questions we hear most from Houston homeowners, written by the engineer who answers them."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group rounded-sm border border-slate-200 p-6 transition-colors hover:border-[#0B1F3A]"
            >
              <div className="text-lg font-semibold text-[#0B1F3A]">{g.title}</div>
              <p className="mt-2 text-sm text-slate-600">{g.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange-700 group-hover:underline">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
