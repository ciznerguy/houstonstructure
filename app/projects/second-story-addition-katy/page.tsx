import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import CostEstimatorCTA from "@/components/CostEstimatorCTA";
import { BUSINESS } from "@/lib/business";

// Project facts confirmed by the owner (2026-09-22). Year built, foundation
// type, and permit authority were deliberately left out of the page.
const FACTS = {
  windowWalls: "two",
  designWeeks: "eight",
  constructionMonths: "four",
  stayedInHouse: "stayed in the house for the whole build",
  addedSqFt: "500",
};

const IMG_NOTE = "illustrative rendering, not a photo of the project";

export const metadata: Metadata = {
  title: "Second Story Addition in Katy, TX",
  description:
    "A one-story Katy home gained a full second floor: a farmhouse primary bedroom with tall windows, a grey two-person shower bathroom, and a walk-in closet built around the owner's collection. What it took above and below.",
  openGraph: {
    images: [{ url: "/images/project-katy-second-story-1-exterior.jpg", width: 1600, height: 900 }],
  },
};

type Photo = { src: string; alt: string; caption: string };
const photos: Record<"exterior" | "bedroom" | "bathroom" | "closet", Photo> = {
  exterior: {
    src: "/images/project-katy-second-story-1-exterior.jpg",
    alt: "One-story red brick home in Katy, Texas with a new modern farmhouse second story in white board-and-batten siding and tall black-framed windows",
    caption: "The new second floor over the original one-story brick house, in white board-and-batten with black-framed windows.",
  },
  bedroom: {
    src: "/images/project-katy-second-story-2-bedroom.jpg",
    alt: "Farmhouse-style primary bedroom with two pairs of tall black-framed windows, white walls, wide-plank oak floor and a linen-dressed king bed",
    caption: "The primary bedroom: two pairs of tall windows, white walls, oak floor, and not much else in the way.",
  },
  bathroom: {
    src: "/images/project-katy-second-story-3-bathroom.jpg",
    alt: "Primary bathroom in light grey porcelain tile with a white double vanity, black fixtures and a large glass walk-in shower with two rain shower heads on opposite walls",
    caption: "Grey tile, a double vanity, and a walk-in shower with two heads on separate controls. No tub, by choice.",
  },
  closet: {
    src: "/images/project-katy-second-story-4-closet.jpg",
    alt: "Walk-in closet with white built-in shelving displaying rows of shoes and handbags, hanging sections, an upholstered bench and a black-framed window at the end",
    caption: "The walk-in closet: white built-ins laid out around the owner's shoes and bags, with a window at the end.",
  },
};

function Figure({ photo }: { photo: Photo }) {
  return (
    <>
      <img
        src={photo.src}
        srcSet={`${photo.src.replace(".jpg", "-800.jpg")} 800w, ${photo.src} 1600w`}
        sizes="(min-width: 768px) 66vw, 100vw"
        alt={`${photo.alt} (${IMG_NOTE})`}
        loading="lazy"
        className="mb-2 h-[320px] w-full rounded-sm object-cover sm:h-[420px]"
      />
      <p className="mt-2 mb-8 text-sm text-slate-500">
        {photo.caption} <span className="text-slate-400">Illustrative rendering.</span>
      </p>
    </>
  );
}

export default function KatySecondStoryProjectPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Second Story Addition in Katy, TX: A Farmhouse Primary Suite",
    description: metadata.description,
    image: `${BUSINESS.siteUrl}${photos.exterior.src}`,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    about: { "@type": "Service", name: "Home Additions", areaServed: { "@type": "City", name: "Katy, TX" } },
    mainEntityOfPage: `${BUSINESS.siteUrl}/projects/second-story-addition-katy`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <PageHero
        eyebrow="Project | Katy, TX"
        title="A Second Story Addition in Katy: A Farmhouse Primary Suite Over a One-Story Home"
        subtitle="A family that had outgrown the house, didn't want to move, and didn't want to give up the yard. The only direction left was up."
        ctaLabel="Calculate Your Addition Cost in 2 Minutes"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
        current="Second Story Addition in Katy, TX: A Farmhouse Primary Suite"
      />

      <div className="mx-auto max-w-6xl px-5 pt-10">
        <img
          src={photos.exterior.src}
          srcSet={`${photos.exterior.src.replace(".jpg", "-800.jpg")} 800w, ${photos.exterior.src} 1600w`}
          sizes="100vw"
          alt={`${photos.exterior.alt} (${IMG_NOTE})`}
          fetchPriority="high"
          className="h-[320px] w-full rounded-sm object-cover sm:h-[460px]"
        />
        <p className="mt-2 text-sm text-slate-500">
          {photos.exterior.caption} <span className="text-slate-400">Illustrative rendering.</span>
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <h2 className="mb-4 text-xl font-bold text-[#0B1F3A]">The house, and what the owners wanted</h2>
            <p className="mb-5">
              A one-story home in Katy, and a family that had run out of room in it. Moving was off the table. So was the yard, which ruled out spreading the
              house sideways. The only direction left was up.
            </p>
            <p className="mb-5">
              The brief for the new floor was specific. Not more bedrooms for the kids, but a real primary suite for
              the parents, away from the rest of the house: a bedroom with a farmhouse feel and tall windows, a bathroom
              designed for two people getting ready at the same time, and a walk-in closet built around the owner&rsquo;s
              collection of shoes and handbags rather than a standard rod and a shelf.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The bedroom</h2>
            <p className="mb-5">
              The bedroom is the room the whole project was for. Tall windows on {FACTS.windowWalls} walls bring in
              light from early morning to late afternoon, and because the windows run tall, the room feels higher than
              it measures. The walls are white, the floor is wide-plank oak, and the detailing stays simple: a
              farmhouse room in the sense of light, proportion, and calm, not in the sense of clutter.
            </p>
            <Figure photo={photos.bedroom} />
            <p className="mb-5">
              Big windows on an upper floor are a design decision with a structural cost. Each opening needs a header
              sized for the roof above it, and the wall between the windows has to be stiff enough to brace the upper
              floor against wind. The design kept the windows as large as the owners wanted by putting the bracing in
              the solid stretches of wall and sizing the headers for it.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The bathroom</h2>
            <p className="mb-5">
              The bathroom was designed for two people on the same schedule. Grey tile and stone throughout, a double
              vanity, and a large walk-in shower with two shower heads on separate controls, one for each of them, with
              enough floor area that nobody is stepping around anybody. No tub: the owners wanted the space to go to
              the shower, and it did.
            </p>
            <Figure photo={photos.bathroom} />
            <p className="mb-5">
              A tiled shower this size is one of the heaviest things in a house. The tile, the mortar bed, the
              waterproofing, the stone, and the water all sit on the floor framing, and tile cracks on a floor that
              flexes even slightly. The joists under the bathroom were sized for stiffness, not just strength, which is
              the difference between a shower that looks the same in ten years and one that needs regrouting every
              other spring.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The closet</h2>
            <p className="mb-5">
              The closet is a walk-in with white built-in shelving on the long walls: open shelves for shoes, deeper
              cubbies for bags, hanging space in between, and room to stand in the middle and see all of it at once. It
              was designed around what the owner actually owns, not around a catalog layout, and the shelving was set
              out before the walls were closed so that blocking could go into the framing exactly where the built-ins
              anchor.
            </p>
            <Figure photo={photos.closet} />

            <CostEstimatorCTA label="Calculate Your Addition Cost in 2 Minutes" className="mb-8 flex w-full py-4" />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">What it took underneath</h2>
            <p className="mb-5">
              A house built as a single story was built to carry one roof. Adding a floor on top means the walls, the
              headers, and the footings below all have to carry more than they were designed for, and that has to be
              solved before anyone draws a bedroom.
            </p>
            <p className="mb-5">
              For this house that meant checking the existing foundation and the bearing walls against the new loads
              first, and reinforcing where they fell short, all of it designed and built before the new floor went on.
              Then the roof came off, the new floor went on, the new walls and roof went up, and the house was dried in as fast as the sequence allowed. In Katy the roof-off window
              is planned around the weather, because a summer storm on an open house is the one risk that matters most
              on this kind of job. The connections from the new roof down to the old foundation were detailed for the
              design wind speed for this part of the county.
            </p>
            <p className="mb-5">
              If you want the engineering side of second-story additions in full, our{" "}
              <Link href="/services/home-additions" className="text-[#0B1F3A] underline hover:no-underline">
                home additions page
              </Link>{" "}
              covers it. On this project, the point is that all of it was designed before construction started, so the
              suite the owners wanted could be built without compromise upstairs.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Permits and timeline</h2>
            <p className="mb-5">
              The permit submission included the structural drawings for the reinforcement of the existing house,
              the new framing, and the connections, together with the architectural set. Inspections happened at the
              foundation work, at framing before it was covered, and at the end.
            </p>
            <p className="mb-5">
              Design and permitting took about {FACTS.designWeeks} weeks. Construction ran about{" "}
              {FACTS.constructionMonths} months, and the family {FACTS.stayedInHouse}, which takes planning on a
              second-story job: the roof-off phase is sequenced so the house is open for as short a window as
              possible, and the work zone upstairs is sealed from the living space below.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">What the owners got</h2>
            <p className="mb-5">
              About {FACTS.addedSqFt} square feet of new living space without losing a foot of the lot. A primary
              suite above the noise of the rest of the house. A bathroom that doesn&rsquo;t create a morning queue. A
              closet that fits the collection. And a set of stamped drawings, a closed permit, and inspection records
              that will follow the house when it sells.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Thinking about a second story in Katy?</h2>
            <p className="mb-5">
              Not every one-story house can take a second floor economically, and the answer depends on the foundation
              and the walls you already have. Our{" "}
              <Link href="/guides/second-story-addition-cost" className="text-[#0B1F3A] underline hover:no-underline">
                second story addition cost guide
              </Link>{" "}
              walks through what drives the price, and our{" "}
              <Link href="/services/second-story-addition" className="text-[#0B1F3A] underline hover:no-underline">
                second story addition
              </Link>{" "}
              page covers the feasibility visit, the stairs, and the roof-off phase. For a planning number in two
              minutes, use the cost estimator. For a real answer about your house, the first step is a structural
              look at what&rsquo;s there.
            </p>
          </div>

          <div>
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Project</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li><span className="text-slate-500">Location:</span> Katy, TX</li>
                <li><span className="text-slate-500">Type:</span> Full second story addition</li>
                <li><span className="text-slate-500">Program:</span> Primary bedroom, bathroom, walk-in closet</li>
                <li><span className="text-slate-500">Style:</span> Modern farmhouse</li>
                <li><span className="text-slate-500">Added:</span> About 500 sq ft</li>
                <li><span className="text-slate-500">Design and permit:</span> About 8 weeks</li>
                <li><span className="text-slate-500">Construction:</span> About 4 months, family stayed in the house</li>
                <li><span className="text-slate-500">Scope:</span> Structural engineering and construction</li>
              </ul>
              <a
                href={BUSINESS.phoneHref}
                className="mt-5 block rounded-sm bg-[#EA580C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c94b0a]"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
            <div className="mt-6 rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Related</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/services/home-additions" className="font-semibold text-[#0B1F3A] hover:underline">Home Additions in Houston</Link></li>
                <li><Link href="/locations/katy" className="font-semibold text-[#0B1F3A] hover:underline">Structural Engineer in Katy, TX</Link></li>
                <li><Link href="/guides/second-story-addition-cost" className="font-semibold text-[#0B1F3A] hover:underline">Second Story Addition Cost Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Planning a second story in Katy or anywhere in the Houston area?"
        subheading="Call now or request a callback and we'll get back to you the same business day."
      />
    </>
  );
}
