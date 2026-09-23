import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import CostEstimatorCTA from "@/components/CostEstimatorCTA";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Home Addition Questions Houston Homeowners Ask",
  description:
    "Straight answers to the questions people actually ask before adding on: permits, foundations, HOAs, floodplains, timelines, garage conversions, living through construction, and why quotes vary so much.",
  openGraph: {
    images: [{ url: "/images/home-additions.jpg", width: 1600, height: 900 }],
  },
};

type QA = { q: string; a: string[] };
type Group = { heading: string; items: QA[] };

const groups: Group[] = [
  {
    heading: "Before you start",
    items: [
      {
        q: "What is the first step in adding on to a house?",
        a: [
          "Finding out what your existing house can carry. Not the floor plan, not the finishes, not the contractor. The foundation and the framing you already have decide what is possible and what it costs, and everything else is drawn around that answer.",
          "That is a site visit and a set of measurements, and it takes a couple of hours. Homeowners who do it first get one design that works. Homeowners who do it last get a beautiful set of plans and then a conversation about why the plans have to change.",
        ],
      },
      {
        q: "Should I add on or should I move?",
        a: [
          "This is a money question with a structural input. Adding on usually makes sense when you like where you live, the lot has room, and the house is sound enough that you are paying for new space rather than for fixing old problems. It makes less sense when the existing structure needs significant work before it can carry anything new, because then a large share of the budget buys you nothing visible.",
          "An evaluation tells you which of those two you are in. It is a small cost compared with committing to either direction and finding out later.",
        ],
      },
      {
        q: "Why do addition quotes vary so much between contractors?",
        a: [
          "Usually because they are not pricing the same job. One bid includes the structural engineering, the permit, the foundation work, and the finish carpentry where the new roof meets the old one. Another assumes someone else handles all of that.",
          "Before comparing totals, compare the scope line by line and compare the allowances, the placeholder amounts for finishes you have not chosen yet. A low allowance makes a bid look cheaper than it will be. The other common gap is what happens when something unexpected turns up once the walls are open, which on an older house is not a rare event.",
        ],
      },
    ],
  },
  {
    heading: "Structure and foundation",
    items: [
      {
        q: "Do I need a structural engineer for a home addition?",
        a: [
          "For anything that adds load to the existing house, yes, and the permit office will generally require it. A new foundation tying into an old one, a second floor over walls built for one story, a wide opening cut into an exterior wall: each of those is a structural design, not a framing decision to be made on site.",
          "Detached structures with their own foundation still need engineering for the foundation and the connections, but they do not raise questions about what the old house can carry. Our [home additions page](/services/home-additions) covers where the engineering sits in the process.",
        ],
      },
      {
        q: "Will my foundation need work before I can add on?",
        a: [
          "Sometimes, and it depends on what you are adding and what the foundation is doing now. A detached casita on its own slab asks nothing of your existing foundation. A second story asks a great deal of it, because the footings under your bearing walls were sized for one floor and a roof.",
          "The honest sequence is to measure the existing foundation first: elevations across the floor, the condition of the slab or the piers, and the drainage around the house. If it is moving now, it will move more under additional weight, and that gets addressed before anything goes on top rather than after.",
        ],
      },
      {
        q: "Can I add a second story to a house on a slab?",
        a: [
          "Often yes. A slab foundation is not a disqualifier by itself. What matters is how thick the slab is, where its grade beams run, what is under them, and whether the bearing walls above them are framed to carry more.",
          "In Houston the soil under the slab matters as much as the slab. Expansive clay moves with moisture, and a foundation that has been keeping up with one story may behave differently under two. That is exactly what the evaluation is for. Our [second story addition cost guide](/guides/second-story-addition-cost) walks through how this drives the price.",
        ],
      },
      {
        q: "Why does a crack appear where the addition meets the old house?",
        a: [
          "Because two foundations poured decades apart do not move together unless they were designed to. The new slab is curing and settling on its own schedule while the old one keeps doing what it has been doing for thirty years, and the seam between them is where the difference shows.",
          "This is preventable, and the prevention is in the detail: dowels tying the new section to the old, matched bearing depths, and drainage that does not dump water at the joint. It is one of the most common repairs we get called to fix on additions built without engineering.",
        ],
      },
      {
        q: "Can I put a bathroom upstairs where there was never plumbing?",
        a: [
          "Yes, and there are two separate questions in it. The plumbing question is about routing supply and waste down through the existing house and finding a path for a vent, which is usually solvable and occasionally awkward. The structural question is about weight: a tiled bathroom with a tub is one of the heaviest rooms in a house, and the floor framing under it is sized for stiffness so the tile does not crack.",
          "Neither is a reason to avoid it. Both are reasons to decide the location on paper rather than on site.",
        ],
      },
    ],
  },
  {
    heading: "Permits, rules and the neighbors",
    items: [
      {
        q: "Do I need a permit to add a room to my house in Houston?",
        a: [
          "Yes. Adding conditioned space, changing the foundation, altering the roof structure, or cutting a new opening in a bearing wall all require a building permit, and the submission generally has to include sealed structural drawings.",
          "The suburbs each run their own process. Bellaire, West University Place, Sugar Land, Katy and the rest have their own building departments with their own timelines, and a contractor who works mostly inside the City of Houston is not automatically familiar with them. Ask who is pulling the permit before work starts.",
        ],
      },
      {
        q: "Houston has no zoning. Does that mean I can build whatever I want?",
        a: [
          "No, and this is the most expensive misunderstanding in Houston remodeling. The city does not have a traditional zoning code, but it does have development regulations covering things like lot coverage, setbacks and parking, and it enforces private deed restrictions where they exist.",
          "Deed restrictions are the ones that catch people. They are recorded against the property, they can limit height, square footage, materials and where you may build on the lot, and they are often stricter than anything the city would impose. Read yours before you design anything.",
        ],
      },
      {
        q: "Do I need HOA approval for an addition?",
        a: [
          "If your neighborhood has an active association, almost certainly, and it is a separate approval from the city permit. Many require submission to an architectural review committee, which meets on its own schedule and can ask for changes to elevations, materials and roof lines.",
          "Start that process early. It runs in parallel with engineering and permitting, and the thing that most often delays an addition is not the structure. It is waiting on an approval nobody started on time.",
        ],
      },
      {
        q: "Can I add on if my house is in a floodplain?",
        a: [
          "Usually yes, with extra rules. Properties in a mapped flood zone are subject to elevation requirements, and once the value of the work passes a threshold relative to the value of the structure, the rules can require the whole house to be brought up to current flood standards rather than just the new part.",
          "That threshold is where floodplain projects turn from an addition into a much larger project, so it is worth establishing before the design is finished. Check your flood zone at the start, not at permit submission.",
        ],
      },
      {
        q: "How close to my property line can I build?",
        a: [
          "That depends on your setbacks, which come from the city's development regulations, your plat, and any deed restrictions on the property. The three do not always agree, and the most restrictive one wins.",
          "There is also a practical limit that is not on any map. Building close to a property line on expansive clay means excavation and foundation work near your neighbor's house, which is worth documenting before you start.",
        ],
      },
      {
        q: "What happens if my addition was never permitted?",
        a: [
          "It surfaces when you sell. The buyer's inspector sees space that does not match the county records, the buyer's lender or insurer asks questions, and what was a saved permit fee becomes a price negotiation you are on the wrong side of.",
          "Unpermitted work can often be resolved after the fact, but it means opening up finished work so an engineer and an inspector can see what is behind it. That is far more expensive than permitting it in the first place. If you bought a house with an addition of unknown origin, having it evaluated and documented is worth doing before you are under contract to sell.",
        ],
      },
    ],
  },
  {
    heading: "Cost, value and timing",
    items: [
      {
        q: "How much does a home addition cost in Houston?",
        a: [
          "It is priced per square foot, and the range is wide because the structure underneath drives it more than the size does. A ground-floor addition on its own new foundation sits at the lower end. A second story, which requires reinforcing the house below before anything goes on top, sits well above it.",
          "For a planning number in a couple of minutes, our [cost estimator](/cost-estimator) walks through the type, the size and the finish level and gives you a range. A real number comes after someone has looked at the foundation.",
        ],
      },
      {
        q: "How much value does an addition add to my house?",
        a: [
          "Enough to matter, rarely all of it. The usual pattern is that a well-built addition returns a meaningful share of its cost at resale, and the share is better when the addition suits the house and the street than when it is unusually large or unusual in style for the neighborhood.",
          "Two things reliably reduce the return: work that was never permitted, and an addition that reads as an add-on rather than part of the house. The second is a design and finish question, and it is why matching the brick, the roof line and the window proportions is worth the trouble.",
        ],
      },
      {
        q: "How long does an addition take from first call to finished?",
        a: [
          "Plan in three parts. Design and engineering take a few weeks. Permitting adds anywhere from a few days to a couple of months depending on the city and whether you are in a floodplain. Construction runs from about two months for a modest ground-floor addition to four months or more for a second story.",
          "The delays that actually happen are rarely structural. They are permit review cycles, HOA approvals, and finish materials ordered too late. All three are avoidable by starting them earlier than feels necessary.",
        ],
      },
      {
        q: "When is the best time of year to build in Houston?",
        a: [
          "There is no bad season, but there are seasonal risks worth planning around. Concrete work and anything involving an open roof are weather dependent, and Houston rain can push a foundation pour by a week with no warning. Hurricane season is the one to think about if your project involves taking the roof off, because a house that is open needs to be dried in quickly.",
          "In practice this affects sequencing more than start dates. A good schedule puts the weather-sensitive phases where they can absorb a delay.",
        ],
      },
    ],
  },
  {
    heading: "Living through it",
    items: [
      {
        q: "Can I live in the house during an addition?",
        a: [
          "Usually yes for a ground-floor addition, because most of the work happens outside the existing walls until the connection is made. A second story is harder, since the roof comes off and the house is open for a stretch, and many families choose to be elsewhere for that phase.",
          "What makes it liveable is planning: the work zone sealed with plastic barriers, floors protected along the path from the door, HVAC returns in the work area covered so dust does not circulate, and agreed work hours. Ask which days will be loud, dusty, or without water and power.",
        ],
      },
      {
        q: "Will my existing HVAC handle the new space?",
        a: [
          "Often not, and it is worth checking early because the answer changes the budget. A system sized for the original square footage may not keep up with more of it, particularly a second floor in a Houston summer.",
          "Sometimes the fix is extending ductwork, sometimes it is a second system or a mini-split for the new area. The reason to settle it during design is that ducts and equipment need space, and finding that space after the framing is up is how soffits appear in rooms that were supposed to have flat ceilings.",
        ],
      },
      {
        q: "Can I convert my garage into a living space instead?",
        a: [
          "Often, and it is usually the cheapest way to add conditioned square footage since the foundation, walls and roof already exist. The catches are specific: a garage slab is typically thinner than a house slab and slopes toward the door, so it needs a leveling layer; the wall between the garage and the house is usually a fire separation with its own code rules; and you lose covered parking, which some deed restrictions and HOAs will not allow.",
          "Worth checking your deed restrictions before you get attached to the idea.",
        ],
      },
      {
        q: "What is an ADU or casita, and can I build one in Houston?",
        a: [
          "A detached secondary dwelling on the same lot, sometimes called a casita, a garage apartment or a guest house. Structurally it is a small new building: its own foundation, its own framing, its own connections to utilities, and no dependence on the main house.",
          "Whether you can build one depends on your lot size, your setbacks and, again, your deed restrictions, which in some Houston neighborhoods prohibit a second dwelling outright. The structural side is straightforward. The paperwork side is where these projects live or die.",
        ],
      },
    ],
  },
];

const allQAs = groups.flatMap((g) => g.items);

// Inline internal links written as [anchor](/path) inside answer text.
function renderInline(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    return (
      <Link key={i} href={m[2]} className="text-[#0B1F3A] underline hover:no-underline">
        {m[1]}
      </Link>
    );
  });
}

export default function HomeAdditionQuestionsGuidePage() {
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQAs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a.join(" ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <PageHero
        eyebrow="Guide"
        title="Home Addition Questions Houston Homeowners Ask"
        subtitle="The questions we get on the phone, answered the way we answer them on the phone. Permits, foundations, deed restrictions, timelines, and what actually goes wrong."
        ctaLabel="Get a Free Home Addition Cost Estimate"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <p className="mb-5">
              Almost every addition starts the same way. Someone has run out of room, does not want to move, and
              has a rough idea of what they want. What they do not have is a sense of which decisions are
              expensive, which are reversible, and which ones need to be made before an architect draws anything.
            </p>
            <p className="mb-5">
              These are the questions we hear most, grouped roughly in the order they come up. If yours is not
              here, call {BUSINESS.phone} and ask it.
            </p>

            <div className="mb-8 rounded-sm border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">On this page</div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {groups.map((g) => (
                  <li key={g.heading} className="flex items-start gap-2">
                    <span className="mt-0.5 text-orange-600">▸</span>
                    <span className="text-slate-700">
                      {g.heading}{" "}
                      <span className="text-slate-500">({g.items.length} questions)</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {groups.map((g, gi) => (
              <div key={g.heading}>
                <h2 className="mt-10 mb-5 text-xl font-bold text-[#0B1F3A]">{g.heading}</h2>
                {g.items.map((item) => (
                  <div key={item.q} className="mb-7">
                    <h3 className="mb-2 font-semibold text-slate-900">{item.q}</h3>
                    {item.a.map((p, i) => (
                      <p key={i} className="mb-3 text-slate-700">
                        {renderInline(p)}
                      </p>
                    ))}
                  </div>
                ))}
                {gi === 2 && (
                  <CostEstimatorCTA
                    label="Get a Free Home Addition Cost Estimate"
                    className="mb-8 flex w-full py-4"
                  />
                )}
              </div>
            ))}

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Still deciding?</h2>
            <p className="mb-5">
              The cheapest hour in an addition is the one spent finding out what your house can carry before the
              plans are drawn. If you want a planning number first, the{" "}
              <Link href="/cost-estimator" className="text-[#0B1F3A] underline hover:no-underline">
                cost estimator
              </Link>{" "}
              takes a couple of minutes. If you want to see what one of these looks like start to finish, we wrote
              up a{" "}
              <Link href="/projects/second-story-addition-katy" className="text-[#0B1F3A] underline hover:no-underline">
                second story addition in Katy
              </Link>
              . And if you already know what you want, call {BUSINESS.phone} and we will tell you what it involves
              before anyone prices it.
            </p>
          </div>

          <div>
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Related service
              </div>
              <Link
                href="/services/home-additions"
                className="mt-3 block font-semibold text-[#0B1F3A] hover:underline"
              >
                Home Additions &amp; Second-Story Additions
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="mt-5 block rounded-sm bg-[#EA580C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c94b0a]"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
            <div className="mt-6 rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">More reading</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/guides/second-story-addition-cost" className="font-semibold text-[#0B1F3A] hover:underline">
                    What a Second-Story Addition Costs
                  </Link>
                </li>
                <li>
                  <Link href="/guides/planning-a-home-addition" className="font-semibold text-[#0B1F3A] hover:underline">
                    Planning a Home Addition
                  </Link>
                </li>
                <li>
                  <Link href="/guides/load-bearing-wall-removal" className="font-semibold text-[#0B1F3A] hover:underline">
                    Load-Bearing Wall Removal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a question that isn't here?"
        subheading="Call now or send a few details and we'll get back to you the same business day."
      />
    </>
  );
}
