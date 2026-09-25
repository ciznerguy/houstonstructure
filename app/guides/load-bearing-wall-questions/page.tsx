import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Load-Bearing Wall Questions Houston Homeowners Ask",
  description:
    "Twenty-one straight answers on working out whether a wall is load-bearing, what beam replaces it, where the posts go, how long the work takes, and what to do about a wall someone already removed without a permit.",
  openGraph: {
    images: [{ url: "/images/load-bearing-wall-removal.jpg", width: 1600, height: 900 }],
  },
};

type QA = { q: string; a: string[] };
type Group = { heading: string; items: QA[] };

const groups: Group[] = [
  {
    heading: "Working out whether the wall is holding anything up",
    items: [
      {
        q: "How do I know which way my floor joists run?",
        a: [
          "The quickest check is from above or below. In the attic you can see the ceiling joists directly. Under a pier and beam house you can see the floor joists the same way. On a slab house with a second floor, the next best clue is the direction of the boards in an unfinished area, or the line of nails in the subfloor if any flooring is up.",
          "Why it matters: a wall running at right angles to the joists is far more likely to be carrying them. A wall running parallel to the joists is often just a partition. Often, not always, which is why nobody should stop at this one clue.",
        ],
      },
      {
        q: "Are all exterior walls load-bearing?",
        a: [
          "Most are, but not all of them. In a typical house the two exterior walls that the roof or floor framing runs onto carry load, and the two at the gable ends may carry very little. A wall added later to enclose a porch or a patio may carry nothing at all.",
          "The practical point is that an exterior wall is a poor place to guess. Cutting a wide opening in one also raises a second question beyond the vertical load, which is whether that wall was bracing the house against wind.",
        ],
      },
      {
        q: "Is a wall with a header above it always load-bearing?",
        a: [
          "A header over a doorway is a good hint, because someone thought load had to be carried across that opening. It is not proof. Builders sometimes install a header out of habit or to keep framing consistent, and headers also appear in non-bearing walls simply to stop the drywall cracking.",
          "The reverse is more telling. An opening with no header in a wall you suspect is bearing is a sign something was done wrong earlier.",
        ],
      },
      {
        q: "Can a half wall or a wall with a pass-through be load-bearing?",
        a: [
          "Yes. If a wall was cut down to counter height or opened with a pass-through, whatever is left is still carrying whatever the beam or the framing above hands to it. A low wall with a post at each end is a very common way that an earlier remodel handled a bearing line.",
          "Removing the remaining stub is the same structural question as removing a full wall, and it is one people frequently assume is trivial.",
        ],
      },
      {
        q: "Can I tell from the attic?",
        a: [
          "You can learn most of it from the attic in a single-story house. What you are looking for is whether the ceiling joists or the roof trusses bear on the top plate of the wall, whether joists lap or splice over that wall, and whether anything above, such as a post from the ridge, lands on that line.",
          "In a two-story house the attic tells you about the roof and nothing about the first floor. There the answer is in the floor framing above the wall, which usually means opening a small area of ceiling or looking from a closet.",
        ],
      },
      {
        q: "What if the wall has plumbing, ducts or electrical in it?",
        a: [
          "That is a separate question from whether it carries load, and the two get confused constantly. A wall packed with plumbing can be purely a partition, and a bare wall with nothing in it can be carrying the whole second floor.",
          "What the contents do change is the cost and the sequence. A waste stack or a duct run inside a wall you want gone has to be rerouted before demolition, and on a slab house a stack may go down into the slab, which is the most expensive version of this problem.",
        ],
      },
    ],
  },
  {
    heading: "The beam, and what holds it up",
    items: [
      {
        q: "What size beam do I need to replace a load-bearing wall?",
        a: [
          "There is no rule of thumb worth repeating here, and anyone who gives you a size over the phone is guessing. The size depends on the clear span, what is above the wall, whether a second floor and a roof both land on it, whether there is a point load partway along, and how much the beam is allowed to deflect given the finishes above it.",
          "What you actually need is not a size but a stamped letter or drawing specifying the beam, its bearing at each end, and the temporary shoring. That is what a permit office accepts and what protects you if something moves later.",
        ],
      },
      {
        q: "Will I need engineered lumber or steel?",
        a: [
          "Most single-story openings up to about eighteen feet are handled with engineered lumber, which is lighter, cheaper and easier for a carpenter to work with. Steel comes in when the span is longer, when a floor and a roof both land on the line, or when the ceiling is too shallow to hide a deep lumber beam.",
          "Ceiling depth is the deciding factor more often than the load. Steel is roughly ten times stiffer than lumber for the same depth, so it solves problems that are really about fitting inside the ceiling. Our [steel beam installation](/services/steel-beam-installation) page covers when that becomes necessary.",
        ],
      },
      {
        q: "How wide an opening can I get?",
        a: [
          "Wider than most people expect, and the limit is usually money rather than physics. Twelve to sixteen feet is routine. Twenty feet and beyond is normal work but generally means steel, bigger posts, and often new footings, so the price moves up in steps rather than smoothly.",
          "The useful conversation is not how wide can it go but where the cost steps are. Sometimes pulling an opening back by a foot avoids a much larger beam and saves several thousand dollars for a difference nobody would notice.",
        ],
      },
      {
        q: "Where do the posts go, and will I see them?",
        a: [
          "The posts land at each end of the new opening, which usually means they sit inside the walls that remain on either side, hidden in the framing. That is the normal outcome and it is what most people picture.",
          "Where it changes is a very wide opening or a heavy load, because the post gets bigger and may no longer fit inside a standard wall. Then you either accept a visible wrapped column, widen the wall slightly, or reduce the opening. It is worth asking about before the design is fixed rather than discovering a column in your kitchen.",
        ],
      },
      {
        q: "Do the posts need a new footing under the slab?",
        a: [
          "Often, and it is the item most commonly missing from a cheap quote. A wall spreads its load along its whole length. A beam concentrates that same load into two points, and the slab under those two points was usually not built for it.",
          "On a slab foundation the fix is to cut a small area, dig a pad footing and pour it with rebar before the post goes in. On a pier and beam house it means a new pier. Either way it is designed, not improvised, and it is why two quotes for the same opening can differ by thousands.",
        ],
      },
    ],
  },
  {
    heading: "Doing the work",
    items: [
      {
        q: "What is temporary shoring and do I really need it?",
        a: [
          "Shoring is a temporary wall or a row of adjustable steel posts that picks up the load before the real wall comes out, and holds it until the permanent beam is in and connected. Yes, you need it, on every bearing wall without exception.",
          "The load does not wait politely while the wall is removed. Without shoring the framing above settles the moment the wall is cut, and even a small amount of settlement cracks ceilings and jams doors on the floor above. Putting shoring in after the first stud is out is already too late.",
        ],
      },
      {
        q: "What is the order of operations?",
        a: [
          "Evaluate the wall and trace the load path. Design the beam, the posts and the footings. Pull the permit. Reroute anything living inside the wall. Set the shoring on both sides. Remove the wall down to the plate. Install the posts, then the beam, then the connections. Pass the framing inspection. Only then release the shoring, and only then patch ceiling, floor and walls.",
          "Almost every failure we get called to fix is a step taken out of this order, usually the shoring or the permit.",
        ],
      },
      {
        q: "How long does removing a load-bearing wall take?",
        a: [
          "The structural work on a typical residential opening is a few days once everything is on site. What stretches the calendar is everything around it: the evaluation and letter take a few days, the permit takes anywhere from a few days to a few weeks depending on the city, and a steel beam has to be fabricated, which is one to three weeks on its own.",
          "The finish work afterward is frequently the longest part. Matching a hardwood floor across the gap or blending a textured ceiling can take longer than the beam did.",
        ],
      },
      {
        q: "Can I take out two or three walls at once?",
        a: [
          "Yes, and it is often cheaper per wall than doing them one at a time, because the shoring, the permit and the crew are already there. What it is not is three times the same job. Removing several bearing walls at once changes how the whole floor carries load, and the beams have to be designed together rather than separately.",
          "It also raises the wind bracing question. Walls hold things up, and they also keep the house from racking sideways, and taking out several at once can remove more bracing than the house can spare. That gets checked as part of the design.",
        ],
      },
    ],
  },
  {
    heading: "When it was already done, and done wrong",
    items: [
      {
        q: "What are the signs a load-bearing wall was removed improperly?",
        a: [
          "A dip or sag in the ceiling along the line where the wall used to be, most visible if you sight along it from one end. Cracks in the drywall radiating from the corners of the new opening. Doors and windows on the floor above that stick or no longer latch. A floor upstairs that slopes toward the middle. A visible bow in a beam that was wrapped in drywall.",
          "None of these are proof on their own and all of them are worth measuring. Sagging that has stopped is a different problem from sagging that is still moving, and the only way to tell the two apart is to measure and come back.",
        ],
      },
      {
        q: "I bought a house where a wall was removed without a permit. What should I do?",
        a: [
          "Have it evaluated before you do anything else, including before you decide whether it is a problem. A good share of these turn out to be adequate, just undocumented, and what you need then is a letter saying so. The rest need a properly sized beam retrofitted, which is a bigger job than doing it right the first time but entirely doable.",
          "Either way the evaluation is what converts an unknown into either a clean record or a defined cost. Both are better than a question mark you will have to answer at resale.",
        ],
      },
      {
        q: "Can removing a wall downstairs make doors stick upstairs?",
        a: [
          "Yes, and it is one of the most common ways the problem announces itself. If the beam replacing the wall deflects more than the finishes can tolerate, everything sitting on it moves slightly. Door frames on the floor above go out of square and the doors catch.",
          "This is usually a stiffness problem rather than a strength problem. The beam is not close to breaking, it is simply bending more than a door frame can absorb. That is why a beam gets designed for deflection as well as for load.",
        ],
      },
      {
        q: "Does an unpermitted wall removal affect selling or insuring the house?",
        a: [
          "It can affect both. At resale the buyer's inspector sees a beam and asks what is behind it, and with no permit and no engineering the answer is a negotiation you are on the weak side of. Buyers frequently ask for a structural evaluation at that point, at your expense and on their timeline.",
          "On the insurance side, a claim involving structural damage can turn into questions about unpermitted alterations. Getting it documented while you are not under time pressure is far easier than doing it during an option period.",
        ],
      },
    ],
  },
  {
    heading: "Cost",
    items: [
      {
        q: "Why is one quote a few thousand dollars and another twenty thousand?",
        a: [
          "Usually because they are not the same job. The spread comes from the beam material, whether the beam sits flush inside the ceiling or below it, whether new footings are needed under the posts, whether anything inside the wall has to be rerouted, and how much finish work is included.",
          "Flush installs and new footings are the two items most often missing from the low bid. When you compare quotes, compare those two lines before you compare the totals, and ask each one what happens if the framing turns out differently than assumed.",
        ],
      },
      {
        q: "Is it worth paying an engineer if my contractor is experienced?",
        a: [
          "Experience is worth a lot and it is not the same thing as a calculation. An experienced carpenter is usually right about which wall is bearing. What experience cannot supply is the beam size for your specific span and load, the footing design under the posts, and the stamped document the permit office wants.",
          "The engineering is also the cheapest line in the project by a wide margin. It is a few hundred dollars against a job in the thousands, and it is the part that determines whether the rest of it holds up.",
        ],
      },
    ],
  },
];

const allQAs = groups.flatMap((g) => g.items);

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

export default function LoadBearingWallQuestionsGuidePage() {
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
        title="Load-Bearing Wall Questions Houston Homeowners Ask"
        subtitle="Twenty-one answers on telling whether a wall carries load, what replaces it, what it costs, and what to do about a wall someone already took out."
        ctaLabel="Get a Wall Removal Quote"
        ctaHref="/contact"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
        current="Load-Bearing Wall Questions Houston Homeowners Ask"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <p className="mb-5">
              Opening up a floor plan starts with one question, and almost everything else follows from the
              answer. These are the questions we get asked around it, from people working out whether the wall
              can go, people comparing quotes, and people who bought a house where somebody already removed one.
            </p>
            <p className="mb-5">
              If yours is not here, call {BUSINESS.phone} and ask. For the longer explanation of how a wall is
              assessed in the first place, start with our{" "}
              <Link href="/guides/load-bearing-wall-removal" className="text-[#0B1F3A] underline hover:no-underline">
                guide to telling whether a wall is load-bearing
              </Link>
              .
            </p>

            <div className="mb-8 rounded-sm border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">On this page</div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {groups.map((g) => (
                  <li key={g.heading} className="flex items-start gap-2">
                    <span className="mt-0.5 text-orange-600">▸</span>
                    <span className="text-slate-700">
                      {g.heading} <span className="text-slate-500">({g.items.length})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {groups.map((g) => (
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
              </div>
            ))}

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The one that matters most</h2>
            <p className="mb-5">
              Find out what the wall is holding up before anyone quotes a price on removing it. It is the
              cheapest step in the whole project and the one that decides everything after it. Our{" "}
              <Link href="/services/load-bearing-wall-removal" className="text-[#0B1F3A] underline hover:no-underline">
                load-bearing wall removal
              </Link>{" "}
              page explains what the visit and the letter involve, and there is a{" "}
              <Link href="/projects/load-bearing-wall-removal-bellaire" className="text-[#0B1F3A] underline hover:no-underline">
                Bellaire project
              </Link>{" "}
              where three walls came out and the floor above turned out to need correcting once it was open.
            </p>
          </div>

          <div>
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Related service
              </div>
              <Link
                href="/services/load-bearing-wall-removal"
                className="mt-3 block font-semibold text-[#0B1F3A] hover:underline"
              >
                Load-Bearing Wall Assessment &amp; Removal
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
                  <Link href="/guides/load-bearing-wall-removal" className="font-semibold text-[#0B1F3A] hover:underline">
                    Can You Remove a Load-Bearing Wall?
                  </Link>
                </li>
                <li>
                  <Link href="/guides/commercial-wall-removal" className="font-semibold text-[#0B1F3A] hover:underline">
                    Commercial Wall Removal in Houston
                  </Link>
                </li>
                <li>
                  <Link href="/services/steel-beam-installation" className="font-semibold text-[#0B1F3A] hover:underline">
                    Steel Beam Installation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure whether your wall can come out?"
        subheading="Call now or send a few details and we'll tell you what it takes."
      />
    </>
  );
}
