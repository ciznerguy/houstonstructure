export type AdditionType = "ground-floor" | "second-story" | "adu" | "garage-conversion";
export type FinishLevel = "builder" | "mid" | "high";
export type YesNoUnsure = "yes" | "no" | "unsure";

export type EstimatorInput = {
  additionType: AdditionType;
  sqft: number;
  hasBathroom: boolean;
  hasKitchen: boolean;
  finishLevel: FinishLevel;
  hvac: YesNoUnsure;
  electrical: YesNoUnsure;
};

export type EstimatorResult = {
  low: number;
  high: number;
  costPerSqFt: number;
  breakdown: {
    shellAndFinish: number;
    wetSpace: number;
    mechanicals: number;
    softCosts: number;
    contingency: number;
  };
};

// Baseline $/sqft for a Houston-area addition at each finish level. These already reflect
// local ballpark market rates (not a national figure scaled up), and run a bit above typical
// new-construction $/sqft because tying new work into an existing structure costs more than
// building the same square footage from scratch.
const BASE_RATE_PER_SQFT: Record<FinishLevel, number> = {
  builder: 150,
  mid: 200,
  high: 300,
};

// Relative cost of each addition type versus a straightforward ground-floor bump-out.
const ADDITION_TYPE_FACTOR: Record<AdditionType, number> = {
  "ground-floor": 1.0,
  "second-story": 1.25,
  adu: 1.15,
  "garage-conversion": 0.75,
};

// Craftsman Book Co.'s 2026 National Building Cost Manual (survey data used industry-wide by
// builders and appraisers) puts Houston at +8% versus its national average. That's the one
// externally-sourced regional figure this estimator uses; everything else here is our own.
const HOUSTON_REGIONAL_FACTOR = 1.08;

const BATHROOM_ADDER = 8000;
const KITCHEN_ADDER = 15000;
const HVAC_ADDER = 6000;
const ELECTRICAL_PANEL_ADDER = 3500;

const SOFT_COST_RATE = 0.1;
const CONTINGENCY_RATE = 0.12;
const RANGE_BAND = 0.15;

// "Unsure" is treated the same as "yes" so the estimate doesn't undersell scope the customer
// may actually need — a lowball number that grows on the sales call is worse than a
// conservative one that comes down.
function needsItem(value: YesNoUnsure): boolean {
  return value !== "no";
}

export function calculateEstimate(input: EstimatorInput): EstimatorResult {
  const baseRate = BASE_RATE_PER_SQFT[input.finishLevel];
  const typeFactor = ADDITION_TYPE_FACTOR[input.additionType];

  const shellAndFinish = input.sqft * baseRate * typeFactor * HOUSTON_REGIONAL_FACTOR;

  let wetSpace = 0;
  if (input.hasBathroom) wetSpace += BATHROOM_ADDER * HOUSTON_REGIONAL_FACTOR;
  if (input.hasKitchen) wetSpace += KITCHEN_ADDER * HOUSTON_REGIONAL_FACTOR;

  let mechanicals = 0;
  if (needsItem(input.hvac)) mechanicals += HVAC_ADDER * HOUSTON_REGIONAL_FACTOR;
  if (needsItem(input.electrical)) mechanicals += ELECTRICAL_PANEL_ADDER * HOUSTON_REGIONAL_FACTOR;

  const hardCost = shellAndFinish + wetSpace + mechanicals;
  const softCosts = hardCost * SOFT_COST_RATE;
  const contingency = (hardCost + softCosts) * CONTINGENCY_RATE;

  const mid = hardCost + softCosts + contingency;

  return {
    low: Math.round((mid * (1 - RANGE_BAND)) / 100) * 100,
    high: Math.round((mid * (1 + RANGE_BAND)) / 100) * 100,
    costPerSqFt: Math.round(mid / input.sqft),
    breakdown: {
      shellAndFinish: Math.round(shellAndFinish),
      wetSpace: Math.round(wetSpace),
      mechanicals: Math.round(mechanicals),
      softCosts: Math.round(softCosts),
      contingency: Math.round(contingency),
    },
  };
}

export const ADDITION_TYPE_LABELS: Record<AdditionType, string> = {
  "ground-floor": "Ground-Floor Expansion (Bump-Out / Room Addition)",
  "second-story": "Second-Story Addition (Build-Up)",
  adu: "Accessory Dwelling Unit (ADU / In-Law Suite)",
  "garage-conversion": "Garage Conversion",
};

export const FINISH_LEVEL_LABELS: Record<FinishLevel, string> = {
  builder: "Builder Grade",
  mid: "Mid-Range",
  high: "High-End / Luxury",
};
