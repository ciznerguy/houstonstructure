import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call ${BUSINESS.phone} or request a callback from ${BUSINESS.name}, serving the Houston metro.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a structural engineer"
        subtitle="Call for the fastest response, or send a few details below and we'll get back to you the same business day."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <div className="rounded-sm border border-slate-200 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Call
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="mt-2 block text-2xl font-bold text-[#0B1F3A] hover:text-orange-700"
            >
              {BUSINESS.phone}
            </a>

            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Hours
            </div>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {BUSINESS.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-slate-500">{h.hours}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Service Area
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Houston, TX and the surrounding metro
            </p>
          </div>
        </div>

        <div className="rounded-sm border border-slate-200 p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Request a Callback
          </div>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
