import Link from "next/link";

export default function CostEstimatorCTA({
  label,
  href = "/cost-estimator",
  className = "",
}: {
  label: string;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`cta-shimmer inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-center text-base font-semibold text-white ${className}`}
    >
      {label}
    </Link>
  );
}
