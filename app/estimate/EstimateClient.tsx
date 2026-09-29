"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CostEstimatorTool from "@/components/CostEstimatorTool";
import { readLeadContact, type LeadContact } from "@/lib/lead-handoff";
import { BUSINESS } from "@/lib/business";

export default function EstimateClient() {
  // sessionStorage is only readable in the browser, so the first render is a
  // placeholder and the real state arrives on mount.
  const [checked, setChecked] = useState(false);
  const [contact, setContact] = useState<LeadContact | null>(null);

  useEffect(() => {
    setContact(readLeadContact());
    setChecked(true);
  }, []);

  if (!checked) {
    return <div className="mx-auto max-w-2xl px-5 py-20 text-sm text-slate-500">Loading…</div>;
  }

  return (
    <>
      {contact ? (
        <div className="mx-auto max-w-2xl px-5 pt-10">
          <div className="rounded-sm border border-[#E4ECD8] bg-[#F4F8EF] px-4 py-3 text-sm text-slate-700">
            Thanks {contact.name.split(" ")[0]}, your request is already with us and we&rsquo;ll be
            in touch. Answering the questions below gets you a cost range now and means we arrive
            already knowing the project.
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl px-5 pt-10">
          <div className="rounded-sm border border-slate-200 px-4 py-3 text-sm text-slate-600">
            Answer a few questions for a preliminary cost range. If you&rsquo;d rather talk it
            through, call{" "}
            <a href={BUSINESS.phoneHref} className="font-semibold text-[#0B1F3A] underline">
              {BUSINESS.phone}
            </a>{" "}
            or <Link href="/contact" className="font-semibold text-[#0B1F3A] underline">send us your details</Link>.
          </div>
        </div>
      )}

      <CostEstimatorTool
        knownContact={contact ?? undefined}
        formName={contact ? "project-details" : "cost-estimator-lead"}
      />
    </>
  );
}
