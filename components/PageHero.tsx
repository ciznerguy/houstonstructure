export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-14">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-2 max-w-3xl text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-slate-600">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
