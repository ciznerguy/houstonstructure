export const BUSINESS = {
  name: "Levi's Houston Structural Repairs, Engineering & Consulting",
  shortName: "Levi's Structural",
  category: "Structural Engineer",
  phone: "(713) 992-5454",
  phoneHref: "tel:+17139925454",
  rating: 5.0,
  reviewCount: 6,
  googleReviewsUrl: "https://www.google.com/search?q=Levi%27s+Houston+Structural+Repairs+Engineering+%26+Consulting",
  hours: [
    { day: "Monday", hours: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
    { day: "Friday", hours: "8:00 AM – 5:00 PM" },
    { day: "Saturday", hours: "By appointment" },
    { day: "Sunday", hours: "Closed" },
  ],
  addressLocality: "Houston",
  addressRegion: "TX",
  siteUrl: "https://houstonstructure.com",
  gtmId: "GTM-W5HHXPXT",
  leadEmails: ["levi@levihomes.com", "ciznerguy@gmail.com"],
  leadEmailSubject: "New lead from Houston structure",
} as const;

export type ServiceArea = {
  slug: string;
  name: string;
  blurb: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "houston",
    name: "Houston",
    blurb:
      "Houston's expansive clay soils shrink and swell with the seasons, making foundation movement and structural distress some of the most common calls we take across the city's inner-loop and suburban neighborhoods alike.",
  },
  {
    slug: "the-woodlands",
    name: "The Woodlands",
    blurb:
      "Mature tree root systems and shifting clay subgrade around The Woodlands can pull on slab foundations over time, especially in homes built in the area's earlier developments.",
  },
  {
    slug: "spring",
    name: "Spring",
    blurb:
      "Spring's mix of older ranch homes and newer construction means we see everything from settling pier-and-beam foundations to slab cracking tied to drainage issues.",
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    blurb:
      "Sugar Land's flat, clay-heavy terrain and high water table put steady stress on foundations, particularly after Houston's wet-dry seasonal swings.",
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    blurb:
      "Pasadena's proximity to the Ship Channel and industrial corridor brings unique soil and moisture conditions that require careful structural evaluation before repair.",
  },
  {
    slug: "league-city",
    name: "League City",
    blurb:
      "League City's coastal-adjacent soil conditions and higher humidity make moisture intrusion and foundation settlement a recurring concern for homeowners.",
  },
  {
    slug: "new-caney",
    name: "New Caney",
    blurb:
      "Newer growth in New Caney means many structural calls involve verifying builder-grade foundation work or addressing early settlement in recently built homes.",
  },
];

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string[];
  signs: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "foundation-repair",
    name: "Foundation Repair",
    shortName: "Foundation Repair",
    summary:
      "Engineer-directed foundation repair for slab, pier-and-beam, and post-tension foundations affected by Houston's shifting clay soils.",
    description: [
      "Houston sits on some of the most reactive clay soil in the country, and that soil moves with every wet and dry cycle. Over time that movement shows up as cracked slabs, doors that stick, and foundations that settle unevenly from one corner of the house to the other.",
      "We diagnose the cause before recommending a fix — soil movement, plumbing leaks, poor drainage, or tree root intrusion each call for a different repair strategy. Our evaluations are engineer-led, not sales-led, so the repair plan is sized to the actual problem instead of the most profitable one.",
      "Where repair is warranted, we specify the leveling method, pier spacing, and depth based on soil data for your lot, then inspect the completed work against that spec.",
    ],
    signs: [
      "Cracks in drywall near doors and windows",
      "Doors or windows that stick or won't latch",
      "Sloping or uneven floors",
      "Gaps between walls, ceilings, and floors",
      "Cracks in exterior brick veneer, especially stair-step patterns",
    ],
  },
  {
    slug: "structural-repairs",
    name: "Structural Repairs",
    shortName: "Structural Repairs",
    summary:
      "Repair and reinforcement for load-bearing walls, framing, beams, and other structural elements beyond the foundation.",
    description: [
      "Not every structural issue starts at the foundation. Beam deflection, undersized framing from past renovations, water-damaged joists, and altered load paths from a removed wall all fall under structural repair.",
      "We evaluate the load path from roof to foundation, identify where the original design has been compromised, and provide a repair or reinforcement plan that satisfies both the building code and the permitting office.",
      "This is common work after storm damage, DIY renovations that removed a load-bearing wall without support, or older homes where framing has degraded over decades.",
    ],
    signs: [
      "Sagging rooflines or ceilings",
      "Visible beam or joist deflection",
      "A previous renovation that removed a wall without engineering",
      "Water or termite damage to framing members",
      "Cracking at interior corners after storm events",
    ],
  },
  {
    slug: "inspections-reports",
    name: "Structural Inspections & Engineering Reports",
    shortName: "Inspections & Reports",
    summary:
      "Sealed structural inspection reports for real estate transactions, insurance claims, permitting, and pre-purchase due diligence.",
    description: [
      "A structural engineering report carries weight that a general home inspection doesn't — it's often required by insurers, lenders, and permitting offices before they'll act on a foundation or structural claim.",
      "We inspect the property, document findings with photos and measurements, and issue a sealed report stating our findings and, where needed, a scope of repair. Reports are written to be usable by insurance adjusters, real estate attorneys, and contractors alike.",
      "Buyers and sellers also use these reports during real estate transactions to settle disputes over foundation condition before closing.",
    ],
    signs: [
      "Buying or selling a home with foundation concerns",
      "An insurance claim requires engineer certification",
      "A permitting office is requesting a structural letter",
      "You want a second opinion on a repair company's diagnosis",
    ],
  },
  {
    slug: "consulting",
    name: "Structural Engineering Consulting",
    shortName: "Consulting",
    summary:
      "Design and forensic consulting for additions, renovations, new construction, and disputes involving structural work.",
    description: [
      "Not every project needs a full inspection — some need a licensed engineer's stamp on a design. We provide structural calculations and drawings for additions, beam removals, deck and patio covers, and other renovations that require permitting.",
      "We also take on forensic consulting: reviewing a contractor's completed repair, evaluating construction defect disputes, or providing an independent opinion when two parties disagree about the cause or extent of structural damage.",
    ],
    signs: [
      "Planning an addition or major renovation",
      "A contractor needs stamped calculations for a permit",
      "You're in a dispute over construction defects",
      "You need an independent review of someone else's repair plan",
    ],
  },
];
