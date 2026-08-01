import Link from "next/link";

export default function FloatingCostEstimatorButton() {
  return (
    <Link
      href="/cost-estimator"
      prefetch={false}
      className="fixed right-4 top-[84px] z-40 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#132b52]"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={16} height={16}>
        <rect x="4" y="3" width="16" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="7" x2="16" y2="7" strokeLinecap="round" />
        <line x1="8" y1="12" x2="9" y2="12" strokeLinecap="round" />
        <line x1="12" y1="12" x2="13" y2="12" strokeLinecap="round" />
        <line x1="16" y1="12" x2="17" y2="12" strokeLinecap="round" />
        <line x1="8" y1="16" x2="9" y2="16" strokeLinecap="round" />
        <line x1="12" y1="16" x2="13" y2="16" strokeLinecap="round" />
        <line x1="16" y1="16" x2="17" y2="16" strokeLinecap="round" />
      </svg>
      Get Cost Estimate
    </Link>
  );
}
