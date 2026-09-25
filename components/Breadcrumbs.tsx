import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export type Crumb = { name: string; href: string };

/**
 * Visible breadcrumb trail plus matching BreadcrumbList JSON-LD. Google wants
 * the markup to reflect something on the page, so this renders both rather
 * than emitting schema on its own. Pass every step except the current page;
 * `current` is rendered as plain text at the end.
 */
export default function Breadcrumbs({ items, current }: { items: Crumb[]; current: string }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ...items.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${BUSINESS.siteUrl}${c.href}`,
      })),
      { "@type": "ListItem", position: items.length + 1, name: current },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-5 pt-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
          {items.map((c) => (
            <li key={c.href} className="flex items-center gap-2">
              <Link href={c.href} className="hover:text-[#0B1F3A] hover:underline">
                {c.name}
              </Link>
              <span aria-hidden className="text-slate-300">
                /
              </span>
            </li>
          ))}
          <li className="text-slate-700">{current}</li>
        </ol>
      </nav>
    </>
  );
}
