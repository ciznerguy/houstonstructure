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
  geo: { latitude: 29.7604, longitude: -95.3698 },
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
  intro: string[];
  sections?: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "spring-valley-village",
    name: "Spring Valley Village",
    blurb:
      "One of the six Memorial Villages, Spring Valley Village is built almost entirely on mid-century construction from the 1950s and 60s. We're regularly asked to evaluate original foundations before a renovation or addition proceeds, since decades-old slabs weren't engineered for today's larger footprints.",
    intro: [
      "If your Spring Valley Village home went up anywhere from the 1950s through the 1970s, which covers most of the village, there's a decent chance nobody has looked closely at the foundation since it was poured. That's not automatically a problem. It's just a gap in information worth closing before you take on a renovation that adds weight or opens up the floor plan.",
      "Most of our calls here come from one of two places: someone planning an addition who wants to know what the existing foundation can actually carry, or a buyer who got a movement flag on the inspection report and wants an independent read before closing. Both are the same underlying question asked at different points in a home's life.",
    ],
    faqs: [
      {
        q: "Do older Spring Valley Village homes need a different foundation inspection than new construction?",
        a: "Not a different process, but a different set of questions. On a house this age we're also checking whether decades of soil movement have already been patched over or simply never addressed, not just what's happening now.",
      },
      {
        q: "Can a foundation built in the 1960s support a modern second-story addition?",
        a: "Sometimes, but it needs to be checked, not assumed. Original construction here was engineered for a single story, and we size any reinforcement to the load the addition will actually add.",
      },
    ],
  },
  {
    slug: "piney-point-village",
    name: "Piney Point Village",
    blurb:
      "Piney Point Village's oversized wooded lots come with oversized tree root systems, and root intrusion into slab foundations is one of the most common calls we take here. We evaluate whether a tree needs to come out, whether a root barrier will do the job, or whether the foundation itself needs repair.",
    intro: [
      "The same mature tree canopy that makes Piney Point Village one of the most desirable addresses in Houston is also the reason we get called out here so often. Large, established root systems don't stay put. They go looking for water, and a slab foundation sitting between a big oak and its water source is directly in the way.",
      "The homeowners we talk to here are usually torn between two instincts: protect a tree that took forty years to grow, or protect a foundation that's showing new cracks every season. We don't default to either answer. We look at root proximity, soil moisture patterns, and the actual damage before recommending whether a root barrier, selective pruning, or foundation repair is the right call.",
    ],
    faqs: [
      {
        q: "Will removing a tree near my foundation stop the cracking?",
        a: "Sometimes, but not always, and removing a large tree changes soil moisture patterns on its own, which can cause a different kind of movement. We evaluate the whole picture before recommending removal.",
      },
      {
        q: "Is a root barrier enough, or does the foundation need repair too?",
        a: "Depends on how much damage has already happened. A root barrier stops future intrusion, it doesn't undo settlement that's already occurred, so we check both separately.",
      },
    ],
  },
  {
    slug: "bunker-hill-village",
    name: "Bunker Hill Village",
    blurb:
      "Bunker Hill Village has seen a steady wave of teardown-and-rebuild construction alongside its original mid-century homes. We provide structural evaluations both for homeowners renovating an existing house and for builders needing a foundation plan for new construction on a cleared lot.",
    intro: [
      "Drive through Bunker Hill Village and you'll see two very different eras of construction sitting on the same street: original 1950s and 60s homes next to recent teardown-rebuilds on the same lots. That mix means the structural questions we get here split about evenly between two very different jobs.",
      "For the older homes, it's usually about whether the original foundation can take a renovation or addition. For the new builds, it's about verifying the builder's foundation design matches the actual soil conditions on that specific lot, since a generic plan doesn't always account for what's really underneath a given piece of Bunker Hill ground.",
    ],
    faqs: [
      {
        q: "Do I need an engineer if I'm tearing down and building new in Bunker Hill Village?",
        a: "Your builder will have their own engineer for the design, but an independent review before the pour is common here, especially when the lot has a history of drainage issues or sits near an older, larger tree line.",
      },
      {
        q: "What's different about renovating an older home here versus new construction?",
        a: "The older homes need an assessment of what's already there and how it's held up. New construction is about verifying the design fits this specific lot, not a standard plan.",
      },
    ],
  },
  {
    slug: "hedwig-village",
    name: "Hedwig Village",
    blurb:
      "Hedwig Village's tight lot spacing means drainage from one property routinely affects the next. When we're called out here, tracing how water moves across neighboring lots is often as important as the foundation inspection itself.",
    intro: [
      "Hedwig Village packs its homes closer together than most of its Memorial neighbors, and that changes how water behaves. Runoff from a neighbor's regrade, a new driveway, or even a fence line can quietly redirect water toward your foundation instead of away from it, and it's rarely obvious until the damage shows up.",
      "That's why a foundation call in Hedwig Village usually turns into a small drainage investigation too. We walk the property line, not just the house, because the fix is sometimes a grading change or a French drain rather than anything structural at all.",
    ],
    faqs: [
      {
        q: "My neighbor's yard drains toward my house. Is that their problem or mine?",
        a: "Legally that's a conversation for a property attorney, but from an engineering standpoint we can tell you exactly where the water is coming from and what it would take to redirect it, which usually helps resolve it faster than a dispute would.",
      },
      {
        q: "How do I know if my foundation issue is drainage-related or something more serious?",
        a: "Drainage-related movement tends to track with the seasons and rain events. We look at the pattern over time, not just a single crack, to tell the difference.",
      },
    ],
  },
  {
    slug: "hilshire-village",
    name: "Hilshire Village",
    blurb:
      "Hilshire Village still has many homes on their original 1950s-60s foundations. We see a lot of second-opinion requests here, from homeowners who already have one contractor's repair quote and want an independent engineering read before committing.",
    intro: [
      "Hilshire Village is small, and word travels fast here, which might explain why we get so many second-opinion calls from this particular village. A homeowner gets a repair quote from a foundation company, talks to a neighbor who had a similar issue, and decides it's worth a second, independent set of eyes before signing anything.",
      "We're not in the business of selling repairs, so an independent evaluation here often comes back with a smaller scope than the original quote, sometimes none at all. Other times it confirms the diagnosis and gives the homeowner confidence to move forward. Either way, it's a cheap step relative to the size of the decision.",
    ],
    faqs: [
      {
        q: "I already have a foundation repair quote. Why would I pay for another inspection?",
        a: "Because the company that wrote the quote profits from the repair, and we don't. An independent evaluation either confirms their diagnosis or catches a mismatch between the problem and the proposed fix, before you've spent the money.",
      },
      {
        q: "How much does a second opinion usually cost compared to a repair?",
        a: "A single-visit evaluation is a small fraction of most repair costs, which is exactly why it's worth doing before committing to a five-figure fix.",
      },
    ],
  },
  {
    slug: "hunters-creek-village",
    name: "Hunters Creek Village",
    blurb:
      "Hunters Creek Village sits along the creek it's named for, and properties near the waterway tend to see more moisture-driven foundation movement than those set further back. We factor drainage and creek proximity into every evaluation here.",
    intro: [
      "Hunters Creek Village earned its name honestly. Properties that back up to the creek or sit within its floodplain deal with a moisture profile that's genuinely different from a lot three streets over, and that shows up in how their foundations move through the year.",
      "We don't treat every Hunters Creek Village property the same way for this reason. Distance from the water, elevation relative to the creek bed, and how the lot was graded when the home was built all change what we're looking for and what a reasonable fix looks like.",
    ],
    faqs: [
      {
        q: "Does living near the creek automatically mean more foundation problems?",
        a: "It means a different risk profile, not automatically more problems. Elevation and grading relative to the creek matter more than raw distance, which is why we check both on-site.",
      },
      {
        q: "Should I be more worried about foundation issues after a heavy rain season?",
        a: "It's worth a look if you're seeing new cracking or doors sticking after a wet stretch, since that timing is a real signal here, more so than in areas further from the water.",
      },
    ],
  },
  {
    slug: "the-woodlands",
    name: "The Woodlands",
    blurb:
      "The Woodlands' mature pine forest canopy is part of its appeal, but those same root systems compete aggressively for soil moisture, pulling water away from foundations during dry stretches and contributing to uneven settlement.",
    intro: [
      "The pine forest that gives The Woodlands its name is doing more underground than most homeowners realize. Mature pine root systems pull moisture from a wide radius, and during a dry Houston summer, that competition for water can leave soil directly under a foundation drier and more prone to shrinkage than soil just a little further from the tree line.",
      "This plays out differently depending on which section of The Woodlands you're in. Older growth near the original village centers has decades of established root systems to account for, while newer sections on the community's edges are still settling into their landscaping. We adjust what we're looking for accordingly.",
    ],
    faqs: [
      {
        q: "Is foundation movement in The Woodlands different from the rest of Houston?",
        a: "The underlying clay soil is similar, but the tree cover adds a moisture-competition factor that's more pronounced here than in less wooded parts of the metro.",
      },
      {
        q: "Should I water near my foundation during dry months?",
        a: "Often yes, a consistent watering routine near the foundation can offset some of what the tree roots are pulling away, but the right approach depends on your specific lot and landscaping.",
      },
    ],
  },
  {
    slug: "katy",
    name: "Katy",
    blurb:
      "Katy's rapid growth means most of our calls here involve newer construction, not old age. We evaluate builder-grade foundation work, check compaction on graded lots, and catch settlement issues early before they become bigger structural problems.",
    intro: [
      "Katy has grown so fast over the past two decades that most of the structural work we do here has nothing to do with old age. It's about newer construction: homes three, five, ten years old that are still settling, sometimes normally and sometimes because the lot grading or compaction wasn't quite right before the slab went down.",
      "Because so much of Katy was built out in phases across large master-planned communities, we also see a fair number of cases where a specific section or phase has more reported issues than its neighbors, usually tied to how that section's soil was prepped during development. Knowing which phase a home is in tells us a lot before we even arrive.",
    ],
    faqs: [
      {
        q: "My Katy home is only a few years old. Why would it already have foundation issues?",
        a: "New construction settling is normal to a point, but if compaction wasn't done correctly before the slab was poured, movement can show up earlier and more unevenly than it should.",
      },
      {
        q: "Is this a builder warranty issue or something I need to pay for myself?",
        a: "That depends on your builder's warranty terms and how long ago you closed. We can document the condition and cause, which you can then take to the builder if the timeline supports a claim.",
      },
    ],
  },
  {
    slug: "cypress",
    name: "Cypress",
    blurb:
      "Cypress has grown as fast as almost anywhere in the Houston metro, and that pace means we're frequently called in to verify a builder's foundation work or investigate early settlement in homes that are only a few years old.",
    intro: [
      "Cypress has been one of the fastest-growing parts of the Houston metro for years now, and that kind of pace puts pressure on every part of the construction process, foundations included. Most of what we see here is new-construction related: verifying a builder's work before or after closing, or investigating settlement in a home that's barely old enough to need its first major repair.",
      "A lot of our Cypress clients are buyers in the middle of a purchase, not homeowners already living with a problem. A pre-purchase structural evaluation here is often less about finding damage and more about confirming there isn't any before signing on a newly built or recently resold home.",
    ],
    faqs: [
      {
        q: "Should I get a structural evaluation before buying a newly built home in Cypress?",
        a: "It's a reasonable step, especially with how much new construction has gone up here recently. A pre-purchase evaluation is inexpensive relative to the size of the purchase, and it either confirms things are fine or gives you leverage before closing.",
      },
      {
        q: "How do I know if my new Cypress home is settling normally or has a real problem?",
        a: "Minor settling in the first couple of years is common. What we look for is whether it's even across the home or concentrated in one area, since concentrated movement is the bigger flag.",
      },
    ],
  },
  {
    slug: "pearland",
    name: "Pearland",
    blurb:
      "Pearland's flat, low-lying terrain and high water table put steady pressure on foundations, especially after the heavy rain events common along this part of the Gulf Coast.",
    intro: [
      "Pearland sits low and flat, close enough to the Gulf Coast that its water table stays high most of the year. That combination means water has fewer places to go after a heavy rain, and a lot of the foundation movement we see here traces back to standing water sitting against a slab longer than it should.",
      "Drainage is the first thing we check on almost every Pearland call, before we even get to the foundation itself. A slab that's otherwise sound can still show cracking and movement if water has nowhere to drain, so fixing the grading or drainage sometimes solves more of the problem than any structural repair would.",
    ],
    faqs: [
      {
        q: "Why does Pearland seem to have more foundation issues after big storms?",
        a: "The high water table and flat terrain mean water sits longer here than in areas with better natural drainage, and prolonged saturation is one of the more common drivers of foundation movement we see in this area.",
      },
      {
        q: "Is a foundation repair enough, or do I also need drainage work?",
        a: "Often both. Repairing the foundation without addressing the drainage that caused the problem usually means dealing with the same issue again in a few years.",
      },
    ],
  },
  {
    slug: "missouri-city",
    name: "Missouri City",
    blurb:
      "Missouri City spans a mix of established neighborhoods and newer master-planned developments, and the structural issues we see vary accordingly: older homes with decades of soil movement behind them, newer ones still settling into their first few years.",
    intro: [
      "Missouri City covers a lot of ground, and it shows in the range of homes we work on here. Established neighborhoods near the older parts of the city carry decades of soil movement history, while newer sections built out as part of larger master-planned communities are still in their first few years of settling.",
      "That mix means we rarely make assumptions based on the city name alone. A foundation call in an older Missouri City neighborhood gets treated differently from one in a development that broke ground five years ago, even though they're a few miles apart.",
    ],
    faqs: [
      {
        q: "Does it matter which part of Missouri City my home is in?",
        a: "It matters more than the city name suggests. Older and newer sections have different construction eras and different soil histories, so we look at the specific neighborhood, not just the general area.",
      },
      {
        q: "How often should an older Missouri City home get a foundation check?",
        a: "There's no fixed schedule, but if your home hasn't been evaluated in several years and you're planning a renovation, sale, or addition, that's a natural time to have one done.",
      },
    ],
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    blurb:
      "Sugar Land's high water table and clay-heavy soil make it one of the more foundation-sensitive suburbs in Fort Bend County, a pattern that shows up across both its established neighborhoods and its newer master-planned sections.",
    intro: [
      "Sugar Land's combination of high water table and clay-heavy soil makes it one of the more consistently foundation-sensitive suburbs in Fort Bend County, and that holds true whether you're in one of the city's established neighborhoods or a newer master-planned section still being built out.",
      "What changes from neighborhood to neighborhood is the construction era, not the underlying soil. Older sections tend to bring us questions about long-term settlement and renovation feasibility, while newer master-planned developments bring more builder-verification and early-settlement questions, on the same soil conditions underneath both.",
    ],
    sections: [
      {
        heading: "Sugar Land's master-planned communities and what that means for your foundation",
        paragraphs: [
          "Sugar Land isn't one neighborhood repeated across a bigger map. It's a collection of distinct, mostly master-planned communities, each built in a different decade under different standards, and that history matters more here than in almost any other city we serve.",
          "First Colony, one of the city's oldest large-scale developments, dates back to the late 1970s and 1980s. Homes there have had decades to settle into Fort Bend County's clay, which means the foundation questions we get from First Colony are usually about long-term movement: has the slab finished settling, or is it still shifting season to season, and how does that compare to what's normal for a home this age on this soil.",
          "Greatwood and New Territory, built out mostly through the 1990s, sit in a middle ground. Old enough that the original construction has been tested by a couple of decades of wet-dry cycles, but young enough that many owners are the first or second owner and don't have a long maintenance history to compare against.",
          "Telfair, Riverstone, Sweetwater, and Avalon represent Sugar Land's newer wave, built mostly in the 2000s and 2010s. These communities usually bring us a different kind of call: early settlement in a home that's only a few years old, or a homeowner wanting a second opinion on a builder's foundation work before a warranty period closes.",
          "The common thread across all of them is the ground underneath, not the age of the house. Knowing which community a call is coming from tells us a lot about what we're likely to find before we ever get to the property.",
          "Smaller, older pockets of the city outside the big master-planned developments add another layer. Some of Sugar Land's original streets predate the modern community model entirely, and homes there were often built to whatever standard was common at the time, with less consistency than what you'd find in a single master-planned phase. Those properties sometimes need a more open-ended first evaluation, since there's less of a known baseline to compare against.",
        ],
      },
      {
        heading: "Fort Bend County clay: why the ground keeps moving",
        paragraphs: [
          "The soil under most of Sugar Land is expansive clay, the same broad category of soil that causes foundation movement across the Houston metro, but Fort Bend County's version tends to run particularly reactive. That clay swells when it absorbs water and shrinks as it dries out, and a Texas year gives it plenty of both: soaked springs, dry summers, and everything in between.",
          "Add a naturally high water table in much of Sugar Land, and the swelling and shrinking cycle happens closer to the surface and more consistently than it does in areas with better natural drainage. That's part of why foundation movement shows up here across such a wide range of home ages. It's not really about how well a particular house was built. It's about what the ground beneath it does every year, regardless of when the slab was poured.",
          "This is also why a foundation evaluation in Sugar Land needs to look at more than the crack itself. We're checking irrigation patterns, drainage grading, tree placement relative to the foundation, and how the specific lot handles water, because two houses built by the same builder in the same year can move very differently depending on what's happening around them.",
          "Sprinkler systems play a bigger role here than most homeowners realize. A zone that overwaters one side of the foundation while another side stays dry creates uneven moisture conditions in the clay directly beneath the slab, and that imbalance can produce movement that looks structural but traces back to an irrigation schedule. Checking sprinkler coverage against foundation cracking patterns is a standard part of how we read a Sugar Land property.",
        ],
      },
      {
        heading: "Permits in Sugar Land: city hall and your HOA",
        paragraphs: [
          "The City of Sugar Land runs its own permitting department, separate from the City of Houston and separate from unincorporated Fort Bend County. Structural repairs, additions, and most renovations that touch the foundation or framing need a permit through the city, and that office will typically ask for a stamped engineering letter before signing off on anything structural.",
          "What catches homeowners off guard more often is the second layer: nearly every master-planned community in Sugar Land has an active homeowners' association with its own architectural review committee. A repair or addition that's perfectly fine with the city can still need separate HOA approval, and the HOA's requirements around materials, appearance, and process don't always line up neatly with what the city asks for.",
          "We factor both into the timeline from the start. It's a much smoother process to get the engineering documentation right the first time, in a form that satisfies both the city and the HOA, than to submit twice because one set of paperwork didn't cover what the other required.",
        ],
      },
      {
        heading: "Drainage and flood considerations since Harvey",
        paragraphs: [
          "Parts of Sugar Land sit close to the Brazos River, and Hurricane Harvey in 2017 put a sharper focus on drainage and floodplain questions across Fort Bend County generally. Homes near the river or in lower-lying sections of the city have had to think more carefully about grading, drainage, and how water moves across a property, not just whether the foundation itself is sound.",
          "This doesn't mean every Sugar Land property has a flood risk to worry about. Most don't. But for the ones that do, foundation movement and drainage tend to be connected problems, and treating one without looking at the other usually means the same issue comes back. We check both together as a matter of course for any property in a flood-aware section of the city.",
        ],
      },
      {
        heading: "What we see most often in Sugar Land",
        paragraphs: [
          "In First Colony and other original 1980s sections, the most common call is a homeowner planning a renovation or addition who wants to know what the existing foundation can actually support, or a seller who wants documentation ahead of a sale after noticing a crack that's probably been there for years but was never formally evaluated.",
          "In Greatwood and New Territory, we see a mix: some long-term settlement questions, but also a fair number of load-bearing wall assessments tied to the open-concept renovations that have become popular in homes originally built with more divided floor plans.",
          "In Telfair, Riverstone, and the newer sections, the calls skew toward early settlement in homes still within a builder's warranty window, and toward second opinions before a homeowner decides whether to pursue a warranty claim or handle a repair independently.",
        ],
      },
      {
        heading: "What the engineering process looks like in Sugar Land",
        paragraphs: [
          "The visit itself doesn't change much between neighborhoods, but what we're checking does. We start outside, walking the lot to look at grading, drainage paths, and how close mature trees sit to the foundation, since Sugar Land's older streets often have decades-old oaks and pecans with root systems that compete for moisture the same way the clay does.",
          "Inside, we look for the usual signs: cracks near door and window corners, gaps between baseboards and flooring, doors that have started sticking or no longer latch cleanly. None of these alone tell us much. What matters is the pattern across the house, since a foundation that's settling evenly reads very differently from one that's dropping unevenly at one corner.",
          "Where the home has a pier-and-beam foundation, which shows up more often in Sugar Land's older sections than people expect, we also get underneath the house to check pier condition and beam moisture directly, rather than relying only on what's visible from inside.",
          "From there we put together a written scope: what's causing the movement, what it will take to address it if anything, and, where a permit is involved, a stamped letter formatted for both the City of Sugar Land's permitting office and, when relevant, the homeowner's HOA architectural review committee.",
        ],
      },
      {
        heading: "Choosing a structural engineer in Sugar Land",
        paragraphs: [
          "The same rule applies here as anywhere: look for an engineer who evaluates before anyone proposes a repair, not a company where the person diagnosing the problem also profits from fixing it. That matters everywhere, but it matters more in a city with this many newer, warranty-covered homes, where the difference between a builder issue and a soil issue affects who actually pays for the fix.",
          "Local experience helps too. An engineer who has worked across First Colony's older slabs and Riverstone's newer construction in the same month has a feel for what's typical in each, and that context shortens the distance between a first visit and a clear answer.",
          "It's also worth asking directly whether the person you're hiring has handled the two-layer approval process Sugar Land often requires, city permit and HOA sign-off, since documentation that satisfies one but not the other just means a second round of paperwork and a longer wait before work can start.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does Sugar Land seem to have consistent foundation issues across different neighborhoods?",
        a: "The clay soil and water table conditions are fairly consistent across the city, so the underlying cause tends to be similar even when the specific homes and their ages differ.",
      },
      {
        q: "Do newer Sugar Land developments have fewer foundation problems than older ones?",
        a: "Not necessarily fewer, just different ones. Newer construction deals more with early settlement and builder-grade verification, while older homes deal with decades of accumulated movement.",
      },
      {
        q: "Does my Sugar Land HOA need to approve a foundation repair, or just the city?",
        a: "Usually both. The city permit covers the structural side, but most Sugar Land HOAs also require architectural review before work starts, especially if there's any exterior impact. We prepare documentation that works for both from the outset.",
      },
      {
        q: "I'm still under a builder warranty in Telfair or Riverstone. Should I still get an independent evaluation?",
        a: "Yes. An independent evaluation documents the actual cause of the movement, which is exactly what you need to support a warranty claim or push back if the builder disputes it. Waiting until the warranty window closes to get that documentation is the more expensive mistake.",
      },
      {
        q: "Is my home's foundation movement related to the Brazos River or drainage, or is it just soil?",
        a: "It depends on where the property sits. For homes near the river or in lower-lying sections, we check drainage and grading alongside the foundation itself, since the two are often connected in those areas.",
      },
      {
        q: "How is a First Colony foundation evaluation different from one in a newer Sugar Land community?",
        a: "The soil questions are similar, but the age of the structure changes what we're looking for. In First Colony, we're assessing decades of accumulated movement. In newer sections, we're often distinguishing normal early settlement from a genuine construction defect.",
      },
      {
        q: "Can sprinklers or landscaping actually cause foundation movement in Sugar Land?",
        a: "Yes, uneven watering is one of the more common contributing factors we find here. A sprinkler zone that overwaters one side of the house while another stays dry can create the kind of uneven soil moisture that leads to foundation movement, separate from the broader clay and water table issue across the city.",
      },
      {
        q: "Do you work with both the city and my HOA if my Sugar Land community requires architectural review?",
        a: "Yes. We prepare the stamped engineering documentation in a form that satisfies the City of Sugar Land's permitting requirements and format it so it also works for your HOA's architectural review committee, rather than producing two separate versions.",
      },
    ],
  },
];

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string[];
  signs: string[];
  image?: string;
  imageAlt?: string;
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "foundation-repair",
    name: "Foundation Repair",
    shortName: "Foundation Repair",
    image: "/images/foundation-repair.jpg",
    imageAlt: "Technician servicing hydraulic push piers under a cracked brick foundation during a Houston foundation repair (illustrative photo, not an actual job site)",
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
    image: "/images/structural-repairs.jpg",
    imageAlt: "Contractor reinforcing a sagging ceiling beam with temporary shoring during a structural repair in Houston (illustrative photo, not an actual job site)",
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
    image: "/images/inspections-reports.jpg",
    imageAlt: "Inspector in a Houston home's attic documenting roof framing conditions with a moisture meter and clipboard (illustrative photo, not an actual job site)",
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
    image: "/images/consulting.jpg",
    imageAlt: "Structural engineer reviewing a structural drawing on a Houston job site while a foundation repair is underway in the background (illustrative photo, not an actual job site)",
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
    image: "/images/load-bearing-wall-removal.jpg",
    imageAlt: "Interior room in a Houston home with adjustable steel shoring props supporting the ceiling during a load-bearing wall removal (illustrative photo, not an actual job site)",
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
    image: "/images/general-contracting.jpg",
    imageAlt: "Construction worker in a hard hat drilling into a wood beam on a Houston home under construction (illustrative photo, not an actual job site)",
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
    image: "/images/home-additions.jpg",
    imageAlt: "Kitchen mid-renovation during a Houston home addition project, with cabinets installed and surfaces protected in plastic sheeting (illustrative photo, not an actual job site)",
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
    sections: [
      {
        heading: "The four kinds of additions we build, and what each one asks of the house",
        paragraphs: [
          "People say \"addition\" and mean four fairly different projects. A ground-floor bump-out pushes a kitchen or a family room out into the yard. A second story stacks new bedrooms on top of a house that was never meant to hold them. A garage conversion turns a slab poured for a car into a slab that has to carry a bedroom, a bathroom, and the plumbing that goes with it. And a detached casita or in-law suite is really a small new house that happens to share a lot with the old one.",
          "The reason the distinction matters is that each one loads the existing structure in a different place. A bump-out mostly asks a question of the soil and the edge of the existing slab, because you're pouring a new foundation next to an old one and hoping they move together. A second story asks a question of every wall, every footing, and every stud line in the house below it. A garage conversion asks whether a four-inch slab with no vapor barrier and a slope toward the door can be made into a floor you'd want to live on. A casita mostly asks about setbacks, utilities, and drainage.",
          "We do all four. The engineering approach is the same in spirit, trace the load from the new roof down to the dirt and make sure nothing along that path is being asked to do more than it can, but the practical work is different enough that we don't quote one like the other.",
        ],
      },
      {
        heading: "Start with the foundation you already have",
        paragraphs: [
          "Almost every Houston house sits on one of three foundation types, and which one you have shapes the whole project before anyone draws a floor plan.",
          "Slab-on-grade is the most common in the suburbs built from the 1960s onward. It's a single concrete pad with thickened edges and, in most cases, a grid of interior beams underneath. Additions tie into the edge of it. The questions are how deep the existing beams go, whether the slab was post-tensioned, and how much the slab has already moved. Post-tension slabs, which became standard in a lot of Houston subdivisions from the 1980s on, have steel cables under tension running through the concrete. You don't cut into one casually, and tying a new foundation into it takes a specific detail.",
          "Pier and beam is what you'll find under older homes inside the Loop, in the Heights, in Bellaire, in parts of Meyerland. The house sits on wood beams over concrete or brick piers with a crawlspace beneath. These are often easier to add onto because you can see the structure, but the piers have usually been settling for sixty or seventy years and the new addition can't be allowed to settle at a different rate.",
          "Then there are the houses that have been repaired. A lot of Houston foundations have had piers pushed under them at some point, and the repair changes how the slab behaves. A slab on twelve steel piers doesn't move like the slab next door. If your house has a foundation repair history, we want to see the paperwork, or if there isn't any, we want to find out what's under there before we put more weight on it.",
        ],
      },
      {
        heading: "Houston soil, and why additions crack at the seam",
        paragraphs: [
          "The single most common failure we see on additions built without engineering is a crack that runs right along the line where the new foundation meets the old one. It shows up a year or two after the work is done, usually after a wet winter followed by a dry summer, and it keeps growing.",
          "The cause is almost always the same. Houston sits on expansive clay. The clay swells when it's wet and shrinks when it's dry, and the movement is measured in inches, not fractions of an inch. An existing slab has spent decades finding its equilibrium with that soil. A new slab poured next to it hasn't. If the new footings don't bear at the same depth as the old ones, or if the two sections aren't tied together so they move as one, they move separately. The seam opens up. Doors near the addition start to stick, tile cracks along a straight line, and the homeowner is back to square one with a much more expensive problem.",
          "The fix is not complicated, but it has to be designed rather than guessed at. We check the bearing depth of the existing foundation, match it, and detail the connection between old and new, usually with doweled rebar epoxied into the existing slab, so the two sections behave as one structure. On lots with particularly active clay we sometimes recommend deeper footings or a different foundation approach for the addition entirely, and we'll tell you that up front rather than after the concrete is poured.",
        ],
      },
      {
        heading: "Second stories: the honest conversation about what a single-story house can carry",
        paragraphs: [
          "Second-story additions are the projects where the engineering question is most often skipped and where skipping it costs the most.",
          "A house built as a single story was engineered, or more often just built to habit, to carry one roof and nothing else. The exterior walls, the interior bearing walls, and the footings under them were all sized for that. Put a second floor on top and you've roughly doubled the load on every one of those elements. Sometimes the existing structure has enough margin to take it. Often it doesn't, and the difference isn't something you can see from the driveway.",
          "What we actually do is measure. We look at the footing widths and depths, the stud spacing and species in the bearing walls, the headers over the windows and doors, and the condition of everything after however many decades it's been standing. Then we calculate what the new floor and roof will weigh and where that weight will land. The result is one of three answers: the house can take it as-is, the house can take it with specific reinforcement, or the house can't reasonably take it and building out would be the better path. All three are useful. The third one, delivered before you've spent money on drawings, is the most useful of all.",
          "When reinforcement is needed, it usually means widening footings under the bearing walls, adding posts and beams to shorten spans, or sistering new studs onto the old ones. None of it is exotic. It just has to be sized to the actual gap between what's there and what's needed, and it has to happen before the second floor goes on, not after the cracks appear.",
        ],
      },
      {
        heading: "Permits, deed restrictions, and the floodplain",
        paragraphs: [
          "Houston famously has no zoning, and people sometimes take that to mean you can build what you want. In practice three separate sets of rules apply to an addition, and any one of them can stop a project that's already been designed.",
          "The city's development ordinance sets building lines and setbacks, how close to the property line you can build and how much of the lot you can cover. A bump-out that looks fine on paper can land two feet inside a setback, and the fix at that point is redesigning the addition smaller. We check this before the floor plan is final, not after.",
          "Deed restrictions are private rules enforced by the neighborhood, separate from the city entirely, and they're where a lot of Houston additions get tripped up. Many subdivisions restrict height, second stories, exterior materials, or the total square footage of the house. Some require architectural review before any exterior change. The city will issue you a permit for an addition your deed restrictions prohibit, and the neighborhood association can still make you take it down. If your subdivision has an active association, we want to know what they require before we design anything.",
          "Floodplain rules changed substantially after Harvey. Inside the city, construction in the mapped floodplain now has to be elevated above the 500-year flood level, and if an addition is large enough relative to the value of the existing house, the whole structure can be pulled into that requirement. That's a very different project from a simple bump-out. Harris County and the surrounding cities each have their own version. We pull the flood map for the property early, because a floodplain designation changes the foundation design, the cost, and sometimes whether the addition makes sense at all.",
          "All of this is why the permit is the last thing we do, not the first. By the time we submit, the setback, the restrictions, and the floodplain have already shaped the design, and the review goes through without surprises.",
        ],
      },
      {
        heading: "What we actually do, step by step",
        paragraphs: [
          "The first visit is an evaluation, and it's worth doing before you've committed to a floor plan. We look at the existing foundation and framing, pull whatever records exist for the house, and check the lot for the rules above. If you already have a design in mind, we'll tell you whether the house can support it. If you don't, we'll tell you what the house can support, which is a better starting point for a design than a wish list.",
          "From there we produce the structural design: foundation details for the new section and its connection to the old, framing sizes and spans, beam and header schedules, and any reinforcement the existing structure needs. For a second story this includes a full load analysis of the house below. The drawings and calculations are stamped, which is what the permit office requires and what protects you later if a question ever comes up about how the addition was built.",
          "Then the permit. We prepare the structural portion of the submission and coordinate with the architect or designer if there is one. Because the design already accounts for setbacks, restrictions, and floodplain, this step is usually uneventful.",
          "Construction is where being a licensed general contractor as well as an engineering firm matters. We excavate and form the new foundation, pour it to the detail we designed, frame the addition, tie the roof into the existing roofline, and carry it through inspections and finish. The crew building the addition is working from calculations written by the people supervising them. There's no gap between what was specified and what gets built, and no second company to call when a detail on site doesn't match the drawing.",
          "Inspections happen at the points the city requires, typically foundation, framing, and final, and we're on site for each of them.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "The evaluation and structural design for a ground-floor addition usually take a week or two once we've been out to the house. Second stories take longer because there's more to analyze, closer to three or four weeks for design.",
          "Permitting is the variable nobody controls. Inside the City of Houston, a residential addition permit can move quickly or sit for weeks depending on the queue and whether anything in the submission draws a comment. The suburbs vary. We tell people to budget a month for permitting and to be pleasantly surprised if it's faster.",
          "Construction time depends on the size of the addition and the weather, which in Houston is a real factor for foundation work. A modest bump-out might be six to ten weeks from excavation to finished drywall. A second story that requires reinforcing the house below is a multi-month project, and the family usually needs to plan to be out of the house for part of it.",
        ],
      },
      {
        heading: "What it costs, and what moves the number",
        paragraphs: [
          "Additions are priced per square foot as a starting point, but the per-square-foot number moves a lot depending on what's inside the square footage and what the existing house needs before the addition can go on.",
          "In the Houston area, a straightforward ground-floor addition at a builder-grade finish tends to land in the range of 150 to 200 dollars per square foot for the construction. Mid-range finishes push that toward 200 to 250. High-end finishes go beyond that. Second stories run higher per square foot than ground-floor additions, typically a quarter more, because of the reinforcement work and the complexity of tying into an occupied house. Bathrooms and kitchens add a fixed chunk on top for plumbing regardless of size. HVAC almost always needs to be extended or upgraded, and older homes often need an electrical panel upgrade to carry the new load.",
          "The engineering is a small fraction of all this, and it's the part that keeps the rest of the number from changing once construction starts. Our cost estimator on this site walks through the factors above for your specific project and gives you a planning range before you talk to anyone. It's a ballpark, not a quote, but it's a ballpark built from the same logic we use when we price the real thing.",
        ],
      },
      {
        heading: "The mistakes we get called in to fix",
        paragraphs: [
          "A fair amount of our addition work is on additions someone else already built. The patterns repeat.",
          "The most common is the seam crack described above, a new foundation poured next to an old one with no tie-in and no attention to bearing depth. The second most common is a second story on a house that couldn't carry it, which shows up as sagging floors upstairs, doors that won't close downstairs, and cracks radiating from the corners of windows in the bearing walls. Third is the garage conversion where nobody thought about the slab, so the new bedroom floor slopes toward the old garage door and the bathroom drains run uphill.",
          "Then there are the paperwork problems. An addition built without a permit, or with a permit but without stamped engineering, is a liability that surfaces at the worst possible time, usually during a sale when the buyer's inspector asks for documentation that doesn't exist. We can often produce an engineering evaluation of existing work after the fact, but it's more expensive and less certain than doing it right the first time, and sometimes the honest answer is that the work needs to be redone.",
          "None of these are exotic failures. They're all the predictable result of building first and asking the structural question later, or never. Asking it first is cheaper in every case we've seen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can any house take a second story?",
        a: "No. Some single-story houses have enough margin in the foundation and framing to carry a second floor with modest reinforcement, and some don't have a reasonable path to it at all. The only way to know which one you have is an evaluation of the existing structure. We'd rather tell you building out is the better option before you've paid for drawings than after.",
      },
      {
        q: "Do I need an architect and an engineer, or just one of you?",
        a: "It depends on the project. Many additions can be designed and built with our structural drawings alone. Larger or more complex additions, especially second stories that change the look of the house, often benefit from an architect for the layout and elevations, with us handling the structure and the construction. We work alongside architects regularly and can tell you which path fits your project.",
      },
      {
        q: "How do you tie a new foundation into an old one?",
        a: "We match the bearing depth of the existing foundation so both sections sit on the same soil condition, then connect them with steel dowels epoxied into the existing slab or beam. That lets the two sections move together with the clay rather than separately. On post-tension slabs the detail is different and has to account for the cables in the existing concrete.",
      },
      {
        q: "Will my deed restrictions allow an addition?",
        a: "Often yes, sometimes with conditions, occasionally no. Height limits, second-story prohibitions, and square footage caps are the restrictions that most often affect additions in Houston subdivisions. We check the restrictions early, and if your neighborhood has an architectural review process, we'll help you prepare what they need to see.",
      },
      {
        q: "What if my house is in the floodplain?",
        a: "It changes the design and sometimes the scope. Inside the city, work in the mapped floodplain has to meet elevation requirements, and a large enough addition can bring the whole house under those rules. We pull the flood map before we design anything so you know what you're dealing with, and we'll tell you honestly if the floodplain makes the addition impractical.",
      },
      {
        q: "Do you handle the construction, or only the engineering?",
        a: "Both. We're a licensed and insured general contractor as well as an engineering firm, so we can design the addition and build it. We can also provide the engineering alone if you already have a contractor you want to use. Either way the structural drawings are stamped and the permit office gets what it needs.",
      },
    ],
  },
  {
    slug: "commercial-buildouts",
    name: "Commercial Buildouts & Tenant Improvements",
    shortName: "Commercial & TI",
    image: "/images/commercial-buildouts.jpg",
    imageAlt: "Contractor drilling into a structural beam on a commercial buildout job site in Houston (illustrative photo, not an actual job site)",
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
    image: "/images/steel-beam-installation.jpg",
    imageAlt: "Worker installing rebar reinforcement in an exposed ceiling opening with steel props during a steel beam installation in Houston (illustrative photo, not an actual job site)",
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
