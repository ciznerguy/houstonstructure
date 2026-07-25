import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/business";

export const metadata: Metadata = {
  title: "Structural Engineering Services",
  description:
    "Foundation repair, structural repairs, inspection reports, and consulting from a licensed structural engineer serving Houston, TX.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Structural engineering services for Houston homes"
        subtitle="Every service starts with an engineering evaluation — we diagnose the cause of the problem before recommending how to fix it."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-sm border border-slate-200 p-6 transition-colors hover:border-[#0B1F3A]"
            >
              <div className="text-lg font-semibold text-[#0B1F3A]">{s.name}</div>
              <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-orange-700 group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
