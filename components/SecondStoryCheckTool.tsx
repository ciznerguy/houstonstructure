"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";
import { submitNetlifyForm } from "@/lib/netlify-forms";
import { calculateEstimate, type EstimatorResult } from "@/lib/cost-estimator";

// "Can my house take a second story?" pre-check. It never answers yes or no:
// that takes an engineer on site. It lists what the engineer will look at in
// this particular house and why, from facts already published in the
// second-story cost guide, plus a cost range from the existing estimator.
const FORM_NAME = "second-story-check-lead";

type Choice = { value: string; label: string };

const YEAR: Choice[] = [
  { value: "pre1960", label: "Before 1960" },
  { value: "1960-1979", label: "1960 to 1979" },
  { value: "1980-1999", label: "1980 to 1999" },
  { value: "2000+", label: "2000 or later" },
  { value: "unsure", label: "Not sure" },
];
const FOUNDATION: Choice[] = [
  { value: "slab", label: "Concrete slab" },
  { value: "pier", label: "Pier and beam (crawl space under the floor)" },
  { value: "unsure", label: "Not sure" },
];
const SIGNS: Choice[] = [
  { value: "cracks", label: "Cracks in brick, drywall or tile" },
  { value: "doors", label: "Doors or windows that stick" },
  { value: "floors", label: "Floors that slope or feel uneven" },
];
const REPAIR: Choice[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unsure", label: "Not sure" },
];
const RULES: Choice[] = [
  { value: "hoa", label: "HOA or deed restrictions" },
  { value: "historic", label: "City historic district" },
  { value: "none", label: "Neither" },
  { value: "unsure", label: "Not sure" },
];
const UPSTAIRS: Choice[] = [
  { value: "rooms", label: "Bedrooms or living space only" },
  { value: "bath", label: "Rooms with a bathroom" },
  { value: "kitchenette", label: "Rooms with a bathroom and a kitchenette" },
];

type Finding = { title: string; text: string };

function buildFindings(a: {
  year: string;
  foundation: string;
  signs: string[];
  repair: string;
  rules: string;
  upstairs: string;
}): Finding[] {
  const f: Finding[] = [];

  if (a.year === "pre1960" || a.year === "1960-1979") {
    f.push({
      title: "The age of the foundation",
      text: "Houses from this period had their foundations sized for one roof, and they have spent decades on Houston clay that swells and shrinks. The engineer measures what the foundation carries today before anyone draws an upstairs.",
    });
  } else if (a.year === "unsure") {
    f.push({
      title: "The age of the house",
      text: "The county appraisal district lists the year your house was built. Older foundations were sized for one roof, so the age tells the engineer where to start.",
    });
  }

  if (a.foundation === "pier") {
    f.push({
      title: "Pier and beam foundation",
      text: "The new load reaches the ground through the piers and beams under the floor, so the engineer checks their size and spacing. If more support is needed, it means new piers and beams under the house rather than reinforcing a slab.",
    });
  } else if (a.foundation === "unsure") {
    f.push({
      title: "The type of foundation",
      text: "If you can see a crawl space or vents along the bottom of the outside walls, the house is likely pier and beam. Either way, it is the first thing checked at the visit, because it decides how the new load gets to the ground.",
    });
  }

  if (a.signs.length > 0) {
    f.push({
      title: "Signs that the foundation has moved",
      text: "Cracks, sticking doors and sloping floors are common in Houston, because the clay under most houses moves with the seasons. The engineer measures floor levels to tell ordinary seasonal movement from movement that has to be fixed before the house carries a second floor.",
    });
  }

  if (a.repair === "yes") {
    f.push({
      title: "The earlier foundation repair",
      text: "Find the repair paperwork if you have it. The engineer will want to see where the piers were placed and what load they were designed for, since a repair meant to level a one-story house was not necessarily sized for a second floor.",
    });
  } else if (a.repair === "unsure") {
    f.push({
      title: "Any earlier foundation repair",
      text: "Repair piers sometimes leave marks along the outside of the slab, and a seller's disclosure from when you bought the house may mention them. If the house was repaired, the engineer will want to know where and for what load.",
    });
  }

  if (a.rules === "hoa" || a.rules === "unsure") {
    f.push({
      title: "Deed restrictions and HOA review",
      text: "Some Houston deed restrictions limit building height or the number of stories, and the city enforces them. HOA architectural review is a separate approval from the city permit, so the drawings should be prepared to work for both. Read your restrictions before paying for plans.",
    });
  }
  if (a.rules === "historic") {
    f.push({
      title: "Historic district approval",
      text: "In a city historic district, an addition that changes how the house looks from the street needs the historical commission's approval before the permit. A second story is usually set back toward the rear so the original front still reads as it did.",
    });
  }

  if (a.upstairs !== "rooms") {
    f.push({
      title: "Plumbing upstairs",
      text: "A bathroom or kitchenette on the second floor means new supply and drain lines routed up through the existing house. This is usually the single biggest add-on cost, and where the lines can run shapes the floor plan.",
    });
  }

  f.push({
    title: "Air conditioning and the electrical panel",
    text: "Most single-story Houston homes were not built with enough air conditioning capacity or panel room for a second floor, so these usually need upgrading, not just extending. The range below already counts them in.",
  });

  return f;
}

function OptionList({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: Choice[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mt-2 grid gap-2">
      {options.map((o) => (
        <label
          key={o.value}
          className={`flex cursor-pointer items-center gap-2.5 rounded-sm border px-3 py-2.5 text-sm ${
            value === o.value ? "border-[#0B1F3A] bg-slate-50" : "border-slate-200"
          }`}
        >
          <input type="radio" name={name} checked={value === o.value} onChange={() => onChange(o.value)} />
          {o.label}
        </label>
      ))}
    </div>
  );
}

const labelOf = (list: Choice[], v: string) => list.find((o) => o.value === v)?.label ?? v;

export default function SecondStoryCheckTool() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [year, setYear] = useState("");
  const [foundation, setFoundation] = useState("");
  const [signs, setSigns] = useState<string[]>([]);
  const [noSigns, setNoSigns] = useState(false);
  const [repair, setRepair] = useState("");
  const [rules, setRules] = useState("");
  const [upstairs, setUpstairs] = useState("");
  const [sqft, setSqft] = useState("");
  const [zip, setZip] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadStatus, setLeadStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [findings, setFindings] = useState<Finding[]>([]);
  const [estimate, setEstimate] = useState<EstimatorResult | null>(null);

  const step1Valid = year !== "" && foundation !== "" && (signs.length > 0 || noSigns) && repair !== "";
  const step2Valid = rules !== "" && upstairs !== "" && Number(sqft) > 0;

  function toggleSign(v: string) {
    setNoSigns(false);
    setSigns((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));
  }

  function goToResult() {
    if (!step2Valid) return;
    setFindings(buildFindings({ year, foundation, signs, repair, rules, upstairs }));
    setEstimate(
      calculateEstimate({
        additionType: "second-story",
        sqft: Number(sqft),
        hasBathroom: upstairs !== "rooms",
        hasKitchen: upstairs === "kitchenette",
        finishLevel: "mid",
        hvac: "yes",
        electrical: "unsure",
      })
    );
    setStep(3);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!estimate) return;
    // Review link (?review): shows the result screen without sending a lead,
    // so Levi can see the whole tool without emailing himself a fake lead.
    if (new URLSearchParams(window.location.search).has("review")) {
      setLeadStatus("sent");
      return;
    }
    setLeadStatus("sending");
    try {
      await submitNetlifyForm(FORM_NAME, {
        name,
        email,
        phone,
        zip,
        "year-built": labelOf(YEAR, year),
        foundation: labelOf(FOUNDATION, foundation),
        "movement-signs": signs.length ? signs.map((s) => labelOf(SIGNS, s)).join(", ") : "None",
        "past-foundation-repair": labelOf(REPAIR, repair),
        "restrictions": labelOf(RULES, rules),
        upstairs: labelOf(UPSTAIRS, upstairs),
        "square-footage": sqft,
        "items-to-check": findings.map((f) => f.title).join("; "),
        "estimate-low": `$${estimate.low.toLocaleString()}`,
        "estimate-high": `$${estimate.high.toLocaleString()}`,
      });
      setLeadStatus("sent");
    } catch {
      setLeadStatus("error");
    }
  }

  const input = "mt-1 w-full rounded-sm border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#0B1F3A]";
  const primary =
    "rounded-sm bg-[#EA580C] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#c94b0a] disabled:opacity-40";
  const secondary = "rounded-sm border border-slate-300 px-5 py-2.5 text-sm text-slate-600 hover:border-[#0B1F3A]";

  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      {/* Always rendered so Netlify's static form scanner can detect every field */}
      <form name={FORM_NAME} data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <p hidden>
          <label>
            Don&rsquo;t fill this out: <input name="bot-field" />
          </label>
        </p>
        {[
          "zip", "year-built", "foundation", "movement-signs", "past-foundation-repair", "restrictions",
          "upstairs", "square-footage", "items-to-check", "estimate-low", "estimate-high", "name", "email", "phone",
        ].map((n) => (
          <input key={n} type="hidden" name={n} value="" readOnly />
        ))}

        <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          <span className={step === 1 ? "text-[#EA580C]" : ""}>1. Your house</span>
          <span>/</span>
          <span className={step === 2 ? "text-[#EA580C]" : ""}>2. The second story</span>
          <span>/</span>
          <span className={step === 3 ? "text-[#EA580C]" : ""}>3. Your check</span>
        </div>

        {/* STEP 1 */}
        <div className={step === 1 ? "block" : "hidden"}>
          <h2 className="text-xl font-bold text-[#0B1F3A]">About the house you have now</h2>
          <div className="mt-6 grid gap-6">
            <div>
              <label className="text-sm font-medium text-slate-700">When was the house built?</label>
              <OptionList name="year-choice" options={YEAR} value={year} onChange={setYear} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">What kind of foundation does it sit on?</label>
              <OptionList name="foundation-choice" options={FOUNDATION} value={foundation} onChange={setFoundation} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Have you noticed any of these? Pick all that apply.</label>
              <div className="mt-2 grid gap-2">
                {SIGNS.map((o) => (
                  <label
                    key={o.value}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-sm border px-3 py-2.5 text-sm ${
                      signs.includes(o.value) ? "border-[#0B1F3A] bg-slate-50" : "border-slate-200"
                    }`}
                  >
                    <input type="checkbox" checked={signs.includes(o.value)} onChange={() => toggleSign(o.value)} />
                    {o.label}
                  </label>
                ))}
                <label
                  className={`flex cursor-pointer items-center gap-2.5 rounded-sm border px-3 py-2.5 text-sm ${
                    noSigns ? "border-[#0B1F3A] bg-slate-50" : "border-slate-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={noSigns}
                    onChange={(e) => {
                      setNoSigns(e.target.checked);
                      if (e.target.checked) setSigns([]);
                    }}
                  />
                  None of these
                </label>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Has the foundation ever been repaired?</label>
              <OptionList name="repair-choice" options={REPAIR} value={repair} onChange={setRepair} />
            </div>
            <button type="button" onClick={() => step1Valid && setStep(2)} disabled={!step1Valid} className={primary}>
              Continue
            </button>
          </div>
        </div>

        {/* STEP 2 */}
        <div className={step === 2 ? "block" : "hidden"}>
          <h2 className="text-xl font-bold text-[#0B1F3A]">About the second story you have in mind</h2>
          <div className="mt-6 grid gap-6">
            <div>
              <label className="text-sm font-medium text-slate-700">Is the house under any of these?</label>
              <OptionList name="rules-choice" options={RULES} value={rules} onChange={setRules} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">What would go upstairs?</label>
              <OptionList name="upstairs-choice" options={UPSTAIRS} value={upstairs} onChange={setUpstairs} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Roughly how many square feet upstairs?</label>
              <input
                value={sqft}
                onChange={(e) => setSqft(e.target.value.replace(/[^0-9]/g, ""))}
                inputMode="numeric"
                placeholder="e.g. 800"
                className={input}
              />
              <p className="mt-1 text-xs text-slate-500">A guess is fine. Two bedrooms and a bathroom is often 700 to 900.</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">ZIP code</label>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, "").slice(0, 5))}
                inputMode="numeric"
                placeholder="77002"
                className={input}
              />
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className={secondary}>
                Back
              </button>
              <button type="button" onClick={goToResult} disabled={!step2Valid} className={primary}>
                See my check
              </button>
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className={step === 3 ? "block" : "hidden"}>
          {leadStatus === "sent" && estimate ? (
            <div>
              <h2 className="text-xl font-bold text-[#0B1F3A]">What the engineer will check at your house</h2>
              <p className="mt-2 text-sm text-slate-600">
                Nothing here is a yes or a no. Whether a house can carry a second floor is decided on site, by
                measuring the footings, the bearing walls and the framing. This is the list we would start from.
              </p>
              <ol className="mt-6 grid gap-4">
                {findings.map((f, i) => (
                  <li key={f.title} className="rounded-sm border border-slate-200 p-4">
                    <div className="text-sm font-semibold text-[#0B1F3A]">
                      {i + 1}. {f.title}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{f.text}</p>
                  </li>
                ))}
              </ol>

              <h3 className="mt-8 text-lg font-bold text-[#0B1F3A]">A planning range for the build</h3>
              <p className="mt-2 text-3xl font-bold text-[#0B1F3A]">
                ${estimate.low.toLocaleString()} &ndash; ${estimate.high.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                About {sqft} square feet at a mid-range finish, with air conditioning, the panel, permits, engineering
                and a contingency included. If the foundation needs reinforcement, that is priced after the visit.
              </p>

              <p className="mt-6 text-sm text-slate-700">
                We&rsquo;ve sent a copy to our team and will call you to set up the visit.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-4 block rounded-sm bg-[#EA580C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c94b0a]"
              >
                Or call {BUSINESS.phone} now
              </a>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-[#0B1F3A]">
                We found {findings.length} things an engineer will check at your house
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Enter your details to see each one, why it matters for a second story, and a planning cost range.
                We&rsquo;ll send you a copy by email.
              </p>
              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Full name</label>
                  <input required value={name} onChange={(e) => setName(e.target.value)} className={input} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit US phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))}
                    className={input}
                  />
                </div>
                {leadStatus === "error" && (
                  <div className="rounded-sm bg-[#F6E2D3] px-3 py-2 text-sm text-[#B8420F]">
                    Something went wrong sending that. Please call us instead at {BUSINESS.phone}.
                  </div>
                )}
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className={secondary}>
                    Back
                  </button>
                  <button type="submit" disabled={leadStatus === "sending"} className={`flex-1 ${primary}`}>
                    {leadStatus === "sending" ? "Sending…" : "Show my check"}
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
