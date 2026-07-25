import Link from "next/link";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0B1F3A] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="text-[15px] font-bold text-white">{BUSINESS.name}</div>
          <p className="mt-3 text-sm leading-relaxed">
            Licensed structural engineering, foundation repair, and consulting
            serving {BUSINESS.addressLocality}, TX and the surrounding metro.
          </p>
          <div className="mt-4 flex items-center gap-1 text-amber-400">
            {"★★★★★"}
            <span className="ml-2 text-sm text-slate-300">
              {BUSINESS.rating.toFixed(1)} (Google reviews)
            </span>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="mt-4 inline-block text-lg font-semibold text-white hover:text-orange-400"
          >
            {BUSINESS.phone}
          </a>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Services
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Service Areas
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICE_AREAS.map((c) => (
              <li key={c.slug}>
                <Link href={`/locations/${c.slug}`} className="hover:text-white">
                  {c.name}, TX
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Hours
          </div>
          <ul className="mt-3 space-y-1.5 text-sm">
            {BUSINESS.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-slate-400">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700/60 px-5 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {BUSINESS.name}. Serving Houston, The Woodlands, Spring, Sugar
        Land, Pasadena, League City, and New Caney, TX.
      </div>
    </footer>
  );
}
