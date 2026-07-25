import { BUSINESS } from "@/lib/business";

export default function CTASection({
  heading = "Get a straight answer from a structural engineer — not a sales pitch.",
  subheading = "Call now or send a few details and we'll get back to you the same business day.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold sm:text-3xl">{heading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">{subheading}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="rounded-sm bg-[#EA580C] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c94b0a]"
          >
            Call {BUSINESS.phone}
          </a>
          <a
            href="/contact"
            className="rounded-sm border border-slate-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            Request a Callback
          </a>
        </div>
      </div>
    </section>
  );
}
