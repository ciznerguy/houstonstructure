import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/business";

// Source material: Levi's own project package. The five images in that package
// are concept images, not documentary photographs of this job, and the package
// says so. Every caption here is labeled accordingly. Beam sizes and connection
// details are deliberately absent: the package says not to publish them unless
// they are verified against the approved engineering documents.
const IMG_NOTE = "illustrative image, not a documentary photo of this project";

export const metadata: Metadata = {
  title: "Removing Three Load-Bearing Walls in Bellaire, TX",
  description:
    "A Bellaire first floor divided by three load-bearing walls became one open living space. Temporary shoring, a second floor found out of level during demolition, and the structural correction that followed.",
  openGraph: {
    images: [{ url: "/images/project-bellaire-open-plan-5-after.jpg", width: 1600, height: 900 }],
  },
};

type Photo = { src: string; alt: string; caption: string };
const photos: Record<"before" | "shoring" | "level" | "correction" | "after", Photo> = {
  before: {
    src: "/images/project-bellaire-open-plan-1-before.jpg",
    alt: "First floor interior before remodeling, divided into separate rooms by walls that carry the second floor above",
    caption: "Before: three load-bearing walls split the first floor into separate rooms while carrying the floor above.",
  },
  shoring: {
    src: "/images/project-bellaire-open-plan-2-shoring.jpg",
    alt: "Rows of adjustable steel shoring posts with timber headers supporting exposed ceiling framing after the drywall was removed",
    caption: "Temporary shoring carried the second-floor loads before any of the bearing walls came out.",
  },
  level: {
    src: "/images/project-bellaire-open-plan-3-level-check.jpg",
    alt: "Spirit level resting on an exposed wood floor beam during a level check of the second floor framing",
    caption: "With the structure exposed, level checks showed the second floor was not sitting where it should.",
  },
  correction: {
    src: "/images/project-bellaire-open-plan-4-correction.jpg",
    alt: "Open first floor with the walls removed, shoring posts still in place and new framing above while the floor system is brought back into alignment",
    caption: "The floor above was brought back into alignment while the shoring still carried the load.",
  },
  after: {
    src: "/images/project-bellaire-open-plan-5-after.jpg",
    alt: "Finished open-plan first floor with a continuous living, dining and kitchen space and a flat ceiling where the walls used to be",
    caption: "After: one connected living, dining and kitchen space, with the new structure hidden above the ceiling.",
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
        className="mb-2 h-[300px] w-full rounded-sm object-cover sm:h-[400px]"
      />
      <p className="mt-2 mb-8 text-sm text-slate-500">
        {photo.caption} <span className="text-slate-400">Illustrative image.</span>
      </p>
    </>
  );
}

export default function BellaireWallRemovalProjectPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Removing Three Load-Bearing Walls in Bellaire, TX",
    description: metadata.description,
    image: `${BUSINESS.siteUrl}${photos.after.src}`,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    about: {
      "@type": "Service",
      name: "Load-Bearing Wall Assessment & Removal",
      areaServed: { "@type": "City", name: "Bellaire, TX" },
    },
    mainEntityOfPage: `${BUSINESS.siteUrl}/projects/load-bearing-wall-removal-bellaire`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <PageHero
        eyebrow="Project | Bellaire, TX"
        title="Removing Three Load-Bearing Walls, and Correcting the Floor Above Them"
        subtitle="Opening a floor plan looks simple in the finished photo. On this Bellaire house, three of the walls in the way were carrying the entire second floor."
        ctaLabel="Get a Wall Removal Quote"
        ctaHref="/contact"
      />

      <div className="mx-auto max-w-6xl px-5 pt-10">
        <img
          src={photos.after.src}
          srcSet={`${photos.after.src.replace(".jpg", "-800.jpg")} 800w, ${photos.after.src} 1600w`}
          sizes="100vw"
          alt={`${photos.after.alt} (${IMG_NOTE})`}
          fetchPriority="high"
          className="h-[300px] w-full rounded-sm object-cover sm:h-[440px]"
        />
        <p className="mt-2 text-sm text-slate-500">
          {photos.after.caption} <span className="text-slate-400">Illustrative image.</span>
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 text-slate-700 leading-relaxed">
            <div className="mb-8 rounded-sm border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">At a glance</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Three first-floor walls, all carrying load from the second floor, removed to create one open living space.",
                  "Temporary shoring took the second-floor loads before any wall came out, and stayed until the permanent structure was finished.",
                  "Demolition exposed a second floor that was already out of level, a condition that predated the remodel.",
                  "The floor was corrected rather than closed back up, then the permanent beams and framing went in.",
                  "Bellaire, TX. Structural work and construction by the same team.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-orange-600">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="mb-4 text-xl font-bold text-[#0B1F3A]">When opening a floor plan means rebuilding the load path</h2>
            <p className="mb-5">
              An open-concept interior looks effortless in a finished photograph. Removing walls that hold up an
              entire second floor is not effortless at all. On this Bellaire house the goal was simple to state:
              turn a divided first floor into one large connected living space. The problem was that three of the
              walls in the way were load-bearing, and between them they were carrying most of the floor above.
            </p>
            <Figure photo={photos.before} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Support the structure before removing it</h2>
            <p className="mb-5">
              Before a bearing wall can come out, what it carries has to be understood and then carried by
              something else. A temporary support system went in before demolition started, so the second floor
              stayed supported while the original walls were taken out and the permanent structure was prepared.
            </p>
            <p className="mb-5">
              The sequence is the part that matters. The structure has to stay under control through the whole
              modification, not just at the start and the end of it. Shoring that goes in after the first wall is
              already open is shoring that arrived late.
            </p>
            <Figure photo={photos.shoring} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The discovery: the second floor was not level</h2>
            <p className="mb-5">
              Once the walls were opened and the framing was visible, something turned up that could not be
              ignored. Portions of the second floor were not level, and had not been for some time. This had
              nothing to do with the remodel. It was an existing condition that the closed-off layout had been
              hiding.
            </p>
            <p className="mb-5">
              At that point there were two ways to go. Set the new beams, close the ceiling, and leave the problem
              sealed inside a newly finished room. Or stop, measure, and fix it. The second option costs more on
              the day and less over the life of the house, and it is the one we took.
            </p>
            <Figure photo={photos.level} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Correcting the structure instead of hiding it</h2>
            <p className="mb-5">
              With the temporary supports still holding the loads, the existing conditions were evaluated, the
              correct elevations were established, and the affected structure was brought back into alignment.
              Only then did the permanent framing and beams go in, creating a continuous load path from the
              second floor down to the foundation while leaving the first floor open.
            </p>
            <p className="mb-5">
              The point of the work was never only that the space should look better. It was that the structure
              behind the finishes should be properly supported and properly aligned before anything was covered.
            </p>
            <Figure photo={photos.correction} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The result</h2>
            <p className="mb-5">
              With the structural work complete, the temporary supports came out and the interior was rebuilt
              around the new layout. A series of separate rooms became one broad connected space with better
              sightlines, better circulation, and considerably more natural light reaching further into the house.
            </p>
            <p className="mb-5">
              The finished room reads as simple and effortless, which is the usual sign that the difficult part
              is hidden above and around it.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Why this kind of remodel needs a different level of planning</h2>
            <p className="mb-5">
              Structural remodeling is not demolition followed by new finishes. A single load-bearing change can
              affect framing, foundations, floor elevations, ductwork, electrical routing, plumbing, and the
              finishes above and below the work. On top of that, an existing house keeps some of its conditions
              to itself until demolition begins, which is exactly what happened here.
            </p>
            <p className="mb-5">
              What that demands is disciplined sequencing, verification in the field rather than assumptions from
              a drawing, and a team that can respond to what the building actually turns out to be. When
              something unexpected appears, the goal is not to cover it back up. It is to find the cause, decide
              on the right correction, and do the work in a way that will still be sound in twenty years.
            </p>
            <p className="mb-5">
              If you are weighing something similar, our{" "}
              <Link href="/services/load-bearing-wall-removal" className="text-[#0B1F3A] underline hover:no-underline">
                load-bearing wall removal page
              </Link>{" "}
              explains how the assessment and the engineer&rsquo;s letter work, and the{" "}
              <Link href="/guides/load-bearing-wall-removal" className="text-[#0B1F3A] underline hover:no-underline">
                guide
              </Link>{" "}
              covers how to tell whether a wall is bearing in the first place.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Planning a structural modification?</h2>
            <p className="mb-5">
              If you are considering removing load-bearing walls, creating a large opening, correcting an uneven
              floor, or reconfiguring a house for a more open layout, the first step is a look at what is
              actually there. Call {BUSINESS.phone} or send a few details and we will tell you what the project
              involves before anyone prices it.
            </p>
          </div>

          <div>
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Project</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li><span className="text-slate-500">Location:</span> Bellaire, TX</li>
                <li><span className="text-slate-500">Type:</span> Load-bearing wall removal</li>
                <li><span className="text-slate-500">Scope:</span> Three bearing walls, shoring, floor correction, new beams</li>
                <li><span className="text-slate-500">Found on site:</span> Second floor out of level</li>
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
                <li><Link href="/services/load-bearing-wall-removal" className="font-semibold text-[#0B1F3A] hover:underline">Load-Bearing Wall Removal</Link></li>
                <li><Link href="/locations/bellaire" className="font-semibold text-[#0B1F3A] hover:underline">Structural Engineer in Bellaire, TX</Link></li>
                <li><Link href="/guides/load-bearing-wall-removal" className="font-semibold text-[#0B1F3A] hover:underline">Load-Bearing Wall Removal Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Thinking about taking a wall out?"
        subheading="Call now or send a few details and we'll tell you what it actually involves."
      />
    </>
  );
}
