import Link from "next/link";

export default function CostEstimatorCTA({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <Link
      href="/cost-estimator"
      className={`cta-shimmer inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-center text-base font-semibold text-white ${className}`}
    >
      {label}
    </Link>
  );
}
