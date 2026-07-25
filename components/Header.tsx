"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Service Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B1F3A] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="text-[15px] font-bold tracking-tight sm:text-[17px]">
            Levi&rsquo;s Houston Structural
          </span>
          <span className="text-[10.5px] uppercase tracking-[0.16em] text-slate-300">
            Repairs · Engineering · Consulting
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 rounded-sm bg-[#EA580C] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#c94b0a] sm:inline-flex"
          >
            Call {BUSINESS.phone}
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-slate-600 md:hidden"
          >
            <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-700 bg-[#0B1F3A] px-5 pb-4 pt-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
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
      )}
    </header>
  );
}
