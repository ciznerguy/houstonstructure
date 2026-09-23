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
    slug: "bellaire",
    name: "Bellaire",
    blurb:
      "Bellaire is its own city with its own building department, built on gumbo clay, with a housing stock that runs from 1940s bungalows to brand new three-story rebuilds on the same block. Structural questions here usually start with one decision: repair what's there, or start over.",
    intro: [
      "Bellaire sits inside Houston but isn't part of it. It has its own city hall, its own building department, and its own rules about what needs a permit and what has to carry an engineer's seal. If you're planning structural work here, that distinction is the first thing that matters, because the process is not the City of Houston process your contractor may be used to.",
      "The housing stock is the second thing. Bellaire was built out mostly in the 1940s and 1950s as modest single-story homes, and since the 1990s a large share of those have come down and been replaced with much larger houses. The result is a city where a 1950 slab and a 2020 slab can sit thirty feet apart, and where the question we're asked most often is whether an older home is worth repairing and adding to, or whether the money is better spent on a rebuild.",
    ],
    sections: [
      {
        heading: "Repair or rebuild: the question behind most Bellaire calls",
        paragraphs: [
          "A homeowner with an original Bellaire house and a foundation that has moved is usually weighing three numbers at once: what it costs to level and repair, what it costs to renovate and add on afterward, and what the lot alone is worth to a builder. Those numbers interact, and an engineer's evaluation is what turns them from guesses into something you can decide on.",
          "Our part is narrow and specific. We measure what the foundation is actually doing, we tell you what it would take to stabilize it, and we tell you honestly whether the existing structure can carry the addition or second story you have in mind. What we will not do is tell you the house is fine when the measurements say otherwise, or tell you it needs a rebuild because a rebuild is a bigger job.",
          "Plenty of original Bellaire homes are sound and worth keeping. Some aren't. The only way to know which one you have is to measure it.",
        ],
      },
      {
        heading: "Flooding, elevation, and what it did to the structure",
        paragraphs: [
          "Bellaire took serious water in the 2015 and 2016 storms and again during Harvey, and that history shows up in the structural work here in two ways. Some homes were raised, either voluntarily or as a condition of rebuilding, and a raised house is a structural project with its own foundation, framing, and connection questions long after the lift itself is finished. Others were repaired at the finish level while the framing underneath stayed wet longer than anyone realized.",
          "Water that sat in a wall cavity for days and then got covered with new drywall is the source of a real share of the framing damage we find in this area years later. When we evaluate a home that flooded, we look past the finishes at the sill plates, the bottoms of the studs, the floor framing in a pier and beam house, and anything that was cut or removed during the repair and never put back.",
          "If you're buying a Bellaire home that flooded and was repaired, this is worth a look before the option period closes, not after.",
        ],
      },
      {
        heading: "Gumbo clay on small lots",
        paragraphs: [
          "The soil under Bellaire is the same expansive clay that moves across most of the Houston area, and the lots are small enough that what your neighbor does affects you. A large tree on a property line pulls moisture from under both houses. A teardown next door means heavy equipment, a new slab, and sometimes new drainage patterns within a few feet of your foundation.",
          "Drainage is the part homeowners can actually control, and in Bellaire it matters more than average because the lots are flat and the space between houses is tight. Where water goes in the first ten feet from your foundation has more effect on long-term movement than most of the expensive things people try.",
        ],
      },
      {
        heading: "Opening up a Bellaire floor plan",
        paragraphs: [
          "The most common structural request we get in Bellaire is not a repair. It's a wall. Owners of the original mid-century houses want the kitchen opened to the living room, and owners of the newer rebuilds want the ground floor connected end to end. In both cases the first question is whether the wall is carrying the structure above it, and in Bellaire the answer is yes more often than people expect.",
          "In an original 1950s house the bearing line usually runs down the middle of the plan under a simple gable roof, and the span is modest enough for an engineered lumber beam. In a two-story rebuild the same wall may be carrying bedrooms, which pushes the beam toward steel and the columns toward new footings under the slab. Either way it needs an engineer's letter before the city will issue a permit.",
          "We wrote up one of these jobs in detail, including what happened when demolition showed the floor above was not level. It's here: [removing three load-bearing walls in a Bellaire home](/projects/load-bearing-wall-removal-bellaire).",
        ],
      },
      {
        heading: "Permits and the Bellaire building department",
        paragraphs: [
          "Structural alterations in Bellaire need a permit from the city, and the city expects sealed drawings or a stamped letter from a Texas licensed engineer for anything that changes how the house carries load. That includes removing a wall, adding a room, raising the house, and widening an opening in an exterior wall.",
          "The practical advice is to get the engineering done before the plans are finished rather than after the reviewer asks for it. A structural item added as a response to a review comment costs a cycle of review time, and in a project with a construction loan or a lease end date, that cycle is the expensive part.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a Bellaire permit different from a City of Houston permit?",
        a: "Yes. Bellaire is a separate incorporated city with its own building department, its own submittal process, and its own review timeline. A contractor who works mostly inside the City of Houston is not automatically familiar with it. The engineering requirements are similar in substance, but the process and the expectations are the city's own.",
      },
      {
        q: "My Bellaire house flooded and was repaired. Should I have it looked at?",
        a: "It's worth it, especially if the repair was done quickly or by more than one crew. Finish-level repairs can look complete while the framing underneath stayed wet, and rot in a sill plate or the bottom of a stud doesn't announce itself until it has been there a while. An evaluation tells you whether the structure was actually restored or just covered.",
      },
      {
        q: "Should I repair my older Bellaire home's foundation or tear down and rebuild?",
        a: "That depends on what the measurements show, what you want to do with the house afterward, and what the lot is worth. We can tell you what the foundation is doing, what stabilizing it would involve, and whether the existing structure can carry the addition you have in mind. That gives you the structural side of the decision. The rest is a financial call, and it's yours.",
      },
      {
        q: "Can I add a second story to a 1950s Bellaire house?",
        a: "Sometimes, and it depends on the foundation and the walls below more than on the plan. A house built as a single story was built to carry one roof, so the footings and the bearing walls have to be checked against the new load and usually reinforced. The evaluation comes first, before an architect draws the upstairs.",
      },
      {
        q: "A builder is tearing down the house next door. Should I be concerned?",
        a: "It's reasonable to document your own house before the work starts: photograph the existing cracks, and if you want a baseline you can rely on later, have the foundation elevations measured. If something changes during their construction you then have a before to compare against, which is worth far more than a recollection.",
      },
    ],
  },
  {
    slug: "west-university-place",
    name: "West University Place",
    blurb:
      "West U is a small incorporated city of mostly rebuilt homes on small lots, with its own building department and some of the strictest review in the area. Most structural work here happens within tight setbacks and next to a neighbor's wall.",
    intro: [
      "West University Place is a separate city with its own building department, and it reviews residential construction more closely than most of its neighbors. If you are planning structural work in West U, the permit process is a real part of the schedule, not a formality at the end of it.",
      "The housing stock has turned over almost completely. What was built in the 1920s through the 1940s as small bungalows and cottages has largely been replaced by much larger two and three story homes on the same small lots. That combination, tall houses on narrow footprints with very little space between them, shapes nearly every structural question we get here.",
    ],
    sections: [
      {
        heading: "Tall houses on small lots",
        paragraphs: [
          "A typical West U lot is small, and the houses built on them go up rather than out. That changes the structure in ways that matter. Loads from the third floor have to travel down through two floors to the foundation, and the walls that carry them are often the same walls an owner later wants to remove to open up the ground floor. On a narrow house there are fewer walls available to carry that load in the first place, so removing one is a bigger question than it would be in a wider home.",
          "It also changes how the house resists wind. A tall narrow house needs bracing walls in both directions, and the long open plan that people want on the ground floor competes with that requirement. This is solvable, and it is solved all the time, but it has to be designed rather than assumed.",
        ],
      },
      {
        heading: "Opening up the ground floor",
        paragraphs: [
          "The most common request we get in West U is removing a wall on the first floor of a newer home to connect the kitchen to the living space. In a two or three story house, a first-floor wall is frequently carrying bedrooms above it, sometimes a bathroom, and occasionally a point load from a beam higher up. The beam that replaces it is usually steel rather than lumber, because the depth available inside the ceiling is limited and the load is higher than in a single-story house.",
          "The ends of that beam are where these projects get interesting. The columns have to reach the foundation, which on a narrow house can mean carrying the load down inside a wall on the floor below, and the slab under each column often needs a footing it wasn't built with. None of this is exotic, but it is why a wall removal in West U is rarely the simplest version of the job.",
        ],
      },
      {
        heading: "The few original homes left",
        paragraphs: [
          "Not everything in West U has been rebuilt. The original bungalows that remain are often on pier and beam foundations, with framing that was adequate for a small one-story house and is now expected to carry a renovation, a rear addition, or a converted attic. Those homes bring a different set of questions: whether the existing floor framing can take a modern kitchen and bathroom, what the piers are actually sitting on, and whether the original roof structure allows the attic conversion the owner has in mind.",
          "Owners of these houses are frequently making the same repair or rebuild decision that comes up in Bellaire, with the added factor that in West U the land value is high enough that the math often pushes toward a rebuild. We give you the structural half of that answer.",
        ],
      },
      {
        heading: "Building next to a neighbor, ten feet away",
        paragraphs: [
          "With small lots, construction in West U happens close to the house next door. Excavation for a new foundation, heavy equipment, and the removal of a mature tree all have effects that don't stop at the property line, particularly on expansive clay that responds to changes in moisture.",
          "If a teardown or a large addition is starting next to you, documenting your own house first is cheap insurance: photographs of existing cracks, and an elevation survey if you want a baseline you can actually compare against later. If you are the one building, the same documentation protects you from a claim about damage that was already there.",
        ],
      },
      {
        heading: "Permits in West U",
        paragraphs: [
          "The city requires permits for structural alterations and expects sealed engineering for work that changes how the house carries load. Review here is thorough, and the city's own regulations on things like height, coverage, and setbacks interact with the structural design more than they do in most places, because the buildable envelope is tight to begin with.",
          "The practical advice is the same as in Bellaire and more so: have the structural questions answered before the architectural set is finished, so the sealed drawings go in with the first submission instead of coming back as a response to a comment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I remove a wall on the first floor of my West U house?",
        a: "Often yes, but in a two or three story house that wall is frequently carrying the floors above it, so the replacement is usually a steel beam with columns that have to reach the foundation. The first step is establishing what the wall actually carries and where that load can go down. That's a single visit, and it tells you what the project really involves before anyone prices it.",
      },
      {
        q: "Is West University Place its own permitting authority?",
        a: "Yes. West U is a separate incorporated city with its own building department and its own review process, and it is known for reviewing residential work closely. Plan for the permit as a real step in the schedule and submit a complete set the first time.",
      },
      {
        q: "They're tearing down the house next door. Can that affect my foundation?",
        a: "It can, mainly through changes in soil moisture: excavation close to the property line, the removal of a large tree that was drawing water from under both houses, and new drainage patterns. Whether it will affect yours depends on the specifics. Documenting your house before their work begins, with photos and ideally an elevation survey, is what turns a later argument into a comparison.",
      },
      {
        q: "Can an original West U bungalow take a second story or a large addition?",
        a: "Sometimes, and the answer lives in the foundation and the existing framing rather than in the floor plan. Pier and beam homes of that era were built for a small single-story house, so the piers, the girders, and the wall framing all have to be checked against the new load. We'll tell you what it would take, and whether it's worth it compared with the alternatives.",
      },
      {
        q: "Do you work in Southside Place and Southampton too?",
        a: "Yes. Southside Place is its own small city with its own permitting, and Southampton is inside the City of Houston even though it shares the 77005 area. The engineering is the same; the permitting path differs, and we'll tell you which one applies to your address.",
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
  atAGlance?: string[];
  sections?: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    image?: { src: string; alt: string; caption: string };
  }[];
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
    atAGlance: [
      "Independent engineering evaluation first: elevation survey, crack mapping, drainage and plumbing review, written report.",
      "We don't sell piers. Sometimes the answer is drainage, a plumbing leak, or watchful waiting.",
      "Evaluation and report: a few hundred dollars. Repairs range from a handful of piers to whole-house stabilization.",
      "Report within days of the visit; most pier jobs take days, not weeks.",
      "Licensed to design the repair and to build it, or to hand a defined scope to your own contractor.",
    ],
    sections: [
      {
        heading: "Why Houston foundations move",
        paragraphs: [
          "Most of the Houston metro sits on a thick layer of expansive clay. It's the same stuff that makes the yard turn to soup in March and split open in August. When that clay takes on water it swells, and when it dries out it shrinks, and the difference between the two states can be several inches of vertical movement at the surface. A house doesn't float above that. It rides on it.",
          "The movement is never even. Soil under the middle of a slab stays damper than soil around the edges, because the house shades it and keeps the rain off. The side of the house with the big oak dries out faster than the side without, because the roots are pulling water all summer. The corner near the downspout that dumps onto the flowerbed stays wetter than the corner that drains to the street. One part of the foundation rises while another drops, and the house twists slightly to follow it.",
          "That twisting is what you see as cracks. Drywall splits at the corners of doors and windows because those are the weak points in a wall. Doors stick because the frame has gone out of square. Brick veneer cracks in a stair-step pattern along the mortar joints because brick can't bend. None of it means the house was built badly. It means the house was built on Houston clay, and the clay has been doing what clay does for a few decades.",
        ],
        image: {
          src: "/images/foundation-repair-3-drainage.jpg",
          alt: "Downspout discharging against the brick foundation of a Houston home with water pooled in the flowerbed and a stair-step crack in the mortar above",
          caption: "The usual suspect: a downspout dumping against the foundation, saturated clay on one corner, and the stair-step crack that follows.",
        },
      },
      {
        heading: "An evaluation from someone who isn't paid by the pier",
        paragraphs: [
          "Most people who call us have already had a foundation repair company out. They got a diagram with dots on it, a pier count, and a price. Sometimes two companies came out and the dot counts were very different.",
          "Repair companies aren't dishonest. Their tool is piers, and when your tool is piers every foundation looks like it needs some. We don't sell piers. We evaluate the foundation, work out why it's moving, and tell you what, if anything, to do about it. Sometimes that's piers. Often it's drainage. Sometimes it's a plumbing leak under the slab that has been softening the soil for years, and no pier job will hold until it's found. And sometimes the movement is within normal range for a Houston house of that age, and the right move is to watch it.",
          "The evaluation covers four things:",
        ],
        bullets: [
          "Elevation survey across the whole floor with a manometer or laser level, to a tenth of an inch, so we know exactly where the slab is high and low.",
          "Crack mapping, noting direction and width, because the direction tells you which way the foundation is going.",
          "Drainage, grading, trees, gutters, and plumbing, which is where the cause usually lives.",
          "A written report you can use however you like, including to get competing bids from repair contractors on a defined scope.",
        ],
        image: {
          src: "/images/foundation-repair-1-elevation-survey.jpg",
          alt: "Engineer kneeling on the exposed slab of a Houston living room taking a foundation elevation reading with a manometer, clipboard with a floor plan grid beside him",
          caption: "An elevation survey: readings across the whole floor, plotted on a grid, so the diagnosis is measured rather than eyeballed.",
        },
      },
      {
        heading: "Which foundation you have changes the repair",
        paragraphs: [
          "Slab-on-grade is what most Houston houses built since the 1960s sit on. A single pad of concrete with beams formed into the underside, poured directly on the prepared soil. When it moves, the whole slab tilts or bows, and the repair is usually to lift the low side back onto piers driven to a stable depth and hold it there.",
          "Pier and beam is the older system, common inside the Loop and in the pre-war neighborhoods. Wood beams sit on concrete or masonry piers over a crawlspace. These move differently. Individual piers settle or heave, the beams sag between them, and the floor above develops soft spots and slopes. The repair is often to add or reset piers and shim the beams back to level, and because you can get under the house, it's usually less invasive than slab work. Crawlspace moisture is what quietly ruins these over time.",
          "Post-tension slabs arrived in Houston subdivisions in the 1980s and are standard in most newer construction. Steel cables run through the concrete under tension, which makes the slab stiffer and better at bridging soft spots. They still move, but as a unit rather than cracking through. You can't cut or core into one without knowing where the cables are, so the repair approach is specific. If your house was built after about 1985 and you don't know which slab you have, that's one of the first things we'll establish.",
        ],
      },
      {
        heading: "The repair methods, and when each one fits",
        paragraphs: [
          "Which method suits your house depends on the soil on your lot, how deep the stable layer is, what kind of foundation you have, and what's causing the movement. That's the engineering question, and it decides whether a repair lasts or needs redoing.",
        ],
        bullets: [
          "Pressed concrete pilings: the most common Houston repair. Concrete cylinders are hydraulically pressed under the foundation, one on top of the next, until the soil stops giving, then the slab is lifted onto them. Cost-effective and effective in much of the metro, but in some areas they never reach anything stable.",
          "Steel piers: pipe sections driven thirty feet or more to load-bearing strata or refusal. More per pier, and the right answer where the clay is thick enough that pressed pilings would just sit in more clay.",
          "Drilled bell-bottom piers: a shaft drilled and belled at the bottom, filled with reinforced concrete. Slower and messier, very durable, still right in some situations.",
          "Mudjacking or polyurethane injection: lifts a slab that settled evenly without structural distress. Not a fix for an active problem.",
          "Root barriers: stop a large tree from drying the soil under one side of the house each summer.",
          "Drainage and plumbing: regrading, extending downspouts, or repairing a leaking sewer line under the slab. Addresses the cause instead of propping up the symptom, and a good share of the houses we see need this rather than piers.",
        ],
        image: {
          src: "/images/foundation-repair-2-pressed-pilings.jpg",
          alt: "Pressed concrete piling cylinders being driven beneath the grade beam of a Houston home with a hydraulic ram, excavated clay soil piled beside the hole",
          caption: "Pressed pilings going in under the grade beam. The depth they reach, not the count, is what decides whether the lift holds.",
        },
      },
      {
        heading: "What we do on a foundation repair job",
        paragraphs: [
          "It starts with the evaluation described above: elevations, crack mapping, drainage and plumbing review, and a written report. If the report says repair is warranted, we design it. That means specifying the pier type, the locations, the spacing, and the target depth, based on the elevation survey and what we know about the soil on your lot. The design is stamped, which matters for the permit and for your records later.",
          "We hold a general contractor's license alongside the engineering, so we can perform the repair ourselves. The crew works from our own drawings, we're on site during the lift, and we take elevation readings after to confirm the slab landed where the design said it would. If you'd rather use a repair contractor you already trust, our design becomes the scope they bid on, and we can inspect their work when it's done.",
          "After the lift, a foundation repair almost always needs some follow-up: cosmetic repairs to the drywall and brick, sometimes a plumbing test to make sure nothing under the slab was strained by the movement, and a drainage fix if that was part of the cause. We tell you what to expect before the work starts so none of it is a surprise.",
        ],
      },
      {
        heading: "Costs, and why the pier count matters more than the price per pier",
        paragraphs: [
          "An engineering evaluation with a written report runs a few hundred dollars for a typical house. That's the number to compare against the repair quotes you've been given, because it's usually a small fraction of one of them, and it's the thing that tells you whether the quotes are for the right work.",
          "Repair costs in the Houston area are mostly a function of pier count and pier type. Pressed pilings are the least expensive per pier; steel piers cost more. A partial lift on one corner of a house might be a handful of piers. A whole-house stabilization can be dozens. The spread between a small job and a large one is wide enough that a per-pier price on its own doesn't tell you much. What matters is whether the count is right, and a pier count from an engineer who isn't selling the piers is the only way to know.",
          "Drainage and plumbing fixes are usually far cheaper than piering, which is one of the reasons it's worth finding out whether that's the actual problem before committing to a lift.",
        ],
      },
      {
        heading: "Selling, buying, or filing a claim",
        paragraphs: [
          "A lot of foundation evaluations happen because a house is changing hands. A buyer's inspector flagged the foundation, the buyer wants to know if it's a real problem or a Houston problem, and the seller wants to know the same thing before agreeing to a price cut. Our report answers that question for both sides. It says what the elevations are, whether the movement is active or historic, and what, if anything, needs to be done. Realtors on both sides of a deal use it to settle the question and move on.",
          "Insurance claims are a separate situation. Most Texas homeowner policies exclude foundation movement from soil, but they often cover foundation damage caused by a plumbing leak, and telling those two apart is exactly what an engineering evaluation does. If a claim is on the table, the report needs to be written with that in mind, and we know what adjusters look for.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "The site visit for an evaluation usually takes an hour or two, depending on the size of the house and how much of the floor is accessible for elevation readings. The written report follows within a few days. If a real estate deal is waiting on it, tell us, and we'll work to the closing date.",
          "The repair itself is faster than most people expect. A typical residential pier job, from mobilization to the lift and cleanup, is a matter of days, not weeks. Larger jobs with a lot of piers or interior work through the slab take longer. Weather matters, because the crew is digging, and a week of heavy rain can push the schedule. Drainage and grading corrections can usually be done alongside the pier work rather than as a separate project.",
          "Permits for foundation repair are required in most of the metro and are generally quick to obtain, since the engineering is already stamped when the application goes in.",
        ],
      },
      {
        heading: "When to call, and when it can wait",
        paragraphs: [
          "Ordinary Houston house behavior, usually fine to watch: hairline drywall cracks that don't grow, a door that sticks in August and closes in January, a crack in the garage slab. Note when you first saw them and move on.",
          "Worth a look:",
        ],
        bullets: [
          "Cracks getting wider, wide enough for a coin, or running diagonally from the corners of doors and windows.",
          "Cracks in several rooms at once, or paired with doors and windows going out of square.",
          "A stair-step crack in the brick that opened recently.",
          "A floor you can feel slope when you walk it.",
          "A gap opening between wall and ceiling, or floor and baseboard.",
          "Anything that appeared suddenly after a plumbing problem, a big tree removal, or a long drought. The cause is still active.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you do the repair, or just the inspection?",
        a: "Both. We evaluate the foundation and write the report, and if repair is warranted we can design and perform it ourselves as a licensed contractor. You can also take our design to another repair contractor and have them bid it. Either way the diagnosis comes from someone who isn't paid by the pier.",
      },
      {
        q: "How do I know if the foundation company's quote is right?",
        a: "You compare it to an independent evaluation. If two repair companies gave you different pier counts, at least one of them is wrong, and possibly both. An engineering report tells you where the slab actually is and what it actually needs, and then the quotes either match it or they don't.",
      },
      {
        q: "Will foundation repair fix the cracks in my walls?",
        a: "Lifting the slab closes some cracks and opens others, because the house is being moved back toward where it started. The drywall and brick still need cosmetic repair afterward. What the repair does is stop the movement so the cosmetic fixes stay fixed.",
      },
      {
        q: "Is it normal for a Houston house to have foundation movement?",
        a: "Yes. Nearly every house in the metro moves seasonally with the clay. The question isn't whether it moves but whether it's moving more than the structure can tolerate, and whether the movement is getting worse. That's what the elevation survey tells us.",
      },
      {
        q: "Should I fix the drainage before or after the foundation repair?",
        a: "Before, if drainage is part of the cause, and it often is. Piering a slab while water is still pooling against one side of it treats the symptom and leaves the cause running. Sometimes fixing the drainage alone is enough and the piers turn out not to be needed.",
      },
      {
        q: "How long does a foundation repair last?",
        a: "No one can promise a number of years on Houston clay, and you should be wary of anyone who does. What we can say is why repairs fail early: the piers didn't reach stable soil, the cause of the movement wasn't addressed, or the pier layout didn't match where the slab was actually moving. All three are design problems. A repair that gets those three right is the one that stays out of your life.",
      },
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
    atAGlance: [
      "Sagging beams and joists, walls removed without engineering, rot, termite damage, and storm damage to framing.",
      "We trace the load path, find where it's broken, and design the fix: sistering, replacement, or reinforcement.",
      "Assessment and written report first; localized repairs typically land in the low thousands, larger framing work higher.",
      "Design in about a week; small repairs are a day or two on site plus finish work.",
      "Licensed to design and build the repair, or to hand your contractor a stamped scope.",
    ],
    sections: [
      {
        heading: "Structural repair is everything above the foundation",
        paragraphs: [
          "When people search for structural repair in Houston they usually already know something is wrong, they just aren't sure what to call it. The ceiling in the den has a dip in it. The floor upstairs bounces when the kids run. There's a crack in the corner of the living room that came back after it was patched. A contractor took out a wall five years ago and now a door won't close. None of those are foundation problems, exactly, even though people often call a foundation company first.",
          "Structural repair covers the parts of the house that carry load once it's left the foundation: the floor joists, the wall studs and headers, the beams, the ceiling joists, the rafters and roof framing, and the connections that tie all of it together. When one of those pieces is undersized, damaged, cut, rotted, or simply missing, the load finds another way down and the house tells you about it.",
          "Our work on these jobs starts the same way every time. Find the load path. Figure out where it's been interrupted. Design the fix that restores it. Then either build it ourselves or hand the design to your contractor.",
        ],
      },
      {
        heading: "The five problems we see most",
        paragraphs: [
          "Sagging beams and joists come first. A beam that was fine when it was installed can deflect over the years as the wood creeps under constant load, especially if it was sized to the minimum to begin with. In Houston the humidity doesn't help. You'll see it as a ceiling that isn't flat, a floor with a low spot in the middle of the room, or a ridge line on the roof that dips between the walls.",
          "Second is the wall someone removed without engineering. This is the single most common structural repair we do. A previous owner or a contractor opened up the kitchen, took out a bearing wall, put in a header that looked about right, and moved on. The floor above starts to sag, the drywall cracks, and the doors in the upstairs hallway go out of square. We cover this in more depth on our [load-bearing wall removal page](/services/load-bearing-wall-removal), but the fix is a properly sized beam with proper bearing at each end, installed after the load is temporarily carried elsewhere.",
          "Third is water damage to framing. Roof leaks that ran down inside a wall for years, a bathroom that leaked into the floor system under the tub, a window that was never flashed properly. Wet wood rots, rotted wood doesn't carry load, and by the time it's discovered the damage is usually more extensive than what's visible.",
          "Fourth is termite damage, which in Houston is not a question of if. Subterranean termites eat the framing from the inside out, so a stud or a sill plate can look fine and be hollow. Once the pest company has treated the house, someone has to figure out which members are still structural and which need to be sistered or replaced.",
          "Fifth is storm damage. Wind uplift on the roof, a tree limb through the rafters, or racking from a hard gust that leaves the framing out of plumb. Hurricane season produces a wave of these, and insurance adjusters want an engineer's assessment of what was damaged and what it takes to repair it.",
        ],
        image: {
          src: "/images/structural-repairs-1-sagging-beam.jpg",
          alt: "Engineer in a Houston attic holding a string line along the top of a wood beam that has sagged over the years, with the ceiling joists dipping with it",
          caption: "A string line along the beam shows the sag that a level ceiling used to hide.",
        },
      },
      {
        heading: "How we figure out what's actually wrong",
        paragraphs: [
          "The symptom and the cause are often in different rooms. A crack in an upstairs bedroom can trace back to a beam in the garage ceiling. A sloping kitchen floor can be a rotted rim joist on the other side of the house that let everything drift. So the evaluation isn't a look at the crack, it's a look at the structure.",
          "We start with what you can see: where the cracks are, which direction they run, where the floors slope and by how much, which doors and windows have gone out of square. That pattern usually points at a region of the house. Then we get into the attic, the crawlspace if there is one, and any accessible framing to look at the members directly. We're checking sizes, spans, spacing, connections, and condition. Where framing is hidden behind finishes we sometimes open a small inspection hole rather than guess.",
          "The output is a written assessment that says what's carrying what, where the load path is compromised, and what the repair should be. If the problem turns out to be foundation movement after all, we'll say so and point you at that instead. If it turns out to be cosmetic, we'll say that too. We're not paid by the repair, so there's no reason to find one that isn't there.",
        ],
      },
      {
        heading: "Designing the repair",
        paragraphs: [
          "Once the problem is understood, the design is usually one of three things:",
        ],
        bullets: [
          "Sistering: a new member fastened alongside a damaged one so the two act together. The standard fix for a cracked or rotted joist or stud where the original is still mostly intact.",
          "Replacement: the damaged member comes out entirely and a new one goes in. Needed when rot or termites have gone too far.",
          "Reinforcement: added capacity for a member that's sound but undersized. A steel flitch plate bolted to a wood beam, a new post under a long span, an extra beam to shorten what the joists have to cover.",
        ],
        image: {
          src: "/images/structural-repairs-2-sistering-joist.jpg",
          alt: "Engineer in the crawlspace of a pier-and-beam Houston home fastening a new pressure-treated joist alongside a rot-damaged one, with a jack post holding the beam above",
          caption: "Sistering a rotted floor joist from the crawlspace, with the beam above carried on a jack post while the fasteners go in.",
        },
      },
      {
        heading: "What the design has to say, and why shoring comes first",
        paragraphs: [
          "The design specifies the size and grade of the new material, how it connects to the existing structure, and what has to be temporarily supported while the work happens. That last part matters more than people expect. Cutting into a bearing wall or pulling a damaged beam without shoring the load first is how a repair turns into a much bigger repair.",
          "For most residential work the design is a stamped letter with a sketch. Bigger jobs, or anything going through permitting, get full drawings. Either way the contractor has something concrete to build from, and you have documentation that the repair was engineered.",
        ],
      },
      {
        heading: "Doing the work",
        paragraphs: [
          "We hold a general contractor's license alongside the engineering, so we can perform the repair ourselves. Our crew works from our own design, we're on site for the parts that matter, and when a hidden condition turns up mid-job, and one usually does, the engineer who has to make the call is already there rather than on the phone. If you'd rather use your own contractor, the design becomes their scope, and we can inspect the completed repair and sign off on it, which is what most permitting offices and insurance companies want anyway.",
          "A repair job runs in this order:",
        ],
        bullets: [
          "Shore the load.",
          "Open the finishes to expose the framing.",
          "Confirm the design against what's actually there.",
          "Make the repair.",
          "Inspect.",
          "Close up. Opening and closing finishes is often the biggest part of the job by hours, so it's worth knowing that going in.",
        ],
      },
      {
        heading: "After a storm",
        paragraphs: [
          "Hurricane and severe storm damage is its own category because of the insurance process. The adjuster needs to know what was damaged by the storm as opposed to what was already there, what it will take to repair, and whether the structure is safe to occupy in the meantime. That's an engineering assessment, and the sooner it's done after the event the cleaner the record is.",
          "We document the damage, distinguish storm damage from pre-existing conditions, and write the report in the form adjusters are used to reading. If temporary shoring or bracing is needed to make the house safe while the claim works through, we design that too. Then the repair itself follows the same process as any other structural job.",
          "The Houston area also has a steady stream of roof framing repairs from lesser storms, downed limbs, and wind uplift that lifted a section of decking and cracked a few rafters. These are usually quick to assess and repair, but they still need to be done right or the roof will leak at the repair for years.",
        ],
        image: {
          src: "/images/structural-repairs-3-storm-damage.jpg",
          alt: "Engineer on an extension ladder photographing rafters cracked by a fallen oak limb through the roof of a Houston home, a blue tarp over the damaged section",
          caption: "Documenting storm damage to the roof framing the morning after, before the tarp comes off and the repair is designed.",
        },
      },
      {
        heading: "Repairs that were done wrong the first time",
        paragraphs: [
          "A fair share of the framing we look at has already been repaired by someone, and the repair is the problem. A joist that was sistered with a board half its depth. A header made of two 2x6s over a twelve-foot opening. A rotted sill plate that was covered with new siding instead of replaced. A beam that was jacked up level and then left sitting on a stack of shims and a cinder block. These are not rare.",
          "Bad repairs are worse than no repair in one specific way: they hide the original problem while doing nothing about it. The floor looks level for a while. The crack gets patched and painted. Then the house keeps moving, because the load path was never actually restored, and the second time around the damage is more spread out and the fix is bigger.",
          "When we find a prior repair, we evaluate it the same as any other framing: does it carry the load or not. Sometimes it does, or close enough that a small addition makes it right. Sometimes it has to come out. Either way we'll tell you what we found and why, in plain language, so you understand what you're paying to fix.",
        ],
      },
      {
        heading: "Older Houston homes and what their framing looks like",
        paragraphs: [
          "The framing in a 1950s house in Oak Forest is not the framing in a 1990s house in Katy, and the repairs are different because of it. Pre-1970s homes were often framed with full-dimension or near-full-dimension lumber that's stronger than what the same nominal size buys today, which can work in your favor when sistering. But they were also framed to looser standards, with wider joist spacing, longer unsupported spans, and connections that relied on nails and gravity rather than hardware.",
          "Houses from the 1970s and 80s frequently used the minimum sizes the code allowed, and forty years of Houston humidity and load have taken up whatever margin there was. These are the houses where a beam that was technically adequate when new has now deflected enough to show, and the fix is reinforcement rather than replacement.",
          "Newer construction brings its own issues, mostly in the form of engineered lumber that was cut or notched by a plumber or electrician who didn't know what it was. An I-joist with a hole in the wrong place or a notch in the flange has lost a good portion of its strength, and the repair is specific to the product. We see this most in homes under twenty years old.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "The assessment, site visit and written report included, costs a few hundred dollars on a typical house. Where the report specifies the repair, that's the document your contractor bids from.",
          "Repair costs vary more here than in almost any other kind of work we do, because the range runs from sistering a single joist to reframing a section of roof. A small localized repair, one or two members plus the finish work around them, is typically in the low thousands. A beam replacement with shoring, or a rotted floor system under a bathroom, runs higher. Extensive termite or water damage across multiple rooms can be a significant project. The assessment is what tells you which of these you're facing, and it's a small cost next to the uncertainty of not knowing.",
          "One thing that reliably makes repairs more expensive is waiting. Deflection gets worse, rot spreads, and a member that could have been sistered ends up needing replacement along with the ones next to it.",
        ],
      },
      {
        heading: "Repairs, permits, and the record",
        paragraphs: [
          "Structural repairs in Houston and the surrounding cities generally require a permit when they involve load-bearing elements, and permitting offices want to see engineering. A stamped repair letter or drawing is usually what gets the permit issued.",
          "The permit matters beyond the legal box it checks. It puts the repair on the record. When the house sells, a buyer's inspector who sees a sistered beam or a new header will ask what was done and why. A permitted, engineered repair with documentation is a non-issue. An unpermitted one with no paperwork is a negotiation, and it usually goes against the seller.",
          "We keep copies of everything we produce, and we're happy to walk a future buyer's inspector or engineer through what was done, years later, if it comes up.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if it's a structural problem or just cosmetic?",
        a: "Cosmetic cracks are usually hairline, don't grow, and don't come with anything else. Structural problems tend to arrive in groups: a crack plus a sloping floor plus a door that sticks, all in the same part of the house. Cracks that reopen after being patched, or that are wide enough to slide a coin into, are worth a look. If you're not sure, a short phone conversation usually sorts out whether a visit is warranted.",
      },
      {
        q: "Can you tell what's wrong without opening up walls?",
        a: "Often, from the attic and crawlspace and the pattern of symptoms. Sometimes we need to open a small inspection hole to confirm what's behind a finish before we commit to a design. We'd rather cut one square foot of drywall on purpose than design around a guess.",
      },
      {
        q: "Someone removed a wall in my house before I bought it. Is that a problem?",
        a: "It depends on what they put in its place. If there's an adequately sized beam with proper bearing, it's fine. If there's an undersized header or nothing at all, the floor above will eventually tell you. We can evaluate an existing opening and either document that it's adequate or design the fix.",
      },
      {
        q: "Do you handle termite damage repairs?",
        a: "Yes, after the pest company has treated the house. We assess which framing members are still sound, design the sistering or replacement for the ones that aren't, and can perform the repair. Termite damage is often more extensive than it looks from the outside of the wood.",
      },
      {
        q: "Will my insurance cover a structural repair?",
        a: "It depends on the cause and your policy. Sudden events like storms and burst pipes are commonly covered. Long-term issues like gradual rot, termites, and settlement usually aren't. Where a claim is possible, an engineering report that clearly identifies the cause is what the adjuster needs, and we write ours with that in mind.",
      },
      {
        q: "How long does a typical structural repair take?",
        a: "The assessment and design take a week or so. A localized repair is often a day or two of site work plus the finish repairs afterward. Larger jobs, like replacing a beam or reframing a section of floor, take longer, and permitting adds time in front of the work. We'll give you a realistic schedule once we've seen the problem.",
      },
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
    atAGlance: [
      "Sealed structural inspection reports for home purchases, sales, insurance claims, permits, and second opinions.",
      "A licensed engineer inspects the structure, not a general home inspector reading a checklist.",
      "Report delivered within a few business days; expedited turnaround available for closings.",
      "Written to be used: by lenders, adjusters, attorneys, permit reviewers, and contractors bidding a defined scope.",
      "Priced in the low hundreds for most houses. Often the least expensive part of the transaction it protects.",
    ],
    sections: [
      {
        heading: "The difference between a home inspection and an engineering report",
        paragraphs: [
          "A general home inspector looks at the whole house in a few hours and tells you what they saw: roof, plumbing, electrical, appliances, and a line or two about the foundation. When they see a crack they don't like, their report says \"recommend evaluation by a licensed structural engineer.\" That sentence is where most of our inspection work begins.",
          "An engineering report is narrower and deeper. We're looking at one thing, the structure, and we're qualified to say what it means. We measure rather than describe. The report carries a professional engineer's seal, which is what makes it usable by a lender, an insurance adjuster, a permitting office, or a court. A home inspector's note that the foundation \"shows signs of movement\" is an observation. An engineer's report that says the slab is out of level by 1.8 inches across 40 feet, that the movement pattern is consistent with seasonal moisture variation rather than active failure, and that no repair is currently warranted, is a finding someone can act on.",
          "The two aren't in competition. A good home inspector is the reason you find out you need us. We just pick up where their expertise ends.",
        ],
      },
      {
        heading: "Who asks for these reports, and what each one needs",
        paragraphs: [
          "The same inspection can produce a very different report depending on who's going to read it. Before we come out, we want to know which of these situations you're in:",
        ],
        bullets: [
          "Buying a house: the inspector flagged the foundation or framing and you need to know whether it's a real problem before the option period ends. You need a clear finding, a repair scope if one is warranted, and a rough cost so you can negotiate or walk.",
          "Selling a house: a buyer's inspector raised a concern and the deal is stalling. You need an independent report that either settles the question or defines exactly what needs fixing, so the negotiation is about a number rather than a fear.",
          "Insurance claim: something happened, a plumbing leak, a storm, a vehicle into the garage, and the adjuster needs an engineer's opinion on cause and extent. The report has to distinguish the event from pre-existing conditions and be written in the terms adjusters work with.",
          "Permit application: the city or a suburb is asking for a structural letter before they'll issue a permit for a repair, a wall removal, an addition, or a change of use. The letter has to say specific things in a specific form, and we know what each jurisdiction expects.",
          "Second opinion: a foundation or repair company gave you a diagnosis and a price, and you'd like someone who isn't selling the repair to look before you sign. This is a large share of what we do, and the report frequently comes back with a smaller scope than the quote.",
          "Due diligence on a commercial property: a buyer, lender, or tenant needs a structural condition assessment before a purchase or a lease. Larger scope, same idea.",
        ],
      },
      {
        heading: "What the inspection covers",
        paragraphs: [
          "For a residential structural inspection we look at the foundation, the framing, and the connections between them, plus the things that act on the structure from outside: drainage, grading, trees, and any evidence of water or pest intrusion.",
          "On the foundation, that means an elevation survey plotted onto a floor plan; a walk of the exterior perimeter for cracks, separations, and evidence of prior repair; and a check of the visible foundation type and condition. Inside, we map cracks in drywall, tile, and brick and note which way they run. We check doors and windows for racking. Where there's a crawlspace, we get into it.",
          "On the framing, we go into the attic and look at the roof structure, ceiling joists, and any bearing walls or beams we can see from above. We look for sagging, cracked or cut members, undersized headers, water staining, and signs of termite activity. If the concern is a specific area, a sagging floor or a removed wall, we open up what we need to in order to see the framing directly rather than infer it.",
          "Then we photograph everything that matters, because the report has to stand on its own for someone who wasn't there.",
        ],
        image: {
          src: "/images/inspections-reports-2-crack-gauge.jpg",
          alt: "Engineer crouched at the brick wall of a Houston home holding a transparent crack-width gauge against a stair-step mortar crack and photographing it",
          caption: "Every crack gets a width, a direction, and a photograph, so the report says what was measured rather than what was noticed.",
        },
      },
      {
        heading: "What's in the report",
        paragraphs: [
          "The report is written for the person who has to make a decision from it. It opens with a plain-language summary that says what we found and what we recommend, in a paragraph. Someone in a hurry can stop there.",
          "Behind the summary: the elevation survey as a plotted diagram, the crack map, photographs with annotations, a description of the foundation type and framing system, our assessment of what the observed conditions mean and whether they indicate active movement or historic settlement, and specific recommendations. If repair is warranted, the recommendation is a scope a contractor can bid: what type of repair, roughly where, and what result it should achieve. If repair is not warranted, the report says that in so many words, because \"no action needed\" is a finding people pay for and deserve to have in writing.",
          "Every report is sealed by a Texas licensed professional engineer. That seal is what makes it evidence rather than opinion.",
        ],
        image: {
          src: "/images/inspections-reports-3-attic-survey.jpg",
          alt: "Engineer balanced on ceiling joists in a Houston attic photographing the rafters and a beam with a phone, headlamp on, a water stain visible on the roof decking",
          caption: "The attic is where the framing tells the truth: rafters, ceiling joists, and the water stains that explain them.",
        },
      },
      {
        heading: "Real estate transactions, and the option period clock",
        paragraphs: [
          "Most of our inspection calls come during a Texas option period, which means there's a deadline and it's usually close. We schedule around it. Tell us the option expiration date when you call and we'll tell you honestly whether we can get out and get the report to you in time. Usually we can.",
          "For buyers, the report does two jobs. It tells you whether the house has a structural problem or a Houston-normal amount of movement, which is most of them. And if there is a problem, it gives you a defined repair scope and cost range to bring to the negotiation, which is a much stronger position than a home inspector's \"recommend further evaluation.\"",
          "For sellers, an engineering report obtained before listing can prevent the whole scenario. A report on file that documents the foundation condition takes the question off the table before a buyer's inspector raises it, and it costs far less than a price renegotiation in week three of a contract.",
          "Realtors on both sides generally welcome the report, because it turns an emotional sticking point into a fact both parties can work from.",
        ],
        image: {
          src: "/images/inspections-reports-1-report-review.jpg",
          alt: "Engineer at a kitchen table walking a young couple through a printed structural inspection report with a plotted elevation diagram, moving boxes in the background",
          caption: "Walking buyers through the elevation plot and the photos, so the report is understood and not just filed.",
        },
      },
      {
        heading: "Insurance claims: cause matters more than damage",
        paragraphs: [
          "Insurance disputes over structural damage almost always come down to cause. Most Texas homeowner policies exclude damage from soil movement and settlement, but cover damage from sudden events like a plumbing leak, a windstorm, or a vehicle impact. The same crack in the same wall can be covered or excluded depending on what caused it, and the adjuster is going to want an engineer's opinion on that question.",
          "Our claim reports focus on causation. We document the damage, look for the physical evidence that points to one cause over another, and write a finding the adjuster can rely on. Where the cause is genuinely a covered event, that report is what gets the claim paid. Where it isn't, we'll tell you that too, because a report that overreaches doesn't survive the insurer's own engineer and does you no good.",
          "If your claim has already been denied, an independent engineering report is often the basis for a successful appeal, provided the facts support it.",
        ],
      },
      {
        heading: "Structural letters for permits",
        paragraphs: [
          "Houston and the surrounding cities require a structural letter from a licensed engineer for a range of residential and commercial permits: [load-bearing wall removals](/services/load-bearing-wall-removal), additions, foundation repairs, certain change-of-use conversions, and repairs to storm damage. The letter has to state that an engineer has evaluated the existing structure and either finds it adequate for the proposed work or specifies what's required to make it so.",
          "Each permitting office has its own format preferences and its own sticking points. We've submitted enough of these to know what the City of Houston wants versus what Sugar Land or Pearland wants, and we write the letter so it goes through the first time. If the permit is for work we're also designing, the letter is part of that package. If a contractor just needs the letter, that's a quick site visit and a short turnaround.",
        ],
      },
      {
        heading: "When you already have a report from someone else",
        paragraphs: [
          "A fair number of people come to us holding a report they don't trust. A foundation company's evaluation that recommends 22 piers. A prior engineer's letter that the buyer's lender won't accept. An insurance company's engineer who concluded the damage was pre-existing. Reviewing someone else's findings is a legitimate and common request.",
          "We do it two ways. If the underlying data is sound and the question is interpretation, we can review the report and give a written second opinion on whether the conclusions follow from the measurements. If the data is missing, thin, or suspicious, we go out and take our own. A pier diagram with no elevation survey behind it, for example, is a sales document, not an engineering finding, and we'd want to measure the floor before agreeing with any part of it.",
          "What we won't do is rubber-stamp a report because you'd prefer its conclusion. If the other engineer got it right, we'll say so. The value of an independent opinion is that it's independent in both directions.",
        ],
      },
      {
        heading: "Old houses, new houses, and what we expect to find",
        paragraphs: [
          "A 1940s bungalow in the Heights and a 2015 build in Cypress are inspected the same way and read very differently. In the older house we expect to see pier-and-beam movement, a floor that's been relevelled at least once, framing that's been altered by decades of renovation, and often no record of any of it. The question is rarely whether the house has moved. It's whether the movement is done, and whether anyone has cut something they shouldn't have along the way.",
          "In the newer house the foundation is usually a post-tension slab, and the concerns shift: was the slab poured on properly prepared soil, has the builder's warranty period exposed any early movement, and has anyone cored through the slab for a plumbing repair without locating the cables first. Newer framing tends to be engineered lumber, which is strong until somebody notches it.",
          "Knowing what's normal for the age and construction of the house is most of what separates a useful report from an alarming one. A crack that would concern us in a five-year-old slab is background noise in a seventy-year-old pier-and-beam, and the report says which is which.",
        ],
      },
      {
        heading: "Cost and turnaround",
        paragraphs: [
          "A standard residential structural inspection with a sealed report runs in the low hundreds of dollars. Larger houses, houses with crawlspaces that take time to survey, and commercial properties cost more. Permit letters for a defined scope are at the lower end. We'll quote the number before we schedule, and it doesn't change based on what we find.",
          "The report typically arrives within two to three business days of the site visit. For a closing or an option deadline, expedited turnaround is available, and we'll tell you up front what's realistic for your date.",
          "One thing to be clear about: we don't discount the inspection in exchange for the repair work. The report costs what it costs, and the finding is the same whether or not you ever hire us for anything else. That separation is the point of getting an engineer's opinion in the first place.",
        ],
      },
    ],
    faqs: [
      {
        q: "My home inspector said to get a structural engineer. Is that a bad sign?",
        a: "Not necessarily. Home inspectors are trained to flag anything outside their expertise, and in Houston nearly every house shows some foundation movement, so the referral is routine. Most of the houses we inspect on that referral turn out to be within normal range. The report either confirms that or gives you a defined problem to deal with. Either way, you'll know.",
      },
      {
        q: "Can you get the report done before my option period ends?",
        a: "Usually, yes. Tell us the date when you call. We schedule inspections around option deadlines regularly and can expedite the report when a closing depends on it.",
      },
      {
        q: "Will the report tell me what the repair will cost?",
        a: "It will tell you what the repair should be and give a realistic cost range for that scope. It won't be a contractor's quote, but it's what a contractor should be quoting against, and it lets you compare bids on an equal footing.",
      },
      {
        q: "Does the report include a warranty on the foundation?",
        a: "No. An inspection report documents the condition of the structure on the day we saw it and gives our professional opinion about what it means. It isn't a guarantee of future performance, and no honest engineer's report is.",
      },
      {
        q: "Can I use the report to dispute a foundation company's quote?",
        a: "Yes, and people do. The report defines what the structure actually needs, which may be less than what was quoted, or different, or nothing at all. It's also useful in the other direction: if the quote is reasonable, the report tells you that and you can proceed with confidence.",
      },
      {
        q: "Do you inspect commercial buildings?",
        a: "Yes. Structural condition assessments for commercial purchases, leases, and lender requirements are a larger scope than a residential inspection, but the approach is the same: measure, document, assess, and put it in a sealed report the parties can rely on.",
      },
      {
        q: "What should I have ready when you come out?",
        a: "Any prior reports, repair invoices, or warranty paperwork on the foundation or framing, and access to the attic and crawlspace if there is one. Move what you can off the floor so we can take elevation readings across the whole slab. If it's a purchase, have the home inspector's report handy so we can go straight to what they flagged.",
      },
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
      "Consulting is the part of our work where you're hiring judgment rather than a crew. Sometimes that judgment comes out as a stamped drawing for a patio cover the city won't permit without one. Sometimes it's an hour on the phone before you sign a foundation contract. Sometimes it's a forensic opinion on who caused the crack, written for a lawyer. What these have in common is that you need a licensed structural engineer to look at a specific question and give you an answer you can rely on, and nobody is selling you a repair at the end of it.",
      "We take on design consulting for the small and medium projects that still need an engineer's seal, plan review and calculations for architects and builders, second opinions on repair proposals, floor load checks for the unusual things people want to put in their houses, and forensic work when something has gone wrong and the cause is in dispute.",
      "This page explains the kinds of questions we get, how an engagement is scoped and priced, and what you should expect to walk away with.",
    ],
    signs: [
      "Planning an addition or major renovation",
      "A contractor needs stamped calculations for a permit",
      "You're in a dispute over construction defects",
      "You need an independent review of someone else's repair plan",
    ],
    atAGlance: [
      "Advice, design, and expert opinion from a licensed Texas structural engineer, with no repair attached to the answer.",
      "Stamped drawings and calculations for patio covers, decks, carports, attic conversions, and other projects that need a seal for a permit.",
      "Second opinions on foundation and repair bids, floor load checks, and plan review for architects and builders.",
      "Forensic evaluations and written opinions for construction disputes, insurance disagreements, and litigation.",
      "Most engagements are quoted as a fixed fee after a short scoping call. Phone consults from a few hundred dollars; stamped designs for small structures usually under two thousand.",
    ],
    sections: [
      {
        heading: "What consulting is, and what it isn't",
        paragraphs: [
          "Our other services each end in a specific thing: a report, a beam, a repaired foundation. Consulting ends in whatever the question needs. That might be a sealed drawing, a two-page letter, a marked-up set of someone else's plans, a phone call with notes afterward, or a formal expert report. The scope is set at the start, in writing, so you know what you're buying and what it costs before we begin.",
          "It's not a substitute for a structural inspection when you need a full written condition report on a house, and it's not the path when you already know the wall has to come out and just need the beam sized. Those have their own pages and their own fixed prices. Consulting is for the questions in between: the ones where the first job is figuring out what the question actually is.",
          "We are structural engineers, which means we don't do soil borings, MEP design, or architectural drawings. We work alongside the people who do, and we'll tell you when a question belongs to a geotechnical engineer or a plumber rather than to us.",
        ],
      },
      {
        heading: "Stamped designs for the projects that still need a seal",
        paragraphs: [
          "The City of Houston and most of the surrounding cities require engineered drawings for a long list of backyard and small-scale projects that homeowners assume are too minor to matter. They're right that the projects are small; they're wrong that the permit office will wave them through. Many of these come to us after a contractor has already been told to \"come back with an engineer's letter.\"",
        ],
        bullets: [
          "Patio covers, pergolas, and outdoor kitchens attached to the house or standing alone, especially anything with a solid roof.",
          "Decks, elevated porches, and balconies, including replacing a deck that was built without a permit the first time.",
          "Carports and detached garages, and the header over a garage door that's being widened.",
          "Attic conversions and storage platforms, where the ceiling joists were never meant to be a floor.",
          "Pool enclosures, screen rooms, and the posts and footings that hold them up in a Gulf Coast wind.",
          "Rooftop solar arrays, where the installer needs a letter confirming the roof framing can take the added weight and the racking loads.",
          "Standby generator pads, hot tubs on existing decks, and the occasional backyard observatory or workshop crane.",
        ],
      },
      {
        heading: "Wind is the load Houston forgets",
        paragraphs: [
          "Most of the small structures on that list fail not from weight but from uplift. A solid patio cover in a design wind of well over a hundred miles per hour is a wing, and it wants to leave, taking its posts and sometimes the fascia of the house with it. The connections at the top and bottom of each post, the fasteners between the rafters and the beam, and the anchor into the slab are what the drawing is really about. The lumber sizes are the easy part.",
          "Closer to the coast, in Galveston and Brazoria counties and parts of Harris, homes in the designated windstorm zone have a separate inspection requirement for insurability through the state windstorm pool. Anything added to those houses, down to a replacement patio cover, has to be designed and inspected to that standard. We design to it when the address calls for it and we'll tell you up front if your property is in that zone.",
        ],
        image: {
          src: "/images/consulting-1-patio-cover-uplift.jpg",
          alt: "Structural engineer with a tape measure and clipboard inspecting the post base and anchor bolts of a wood patio cover attached to a Houston brick home while the homeowner watches",
          caption: "A patio cover consult is mostly about the connections: the post bases, the ledger into the house, and the rafter ties that keep the roof from lifting in a storm.",
        },
      },
      {
        heading: "Working with your architect, designer, or builder",
        paragraphs: [
          "A good share of our consulting is for other professionals. An architect drawing a renovation needs a beam schedule, a foundation plan, and calculations to submit with the set. A custom builder has a plan reviewer asking for a sealed detail. A design-build remodeler wants someone to check a framing plan before the lumber is ordered. We fit into those teams as the structural engineer of record or as a reviewer, depending on what the project needs.",
          "During construction we stay available for the questions that come up once framing is exposed and the site turns out to differ from the plan. A quick answer to a field question keeps the job moving; a slow one leads to a guess that gets covered up. We'd rather take the call.",
          "For contractors who send us steady work, we keep a short turnaround on the routine items: header sizes, post and footing checks, a letter confirming an existing condition. Ask us about how that works.",
        ],
      },
      {
        heading: "Second opinions before you sign",
        paragraphs: [
          "The most valuable hour we sell is often the one before a homeowner signs a foundation repair contract. Someone has a proposal for twenty-two piers at a price with a lot of zeros, an elevation drawing they don't know how to read, and a sales deadline. We'll go through the proposal with you, explain what the elevation numbers actually say, tell you whether the scope matches the evidence, and flag what's missing. Sometimes the plan is reasonable and the call is just reassurance. Sometimes the evidence supports eight piers, or none.",
          "The same applies to any structural bid: a [load-bearing wall removal](/services/load-bearing-wall-removal) plan, a contractor's sketch for an addition, a roof framing repair after a storm. We're not evaluating the contractor. We're evaluating whether the work proposed matches the problem, and whether anything important has been left out. You get a short written summary you can take back to the contractor or to another bidder.",
          "This is a document review and a conversation, not an inspection. If the question can't be answered without seeing the house, we'll say so and quote a visit.",
        ],
      },
      {
        heading: "The strange loads people bring us",
        paragraphs: [
          "A surprising number of calls start with \"this is probably a silly question.\" They're not. Residential floors are designed for about forty pounds per square foot spread out, and a lot of ordinary things concentrate far more than that on a small footprint.",
        ],
        bullets: [
          "Gun safes and heavy furniture: a large safe can put a thousand pounds on four small feet. Location and blocking matter.",
          "Hot tubs and large aquariums: a filled six-person spa on a deck is the weight of a small car. Most existing decks weren't built for it.",
          "Home gyms with racks and loaded barbells, especially in second-floor rooms or over a garage.",
          "Car lifts in garages, where the slab thickness and the anchor embedment decide whether it's safe.",
          "Pianos, kilns, large stone islands, and water storage tanks.",
          "Attic storage: joists sized for a drywall ceiling and holiday decorations, not for boxes of books.",
        ],
      },
      {
        heading: "Older homes and changes of use",
        paragraphs: [
          "Houston's pre-1970 housing stock was built for a different kind of living, and consulting questions about those homes tend to be about change: turning a garage into a bedroom, finishing an attic, taking out a chimney, adding a bathroom where the floor framing was never meant to carry tile and a cast iron tub. The framing in these houses is often sound and often undersized by today's standards at the same time, and the answer is rarely as simple as yes or no.",
          "Pier-and-beam homes bring their own set: how far a floor can be releveled, whether a girder can be replaced piece by piece, what to do about a sill that's rotted where the porch roof drained onto it for forty years. We've spent a lot of time under these houses and we can usually tell you what you're dealing with in a single visit.",
        ],
      },
      {
        heading: "Forensic work: figuring out what happened",
        paragraphs: [
          "When something has gone wrong and the parties don't agree on why, someone has to establish the cause with evidence rather than opinion. That's forensic structural engineering, and it's a meaningful part of our practice. The situations vary: a new pool went in next door and the fence and the slab started cracking; a contractor removed a wall two years ago and the ceiling now sags; a foundation repair company installed piers and the house is worse; a plumbing leak under a slab is being blamed for damage that looks like it predates the leak.",
          "The method is the same regardless of the story. Document the current condition thoroughly with measurements, elevations, and photographs. Review whatever record exists: permits, prior reports, construction photos, repair invoices, weather and rainfall data, plumbing test results. Separate the damage into what's consistent with each proposed cause and what isn't. Then write down what the evidence supports, how confident we are, and what would change the conclusion.",
          "We do this work for homeowners, for contractors who are being blamed for something they didn't cause, for HOAs, and for insurers and attorneys on either side. Our opinion is the same regardless of who's paying for it, which is the only reason it's worth anything.",
        ],
        image: {
          src: "/images/consulting-2-forensic-crack-documentation.jpg",
          alt: "Structural engineer photographing a diagonal crack in the brick veneer of a Houston home with a scale ruler held beside it, a laser level and notebook on the ground",
          caption: "Forensic documentation: every crack measured against a scale, photographed, and located on a plan, so the conclusion rests on a record rather than a recollection.",
        },
      },
      {
        heading: "When it's headed toward a lawyer",
        paragraphs: [
          "Some disputes don't settle over a kitchen table. When a matter involves counsel, we work as a retained expert: an initial evaluation to tell the attorney candidly whether the engineering supports their client's position, a formal expert report if it does, and testimony at deposition or trial if it gets that far. We've learned that the most useful thing we can do early is tell a lawyer when the case is weak on the structural facts, because that saves everyone money.",
          "For construction defect matters, we can also serve as the neutral engineer both sides agree to, which is often faster and cheaper than two competing experts. Retention for litigation work runs through the attorney, with a retainer and hourly billing, and our file is kept to the standard that discovery expects.",
        ],
      },
      {
        heading: "Phone and video consultations",
        paragraphs: [
          "Not every question needs a site visit. A thirty- or sixty-minute call with photos sent ahead is enough to answer a lot of them: whether a crack pattern is worth worrying about yet, whether a project will need a permit and a seal, how to read a foundation proposal, what a home inspector's note actually means. We'll tell you what we can and can't conclude remotely, and when the right answer is \"someone needs to look at this in person,\" you'll hear that rather than a guess.",
          "You get written notes after the call. A remote consult can be credited toward a visit or a design if the question turns into a project.",
        ],
      },
      {
        heading: "How an engagement runs",
        paragraphs: [
          "The steps are similar whether it's a patio cover design or a forensic evaluation; the length of each one changes.",
        ],
        bullets: [
          "A scoping call, usually fifteen minutes, to understand the question and what you need at the end.",
          "A written scope and fixed fee, or an hourly estimate with a cap for open-ended forensic work.",
          "Document review, a site visit, or both. For design work, measurements of the existing structure the new work attaches to.",
          "The deliverable: sealed drawings and calculations, a letter, a marked-up plan, or a formal report, as scoped.",
          "Follow-up: permit comments answered, a call with your contractor, or a revision if the project changes.",
        ],
        image: {
          src: "/images/consulting-3-plan-review-table.jpg",
          alt: "Structural engineer and a homeowner couple at a kitchen table reviewing a sealed patio cover drawing beside a laptop showing the framing plan",
          caption: "The deliverable for most design consults: a sealed drawing the permit office accepts and a contractor can build from, walked through with you before it's submitted.",
        },
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Because the scope varies so much, we price each engagement individually, but the ranges are predictable. A phone or video consultation is a few hundred dollars. A sealed design for a patio cover, deck, or carport is typically in the low four figures, with the price rising for larger spans, windstorm-zone requirements, or unusual site conditions. A bid or plan review with a written summary is usually a few hundred to under a thousand, depending on how much there is to read. Forensic evaluations start in the low four figures for a site visit and written opinion and go up with the complexity of the record and the amount of documentation required. Expert witness work is hourly, with a retainer.",
          "We'll give you the number before we start. If the scope grows during the work, you hear about it before the invoice does.",
        ],
      },
      {
        heading: "What you should get in writing",
        paragraphs: [
          "Whatever the engagement, the end product should be something you can hand to someone else: a permit reviewer, a contractor, a buyer, an adjuster, an attorney. That means it's signed and sealed when a seal is required, it states clearly what was and wasn't examined, it separates observation from conclusion, and it's written so a non-engineer can follow it. A consultant whose only output is a conversation has left you with nothing to act on. We don't do that.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I really need an engineer for a patio cover?",
        a: "Inside the City of Houston and most nearby cities, yes, if it's attached to the house or has a solid roof. The permit office wants sealed drawings showing the framing, connections, and footings designed for local wind loads. Freestanding open pergolas under a certain size are sometimes exempt, and we'll tell you if yours qualifies before you pay for a design you don't need.",
      },
      {
        q: "Can you review a foundation repair proposal without visiting my house?",
        a: "Usually, if the proposal includes an elevation survey and you can send photos of the cracks and the exterior. We'll explain what the numbers mean, whether the scope matches the evidence, and what questions to ask. If the proposal has no elevation data, or the photos raise questions we can't resolve remotely, we'll say so and quote a site visit instead.",
      },
      {
        q: "What's the difference between a consultation and an inspection?",
        a: "An inspection is a defined visit that ends in a full written report on the structural condition of a house, priced as a package. A consultation is scoped around a specific question: a design, a plan review, a second opinion, a forensic cause. It may or may not involve a site visit, and the deliverable is whatever that question needs.",
      },
      {
        q: "Will you testify if my dispute goes to court?",
        a: "Yes, when we've been retained through counsel and our evaluation supports it. We tell attorneys early and plainly when the engineering doesn't support their client's position, because an expert who says what the client wants is useless once the other side's expert starts asking questions.",
      },
      {
        q: "How fast can you turn around a sealed drawing?",
        a: "For a routine patio cover, deck, or carport, typically one to two weeks from the site measurements, faster when a permit deadline requires it. Larger designs and anything in the windstorm zone take longer because there's more to detail. Permit review time at the city is separate and outside our control.",
      },
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
    atAGlance: [
      "One visit answers the question: is the wall load-bearing, and what does it take to remove it.",
      "You get a stamped engineer's letter with the beam size, bearing points, and shoring plan your permit office and contractor need.",
      "Engineering runs a few hundred dollars up to about a thousand; construction from the low thousands for a typical residential opening.",
      "Letter within days of the visit. A straightforward opening is a few days of construction once the permit is issued.",
      "We can install the beam ourselves, or your contractor can build from our letter.",
    ],
    sections: [
      {
        heading: "What you're actually buying",
        paragraphs: [
          "This service has two parts, and you can buy either or both. The first is the engineering: a site visit, a determination of whether the wall carries load, and if it does, a stamped letter that sizes the replacement beam and its supports and specifies the temporary shoring. That letter is what the City of Houston, Sugar Land, Katy, and the rest of the metro want to see before they issue a permit, and it's what a good contractor wants before they touch the wall.",
          "The second part is the construction: shoring the load, taking the wall out, setting the beam and posts, and patching the ceiling, floor, and walls where the old wall was. Because we're also a licensed general contractor, we can do this part too. Plenty of homeowners already have a contractor lined up for the larger remodel, and in that case our letter becomes part of that contractor's scope and we step back.",
          "If you want the background on how to tell whether a wall is bearing, what beam options exist, and why guessing goes wrong, our [load-bearing wall removal guide](/guides/load-bearing-wall-removal) covers it at length. This page is about what happens when you hire us to do it.",
        ],
      },
      {
        heading: "Before we come out",
        paragraphs: [
          "A few things make the visit faster and the letter better. None of them are required, but they help:",
        ],
        bullets: [
          "A couple of phone photos of the wall from both sides, and one of the ceiling above it.",
          "A rough sketch of the floor plan showing which wall you mean and what's on either side.",
          "Clear access to the attic hatch, and to the crawlspace if the house has one.",
          "What you're planning for the space. An island, a wider opening, a full removal, and a future addition on the other side each change what the beam has to do.",
          "Any drawings or permits from previous work on the house, especially if a wall has already been moved.",
        ],
      },
      {
        heading: "The visit",
        paragraphs: [
          "We come out, look at the wall, and then look everywhere but the wall. The answer lives in the attic above it and the foundation or crawlspace below it, in which direction the joists run, whether anything above bears on this line, and whether a previous renovation already changed the load path. On a single-story home with attic access this often takes well under an hour. Two-story homes take longer because the floor above has to be understood too.",
          "We'll tell you on the spot which way it's leaning, and we'll confirm it in writing within a few days. Sometimes the answer is that the wall isn't bearing, and your project just got simpler. We charge the same either way, which is the point: our fee doesn't depend on finding a beam to sell you. If it helps, bring your contractor to the visit. Having everyone look at the same framing at the same time saves a round of phone calls later.",
        ],
      },
      {
        heading: "The letter",
        paragraphs: [
          "If the wall is bearing, the letter specifies everything a contractor and a permit reviewer need:",
        ],
        bullets: [
          "The replacement beam: material (dimensional lumber, LVL, or steel), size, and whether it sits below the ceiling or flush within the framing.",
          "The bearing points: what the beam rests on at each end, and whether new posts, footings, or a widened header are needed to carry the load down.",
          "Temporary shoring: where the load is carried while the wall is out, and how it's supported until the beam is in place.",
          "Connection details: hangers, straps, and fasteners at the beam ends and where joists meet the new beam.",
          "Anything unusual: ductwork or plumbing in the wall that changes the approach, a second-story load, or a foundation condition under the new posts.",
        ],
        image: {
          src: "/images/load-bearing-wall-removal-1-letter-review.jpg",
          alt: "Structural engineer in a hard hat and a contractor with a tool belt reviewing a stamped beam drawing and engineering letter in front of an opened kitchen wall in a 1970s Houston ranch home",
          caption: "The letter in use: engineer and contractor at the wall, checking the beam size, bearing points, and shoring plan against the actual framing before the first cut.",
        },
      },
      {
        heading: "The construction",
        paragraphs: [
          "When we build it, the sequence is set before the first cut. Shoring goes up on both sides of the wall. Electrical, plumbing, and HVAC in the wall are disconnected and rerouted. The wall comes out down to the plate. The beam and posts go in and get connected to our detail. The city inspects the framing before it's covered. Then the drywall, flooring, and paint are patched where the wall used to be, and the shoring comes down.",
          "On a typical residential opening, the structural work is a few days. The finish work afterward, matching hardwood floors across the gap or blending a textured ceiling, is often what takes the time, and it's worth planning for. We'll tell you what to expect for your specific house before we start.",
        ],
        image: {
          src: "/images/load-bearing-wall-removal-3-finished-flush-beam.jpg",
          alt: "Finished open kitchen and family room in a Houston home after a bearing wall was removed, with a flat continuous ceiling over a flush beam, new oak flooring, and a kitchen island where the wall used to stand",
          caption: "The finished result with a flush beam: the ceiling runs flat from kitchen to family room with no header or soffit, and the island sits where the wall was.",
        },
      },
      {
        heading: "What it costs",
        paragraphs: [
          "The engineering, meaning the visit and the stamped letter, is a few hundred dollars for most homes and can approach a thousand when full calculations have to accompany a permit submission or the framing takes longer to trace. This is the cheapest step in the project by a wide margin.",
          "Construction depends on the span, the beam type, whether the beam is flush or dropped, and what's inside the wall. A short opening with an LVL beam, a couple of posts, and modest patching is typically in the low thousands in the Houston area. Longer spans, steel beams, flush installs that require hanging the joists, and rerouting mechanicals all push the number up, and a wide opening in steel can reach well into five figures. We quote the construction after the visit, when the scope is known, not before.",
        ],
      },
      {
        heading: "Working with your own contractor",
        paragraphs: [
          "When a contractor is building from our letter, a few things make the handoff clean. We're happy to talk to them directly, before the bid or during the work, and we'd rather answer a question than have someone guess. When the framing is open and something doesn't match the drawing, a call to us is a five-minute fix instead of a problem that gets covered up.",
          "If you're collecting bids on the letter, they should all be pricing the same beam, the same posts, and the same shoring. A bid that's dramatically lower than the others is usually leaving something out, most often the shoring or the finish work. A bid that proposes a different beam than the one specified needs to come back to us before it's accepted, because the letter is only valid for what it says.",
          "One more thing worth knowing: some contractors will offer to skip the engineer and \"just put in a header.\" That's the sentence that produces most of the sagging-ceiling repairs we do a few years later. A contractor who wants the letter before starting is the one to hire.",
        ],
      },
      {
        heading: "From the first call to an open floor plan",
        paragraphs: [
          "A typical residential job runs on roughly this schedule. Permitting is the step that varies most:",
        ],
        bullets: [
          "Day 1: call, a few questions, and a scheduled visit, usually within the week.",
          "Visit: an hour or so on site. You'll usually know which way the answer is going before we leave.",
          "Within a few days: the stamped letter, with the beam, bearing, and shoring specified.",
          "Permit: the contractor submits with our letter attached. Inside Houston this can take from a few days to a few weeks depending on the queue.",
          "Construction: two to four days of structural work for a typical opening, then the finish work, which depends on flooring and ceiling.",
          "Inspection: framing is inspected before it's covered. We're available for that visit whether or not we did the construction.",
        ],
      },
      {
        heading: "The houses we see this in most",
        paragraphs: [
          "The 1960s and 70s ranch homes across Memorial, Spring Branch, Meyerland, and the older parts of the suburbs were built with a kitchen walled off from everything, and opening that wall to the den is the single most common request we get. In most of these houses the wall in question is bearing, because it sits under the ridge line of a simple gable roof, and the span across the new opening is manageable with an LVL beam.",
          "The 1980s and 90s two-story homes in Katy, Sugar Land, Pearland, and Cypress are a different job. The first-floor wall between the kitchen and family room is often carrying a bedroom above it, sometimes a bathroom, and the beam has to be sized for that floor load as well as the roof. These openings are more likely to need steel, and the posts at each end are more likely to need attention at the foundation.",
          "Newer construction, from the 2000s on, tends to have been built with the open plan already in place, so the requests there are usually about widening an existing opening or removing a short wall between a breakfast area and a living room. These are often simpler, but engineered-lumber framing has its own rules and we check before assuming.",
          "For a worked example of the two-story version, [a Bellaire project where three bearing walls came out](/projects/load-bearing-wall-removal-bellaire) shows how the shoring, the discovery of an out-of-level floor, and the permanent beams fit together on one job.",
        ],
        image: {
          src: "/images/load-bearing-wall-removal-2-two-story-wall.jpg",
          alt: "Structural engineer pointing up at exposed floor joists resting on the top plate of a first-floor wall between the kitchen and family room of a 1990s two-story Houston home, explaining the load to a homeowner couple",
          caption: "A two-story home: the first-floor wall is carrying the bedroom floor above it, so the beam has to be sized for that load as well as the roof.",
        },
      },
      {
        heading: "Permits, and why we don't skip them",
        paragraphs: [
          "Removing a bearing wall is a structural alteration, and it needs a permit inside the City of Houston and in every suburb we work in. The permit office wants the engineer's letter. The contractor pulls the permit, or we do when we're building.",
          "The permit is also your record. When you sell, the buyer's inspector is going to see a new beam and ask what's behind it. A permitted, engineered opening with paperwork is a non-event. An unpermitted one is a negotiation that goes against you. It's a small amount of friction now for a lot less later.",
        ],
      },
      {
        heading: "Two situations that come up often",
        paragraphs: [
          "The first is the wall that's already gone. You bought the house with an open floor plan and there's no record of how it got that way, or your own contractor took a wall out years ago and the ceiling has started to sag. We evaluate the existing opening the same way we'd evaluate a wall: what's there, what it's carrying, and whether it's adequate. Often it needs a proper beam retrofitted. Sometimes it's fine and just needs to be documented.",
          "The second is the wall that's part of a bigger project. Opening the kitchen is rarely the whole plan; there's usually an island, new lighting, sometimes an addition on the other side of it. We coordinate the wall removal with the rest of the structural work so it's designed once, permitted once, and built in the right order.",
          "A third worth mentioning: the wall between the house and an attached garage. That wall is a required fire separation as well as, often, a bearing wall, and opening it for a garage conversion or a mudroom has code rules beyond the structure. It can be done, but the opening has to be designed with the fire rating in mind, and the permit reviewer will look for it.",
        ],
      },
      {
        heading: "Commercial spaces",
        paragraphs: [
          "Wall removals in office suites, retail bays, and restaurants follow the same structural logic with a different permitting path, landlord approvals, and fire-rating questions on top. We handle those too. Our [commercial wall removal guide](/guides/commercial-wall-removal) walks through what changes when the building isn't a house.",
        ],
      },
    ],
    faqs: [
      {
        q: "How fast can you tell me if the wall is load-bearing?",
        a: "Usually during the visit, with the written confirmation and letter following within a few days. If your contractor is waiting on the answer to schedule, tell us and we'll prioritize the letter.",
      },
      {
        q: "Do I need you to build it, or can my contractor use your letter?",
        a: "Either. The letter is written so any qualified contractor can build from it, and many do. If you'd rather have one company responsible for both the design and the work, we can do that too.",
      },
      {
        q: "What if the wall turns out not to be load-bearing?",
        a: "Then you don't need a beam, shoring, or a structural permit, and the wall can come out as part of ordinary remodeling. We'll put that in writing too, because a letter saying a wall is non-bearing is useful to have when you sell.",
      },
      {
        q: "Can the beam be hidden in the ceiling?",
        a: "Often, yes. A flush beam sits within the ceiling framing with the joists hung from it, so the finished ceiling stays flat. It costs more than a dropped beam because of the extra framing work, and it depends on the depth available. The letter will say whether it's feasible for your span.",
      },
      {
        q: "Will there be a visible seam where the wall was?",
        a: "The structural work leaves a gap in the flooring and ceiling where the wall track was. Blending it is finish work: matching the flooring, feathering the ceiling texture, and painting. It's the part of the project that most affects how the finished room looks, and it's worth budgeting for properly.",
      },
      {
        q: "Does removing a load-bearing wall affect my foundation?",
        a: "It can. The load that used to spread along the whole wall now comes down at two points, and the foundation under those posts has to be able to take it. Usually it can. Sometimes it needs a footing added, and the letter will say so.",
      },
      {
        q: "Can we stay in the house while the wall comes out?",
        a: "Usually, yes. The structural work is a few days and confined to the area around the wall, with shoring in place the whole time. Expect dust, noise, and a kitchen that's out of commission if that's the wall involved. Families with small children sometimes choose to be out for the demolition day itself, but it isn't required.",
      },
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
      "Most structural problems don't end at the engineering report. Once a repair or addition is designed, someone still has to build it, and that's where a lot of projects lose the thread between what the engineer specified and what actually gets built. A drawing says one thing, the framer reads it another way, a question comes up on a Tuesday afternoon and the engineer calls back Friday, and by then the drywall is up.",
      "We carry projects through from assessment to construction ourselves. Licensed and insured, we build to the calculations we write, which means no gap between the plan and the crew, and no second company to coordinate with.",
      "This page is about the construction side: which projects belong under one roof, how a structural job runs from estimate to final inspection, how to read an estimate and a payment schedule, what it's like to live in the house while it happens, and what to check before hiring any contractor in Texas.",
    ],
    signs: [
      "You want one company responsible for both the engineering and the build",
      "A previous project stalled because the engineer and contractor weren't coordinated",
      "You're comparing design-build against hiring separately",
      "Your project needs both a stamped plan and a construction crew",
    ],
    atAGlance: [
      "Design-build for projects where the structure is part of the job: additions, wall removals, foundation and framing repairs, storm rebuilds, and the renovations that follow them.",
      "One contract and one company responsible for both the drawing and the build, so a field question goes to the engineer who drew it.",
      "A written scope and price before work starts, with changes documented as they come up rather than discovered on the final invoice.",
      "Permitted and inspected structural work, with the drawings, permits, and inspection records handed over at the end.",
      "Texas has no statewide license for general contractors. This page includes what to check before hiring anyone, including us.",
    ],
    sections: [
      {
        heading: "What design-build means when we say it",
        paragraphs: [
          "Design-build is a phrase a lot of companies use for a lot of arrangements. Here it means one specific thing: the engineer who evaluates your house and stamps the plan works for the same company as the crew that builds it, under one contract with you. There's no handoff where responsibility gets fuzzy. If the beam in the drawing doesn't fit the beam pocket in the wall, that's our problem to solve, not a dispute between your engineer and your contractor about whose fault it is.",
          "In practice the difference shows up in small moments. A framer finds a joist that isn't where the plan assumed. Instead of stopping work and waiting on a callback, he sends a photo to the engineer who drew it and gets a revised detail without a second company in the loop. A permit reviewer wants a clarification on a footing. It goes to the person who designed the footing, not through two intermediaries. None of this is dramatic. It's the accumulation of small delays and misreadings that we're removing.",
        ],
      },
      {
        heading: "The projects that belong under one roof",
        paragraphs: [
          "We're not a remodeler that happens to know an engineer. We're an engineering firm that builds, and the projects that fit best are the ones where the structure drives the schedule and the risk.",
        ],
        bullets: [
          "Room additions and second stories, where the foundation, the tie-in to the existing framing, and the roof connection are the whole job.",
          "[Load-bearing wall removals](/services/load-bearing-wall-removal) and [steel beam installs](/services/steel-beam-installation), from the shoring plan to the patched ceiling.",
          "Foundation repair followed by the interior work that comes after leveling: cracked drywall, doors that need rehanging, tile and flooring that opened up.",
          "Structural repairs to framing, floors, and roofs, including the finish work that closes them back up.",
          "Rebuilds after storm damage, fire, or a vehicle strike, where the insurer needs a scope from an engineer and a contractor's estimate that matches it.",
          "Garage conversions, attic build-outs, and other changes of use where the framing was never designed for what it's about to hold.",
          "Larger renovations where an opened-up floor plan, new windows in bearing walls, and a kitchen or bath happen together.",
        ],
      },
      {
        heading: "When you should hire someone else",
        paragraphs: [
          "If your project has no structural component, we're probably not the right fit. A kitchen refresh with new cabinets on the same walls, a bathroom re-tile, a paint and flooring job, a roof replacement: there are good contractors in Houston who do those all day, and a firm whose overhead includes an engineering practice is rarely the most economical choice for work that doesn't need one. The thing we're good at should actually be required for the job to make sense.",
          "Very large custom builds are a different business too. Additions and structural renovations are our territory. A whole house from the ground up wants a builder who does that every week.",
        ],
      },
      {
        heading: "How a structural project runs",
        paragraphs: [
          "The sequence below is the same for a small repair and a large addition. The steps just take longer.",
        ],
        bullets: [
          "Site visit and engineering: the structural evaluation and design come first, and they're priced separately, so you own the plan even if you take it elsewhere.",
          "Estimate: a written scope, line by line, with the price and stated allowances for the finish selections you haven't made yet.",
          "Contract: scope, price, payment terms, schedule of work, and how changes are handled, read and understood before it's signed.",
          "Permit: submittal, the reviewer's comments, and the permit posted on site. Inside Houston this is a few days to several weeks depending on the project and the queue.",
          "Construction: a start date, a projected finish date, and a person you can reach when you have a question.",
          "Inspections: framing, foundation, and whatever else the permit requires, passed before the work is covered.",
          "Close-out: final inspection, permit closed, a walk-through with a written punch list, and the file of drawings, permits, and inspection records handed to you.",
        ],
        image: {
          src: "/images/general-contracting-1-site-meeting.jpg",
          alt: "Contractor with a tablet, a structural engineer with rolled drawings, and a homeowner meeting on the driveway of a Houston brick home with a dumpster and a posted permit board visible behind them",
          caption: "The weekly site meeting: the project lead, the engineer, and the homeowner looking at the same drawing, which is most of what design-build changes.",
        },
      },
      {
        heading: "How to read a construction estimate",
        paragraphs: [
          "A structural estimate has three kinds of numbers in it, and knowing which is which tells you how firm the total really is. The first is the fixed scope: the work that can be seen and measured before anything starts. \"Remove wall, install beam and posts, patch ceiling and floor to match\" is a fixed scope, and its price shouldn't move whether the beam takes one day or three.",
          "The second is allowances. These cover finish items you haven't chosen yet: flooring, tile, fixtures, cabinets. An estimate puts a dollar figure against each one, and your actual selection comes in above or below it. A low allowance makes a bid look cheaper than it will be, so when two estimates differ, compare the allowances before comparing the totals.",
          "The third is hidden conditions: rot behind a wall, an undocumented past repair, a plumbing line where the plan says there isn't one. No estimate can price what nobody has seen. What matters is how they're handled when they turn up: work on that item should stop, you should get a photo and a written change order with a price, and nothing should proceed until you've approved it. Change orders that first appear on the final invoice are a sign the process wasn't run that way.",
        ],
      },
      {
        heading: "How payment schedules work",
        paragraphs: [
          "Construction is paid in stages, and the schedule of those stages belongs in the contract. A deposit at signing typically covers materials that have to be ordered before the crew arrives. Progress payments follow milestones you can see for yourself: foundation poured, framing inspected, drywall complete. The final payment follows the final inspection and the punch list.",
          "The size of the deposit is worth attention. A large payment before any work has started often means a contractor is using your money to finish someone else's job. Milestones tied to inspections are the homeowner's protection, because each payment follows a point where a city inspector has looked at the work.",
        ],
      },
      {
        heading: "Who's actually in your house",
        paragraphs: [
          "On a structural project, framing and concrete are usually done by the contractor's own people, and the licensed trades, electrical, plumbing, and HVAC, are done by subcontractors under the general contractor's supervision and contract. That arrangement is normal; what matters is that you have one agreement and one person to call, not a separate relationship with every trade. Before signing with anyone, ask who will be on site day to day, which trades are subcontracted, and who you call when something looks wrong.",
          "A well-run job also tells you in advance which days involve which trades, when the noisy or dusty work is scheduled, and when the water or power will be off. Surprises on a job site are sometimes unavoidable. Surprises about the schedule shouldn't be.",
        ],
      },
      {
        heading: "Living in the house while the work happens",
        paragraphs: [
          "Most homeowners stay in the house during construction, and most structural work can be planned around that. On a properly managed job the work zone is sealed off with plastic barriers and zippered doorways, floors along the path from the door to the work are protected, and HVAC returns in the work area are covered so dust doesn't circulate through the whole house. Work hours should be agreed in advance.",
          "Some phases are harder to live through than others. A kitchen wall removal means no kitchen for a stretch. Foundation work under a bedroom means that bedroom is off limits. Re-leveling a pier-and-beam house is loud and involves people under your floor. Ask which phases those are, how long they last, and whether it's worth planning a few nights elsewhere. Families with young children or pets should raise it early so the plan accounts for it.",
        ],
        image: {
          src: "/images/general-contracting-2-dust-barrier.jpg",
          alt: "Interior of a Houston home during a structural renovation with a floor-to-ceiling plastic dust barrier and zippered door separating a furnished living room from a framing work zone beyond it",
          caption: "Living through the work: the work zone sealed off from the rest of the house, floors protected along the path, HVAC returns covered.",
        },
      },
      {
        heading: "Permits and inspections, from the builder's side",
        paragraphs: [
          "Structural work is permitted work. That's not a selling point so much as a baseline, but it's worth stating because a lot of the repair work we're called to fix was done without one. The permit costs money and time, and it also puts a city inspector on site at the moments that matter: before the concrete is poured, before the framing is covered, at the end. That's a second set of eyes on the contractor's work that you don't pay extra for.",
          "The submittal, the reviewer comments, the inspection scheduling, and the close-out are the contractor's job, not yours. Where a permit was never closed on a previous project in your house, which turns up more often than you'd expect during a sale, it can often be resolved as part of the new work.",
        ],
      },
      {
        heading: "What Texas doesn't check for you",
        paragraphs: [
          "Texas has no statewide license for residential general contractors. Anyone can call themselves one. Individual cities have registration requirements, and trades like electrical and plumbing are licensed by the state, but the person running your project as a whole may have nothing behind the title. That's the main reason to ask questions before you sign with anyone, including us.",
        ],
        bullets: [
          "A current certificate of general liability insurance, sent to you directly from the insurer, with your project's dates inside the policy period.",
          "Workers' compensation or an occupational accident policy covering the people on site, since an injured worker without coverage can become your problem.",
          "Registration with the city where the work is happening, where the city requires one.",
          "A written contract with a scope, a price, a schedule, a payment plan tied to milestones, and warranty terms in plain language.",
          "Addresses of recent projects similar to yours, and permission to call the owners.",
          "For structural work specifically: who the engineer of record is, and whether the contractor will build to that engineer's drawings without substitutions.",
        ],
      },
      {
        heading: "Storm damage and insurance rebuilds",
        paragraphs: [
          "After a hurricane, a tornado, a tree through the roof, or a car through the garage, the rebuild runs on two documents: the engineer's scope of what has to be repaired, and the contractor's estimate of what that costs. When those come from different companies and don't line up, the claim stalls while the adjuster asks each side to explain the other. When they come from the same company, the estimate is built from the scope and the numbers match by construction.",
          "The first work after a storm is usually temporary: tarping, shoring, board-up, whatever keeps the damage from getting worse while the claim is processed. The permanent scope follows the engineering. What the policy covers is between you and your insurer, and no contractor or engineer can promise an outcome there, but a complete file with sound engineering behind it is the strongest position to be in.",
        ],
      },
      {
        heading: "The finish work is where you'll judge the job",
        paragraphs: [
          "Nobody sees the beam once the drywall is up. What you see, every day, is whether the ceiling texture blends where the wall used to be, whether the new oak floor planks are woven into the old ones or butt up against them in a visible line, whether the brick on the addition matches the brick on the house, and whether the trim profile in the new room is the same as in the old one. This deserves as much attention as the structure, and it has to be planned early: matching flooring sourced before demo starts, brick from an opening saved to reuse on a patch, the ceiling texture photographed so it can be reproduced.",
          "Where a perfect match isn't possible, and with some discontinued materials it isn't, that conversation belongs before the work rather than after, with the options laid out.",
        ],
        image: {
          src: "/images/general-contracting-3-final-walkthrough.jpg",
          alt: "Contractor and homeowner doing a final walkthrough in a newly finished open-plan room in a Houston home, the contractor holding a clipboard punch list while the homeowner looks at the blended hardwood floor",
          caption: "The final walk-through: a written punch list, the permit closed, and the drawings and inspection records handed over.",
        },
      },
      {
        heading: "What it costs",
        paragraphs: [
          "A contractor's price is labor and materials plus overhead and margin. For structural work in the Houston market, the overhead of a legitimate operation includes insurance, permitted work, and engineering, and a bid well below the others is usually leaving out one of those things. It's rarely the labor that's cheaper. The cheapest bid on a beam is the one that skipped the engineer, the permit, or the shoring.",
          "As rough planning figures for the Houston area: a beam installation with finish work runs from the mid four figures to the low five figures depending on span and material. Interior repairs after foundation leveling are typically a few thousand dollars per room affected. Additions are priced per square foot with the structure, the foundation type, and the finish level driving the range; our home additions page has planning numbers. A real number comes after a site visit and an engineering evaluation, and it should come with a line-by-line scope you can compare against other bids.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "Engineering and estimating take one to three weeks depending on the project. Permitting adds a few days to a couple of months depending on the city and the scope; a wall removal is quick, an addition in a floodplain is not. Construction ranges from a few days for a single beam to three or four months for a large addition. Weather affects concrete and roofing; Houston rain can push a foundation pour by a week without warning.",
          "The most common cause of delay on structural renovations is not the structure. It's finish materials arriving late, which is why selections are worth making early, before the demo starts rather than after.",
        ],
      },
      {
        heading: "Questions that come up later",
        paragraphs: [
          "Structural work generates questions long after the job is done: a future buyer's inspector asks what's behind the wrapped beam, an insurer wants to know when the foundation was repaired, a new project needs to know what the last one changed. When the engineer who designed the work and the company that built it are the same, those questions go to someone who remembers the house and has the file. That continuity is one of the quieter advantages of keeping the engineering and the construction together.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to use your construction crew if you do the engineering?",
        a: "No. The engineering is priced and delivered on its own, and plenty of clients take the stamped drawings to a contractor they already know. The design-build option is there for people who'd rather have one company responsible for the whole thing.",
      },
      {
        q: "How should payment be structured on a structural project?",
        a: "In stages tied to milestones you can verify: a deposit for materials that must be ordered ahead, progress payments as phases are completed and inspected, and a final payment after the final inspection and the punch list. Be cautious of a large payment demanded before any work has started. The exact schedule should be written into the contract.",
      },
      {
        q: "Does Texas license general contractors?",
        a: "Not at the state level for residential work. Electricians and plumbers are state-licensed, and professional engineers are state-licensed with continuing education and a disciplinary board behind them, but anyone can call themselves a general contractor. Some cities require registration. That's why the questions on this page, about insurance, contracts, references, and who the engineer of record is, matter more in Texas than in states with a contractor license.",
      },
      {
        q: "Can we stay in the house during the work?",
        a: "Usually, yes, if the work zone is sealed off, the floors are protected, and the HVAC returns in the work area are covered. Some phases, like a kitchen wall removal or foundation work under a bedroom, are disruptive enough that some families choose to be away for a few nights. Ask in advance which days those are.",
      },
      {
        q: "What happens if something unexpected turns up once the walls are open?",
        a: "Work on that item should stop, you should get photos and a written change order with a price, and nothing should proceed until you approve it. When the engineer is in the same company as the crew, the fix can be designed the same day rather than after a week of waiting. Hidden conditions are the one thing a fixed scope can't cover, and the right way to handle them is in the open.",
      },
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
    atAGlance: [
      "Ground-floor additions, second stories, garage conversions, and detached casitas across the Houston metro.",
      "We engineer the structure and build it under one license, so the drawings and the crew match.",
      "Construction typically runs $150 to $300 per square foot depending on type and finish; second stories cost more than building out.",
      "Design takes one to four weeks, permitting about a month, construction six weeks to several months by size.",
      "Start with a structural evaluation of your existing foundation, before the floor plan and before the contractor quote.",
    ],
    sections: [
      {
        heading: "Four kinds of additions, four different loads on the house",
        paragraphs: [
          "People say \"addition\" and mean four fairly different projects. A ground-floor bump-out pushes a kitchen or a family room out into the yard. A second story stacks new bedrooms on top of a house that was never meant to hold them. A garage conversion turns a slab poured for a car into a slab that has to carry a bedroom, a bathroom, and the plumbing that goes with it. And a detached casita or in-law suite is really a small new house that happens to share a lot with the old one.",
          "Each one loads the existing structure in a different place, which is why we don't quote one like the other:",
        ],
        bullets: [
          "Bump-out: a question for the soil and the edge of the existing slab. A new foundation goes in next to an old one, and the two have to move together. The exterior wall between the old room and the new one is almost always bearing, so opening it up is a [load-bearing wall removal](/services/load-bearing-wall-removal) inside the addition project.",
          "Second story: a question for every wall, every footing, and every stud line in the house below it.",
          "Garage conversion: can a four-inch slab with no vapor barrier and a slope toward the door become a floor you'd want to live on?",
          "Casita: mostly setbacks, utilities, and drainage, plus its own foundation designed for the lot.",
        ],
        image: {
          src: "/images/home-additions-3-garage-conversion.jpg",
          alt: "Attached garage in a Houston home mid-conversion to a bedroom, with the garage door opening framed in and a leveling layer poured over the sloped slab",
          caption: "A garage conversion underway: the door opening framed in, and the sloped slab being leveled before it becomes a bedroom floor.",
        },
      },
      {
        heading: "What your existing foundation decides for you",
        paragraphs: [
          "Before anyone draws a floor plan, the foundation under your house has already made some decisions. A slab-on-grade addition ties into the edge of the existing slab, and the depth of the old grade beams sets the depth of the new ones. A post-tension slab has steel cables running through it under tension, so the tie-in detail changes and nobody cuts into it casually. A pier-and-beam house, the kind you find in the Heights, Bellaire, and older Meyerland, is often easier to add onto because the structure is visible, but seventy years of pier settlement means the new section can't be allowed to settle at its own pace.",
          "Repair history matters too. A slab that's already sitting on a dozen steel piers doesn't behave like the slab next door. If your house has had foundation work, bring the paperwork. If there isn't any, we'll find out what's under there before adding weight to it.",
          "If you want the longer explanation of how each foundation type behaves on Houston soil, it lives on our foundation repair page. For the addition itself, the practical point is this: the existing foundation is measured first, and the new one is designed to match it.",
        ],
      },
      {
        heading: "The crack along the seam",
        paragraphs: [
          "Additions built without engineering fail in one place more than any other: the line where the new foundation meets the old one. A crack opens there a year or two after the work, usually after a wet winter and a dry summer, and it keeps growing.",
          "The mechanism is simple. The old slab has spent decades settling into an equilibrium with the clay under it. The new slab hasn't. If the two bear at different depths, or aren't tied together, they move independently and the seam opens. Doors near the addition stick, tile cracks in a straight line, and the homeowner is back at the start with a bigger bill.",
          "We prevent it by matching the bearing depth of the existing foundation and connecting old to new with rebar dowels epoxied into the existing slab, so the two sections behave as one. On lots with particularly active clay we may recommend deeper footings or a different foundation approach altogether, and we say so before the concrete is ordered.",
        ],
        image: {
          src: "/images/home-additions-1-foundation-tie-in.jpg",
          alt: "Rebar dowels epoxied into the edge of an existing Houston slab, extending into the formwork for a new room addition foundation",
          caption: "The tie-in detail that keeps the seam from opening: dowels set into the existing slab before the new section is poured.",
        },
      },
      {
        heading: "Second stories: the honest conversation about what a single-story house can carry",
        paragraphs: [
          "Second-story additions are the projects where the engineering question is most often skipped and where skipping it costs the most.",
          "A house built as a single story was engineered, or more often just built to habit, to carry one roof and nothing else. The exterior walls, the interior bearing walls, and the footings under them were all sized for that. Put a second floor on top and you've roughly doubled the load on every one of those elements. Sometimes the existing structure has enough margin to take it. Often it doesn't, and the difference isn't something you can see from the driveway.",
          "We measure. Footing widths and depths, stud spacing and species in the bearing walls, the headers over windows and doors, and the condition of all of it after however many decades it's been standing. Then we calculate what the new floor and roof will weigh and where that weight lands. The answer comes back one of three ways: the house can take it as-is, the house can take it with specific reinforcement, or the house can't reasonably take it and building out is the better path. All three are useful. The third one, delivered before you've paid for drawings, is the most useful of all.",
          "When reinforcement is needed, it usually means widening footings under the bearing walls, adding posts and beams to shorten spans, or sistering new studs onto the old ones. None of it is exotic. It just has to be sized to the actual gap between what's there and what's needed, and it has to happen before the second floor goes on, not after the cracks appear.",
        ],
        image: {
          src: "/images/home-additions-2-wall-reinforcement.jpg",
          alt: "Interior bearing wall in a Houston home with drywall removed, new studs sistered to the originals and a new beam on top, being prepared for a second-story addition",
          caption: "Reinforcing a bearing wall before the second floor goes on: sistered studs and a new beam sized for the added load.",
        },
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
        heading: "From first visit to final inspection",
        paragraphs: [
          "The first visit is an evaluation, and it's worth doing before you've committed to a floor plan. If you already have a design in mind, we'll tell you whether the house can support it. If you don't, we'll tell you what the house can support, which is a better starting point than a wish list. From there the project runs in a fixed order:",
        ],
        bullets: [
          "Evaluation: existing foundation and framing, house records, and a check of the lot against setbacks, deed restrictions, and the flood map.",
          "Structural design: foundation details for the new section and its tie-in, framing sizes and spans, beam and header schedules, and any reinforcement the existing house needs. Second stories get a full load analysis of the floor below. Everything is stamped.",
          "Permit: we prepare the structural portion and coordinate with your architect or designer if there is one. Since the design already accounts for the rules, this step is usually uneventful.",
          "Construction: we excavate and form the new foundation, pour to our own detail, frame the addition, tie the roof into the existing roofline, and carry it through finish. The crew is building from calculations written by the people supervising them.",
          "Inspections: foundation, framing, and final, at the points the city requires. We're on site for each.",
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
          "Additions are priced per square foot as a starting point. The number moves with what's inside the square footage and with what the existing house needs before the addition can go on. Houston-area planning ranges for the construction itself:",
        ],
        bullets: [
          "Ground-floor addition, builder-grade finish: roughly $150 to $200 per square foot.",
          "Mid-range finish: $200 to $250 per square foot. High-end finishes go beyond that.",
          "Second story: about a quarter more per square foot than building out, for the reinforcement and the complexity of working over an occupied house.",
          "Bathroom or kitchen: a fixed plumbing add on top, regardless of size.",
          "HVAC almost always needs extending or upgrading. Older homes often need an electrical panel upgrade.",
          "Engineering: a small fraction of the total, and the part that keeps the rest of the number from changing once construction starts.",
        ],
      },
      {
        heading: "A planning range before you talk to anyone",
        paragraphs: [
          "Our cost estimator on this site walks through the factors above for your specific project and gives you a range in about two minutes. It's a ballpark, not a quote, but it's built from the same logic we use when we price the real thing, and it's a better place to start a conversation with a contractor than a blank page.",
        ],
      },
      {
        heading: "The mistakes we get called in to fix",
        paragraphs: [
          "A fair amount of our addition work is on additions someone else already built. The patterns repeat.",
          "The most common is the seam crack described above, a new foundation poured next to an old one with no tie-in and no attention to bearing depth. The second most common is a second story on a house that couldn't carry it, which shows up as sagging floors upstairs, doors that won't close downstairs, and cracks radiating from the corners of windows in the bearing walls. Third is the garage conversion where nobody thought about the slab, so the new bedroom floor slopes toward the old garage door and the bathroom drains run uphill.",
          "Then there are the paperwork problems. An addition built without a permit, or with a permit but without stamped engineering, is a liability that surfaces at the worst possible time, usually during a sale when the buyer's inspector asks for documentation that doesn't exist. We can often produce an engineering evaluation of existing work after the fact, but it's more expensive and less certain than doing it right the first time, and sometimes what we find is that the work needs to be redone.",
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
      "Commercial buildouts and tenant improvements almost always touch structure somewhere: a wall coming out to open up a retail space, new equipment loads on an existing slab, a mezzanine, a rooftop unit landing on a roof that wasn't framed for it, or a change of occupancy that triggers a code review nobody budgeted for.",
      "We evaluate the existing structure, engineer whatever the buildout requires, and, being licensed and insured, can build the work ourselves rather than handing it off to a separate contractor.",
      "We work directly with landlords, property managers, and business owners who need a buildout completed on a lease timeline, with the structural engineering handled by the same firm doing the construction. This page covers where structure hides in a commercial project, how the Houston commercial permit process treats it, what it costs, and how to keep it from becoming the thing that delays your opening.",
    ],
    signs: [
      "Opening a retail, restaurant, or office space that needs structural changes",
      "A landlord or permitting office is requiring an engineer's review before buildout",
      "Adding equipment, mezzanines, or racking that adds load to an existing structure",
      "You want engineering and construction from a single licensed contractor",
    ],
    atAGlance: [
      "Structural engineering and construction for tenant improvements in retail, restaurant, office, medical, and light industrial space across the Houston metro.",
      "The usual structural triggers: openings in bearing or demising walls, equipment loads, mezzanines, rooftop units, storefront and dock door changes, racking, and changes of occupancy.",
      "Commercial permits in Houston go through plan review, and structural sheets need a Texas PE seal. Special inspections are often required for steel and concrete.",
      "Engineering for a typical TI structural item is a few days to two weeks. Plan review is the long pole, and it runs weeks, not days.",
      "One firm for the structural drawings and the structural construction, which is the part of a TI most likely to stall between an engineer and a contractor.",
    ],
    sections: [
      {
        heading: "Where structure hides in a tenant improvement",
        paragraphs: [
          "Most tenant improvement budgets are built around finishes, mechanical, electrical, and plumbing. Structure gets a line if someone remembered it. Then the architect's plan calls for an opening in what turns out to be a [bearing wall](/services/load-bearing-wall-removal), or the equipment schedule shows a walk-in cooler and a hood that need roof penetrations and a curb, or the city plan reviewer asks for a structural letter on a mezzanine the previous tenant built without one. The structural scope is rarely the largest part of a buildout. It's the part most likely to be discovered late.",
          "The items that come up most often in Houston TI work:",
        ],
        bullets: [
          "Openings in demising walls, exterior walls, and the occasional interior bearing line, to combine suites, add a storefront, or widen a pass-through.",
          "Rooftop equipment: HVAC units, kitchen exhaust fans, and condensers set on bar joist or metal deck roofs that need reinforcing or a frame between joists.",
          "Floor loads: commercial kitchen equipment, walk-in coolers, dental and medical chairs, imaging equipment, fitness racks, compact shelving, and safes on slabs or on elevated floors.",
          "Mezzanines, new or existing: storage platforms, office mezzanines, and the stairs and guards that go with them.",
          "Slab cuts and trenches for restaurant plumbing, floor drains, grease interceptors, and underslab electrical, especially in post-tensioned slabs.",
          "Storefront and dock changes: widening a door, adding an overhead door, or removing a section of tilt-wall or masonry.",
          "Storage racking and high-piled storage, which the fire code treats as its own permit and which puts point loads on slabs.",
          "Canopies, awnings, and pylon or wall signs, which are wind-load problems attached to someone else's building.",
        ],
      },
      {
        heading: "The buildings we work in",
        paragraphs: [
          "Houston's commercial stock is dominated by a few structural types, and each one changes how the same TI item gets solved. Single-story strip centers and pad sites are typically steel columns, open-web bar joists, and a metal roof deck, with tilt-wall concrete or CMU exterior walls and non-bearing steel stud partitions inside. Equipment on the roof and openings in the exterior walls are the usual questions there. Older masonry buildings in the Heights, Montrose, EaDo, and the near east and north sides carry the roof on the walls themselves, which turns a simple opening into a beam-and-bearing design and makes every wall a candidate for being structural.",
          "Multi-story office buildings are steel or concrete frames where the floor system, not the walls, is the constraint: a floor designed for fifty pounds per square foot of office loading has limits on where a file room, a gym, or a server room can go. Warehouses and flex space are the mezzanine and racking territory, with thick slabs that still have limits under a concentrated post. Restaurants and medical suites can be in any of these, and they bring the heaviest equipment and the most slab work.",
        ],
        image: {
          src: "/images/commercial-buildouts-1-bar-joist-survey.jpg",
          alt: "Structural engineer on a scissor lift in an empty Houston strip-center retail bay with the ceiling grid removed, examining open-web steel bar joists and the metal roof deck above",
          caption: "The first step in most commercial TI engineering: getting above the ceiling to see what the roof is actually made of, because the lease plan won't say.",
        },
      },
      {
        heading: "Change of occupancy: the trigger nobody budgets for",
        paragraphs: [
          "When a space changes from one use to another, the building code can require the structure to be reviewed for the new use even if nothing structural is being built. A retail bay becoming a restaurant, an office becoming a fitness studio, a warehouse becoming an event venue, a storefront becoming a daycare: each of these moves the space into a different occupancy classification with different floor loads, different fire separation rules, and sometimes different requirements for the roof under new equipment.",
          "The City of Houston's plan review will flag the change and can ask for a structural evaluation letter stating that the existing structure is adequate for the new loads, or identifying what has to be strengthened. This letter is straightforward when the structure is sound and the loads are similar. It's a design project when a second-floor office is becoming a gym. Either way, it's better to know at the lease negotiation stage than at plan review, and a short structural review before signing is one of the least expensive ways to avoid a bad lease.",
        ],
      },
      {
        heading: "Equipment loads, and why the cut sheet matters",
        paragraphs: [
          "Every piece of heavy equipment comes with a manufacturer's cut sheet showing its operating weight and footprint. That document is the whole structural question. A walk-in cooler is not heavy per square foot, but the compressor and condenser it needs on the roof are, and they vibrate. A commercial kitchen line concentrates weight along one wall where the slab may have a trench under it. A dental chair is modest until you add the patient, the delivery system, and the anchor loads. Compact rolling shelving in a records room is one of the heaviest things that goes into an office building, and it gets specified by a furniture vendor who never talks to an engineer.",
          "We ask for the equipment schedule and the cut sheets early, check them against the slab or the floor framing, and tell you which items need a pad, a reinforced area, a spreader frame on the roof, or a different location. Moving a piece of equipment ten feet on the plan is free. Reinforcing a floor after the equipment is installed is not.",
        ],
      },
      {
        heading: "Mezzanines",
        paragraphs: [
          "A mezzanine is a small building inside a building, and the code treats it that way. Beyond the steel or wood framing and its connections, there are area limits relative to the room below, stair and guard requirements, egress, and often a sprinkler question. Existing mezzanines that a previous tenant built are a frequent source of plan review comments, because they were rarely permitted and the new tenant inherits the problem when they apply for their own permit.",
          "For new mezzanines we design the framing, the columns and base plates, and the slab check under each column, and coordinate with the architect on the code items. For existing ones we evaluate what's there, document it, and design the reinforcement if it needs any. A surprising number of them are fine once someone has looked. A few are holding up storage on framing that was never meant for it.",
        ],
      },
      {
        heading: "Slab work in restaurants and medical suites",
        paragraphs: [
          "Restaurant buildouts cut more concrete than any other TI type: trenches for waste lines, floor drains, grease interceptors, and sometimes a lowered floor for a walk-in. Medical suites cut slabs for plumbing at every operatory and for underslab conduit. In a conventional slab this is routine. In a post-tensioned slab, common in Houston commercial construction since the 1980s, cutting without locating the tendons first can sever a cable under tens of thousands of pounds of tension, which is dangerous and expensive to repair.",
          "The structural scope for slab work is locating the tendons or rebar with scanning, laying out the cuts to avoid them, specifying how the slab is restored, and, where a tendon has to be crossed, designing the detail for it. This is a small engineering fee that protects a very large mistake.",
        ],
        image: {
          src: "/images/commercial-buildouts-2-restaurant-slab-trench.jpg",
          alt: "Restaurant tenant improvement in a Houston commercial space with a neatly cut concrete slab trench for plumbing running across the future kitchen, steel stud walls framed and a walk-in cooler box in the background",
          caption: "Restaurant slab work: the trench layout is designed around the slab's reinforcing, which in a post-tensioned slab means scanning before the saw touches the floor.",
        },
      },
      {
        heading: "How the commercial permit process treats structure",
        paragraphs: [
          "Commercial permits in the City of Houston go through a plan review that residential work mostly avoids. The drawing set is reviewed by several disciplines, and anything structural has to appear on sealed structural sheets or in a sealed letter from a Texas professional engineer. Reviewers issue comments, the design team responds, and the cycle repeats until the set is approved. Structural comments are a common reason a set goes back for a second round, usually because a structural item was drawn by the architect without engineering behind it.",
          "Once the permit is issued, the code requires special inspections for certain structural work: field welding, high-strength bolting, concrete placement, anchors in concrete, and masonry. These are third-party inspections separate from the city's, arranged by the owner or contractor and reported to the city before the certificate of occupancy. They add cost and scheduling, and they're often left out of early budgets. We identify which ones your project will need when we do the design, so they're in the schedule from the start.",
          "The suburbs each run their own process. Sugar Land, Pearland, Katy, and The Woodlands have their own plan review with their own timelines and their own quirks, and unincorporated Harris County has a lighter process with a stronger emphasis on floodplain and fire. We've worked through all of them.",
        ],
      },
      {
        heading: "Working with the landlord's team",
        paragraphs: [
          "Most commercial leases require landlord approval for structural work, and many landlords have their own architect or engineer who reviews tenant plans. That review goes faster when the structural drawings answer the questions the landlord's engineer will ask: what's being cut, what's carrying the load now, what will carry it afterward, and how the building's existing systems are protected. We produce drawings with that reviewer in mind, and we're available to talk to them directly, which usually resolves comments in a phone call rather than a round of revisions.",
          "Where the landlord is doing the structural work as part of a delivery condition, and the tenant's contractor is doing the rest, the scope boundary has to be clear on paper. Openings, roof reinforcement for equipment, and slab restoration are the items that most often fall in the gap between the two contracts.",
        ],
      },
      {
        heading: "Building in an occupied center",
        paragraphs: [
          "Most TI work happens with neighbors on both sides who are open for business. Demolition of a shared wall, roof penetrations over an operating restaurant, and concrete cutting next to a medical office all have to be scheduled around the people who are already there. Noise and dust limits, after-hours work, fire watch when sprinklers are shut down, and protection of the neighbor's finishes are part of the plan, and the property manager will expect to see them addressed before approving a start date.",
          "Structural work is the loudest and dustiest part of most buildouts, so it tends to be the part that gets scheduled for nights and weekends. That affects cost and the timeline, and it's worth knowing when you're building the schedule.",
        ],
      },
      {
        heading: "Racking, high-piled storage, and warehouse floors",
        paragraphs: [
          "Warehouse and flex tenants bring their own structural questions. Storage racking over a certain height needs its own permit under the fire code, and the racks themselves are designed by the rack manufacturer, but the slab under them is the tenant's problem. A loaded pallet rack puts several thousand pounds on each base plate, and the slab's thickness, its reinforcing, and the soil under it determine whether that's fine or whether the slab will crack and settle under the rack legs.",
          "We review the rack layout against the slab, specify base plate sizes or bearing pads where needed, and provide the structural letter the racking permit requires. The same applies to mezzanine-style pick modules, conveyor systems, and the occasional overhead crane.",
        ],
        image: {
          src: "/images/commercial-buildouts-3-warehouse-mezzanine.jpg",
          alt: "New steel mezzanine with a guardrail and stair inside a Houston warehouse, office framing going in beneath it and pallet racking along the far wall",
          caption: "A warehouse mezzanine: the framing, the columns, and the slab under each column designed together, with the stair, guards, and area limits coordinated with the code.",
        },
      },
      {
        heading: "Storefronts, canopies, and signs",
        paragraphs: [
          "Changing the front of a space is usually an architectural decision with a structural consequence. Widening a storefront opening in a tilt-wall panel or a CMU wall means a new header and often a check of the panel's ability to span around the larger hole. Adding a canopy attaches a wind-loaded element to a building that wasn't detailed for it. A wall sign or a pylon sign is a wind and foundation problem the sign company's drawings may not fully address, and the city will ask for engineering on anything over a modest size.",
          "These are small design items individually. They matter because they're on the critical path to opening: the storefront can't be glazed until the header is in, and the sign permit can't be issued without the structural letter.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Structural engineering for a typical TI item, such as a single opening, an equipment load check, a rooftop unit frame, or a racking letter, is generally in the low four figures, and a full structural sheet set for a buildout with several items is priced by scope. A change of occupancy evaluation letter for a sound building is at the lower end of that range. Mezzanine design depends on size and use.",
          "Construction costs vary too widely by item to summarize usefully, but the pattern is consistent: the structural construction is a modest share of most TI budgets, and the cost of not engineering it, in plan review delay, a stopped job, or a repair, is much larger. A structural review of the space before the lease is signed, or at least before the architect finishes the plans, is the cheapest money in the project.",
        ],
      },
      {
        heading: "Timeline, and where the structure fits",
        paragraphs: [
          "Engineering for individual TI items takes a few days to two weeks. A full structural set for a larger buildout takes two to four weeks alongside the architect's drawings. Plan review is the long pole: several weeks in the City of Houston for a commercial set, with structural comments adding a cycle if the first submission wasn't complete. Special inspections are scheduled during construction and have to be closed out before the certificate of occupancy.",
          "The practical advice is to get the structural questions answered before the architectural set is finished, so the structural sheets go in with the first submission rather than as a response to comments. That single decision saves more time than anything that happens during construction.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a structural engineer for a tenant buildout?",
        a: "If the buildout includes any opening in a wall, any equipment on the roof, heavy equipment on the floor, a mezzanine, a slab cut in a post-tensioned building, racking, a sign or canopy, or a change of occupancy, yes. The City of Houston's plan review will ask for sealed structural documents on those items. Many buildouts that seem to be all finishes turn out to include at least one of them.",
      },
      {
        q: "Can you tell me if a space will work before I sign the lease?",
        a: "Usually, with a short review of the space and your equipment list. We look at the roof framing, the slab, the wall types, and the occupancy change if there is one, and tell you what structural work the buildout will likely need. It's a small fee compared to the cost of finding out after the lease is signed.",
      },
      {
        q: "What are special inspections and do I have to pay for them?",
        a: "Special inspections are third-party inspections the building code requires for certain structural work: welding, high-strength bolting, concrete, anchors, and masonry among them. They're separate from the city inspector's visits and are arranged and paid for by the owner or contractor. Whether your project needs them depends on the structural scope, and we identify them during design so they're in the budget.",
      },
      {
        q: "The previous tenant built a mezzanine. Is it my problem now?",
        a: "Often, yes. When you apply for your own permit, the plan reviewer will see the mezzanine and ask for documentation. If none exists, an engineer has to evaluate it and either document that it's adequate or design the reinforcement. It's usually better to address this before submitting than to have it come back as a comment.",
      },
      {
        q: "Can the structural work happen while the neighbors are open?",
        a: "Yes, with planning. Demolition, roof penetrations, and concrete cutting are usually scheduled for nights or weekends in an occupied center, with dust and noise controls and, when sprinklers are shut down, a fire watch. The property manager will typically want to see that plan before approving a start date.",
      },
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
      "Most of the beams that go into Houston homes are wood or engineered lumber, and that's the right call for most openings. Steel is for the jobs wood can't do: a span too long for lumber at any reasonable depth, a floor and a roof both landing on one line, a beam that has to disappear into a shallow ceiling, or an existing beam that's already sagging and needs to be replaced with something stiffer in the same space.",
      "We engineer the beam, the columns under it, the footings under those, and every connection in between, and then we fabricate and install it ourselves as a licensed contractor. One firm owns the calculation and the result, which matters more with steel than with wood, because a steel beam that's set wrong is expensive to fix and hard to spot once it's covered.",
      "This page walks through when steel is the right answer, what goes into sizing and installing one, what it costs in the Houston area, and what to look for if you're comparing bids. If your question is still whether the wall is bearing at all, start with our [load-bearing wall removal](/services/load-bearing-wall-removal) page; this one picks up where the answer is yes and the beam has to be steel.",
    ],
    signs: [
      "Removing a load-bearing wall and replacing it with a beam",
      "An existing beam is undersized or deflecting",
      "Widening an opening beyond what current framing supports",
      "You want the engineer and the installer to be the same company",
    ],
    atAGlance: [
      "Steel goes where wood runs out: long spans, floor plus roof loads, shallow ceilings, and beams that are already sagging.",
      "We engineer, fabricate, and install. Beam, columns, footings, and connections are designed together, by the same people who set them.",
      "Typical residential steel openings run from the high single digits into the low tens of thousands installed, with the beam itself a smaller share than most people expect.",
      "Fabrication takes one to three weeks after the design is final. Installation is usually one to three days.",
      "Inside Houston and in the suburbs, structural steel needs a permit and a framing inspection. Bolted or welded connections may need a special inspection on top of that.",
    ],
    sections: [
      {
        heading: "When the beam has to be steel",
        paragraphs: [
          "Wood and LVL beams get deeper as the span gets longer or the load gets heavier. At some point the beam that would work is deeper than the ceiling can hide, or it can't be found at all. That point comes sooner than people think when a second floor is involved, because a beam carrying a bedroom floor and a roof is doing several times the work of one carrying a roof alone.",
          "Steel is roughly ten times stiffer than lumber for the same depth, so it solves problems that are really about depth. A twenty-foot opening under a two-story house that would need a sixteen-inch LVL can often be done in a ten-inch steel section. When the ceiling joists are only ten inches deep and the homeowner wants a flat ceiling, that difference is the whole project.",
          "The other trigger is a concentrated load. A post from a beam above, a stair stringer, or the end of a girder truss landing partway along the span puts a point load on the beam that wood handles poorly. Steel takes it with a web stiffener and a few calculations.",
        ],
        bullets: [
          "Spans past sixteen to eighteen feet with a floor above, or past twenty-two feet with roof load only.",
          "A flush beam where the joists are 2x10 or shallower and a deeper lumber beam won't fit inside the ceiling.",
          "A point load partway along the span, from a post, a stair, or a girder above.",
          "An existing wood beam or header that has sagged and needs to be replaced without deepening the soffit.",
          "Openings in brick veneer walls or under masonry, where deflection has to stay very small to keep the brick from cracking.",
        ],
      },
      {
        heading: "The sections we use, and what each one is for",
        paragraphs: [
          "Most residential steel is one of four shapes, and the choice is about the ceiling and the connections as much as the load.",
        ],
        bullets: [
          "Wide-flange beams (W-shapes, sometimes called I-beams): the default for spans and heavy loads. A W8 or W10 covers most single-family openings; a W12 shows up under two stories or past twenty-four feet.",
          "Rectangular tube (HSS): the same depth carries a bit less than a W-shape, but the flat sides make it easy to bolt lumber to and it resists twisting on its own, which simplifies the bracing. Common for flush beams and for beams with joists framing in from both sides.",
          "Flitch beams: a steel plate sandwiched and bolted between two pieces of lumber. Lighter and easier to nail into than a bare steel beam, and a practical way to add capacity to an existing wood beam without pulling it out.",
          "Channels and angles: for reinforcing an existing beam in place, for lintels over openings in brick, and for the odd corner where a full W-shape won't fit.",
        ],
      },
      {
        heading: "Sizing is mostly about stiffness, not strength",
        paragraphs: [
          "A steel beam almost never fails by breaking. It fails, in the sense that matters to a homeowner, by bending more than the finishes above it can tolerate. Drywall ceilings crack at a deflection around one three-hundred-sixtieth of the span. Tile floors, plaster, and brick veneer crack sooner. So the design question is rarely \"can this beam carry the load\" and almost always \"how much does it move under the load, and what's sitting on it that will notice.\"",
          "That's why two engineers can look at the same opening and specify different beams. One is designing to the code minimum for strength; the other is designing so the tile floor upstairs doesn't crack in three years. We design to the second standard, and we'll tell you when a slightly heavier section buys a lot of margin for very little money, because with steel it usually does.",
          "The top flange of a steel beam also has to be held straight along its length or the beam can roll sideways under load. In a house, the joists or a bolted wood nailer usually do that job, but it has to be detailed, not assumed. A beam that's carrying load with nothing bracing its top flange is a real thing we've been called to look at.",
        ],
      },
      {
        heading: "The load doesn't stop at the beam",
        paragraphs: [
          "Every pound the beam picks up goes to its two ends, and then has to keep going down to the ground. On a wood beam the posts are often a few 2x4s nailed together and the load spreads out enough that the existing slab or sill can take it. Steel beams carry more, concentrate it into two points, and the ends of the beam are where projects go wrong.",
          "Under each end there's a column, usually a steel pipe or square tube in a house, sometimes a built-up wood post when the load allows. Under the column there has to be something that can take a load that may be several tons. On a slab foundation that often means cutting the slab, digging a pad footing, and pouring it with rebar before the column goes in. On a pier-and-beam house it means a new pier or a spread footing under the floor. On a two-story home the column may need to continue through the first floor to reach the foundation, which means a post inside a wall below.",
          "We check all of this on the site visit and design it as part of the beam, not as an afterthought. When another contractor's bid is much lower than ours for the same beam, the footings are very often what's missing.",
        ],
        image: {
          src: "/images/steel-beam-installation-1-carrying-beam-in.jpg",
          alt: "Two workers guiding a long steel wide-flange beam on a rolling lift through the front doorway of a Houston home, blankets protecting the door frame and the floor covered with plywood",
          caption: "Getting the steel into the house is its own task: a twenty-foot W10 weighs over four hundred pounds and has to make it through the door, around the corners, and up onto the shoring.",
        },
      },
      {
        heading: "Getting four hundred pounds of steel into a finished house",
        paragraphs: [
          "A W10x22 weighs twenty-two pounds per foot. A twenty-foot beam is four hundred and forty pounds of rigid steel that has to come through a door, turn a corner, and go up. That's the part of the job homeowners don't picture, and it drives more of the schedule and the cost than the beam itself.",
          "For most single-story homes the beam comes in on rollers or a beam lift through the widest opening, often a patio door or the garage, with the path cleared and floors protected. When the geometry doesn't allow it, the beam is fabricated in two pieces with a bolted splice plate designed for the moment at that point, and the pieces are joined in place. Where neither works, a small crane sets the beam through a temporarily opened section of roof or wall, which sounds dramatic and is a routine half-day for a crew that does it.",
          "We plan the route before we order the steel, and we'll tell you at the design stage whether your beam is a carry-in, a splice, or a crane pick, because each one changes the price.",
        ],
      },
      {
        heading: "Setting the beam",
        paragraphs: [
          "The ceiling load is picked up on temporary shoring on both sides of the line before anything comes out. The old wall or the old beam is removed. The columns go in first, on their footings or bearing plates, and get plumbed. The beam is lifted onto the columns with jacks or a lift, its elevation is set, and it's connected at each end. Only then does the load come off the shoring and onto the steel, slowly, while someone watches the joists above.",
          "For a flush beam the joists have to be cut back and hung from the beam. That means each joist gets a hanger onto a wood nailer bolted to the beam, or a hanger welded to the steel, and the cuts have to be square and the hangers tight or the ceiling will show a line where the joists meet the beam. It's slower than a dropped beam, and it's where a careful crew earns its fee.",
        ],
        image: {
          src: "/images/steel-beam-installation-2-setting-beam.jpg",
          alt: "Crew setting a steel beam onto a square tube column between two rows of adjustable shoring posts in a Houston home, one worker checking the beam with a level while another tightens the bearing plate bolts",
          caption: "The beam goes onto its columns while the shoring still carries the ceiling. The load transfers to the steel only after every connection is tight and the elevation is checked.",
        },
      },
      {
        heading: "Connections are where bad steel jobs fail",
        paragraphs: [
          "A correctly sized beam sitting on a badly detailed connection is an unsafe beam. The pieces that matter:",
        ],
        bullets: [
          "Bearing plates at each end so the beam's load is spread over the column cap or the masonry, not concentrated on a flange edge.",
          "Column caps and bases: welded plates with bolt holes, so the beam is bolted to the column and the column is bolted to its footing. Steel that's just resting on steel is not a connection.",
          "Anchor bolts into the footing, set in the concrete or epoxied in, not concrete screws.",
          "A pressure-treated or kiln-dried wood nailer bolted to the top flange on a regular spacing, which is what the joists, hangers, and eventually the drywall attach to.",
          "Web stiffeners under any point load and at the bearings on deeper beams, to keep the web from buckling.",
          "Field welds, where used, done by a certified welder with the finish and fireproofing around them addressed. We prefer bolted connections in occupied homes because welding inside a wood-framed house is a fire risk and a smell the homeowner lives with for a week.",
        ],
      },
      {
        heading: "Flush or dropped, and what each one asks of you",
        paragraphs: [
          "A dropped beam hangs below the ceiling and gets wrapped in drywall or wood. It's the simpler install: the joists stay where they are and rest on top of the beam. A flush beam sits up inside the joist space so the ceiling runs flat across the opening. It's the look most people want in a kitchen, and it costs more, because the joists are cut and hung, the beam depth is limited to the joist depth, and the coordination with electrical and ducts running through the ceiling is tighter.",
          "There's a middle option that comes up often in older Houston homes with low ceilings: a partially recessed beam, where the steel sits a few inches into the joist space and drops a few inches below. It keeps the soffit shallow enough to wrap into a low bulkhead that reads as a design line rather than a beam. We'll draw all three for you when the ceiling depth makes it a real choice.",
        ],
        image: {
          src: "/images/steel-beam-installation-3-finished-wrapped-beam.jpg",
          alt: "Finished living space in a Houston home with a wide opening between the kitchen and dining area, a shallow drywall-wrapped dropped beam across the span and a slim wrapped column at one end",
          caption: "A dropped steel beam wrapped in drywall with a matching wrapped column. Shallower than the lumber beam that would have carried the same span, which is usually why steel was chosen.",
        },
      },
      {
        heading: "Replacing a beam that's already failing",
        paragraphs: [
          "A steady share of our steel work is not new openings but old ones: a wood beam or a doubled 2x12 header that someone installed years ago, now sagging an inch or more at midspan, with the drywall cracked above it and doors sticking on either side. Sometimes the original work was permitted and simply undersized for the load. Often it wasn't permitted at all.",
          "The fix starts with measuring the sag and looking at what's above. If the deflection is recent and the framing above is sound, we can usually jack the ceiling back toward level slowly over a day or two, then set a steel beam in the space and let the load down onto it. If the framing above has taken a set over years, forcing it fully level can crack more than it fixes, and the honest plan is to stop the movement and accept some of what's there. We'll tell you which case you're in before we start.",
          "Where the existing beam can stay but needs help, a flitch plate bolted to its side, or a steel channel bolted beneath it, can add the missing capacity without the full removal. That's a cheaper repair, and it's the right one when the numbers work.",
        ],
      },
      {
        heading: "Steel in additions and second stories",
        paragraphs: [
          "Additions bring their own steel. A second-story addition often needs a transfer beam where the new walls above don't line up with the walls below. Wide garage door openings that now have a bedroom over them need a beam that most lumber can't provide at a header depth. A covered patio with a cantilevered roof or a room over a carport is a steel job almost every time.",
          "In these projects the beam is part of a larger structural design, and we coordinate it with the foundation work, the framing plan, and the addition's permit set so it's engineered once rather than patched in later. If you're at the planning stage of an addition, that conversation belongs in the addition design, and our home additions page covers how that process runs.",
        ],
      },
      {
        heading: "Corrosion, fire, and the questions nobody asks",
        paragraphs: [
          "Steel inside a conditioned house doesn't rust in any meaningful way, but it comes from the fabricator primed anyway, and any steel exposed to weather, in a carport or a covered porch, gets a proper exterior coating or galvanizing. Steel in a garage ceiling that separates the garage from living space has to be protected for fire rating like everything else on that line, usually with the same drywall that covers it. Steel loses strength quickly in a fire, sooner than heavy timber, so the wrap is not decorative.",
          "One more that comes up: a steel beam does not make a house \"stiffer\" in an earthquake or a hurricane in any general sense. It carries the gravity load on its line. Lateral bracing for wind is a separate design question, and we'll raise it if opening a wall removes shear capacity the house was counting on.",
        ],
      },
      {
        heading: "What it costs in Houston",
        paragraphs: [
          "The steel itself is the smaller share. Fabricated structural steel in the Houston market runs a few dollars per pound delivered, so a twenty-foot W10 with plates and columns is typically a low-four-figure material cost. The rest is the engineering, the footings, the shoring and demolition, the labor to move and set it, a crane if one is needed, and the finish work afterward.",
          "As planning ranges, not quotes: a short steel header replacement in a single-story house with existing bearing is often in the mid four figures installed. A typical twenty-foot flush or dropped beam under a single story with new columns and pad footings usually lands in the high single-digit thousands to the low teens. A two-story load, a splice, a crane, or a long flush install with dozens of joist hangers can push a residential job into the twenties. Engineering alone, when someone else is building, is generally under fifteen hundred dollars for a single beam and its supports.",
          "We give a fixed price after the site visit, when we know the span, the load, the route in, and what's under the ends. Prices quoted before anyone has looked at the footings are guesses.",
        ],
      },
      {
        heading: "How long it takes",
        paragraphs: [
          "Plan on about a week from the site visit to a final drawing. Fabrication is the part people don't budget time for: one to three weeks from a final drawing, depending on the shop's backlog, and longer if the section is unusual. Footings, if needed, go in before the beam arrives and need a few days to cure. The install itself is one to three days. Finish work follows on its own schedule.",
          "End to end, plan on four to six weeks from the first call to a wrapped beam for a straightforward job, and allow for the permit review on top of that inside the City of Houston.",
        ],
      },
      {
        heading: "What the inspector looks at",
        paragraphs: [
          "Structural steel is permitted like any other structural change, and the framing inspection covers the beam, the columns, and the connections before they're closed in. Where the design calls for field welding or high-strength bolting, the code can require a special inspection by a third party, separate from the city's, to verify the welds or the bolt tension. We tell you up front whether your job needs one and we schedule it. It's a modest cost and it's the only independent check that the connections match the drawing.",
          "Keep the stamped drawing, the permit, and the inspection record. A steel beam is a selling point when a buyer's inspector sees the paperwork and an open question when they don't.",
        ],
      },
      {
        heading: "One firm for the numbers and the install",
        paragraphs: [
          "The engineering and the construction can be bought separately, and if you have a contractor you trust, we'll design the beam and hand off the drawing. Where we think it pays to keep both under one roof is exactly where steel gets hard: the beam that has to be spliced, the column that has to reach a footing through a finished floor, the flush install with a tight ceiling. In those jobs a question from the crew gets answered by the engineer who drew it, on the same day, and nothing gets covered up while waiting for a callback.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a steel beam always better than an LVL?",
        a: "No. For most single-story openings under about eighteen feet, an LVL is lighter, cheaper, easier to nail into, and does the job. Steel earns its cost when the span, the load, or the ceiling depth push past what lumber can do, or when an existing wood beam has already sagged and the replacement has to be stiffer in the same space.",
      },
      {
        q: "Can a steel beam be installed without a crane?",
        a: "Usually. Most residential beams under about five hundred pounds come in through a door or the garage on rollers or a beam lift and are jacked into position. When the route doesn't allow it, the beam is fabricated in two pieces with a bolted splice. A crane is the last option, and when it's needed it's typically a few hours of work rather than a full day.",
      },
      {
        q: "Will a steel beam make my ceiling flat?",
        a: "It can, if the beam is installed flush inside the joist space and the joists are hung from it. That's the more expensive install, and the beam depth is limited to the depth of your joists. A dropped beam below the ceiling is simpler and cheaper, and it's wrapped to look finished. We'll show you both options for your ceiling depth before you decide.",
      },
      {
        q: "Do I need new footings for a steel beam?",
        a: "Often, yes. A steel beam concentrates the load into two points, and the ends usually carry more than an ordinary slab or sill was built for. On a slab that means cutting a small area and pouring a reinforced pad footing under each column. On a pier-and-beam house it means a new pier or footing under the floor. We determine this at the site visit, and a bid that doesn't mention footings is worth asking about.",
      },
      {
        q: "My existing beam is sagging. Does it have to come out?",
        a: "Not always. If the beam can stay and just needs more capacity, a steel flitch plate bolted to its side or a channel bolted beneath it can add what's missing without removing it. When the sag is large, the beam is badly undersized, or the ceiling has to be recovered to level, replacing it with a steel section is the cleaner fix. We measure the deflection and look at what's above before recommending either.",
      },
    ],
  },
];
