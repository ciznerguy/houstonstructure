import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/business";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return SERVICE_AREAS.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = SERVICE_AREAS.find((c) => c.slug === city);
  if (!area) return {};
  return {
    title: `Structural Engineer in ${area.name}, TX`,
    description: `Foundation repair, structural repairs, and engineering inspections in ${area.name}, TX. ${area.blurb}`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const area = SERVICE_AREAS.find((c) => c.slug === city);
  if (!area) notFound();

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <PageHero
        eyebrow="Service Area"
        title={`Structural Engineer in ${area.name}, TX`}
        subtitle={area.blurb}
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            {area.intro.map((p, i) => (
              <p key={i} className="mb-5 text-slate-700 leading-relaxed">
                {p}
              </p>
            ))}

            <h2 className="mt-4 text-xl font-bold text-[#0B1F3A]">
              Structural services in {area.name}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-sm border border-slate-200 p-4 text-sm hover:border-[#0B1F3A]"
                >
                  <div className="font-semibold text-[#0B1F3A]">{s.shortName}</div>
                  <div className="mt-1 text-slate-600">{s.summary}</div>
                </Link>
              ))}
            </div>

            <h2 className="mt-10 text-xl font-bold text-[#0B1F3A]">
              {area.name} FAQ
            </h2>
            <div className="mt-4 space-y-5">
              {area.faqs.map((f) => (
                <div key={f.q}>
                  <div className="font-semibold text-slate-800">{f.q}</div>
                  <p className="mt-1.5 text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="flex items-center gap-1 text-amber-500">
                {"★★★★★"}
              </div>
              <div className="mt-1 text-sm text-slate-600">
                {BUSINESS.rating.toFixed(1)} rating · Google reviews
              </div>
              <a
                href={BUSINESS.phoneHref}
                className="mt-4 block rounded-sm bg-[#EA580C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c94b0a]"
              >
                Call {BUSINESS.phone}
              </a>
            </div>

            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Other areas we serve
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {SERVICE_AREAS.filter((c) => c.slug !== area.slug).map((c) => (
                  <li key={c.slug}>
                    <Link href={`/locations/${c.slug}`} className="text-slate-700 hover:text-[#0B1F3A] hover:underline">
                      {c.name}, TX
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading={`Get an engineer's opinion in ${area.name}`}
        subheading="Call now or request a callback and we'll get back to you the same business day."
      />
    </>
  );
}
