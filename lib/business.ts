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
  licensedInsured: true,
} as const;

export type ServiceArea = {
  slug: string;
  name: string;
  blurb: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "spring-valley-village",
    name: "Spring Valley Village",
    blurb:
      "One of the six Memorial Villages, Spring Valley Village is built almost entirely on mid-century construction from the 1950s and 60s. We're regularly asked to evaluate original foundations before a renovation or addition proceeds, since decades-old slabs weren't engineered for today's larger footprints.",
  },
  {
    slug: "piney-point-village",
    name: "Piney Point Village",
    blurb:
      "Piney Point Village's oversized wooded lots come with oversized tree root systems, and root intrusion into slab foundations is one of the most common calls we take here. We evaluate whether a tree needs to come out, whether a root barrier will do the job, or whether the foundation itself needs repair.",
  },
  {
    slug: "bunker-hill-village",
    name: "Bunker Hill Village",
    blurb:
      "Bunker Hill Village has seen a steady wave of teardown-and-rebuild construction alongside its original mid-century homes. We provide structural evaluations both for homeowners renovating an existing house and for builders needing a foundation plan for new construction on a cleared lot.",
  },
  {
    slug: "hedwig-village",
    name: "Hedwig Village",
    blurb:
      "Hedwig Village's tight lot spacing means drainage from one property routinely affects the next. When we're called out here, tracing how water moves across neighboring lots is often as important as the foundation inspection itself.",
  },
  {
    slug: "hilshire-village",
    name: "Hilshire Village",
    blurb:
      "Hilshire Village still has many homes on their original 1950s-60s foundations. We see a lot of second-opinion requests here, from homeowners who already have one contractor's repair quote and want an independent engineering read before committing.",
  },
  {
    slug: "hunters-creek-village",
    name: "Hunters Creek Village",
    blurb:
      "Hunters Creek Village sits along the creek it's named for, and properties near the waterway tend to see more moisture-driven foundation movement than those set further back. We factor drainage and creek proximity into every evaluation here.",
  },
  {
    slug: "the-woodlands",
    name: "The Woodlands",
    blurb:
      "The Woodlands' mature pine forest canopy is part of its appeal, but those same root systems compete aggressively for soil moisture, pulling water away from foundations during dry stretches and contributing to uneven settlement.",
  },
  {
    slug: "katy",
    name: "Katy",
    blurb:
      "Katy's rapid growth means most of our calls here involve newer construction, not old age. We evaluate builder-grade foundation work, check compaction on graded lots, and catch settlement issues early before they become bigger structural problems.",
  },
  {
    slug: "cypress",
    name: "Cypress",
    blurb:
      "Cypress has grown as fast as almost anywhere in the Houston metro, and that pace means we're frequently called in to verify a builder's foundation work or investigate early settlement in homes that are only a few years old.",
  },
  {
    slug: "pearland",
    name: "Pearland",
    blurb:
      "Pearland's flat, low-lying terrain and high water table put steady pressure on foundations, especially after the heavy rain events common along this part of the Gulf Coast.",
  },
  {
    slug: "missouri-city",
    name: "Missouri City",
    blurb:
      "Missouri City spans a mix of established neighborhoods and newer master-planned developments, and the structural issues we see vary accordingly: older homes with decades of soil movement behind them, newer ones still settling into their first few years.",
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    blurb:
      "Sugar Land's high water table and clay-heavy soil make it one of the more foundation-sensitive suburbs in Fort Bend County, a pattern that shows up across both its established neighborhoods and its newer master-planned sections.",
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
      "We diagnose the cause before recommending a fix. Soil movement, plumbing leaks, poor drainage, and tree root intrusion each call for a different repair strategy. Our evaluations are engineer-led, not sales-led, so the repair plan is sized to the actual problem instead of the most profitable one.",
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
      "A structural engineering report carries weight that a general home inspection doesn't. It's often required by insurers, lenders, and permitting offices before they'll act on a foundation or structural claim.",
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
      "Not every project needs a full inspection. Some need a licensed engineer's stamp on a design. We provide structural calculations and drawings for additions, beam removals, deck and patio covers, and other renovations that require permitting.",
      "We also take on forensic consulting: reviewing a contractor's completed repair, evaluating construction defect disputes, or providing an independent opinion when two parties disagree about the cause or extent of structural damage.",
    ],
    signs: [
      "Planning an addition or major renovation",
      "A contractor needs stamped calculations for a permit",
      "You're in a dispute over construction defects",
      "You need an independent review of someone else's repair plan",
    ],
  },
  {
    slug: "load-bearing-wall-removal",
    name: "Load-Bearing Wall Assessment & Removal",
    shortName: "Load-Bearing Walls",
    summary:
      "Find out whether a wall is actually load-bearing, and get the engineer's letter and beam sizing you need before it comes out.",
    description: [
      "Opening up a floor plan almost always means asking one question first: is this wall holding anything up? Walls that run perpendicular to your floor joists, sit directly above a beam or foundation, or line up with a wall on the floor above are the ones most likely to be load-bearing, but guessing wrong means a sagging floor, cracked drywall, or worse, once the wall is gone.",
      "We inspect the framing, trace the load path from the roof down to the foundation, and tell you plainly whether the wall can come out and what it takes to do it safely. Where it can, we size the replacement beam or header, specify the temporary shoring your contractor needs during demo, and provide the stamped engineering letter your permitting office or contractor will ask for.",
      "This is typically the fastest, least expensive service we offer, since most load-bearing wall questions can be answered in a single visit, but it's also one of the most common ways a renovation goes wrong when it's skipped.",
    ],
    signs: [
      "Planning to open up a floor plan by removing an interior wall",
      "The wall runs perpendicular to your ceiling joists",
      "The wall lines up with a wall on the floor above or below",
      "Your contractor or permit office is asking for an engineer's letter",
      "A previous renovation already removed a wall without documentation",
    ],
  },
  {
    slug: "general-contracting",
    name: "General Contracting",
    shortName: "General Contracting",
    summary:
      "Licensed and insured general contracting from the same firm that engineers the fix, so the plan and the build stay in sync.",
    description: [
      "Most structural problems don't end at the engineering report. Once a repair or addition is designed, someone still has to build it, and that's where a lot of projects lose the thread between what the engineer specified and what actually gets built.",
      "We carry projects through from assessment to construction ourselves. Licensed and insured, we build to the calculations we write, which means no gap between the plan and the framing crew, and no second company to coordinate with.",
      "This applies to structural repairs, additions, and renovations where the engineering and the construction naturally belong under one roof.",
    ],
    signs: [
      "You want one company responsible for both the engineering and the build",
      "A previous project stalled because the engineer and contractor weren't coordinated",
      "You're comparing design-build against hiring separately",
      "Your project needs both a stamped plan and a construction crew",
    ],
  },
  {
    slug: "home-additions",
    name: "Home Additions & Second-Story Additions",
    shortName: "Home Additions",
    summary:
      "Engineering and licensed construction for room additions and second-story additions, sized to what your existing foundation and framing can actually support.",
    description: [
      "Adding a second story or a ground-floor addition changes the load on everything beneath it: the framing, the foundation, sometimes the soil itself. We start by engineering the load path from the new construction down to the foundation, then size the framing and footings to match.",
      "Because we're licensed and insured to build as well as design, we can carry the addition through construction ourselves, from the structural work through completion, rather than handing our own calculations to a separate contractor.",
      "This is also where a lot of older Houston homes run into trouble. A foundation built for a single-story house wasn't engineered for a second floor, and confirming it can take the new load, or reinforcing it so it can, is the first real step before any addition begins.",
    ],
    signs: [
      "Planning a second-story addition on a single-story home",
      "Adding a room or expanding your home's footprint",
      "Your existing foundation's original design is unknown or unclear",
      "You want one licensed team handling both engineering and construction",
    ],
  },
  {
    slug: "commercial-buildouts",
    name: "Commercial Buildouts & Tenant Improvements",
    shortName: "Commercial & TI",
    summary:
      "Structural engineering and licensed construction for tenant improvements and commercial buildouts across the Houston metro.",
    description: [
      "Commercial buildouts and tenant improvements almost always touch structure somewhere: a wall coming out to open up a retail space, new equipment loads on an existing slab, a mezzanine, or a change of occupancy that triggers a code review.",
      "We evaluate the existing structure, engineer whatever the buildout requires, and, being licensed and insured, can build the work ourselves rather than handing it off to a separate contractor.",
      "We work directly with landlords, property managers, and business owners who need a buildout completed on a lease timeline, with the structural engineering handled by the same firm doing the construction.",
    ],
    signs: [
      "Opening a retail, restaurant, or office space that needs structural changes",
      "A landlord or permitting office is requiring an engineer's review before buildout",
      "Adding equipment, mezzanines, or racking that adds load to an existing structure",
      "You want engineering and construction from a single licensed contractor",
    ],
  },
  {
    slug: "steel-beam-installation",
    name: "Steel Beam Installation",
    shortName: "Steel Beam Installation",
    summary:
      "Engineered and installed steel beams for load-bearing wall removals, additions, and structural upgrades.",
    description: [
      "Replacing a load-bearing wall with a steel beam, or upgrading an undersized wood beam, means getting two things right: the beam has to be sized correctly for the actual load, and it has to be installed with proper bearing and temporary support during the swap.",
      "We size the beam, engineer the connections and bearing points, and, licensed and insured, install it ourselves. That means the same firm that ran the calculations is also responsible for the work matching them.",
      "This is common alongside load-bearing wall removals, second-story additions, and any renovation that opens up a wider span than the existing framing allows.",
    ],
    signs: [
      "Removing a load-bearing wall and replacing it with a beam",
      "An existing beam is undersized or deflecting",
      "Widening an opening beyond what current framing supports",
      "You want the engineer and the installer to be the same company",
    ],
  },
];
