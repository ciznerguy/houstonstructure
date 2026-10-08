import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS, SERVICE_AREAS } from "@/lib/business";
import { PROJECTS } from "@/lib/projects";

// These pages used to link to all eleven services in a grid, with the same
// anchor text on all sixteen of them. The grid is gone on purpose: a page
// divides what it passes between the links it has, so removing the eight we
// do not want to rank for is the only thing that actually concentrates it.
// nofollow would not have done this. Since 2009 a nofollowed link still takes
// its share and discards it instead of passing it on.
//
// Nothing is orphaned. Every service is still reachable from the header
// dropdown and from /services.

// Location copy in lib/business.ts is plain strings; this lets a paragraph
// carry an inline internal link written as [anchor text](/path).
function renderInline(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    return (
      <Link key={i} href={m[2]} className="text-[#0B1F3A] underline hover:no-underline">
        {m[1]}
      </Link>
    );
  });
}

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
    // The location pages are the site's biggest source of impressions, and
    // they were describing foundation repair and inspections, which is not
    // the work we want. Lead with additions and walls instead.
    title: `Room Additions & Structural Engineer in ${area.name}, TX`,
    description: `Room additions, second stories and load-bearing wall removal in ${area.name}, TX, engineered and built by one licensed firm. ${area.blurb}`,
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
        ctaLabel={`Estimate a Home Addition Cost in ${area.name}`}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/locations" },
        ]}
        current={`${area.name}, TX`}
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            {area.intro.map((p, i) => (
              <p key={i} className="mb-5 text-slate-700 leading-relaxed">
                {p}
              </p>
            ))}

            {area.sections?.map((section, i) => (
              <div key={i}>
                <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="mb-5 text-slate-700 leading-relaxed">
                    {renderInline(p)}
                  </p>
                ))}
              </div>
            ))}

            {/* The work we actually want, named in prose with the city in the
                anchor, above the grid. The grid below gives all eleven
                services the same weight and the same anchor text on all
                sixteen location pages, which tells a search engine nothing
                about which three matter. */}
            <h2 className="mt-10 text-xl font-bold text-[#0B1F3A]">
              What we are called for most in {area.name}
            </h2>
            <p className="mt-4 mb-5 text-slate-700 leading-relaxed">
              Two kinds of job make up most of our work here. The first is
              adding space:{" "}
              <Link
                href="/services/home-additions"
                className="text-[#0B1F3A] underline hover:no-underline"
              >
                room additions in {area.name}
              </Link>{" "}
              when there is yard to build on, and{" "}
              <Link
                href="/services/second-story-addition"
                className="text-[#0B1F3A] underline hover:no-underline"
              >
                second story additions
              </Link>{" "}
              when there is not, which turns the question into what the house
              below can carry.
            </p>
            <p className="mb-5 text-slate-700 leading-relaxed">
              The second is opening up a floor plan that was closed in.{" "}
              <Link
                href="/services/load-bearing-wall-removal"
                className="text-[#0B1F3A] underline hover:no-underline"
              >
                Load-bearing wall removal in {area.name}
              </Link>{" "}
              is an engineering job before it is a demolition one, because
              whatever the wall was holding up has to be carried by{" "}
              <Link
                href="/services/steel-beam-installation"
                className="text-[#0B1F3A] underline hover:no-underline"
              >
                the beam that replaces it
              </Link>
              , and that load still has to reach the foundation.
            </p>


            <h2 className="mt-10 text-xl font-bold text-[#0B1F3A]">
              {area.name} FAQ
            </h2>
            <div className="mt-4 space-y-5">
              {area.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-slate-800">{f.q}</h3>
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

            {PROJECTS.filter((p) => p.citySlug === area.slug).map((p) => (
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
                    Recent project in {area.name}
                  </div>
                  <div className="mt-2 font-semibold text-[#0B1F3A]">{p.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{p.summary}</div>
                </div>
              </Link>
            ))}

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
