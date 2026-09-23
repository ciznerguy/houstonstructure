import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SERVICE_AREAS, SERVICES } from "@/lib/business";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Recent structural engineering and construction projects across the Houston area: additions, second stories, wall removals, and repairs, with what each one involved.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Recent projects around Houston"
        subtitle="What the work looks like in practice: the house, what the owners wanted, what it took above and below, and how long it ran."
        ctaLabel="Get a Free Home Addition Cost Estimate"
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => {
            const city = SERVICE_AREAS.find((c) => c.slug === p.citySlug);
            const service = SERVICES.find((s) => s.slug === p.serviceSlug);
            return (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-sm border border-slate-200 transition-colors hover:border-[#0B1F3A]"
              >
                {p.image && (
                  <img
                    src={p.image}
                    srcSet={`${p.image.replace(".jpg", "-800.jpg")} 800w, ${p.image} 1600w`}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    alt={`${p.title} (illustrative rendering, not a photo of the project)`}
                    className="h-56 w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {[city && `${city.name}, TX`, service?.shortName].filter(Boolean).join(" · ")}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-[#0B1F3A]">{p.title}</div>
                  <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-orange-700 group-hover:underline">
                    See the project →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
