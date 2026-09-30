import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/business";

// Only what Levi confirmed about this job (2026-09-30) is stated as fact on
// this page: the neighborhood, the conversion, the added bathroom, the media
// room, the high-end entertainment installation and the finish level.
// Timeline, cost, permit authority and foundation details were not given, so
// they are not on the page. Anything general about how this kind of job runs
// is written as general, not as a claim about this house.
const FACTS = {
  area: "about 300 square feet",
  program: "Media room and a full bathroom",
};

const IMG_NOTE = "illustrative rendering, not a photo of the project";

type Photo = { src: string; alt: string; caption: string };
const photos: Record<"before" | "during" | "media" | "bath", Photo> = {
  before: {
    src: "/images/project-heights-garage-1-before.jpg",
    alt: "A detached white clapboard single-car garage behind a 1920s craftsman bungalow on a narrow Houston Heights lot, shaded by a live oak",
    caption: "The detached garage at the back of the lot, roofed and enclosed and doing nothing.",
  },
  during: {
    src: "/images/project-heights-garage-2-during.jpg",
    alt: "The same garage mid-renovation with exposed studs and insulation, speaker and data cable run to the media wall, and a trench cut through the slab with new drain lines for the bathroom",
    caption:
      "Mid-build. The trench through the slab is the bathroom drain, and the cable already stapled to the studs is the media wall. Both are cheap now and expensive later.",
  },
  media: {
    src: "/images/project-heights-garage-2-media-room.jpg",
    alt: "A converted garage finished as a dark, warmly lit media room with a large wall-mounted screen in built-in cabinetry, integrated speakers, a deep sectional sofa and cove lighting",
    caption:
      "The finished media room. The screen wall, the speakers and the cabinetry were designed together, so the wiring went in before the drywall.",
  },
  bath: {
    src: "/images/project-heights-garage-3-bathroom.jpg",
    alt: "A compact high-end bathroom with large format porcelain tile, a floating stone-topped vanity, matte black fixtures, a backlit mirror and a frameless glass walk-in shower",
    caption:
      "The full bathroom. Adding one means cutting the slab and running drain lines to the existing sewer, which is the biggest single item in most conversions.",
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

export const metadata: Metadata = {
  title: "Garage Conversion in Houston Heights: A Media Room",
  description:
    "A Heights garage became a high-end media room with a full bathroom and a built-in entertainment system. What a conversion involves in a neighborhood of century-old houses and historic district review.",
  openGraph: {
    images: [{ url: "/images/project-heights-garage-2-media-room.jpg", width: 1024, height: 572 }],
  },
};

export default function HeightsGarageConversionPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Garage Conversion in Houston Heights: A Media Room and Bath",
    description: metadata.description,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    about: {
      "@type": "Service",
      name: "Garage Conversion",
      areaServed: { "@type": "Place", name: "Houston Heights, Houston, TX" },
    },
    mainEntityOfPage: `${BUSINESS.siteUrl}/projects/garage-conversion-heights`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <PageHero
        eyebrow="Project | Houston Heights"
        title="A Garage Conversion in the Heights: Media Room and Full Bath"
        subtitle="A garage on a narrow Heights lot became the room the house did not have. Finished to the same standard as the rest of the home, with a full bathroom and a built-in entertainment system."
        ctaLabel="Estimate a Garage Conversion Cost"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
        current="Garage Conversion in Houston Heights"
      />

      <div className="mx-auto max-w-6xl px-5 pt-10">
        <img
          src={photos.before.src}
          srcSet={`${photos.before.src.replace(".jpg", "-800.jpg")} 800w, ${photos.before.src} 1600w`}
          sizes="100vw"
          alt={`${photos.before.alt} (${IMG_NOTE})`}
          fetchPriority="high"
          className="h-[320px] w-full rounded-sm object-cover sm:h-[460px]"
        />
        <p className="mt-2 text-sm text-slate-500">
          {photos.before.caption} <span className="text-slate-400">Illustrative rendering.</span>
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <h2 className="mb-4 text-xl font-bold text-[#0B1F3A]">Why the garage was the only space left</h2>
            <p className="mb-5">
              Heights lots are narrow. Most of them were platted a century ago at widths that leave very little room
              between houses, and the houses themselves are modest by modern standards. When a family here needs
              another room, the options are short: go up, or use what is already enclosed.
            </p>
            <p className="mb-5">
              This one used what was already enclosed. The garage was {FACTS.area} of covered, roofed, slab-floored
              space sitting unused at the back of the property, which is the cheapest square footage anybody owns.
              Turning it into living space meant no new foundation for the shell, no new roof, and no fight over
              setbacks.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">What went in</h2>
            <p className="mb-5">
              The program was a media room and a full bathroom. The media side was built out properly rather than
              treated as a spare room with a television in it: a high-end entertainment system was installed as part
              of the build, with the wiring, the power and the wall construction planned around it from the start
              rather than fished in afterward.
            </p>
            <p className="mb-5">
              That distinction matters more than it sounds. Running the cabling, the outlets and the equipment
              locations while the walls are open costs very little. Doing the same work after the drywall is up means
              opening the drywall. The finish level throughout matches the rest of the house rather than reading as
              a converted garage, which is the difference between a room that adds value and a room a future buyer
              discounts.
            </p>

            <Figure photo={photos.during} />
            <Figure photo={photos.media} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The bathroom is the part that drives the job</h2>
            <p className="mb-5">
              Adding a full bathroom to a garage is the single largest cost and schedule item in most conversions,
              and it is the one that separates a real conversion from a paint-and-carpet job. Drains have to reach
              the existing sewer line, which on a slab means cutting the slab, trenching, setting the drain lines to
              fall, and pouring back.
            </p>
            <p className="mb-5">
              It is also the item that most often gets underestimated when a conversion is priced without anyone
              looking at where the existing plumbing actually runs. The distance from the garage to the nearest tie-in
              point is a number worth establishing before the budget is set, not after.
            </p>

            <Figure photo={photos.bath} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">What a Heights conversion has to deal with</h2>
            <p className="mb-5">
              Two things come up here that do not come up in a newer suburb.
            </p>
            <p className="mb-5">
              The first is the floor. Most Heights houses sit on pier and beam with a crawl space, while the garage is
              usually on a slab poured at grade. That leaves a step between the two that has to be resolved, and the
              garage slab itself was poured as a garage slab: thinner, sloped to drain, and frequently without the
              vapor barrier that belongs under a room somebody sleeps or sits in. How that floor is built up decides
              whether the finished room stays dry. There is more on this on the{" "}
              <Link href="/services/garage-conversion" className="text-[#0B1F3A] underline hover:no-underline">
                garage conversion
              </Link>{" "}
              page.
            </p>
            <p className="mb-5">
              The second is review. Much of the Heights is inside a City of Houston historic district, and work that
              changes an exterior feature of a contributing structure needs a Certificate of Appropriateness in
              addition to the building permit. Whether that applies depends on the specific address and on whether
              the work is visible from the street. It is the first thing to check, because it shapes what the
              exterior can look like. More on that on the{" "}
              <Link href="/locations/houston-heights" className="text-[#0B1F3A] underline hover:no-underline">
                Houston Heights
              </Link>{" "}
              page.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Thinking about converting a garage in the Heights?</h2>
            <p className="mb-5">
              The questions worth answering before you spend anything are the same three every time: whether your deed
              restrictions or historic district status allow it, what the garage slab is and what it will take to make
              it a floor, and how far the plumbing has to travel if a bathroom is part of the plan. All three are
              answerable in a single visit, and all three move the budget more than any finish decision will.
            </p>
            <p className="mb-5">
              For a planning-stage number, the{" "}
              <Link href="/cost-estimator" className="text-[#0B1F3A] underline hover:no-underline">
                cost estimator
              </Link>{" "}
              includes garage conversion as a project type. For a real answer about your garage, the first step is
              somebody looking at the floor.
            </p>
          </div>

          <div>
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Project</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li><span className="text-slate-500">Location:</span> Houston Heights</li>
                <li><span className="text-slate-500">Type:</span> Garage conversion</li>
                <li><span className="text-slate-500">Program:</span> {FACTS.program}</li>
                <li><span className="text-slate-500">Area:</span> {FACTS.area}</li>
                <li><span className="text-slate-500">Finish:</span> High end, matched to the main house</li>
                <li><span className="text-slate-500">Extras:</span> Built-in entertainment system</li>
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
                <li><Link href="/services/garage-conversion" className="font-semibold text-[#0B1F3A] hover:underline">Garage Conversions in Houston</Link></li>
                <li><Link href="/locations/houston-heights" className="font-semibold text-[#0B1F3A] hover:underline">Structural Engineer in Houston Heights</Link></li>
                <li><Link href="/services/home-additions" className="font-semibold text-[#0B1F3A] hover:underline">Home Additions in Houston</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Converting a garage in the Heights or anywhere in the Houston area?"
        subheading="Call now or request a callback and we'll get back to you the same business day."
      />
    </>
  );
}
