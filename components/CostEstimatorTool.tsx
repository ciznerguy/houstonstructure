"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";
import { submitNetlifyForm } from "@/lib/netlify-forms";
import {
  calculateEstimate,
  ADDITION_TYPE_LABELS,
  FINISH_LEVEL_LABELS,
  type AdditionType,
  type FinishLevel,
  type YesNoUnsure,
  type EstimatorResult,
} from "@/lib/cost-estimator";

const FORM_NAME = "cost-estimator-lead";

export default function CostEstimatorTool() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [zip, setZip] = useState("");
  const [additionType, setAdditionType] = useState<AdditionType | "">("");
  const [sqft, setSqft] = useState("");

  const [hasBedroomLiving, setHasBedroomLiving] = useState(false);
  const [hasBathroom, setHasBathroom] = useState(false);
  const [hasKitchen, setHasKitchen] = useState(false);
  const [finishLevel, setFinishLevel] = useState<FinishLevel | "">("");
  const [hvac, setHvac] = useState<YesNoUnsure | "">("");
  const [electrical, setElectrical] = useState<YesNoUnsure | "">("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadStatus, setLeadStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [result, setResult] = useState<EstimatorResult | null>(null);

  const step1Valid = additionType !== "" && Number(sqft) > 0;
  const step2Valid = finishLevel !== "" && hvac !== "" && electrical !== "";

  function goToStep2() {
    if (!step1Valid) return;
    setStep(2);
  }

  function goToStep3() {
    if (!step2Valid) return;
    setResult(
      calculateEstimate({
        additionType: additionType as AdditionType,
        sqft: Number(sqft),
        hasBathroom,
        hasKitchen,
        finishLevel: finishLevel as FinishLevel,
        hvac: hvac as YesNoUnsure,
        electrical: electrical as YesNoUnsure,
      })
    );
    setStep(3);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!result) return;
    setLeadStatus("sending");

    const rooms = [
      hasBedroomLiving && "Bedroom/Living area",
      hasBathroom && "Bathroom",
      hasKitchen && "Kitchen",
    ]
      .filter(Boolean)
      .join(", ");

    try {
      await submitNetlifyForm(FORM_NAME, {
        name,
        email,
        phone,
        zip,
        "addition-type": ADDITION_TYPE_LABELS[additionType as AdditionType],
        "square-footage": sqft,
        "room-functions": rooms || "Not specified",
        "finish-level": FINISH_LEVEL_LABELS[finishLevel as FinishLevel],
        hvac: hvac,
        electrical: electrical,
        "estimate-low": `$${result.low.toLocaleString()}`,
        "estimate-high": `$${result.high.toLocaleString()}`,
        "cost-per-sqft": `$${result.costPerSqFt}`,
      });
      setLeadStatus("sent");
    } catch {
      setLeadStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      {/* Always rendered in the DOM so Netlify's static form scanner can detect every field */}
      <form
        name={FORM_NAME}
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <p hidden>
          <label>
            Don&rsquo;t fill this out: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="zip" value={zip} readOnly />
        <input type="hidden" name="addition-type" value={additionType} readOnly />
        <input type="hidden" name="square-footage" value={sqft} readOnly />
        <input type="hidden" name="room-functions" value="" readOnly />
        <input type="hidden" name="finish-level" value={finishLevel} readOnly />
        <input type="hidden" name="hvac" value={hvac} readOnly />
        <input type="hidden" name="electrical" value={electrical} readOnly />
        <input type="hidden" name="estimate-low" value="" readOnly />
        <input type="hidden" name="estimate-high" value="" readOnly />
        <input type="hidden" name="cost-per-sqft" value="" readOnly />
        <input type="hidden" name="name" value={name} readOnly />
        <input type="hidden" name="email" value={email} readOnly />
        <input type="hidden" name="phone" value={phone} readOnly />

        {/* Step indicator */}
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          <span className={step === 1 ? "text-[#EA580C]" : ""}>1. Scope</span>
          <span>—</span>
          <span className={step === 2 ? "text-[#EA580C]" : ""}>2. Details</span>
          <span>—</span>
          <span className={step === 3 ? "text-[#EA580C]" : ""}>3. Estimate</span>
        </div>

        {/* STEP 1 */}
        <div className={step === 1 ? "block" : "hidden"}>
          <h2 className="text-xl font-bold text-[#0B1F3A]">Tell us about the addition</h2>
          <div className="mt-6 grid gap-5">
            <div>
              <label className="text-sm font-medium text-slate-700">ZIP Code</label>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                inputMode="numeric"
                maxLength={5}
                placeholder="77002"
                className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
              />
              <p className="mt-1 text-xs text-slate-500">So we know where the project is when we follow up.</p>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Addition type</label>
              <div className="mt-2 grid gap-2">
                {(Object.keys(ADDITION_TYPE_LABELS) as AdditionType[]).map((key) => (
                  <label
                    key={key}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-sm border px-3 py-2.5 text-sm ${
                      additionType === key ? "border-[#0B1F3A] bg-slate-50" : "border-slate-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="addition-type-choice"
                      checked={additionType === key}
                      onChange={() => setAdditionType(key)}
                    />
                    {ADDITION_TYPE_LABELS[key]}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Approximate square footage</label>
              <input
                value={sqft}
                onChange={(e) => setSqft(e.target.value.replace(/[^0-9]/g, ""))}
                inputMode="numeric"
                placeholder="e.g. 400"
                className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
              />
            </div>

            <button
              type="button"
              onClick={goToStep2}
              disabled={!step1Valid}
              className="mt-2 rounded-sm bg-[#EA580C] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#c94b0a] disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        </div>

        {/* STEP 2 */}
        <div className={step === 2 ? "block" : "hidden"}>
          <h2 className="text-xl font-bold text-[#0B1F3A]">A few more details</h2>
          <div className="mt-6 grid gap-5">
            <div>
              <label className="text-sm font-medium text-slate-700">What rooms will be included?</label>
              <div className="mt-2 grid gap-2">
                <label className="flex items-center gap-2.5 rounded-sm border border-slate-200 px-3 py-2.5 text-sm">
                  <input type="checkbox" checked={hasBedroomLiving} onChange={(e) => setHasBedroomLiving(e.target.checked)} />
                  Bedroom / living area
                </label>
                <label className="flex items-center gap-2.5 rounded-sm border border-slate-200 px-3 py-2.5 text-sm">
                  <input type="checkbox" checked={hasBathroom} onChange={(e) => setHasBathroom(e.target.checked)} />
                  Full or half bathroom
                </label>
                <label className="flex items-center gap-2.5 rounded-sm border border-slate-200 px-3 py-2.5 text-sm">
                  <input type="checkbox" checked={hasKitchen} onChange={(e) => setHasKitchen(e.target.checked)} />
                  Kitchen / kitchenette
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Finish level</label>
              <div className="mt-2 grid gap-2">
                {(Object.keys(FINISH_LEVEL_LABELS) as FinishLevel[]).map((key) => (
                  <label
                    key={key}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-sm border px-3 py-2.5 text-sm ${
                      finishLevel === key ? "border-[#0B1F3A] bg-slate-50" : "border-slate-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="finish-level-choice"
                      checked={finishLevel === key}
                      onChange={() => setFinishLevel(key)}
                    />
                    {FINISH_LEVEL_LABELS[key]}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Needs new or extended HVAC?</label>
              <div className="mt-2 flex gap-2">
                {(["yes", "no", "unsure"] as YesNoUnsure[]).map((v) => (
                  <label
                    key={v}
                    className={`flex-1 cursor-pointer rounded-sm border px-3 py-2 text-center text-sm capitalize ${
                      hvac === v ? "border-[#0B1F3A] bg-slate-50" : "border-slate-200"
                    }`}
                  >
                    <input type="radio" name="hvac-choice" className="hidden" checked={hvac === v} onChange={() => setHvac(v)} />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Needs main electrical panel upgrade?</label>
              <div className="mt-2 flex gap-2">
                {(["yes", "no", "unsure"] as YesNoUnsure[]).map((v) => (
                  <label
                    key={v}
                    className={`flex-1 cursor-pointer rounded-sm border px-3 py-2 text-center text-sm capitalize ${
                      electrical === v ? "border-[#0B1F3A] bg-slate-50" : "border-slate-200"
                    }`}
                  >
                    <input type="radio" name="electrical-choice" className="hidden" checked={electrical === v} onChange={() => setElectrical(v)} />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="rounded-sm border border-slate-300 px-5 py-2.5 text-sm text-slate-600 hover:border-[#0B1F3A]"
              >
                Back
              </button>
              <button
                type="button"
                onClick={goToStep3}
                disabled={!step2Valid}
                className="rounded-sm bg-[#EA580C] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#c94b0a] disabled:opacity-40"
              >
                Calculate Estimate
              </button>
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className={step === 3 ? "block" : "hidden"}>
          {leadStatus === "sent" && result ? (
            <div>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E4ECD8]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#4A6B3A" strokeWidth="2.5" width={22} height={22}>
                  <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#0B1F3A]">Your preliminary estimate</h2>
              <p className="mt-3 text-3xl font-bold text-[#0B1F3A]">
                ${result.low.toLocaleString()} &ndash; ${result.high.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                About ${result.costPerSqFt} per square foot, adjusted for Houston-area costs.
              </p>

              <div className="mt-6 grid gap-2 rounded-sm border border-slate-200 p-4 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Shell &amp; finishes</span>
                  <span>${result.breakdown.shellAndFinish.toLocaleString()}</span>
                </div>
                {result.breakdown.wetSpace > 0 && (
                  <div className="flex justify-between">
                    <span>Plumbing (bathroom/kitchen)</span>
                    <span>${result.breakdown.wetSpace.toLocaleString()}</span>
                  </div>
                )}
                {result.breakdown.mechanicals > 0 && (
                  <div className="flex justify-between">
                    <span>HVAC &amp; electrical</span>
                    <span>${result.breakdown.mechanicals.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Permits &amp; engineering (soft costs)</span>
                  <span>${result.breakdown.softCosts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Contingency</span>
                  <span>${result.breakdown.contingency.toLocaleString()}</span>
                </div>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                This is a planning-stage ballpark, not a formal quote. Your exact cost depends on
                what an on-site structural evaluation finds. We&rsquo;ve sent a copy of these
                details to our team &mdash; we&rsquo;ll follow up shortly.
              </p>

              <a
                href={BUSINESS.phoneHref}
                className="mt-5 block rounded-sm bg-[#EA580C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c94b0a]"
              >
                Or call {BUSINESS.phone} now
              </a>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-[#0B1F3A]">Almost there</h2>
              <p className="mt-2 text-sm text-slate-600">
                We&rsquo;ve calculated a preliminary cost range for your project based on
                Houston-area building costs and what you selected. Enter your details to view it
                and get a copy by email.
              </p>

              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Full name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]"
                  />
                </div>

                {leadStatus === "error" && (
                  <div className="rounded-sm bg-[#F6E2D3] px-3 py-2 text-sm text-[#B8420F]">
                    Something went wrong sending that. Please call us instead at {BUSINESS.phone}.
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-sm border border-slate-300 px-5 py-2.5 text-sm text-slate-600 hover:border-[#0B1F3A]"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={leadStatus === "sending"}
                    className="flex-1 rounded-sm bg-[#EA580C] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#c94b0a] disabled:opacity-60"
                  >
                    {leadStatus === "sending" ? "Calculating…" : "Unlock My Estimate"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
