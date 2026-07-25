import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SERVICE_AREAS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Structural engineering, foundation repair, and inspection services across the Houston metro, including The Woodlands, Spring, Sugar Land, Pasadena, League City, and New Caney.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Serving Houston and the surrounding metro"
        subtitle="Soil, drainage, and construction conditions vary block to block across Houston. Pick your area below for what we typically see there."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="group rounded-sm border border-slate-200 p-5 transition-colors hover:border-[#0B1F3A]"
            >
              <div className="text-lg font-semibold text-[#0B1F3A]">{c.name}, TX</div>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">{c.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange-700 group-hover:underline">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
