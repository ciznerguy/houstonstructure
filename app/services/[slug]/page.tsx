import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/business";
import { GUIDES } from "@/lib/guides";
import { PROJECTS } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

const SERVICE_TO_GUIDE_SLUG: Record<string, string> = {
  "load-bearing-wall-removal": "load-bearing-wall-removal",
  "home-additions": "planning-a-home-addition",
  "commercial-buildouts": "commercial-wall-removal",
};

// Addition-related services send people to the estimator; everything else
// asks for a quote through the contact form, worded for that service.
const SERVICE_CTA: Record<string, { label: string; href?: string }> = {
  "home-additions": { label: "Calculate Your Addition Cost in 2 Minutes" },
  "general-contracting": { label: "Planning an Addition? Get a Free Cost Estimate" },
  "foundation-repair": { label: "Get a Foundation Repair Quote", href: "/contact" },
  "structural-repairs": { label: "Get a Structural Repair Quote", href: "/contact" },
  "inspections-reports": { label: "Request a Structural Inspection", href: "/contact" },
  consulting: { label: "Request an Engineering Consultation", href: "/contact" },
  "load-bearing-wall-removal": { label: "Get a Wall Removal Quote", href: "/contact" },
  "commercial-buildouts": { label: "Get a Commercial Buildout Quote", href: "/contact" },
  "steel-beam-installation": { label: "Get a Steel Beam Installation Quote", href: "/contact" },
};

// Service copy in lib/business.ts is plain strings; this lets a paragraph or
// bullet carry an inline internal link written as [anchor text](/path).
function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    return (
      <Link key={i} href={m[2]} className="text-[#0B1F3A] underline hover:no-underline">
        {m[1]}
      </Link>
    );
  });
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.seoTitle ?? `${service.name} in Houston, TX`,
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

  const faqJson = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }}
      />
      {faqJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      )}
      <PageHero
        eyebrow="Service"
        title={`${service.name} in Houston, TX`}
        subtitle={service.summary}
        ctaLabel={SERVICE_CTA[service.slug]?.label ?? "Request a Free Quote"}
        ctaHref={SERVICE_CTA[service.slug]?.href}
      />

      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} current={service.shortName} />

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
        <div className="md:col-span-2 text-slate-700 leading-relaxed">
          {service.atAGlance?.length ? (
            <div className="mb-8 rounded-sm border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                At a glance
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {service.atAGlance.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-orange-600">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {service.description.map((p, i) => (
            <p key={i} className="mb-5">
              {renderInline(p)}
            </p>
          ))}

          {service.sections?.map((s) => (
            <div key={s.heading}>
              <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
                {s.heading}
              </h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mb-5">
                  {renderInline(p)}
                </p>
              ))}
              {s.bullets?.length ? (
                <ul className="mb-5 list-disc space-y-2 pl-5">
                  {s.bullets.map((b) => (
                    <li key={b}>{renderInline(b)}</li>
                  ))}
                </ul>
              ) : null}
              {s.image && (
                <>
                  <img
                    src={s.image.src}
                    srcSet={`${s.image.src.replace(".jpg", "-800.jpg")} 800w, ${s.image.src} 1600w`}
                    sizes="(min-width: 768px) 66vw, 100vw"
                    alt={`${s.image.alt} (illustrative photo, not an actual job site)`}
                    loading="lazy"
                    className="mb-2 h-[320px] w-full rounded-sm object-cover sm:h-[420px]"
                  />
                  <p className="mt-2 mb-8 text-sm text-slate-500">{s.image.caption}</p>
                </>
              )}
            </div>
          ))}

          {(() => {
            const guide = GUIDES.find((g) => g.slug === SERVICE_TO_GUIDE_SLUG[service.slug]);
            const projects = PROJECTS.filter((p) => p.serviceSlug === service.slug);
            if (!guide && !projects.length) return null;
            return (
              <>
                <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
                  Read more on this
                </h2>
                <ul className="mb-5 space-y-3">
                  {projects.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/projects/${p.slug}`} className="font-semibold text-[#0B1F3A] underline hover:no-underline">
                        {p.title}
                      </Link>
                      <div className="mt-1 text-sm text-slate-600">{p.summary}</div>
                    </li>
                  ))}
                  {guide && (
                    <li>
                      <Link href={`/guides/${guide.slug}`} className="font-semibold text-[#0B1F3A] underline hover:no-underline">
                        {guide.title}
                      </Link>
                      <div className="mt-1 text-sm text-slate-600">{guide.summary}</div>
                    </li>
                  )}
                </ul>
              </>
            );
          })()}

          {service.faqs?.length ? (
            <>
              <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
                Questions we hear often
              </h2>
              <div className="space-y-5">
                {service.faqs.map((f) => (
                  <div key={f.q}>
                    <div className="font-semibold text-slate-800">{f.q}</div>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </>
          ) : null}
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

          {PROJECTS.filter((p) => p.serviceSlug === service.slug).map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="mt-6 block overflow-hidden rounded-sm border border-slate-200 hover:border-[#0B1F3A]"
            >
              {p.image && (
                <img
                  src={p.image.replace(".jpg", "-800.jpg")}
                  alt={`${p.title} (illustrative rendering, not a photo of the project)`}
                  loading="lazy"
                  className="h-36 w-full object-cover"
                />
              )}
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Recent project
                </div>
                <div className="mt-2 font-semibold text-[#0B1F3A]">{p.title}</div>
                <div className="mt-1 text-sm text-slate-600">{p.summary}</div>
              </div>
            </Link>
          ))}

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
