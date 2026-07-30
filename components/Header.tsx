import Link from "next/link";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/business";
import { GUIDES } from "@/lib/guides";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Service Areas" },
  { href: "/guides", label: "Guides" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const DROPDOWNS: Record<string, { href: string; label: string }[]> = {
  "/services": SERVICES.map((s) => ({ href: `/services/${s.slug}`, label: s.shortName })),
  "/locations": SERVICE_AREAS.map((c) => ({ href: `/locations/${c.slug}`, label: `${c.name}, TX` })),
  "/guides": GUIDES.map((g) => ({ href: `/guides/${g.slug}`, label: g.title })),
};

export default function Header() {
  return (
    <header className="group/mobile sticky top-0 z-50 bg-[#0B1F3A] text-white">
      <input id="nav-toggle" type="checkbox" className="hidden" />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-[15px] font-bold tracking-tight sm:text-[17px]">
            Levi&rsquo;s Houston Structural
          </span>
          <span className="text-[10.5px] uppercase tracking-[0.16em] text-slate-300">
            Repairs · Engineering · Consulting
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => {
            const dropdown = DROPDOWNS[item.href];
            if (!dropdown) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div key={item.href} className="group/drop relative">
                <Link
                  href={item.href}
                  prefetch={false}
                  className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
                <div className="absolute left-0 top-full z-50 hidden w-64 pt-3 group-hover/drop:block">
                  <div className="max-h-[70vh] overflow-y-auto rounded-sm border border-slate-200 bg-white py-2 shadow-lg">
                    {dropdown.map((d) => (
                      <Link
                        key={d.href}
                        href={d.href}
                        prefetch={false}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A]"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 rounded-sm bg-[#EA580C] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#c94b0a] sm:inline-flex"
          >
            Call {BUSINESS.phone}
          </a>
          <label
            htmlFor="nav-toggle"
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border border-slate-600 md:hidden"
          >
            <span className="text-lg leading-none group-has-checked/mobile:hidden">☰</span>
            <span className="hidden text-lg leading-none group-has-checked/mobile:inline">✕</span>
          </label>
        </div>
      </div>

      <nav className="hidden flex-col gap-1 border-t border-slate-700 bg-[#0B1F3A] px-5 pb-4 pt-2 group-has-checked/mobile:flex md:hidden">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            prefetch={false}
            className="py-2 text-sm font-medium text-slate-200 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={BUSINESS.phoneHref}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-[#EA580C] px-4 py-2.5 text-sm font-semibold text-white"
        >
          Call {BUSINESS.phone}
        </a>
      </nav>
    </header>
  );
}
