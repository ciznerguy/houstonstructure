import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/business";
import { GUIDES } from "@/lib/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

const SERVICE_TO_GUIDE_SLUG: Record<string, string> = {
  "load-bearing-wall-removal": "load-bearing-wall-removal",
  "home-additions": "planning-a-home-addition",
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} in Houston, TX`,
    description: service.summary,
    ...(service.image && {
      openGraph: { images: [{ url: service.image, width: 1600, height: 900 }] },
    }),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.summary,
    url: `${BUSINESS.siteUrl}/services/${service.slug}`,
    ...(service.image && { image: `${BUSINESS.siteUrl}${service.image}` }),
    provider: {
      "@type": "ProfessionalService",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.siteUrl,
    },
    areaServed: SERVICE_AREAS.map((c) => ({
      "@type": "City",
      name: `${c.name}, TX`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      <PageHero
        eyebrow="Service"
        title={`${service.name} in Houston, TX`}
        subtitle={service.summary}
      />

      {service.image && (
        <div className="mx-auto max-w-6xl px-5 pt-10">
          <img
            src={service.image}
            srcSet={`${service.image.replace(".jpg", "-800.jpg")} 800w, ${service.image} 1600w`}
            sizes="100vw"
            alt={service.imageAlt ?? `${service.name} in Houston, TX`}
            fetchPriority="high"
            className="h-[320px] w-full rounded-sm object-cover sm:h-[420px]"
          />
        </div>
      )}

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div className="md:col-span-2">
          {service.description.map((p, i) => (
            <p key={i} className="mb-5 text-slate-700 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div>
          <div className="rounded-sm border border-slate-200 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Signs it&rsquo;s time to call
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
              {service.signs.map((sign) => (
                <li key={sign} className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-600">▸</span>
                  {sign}
                </li>
              ))}
            </ul>
            <a
              href={BUSINESS.phoneHref}
              className="mt-5 block rounded-sm bg-[#EA580C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c94b0a]"
            >
              Call {BUSINESS.phone}
            </a>
          </div>

          {service.slug === "home-additions" && (
            <div className="mt-6 rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Free Tool
              </div>
              <Link
                href="/cost-estimator"
                className="mt-3 block font-semibold text-[#0B1F3A] hover:underline"
              >
                Get a Home Addition Cost Estimate
              </Link>
            </div>
          )}

          {SERVICE_TO_GUIDE_SLUG[service.slug] && (() => {
            const guide = GUIDES.find((g) => g.slug === SERVICE_TO_GUIDE_SLUG[service.slug]);
            if (!guide) return null;
            return (
              <div className="mt-6 rounded-sm border border-slate-200 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Guide
                </div>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="mt-3 block font-semibold text-[#0B1F3A] hover:underline"
                >
                  {guide.title}
                </Link>
              </div>
            );
          })()}

          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Other services
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-slate-700 hover:text-[#0B1F3A] hover:underline">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
            Service Areas
          </div>
          <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A]">
            {service.shortName} across the Houston metro
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {SERVICE_AREAS.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="rounded-sm border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-[#0B1F3A] hover:text-[#0B1F3A]"
              >
                {c.name}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
