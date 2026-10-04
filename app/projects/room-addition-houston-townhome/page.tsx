import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import CostEstimatorCTA from "@/components/CostEstimatorCTA";
import { BUSINESS } from "@/lib/business";

// Everything on this page comes from the homeowner's own public account of
// the work. He is not named and the townhome is not located more precisely
// than Houston, the same way the other project pages are written. Facts we
// were not given, the neighbourhood, the beam size, the dates, are simply
// left out rather than guessed at.
const FACTS = {
  storeys: "four",
  atticSqFt: "1,000",
};

const IMG_NOTE = "illustrative rendering, not a photo of the project";

type Photo = { src: string; alt: string; caption: string };
const photos: Record<"attic" | "studio" | "shower" | "beam", Photo> = {
  attic: {
    src: "/images/project-houston-townhome-1-attic.jpg",
    alt: "Finished attic living space with the ceiling following the roof pitch, painted white rafters exposed, pale oak floorboards, black framed dormer windows and a low linen sofa",
    caption: "The attic, finished: about a thousand square feet of living space where there had been storage.",
  },
  studio: {
    src: "/images/project-houston-townhome-2-art-studio.jpg",
    alt: "Compact art studio under a sloped ceiling with a black framed window, a long timber work table, jars of brushes, canvases against the wall and an easel, with a stair rail at the near edge",
    caption: "The art studio, built in the volume above the stairwell that the house was otherwise wasting.",
  },
  shower: {
    src: "/images/project-houston-townhome-3-shower.jpg",
    alt: "Double height glass enclosed shower in pale stone tile with two rain heads on opposite walls and a tall window high up throwing daylight down the wall",
    caption: "The two-storey bathroom had height and nothing above head level using it. Now the shower does.",
  },
  beam: {
    src: "/images/project-houston-townhome-4-beam.jpg",
    alt: "Open living floor in warm white and pale oak with a flush steel beam spanning the ceiling along the line where a load-bearing wall used to stand",
    caption: "One room where two used to be, with the beam carrying what the wall was carrying.",
  },
};

function Figure({ photo }: { photo: Photo }) {
  return (
    <>
      <img
        src={photo.src}
        srcSet={`${photo.src.replace(".jpg", "-800.jpg")} 800w, ${photo.src} 1024w`}
        sizes="(min-width: 768px) 66vw, 100vw"
        alt={`${photo.alt} (${IMG_NOTE})`}
        loading="lazy"
        className="mb-2 h-[280px] w-full rounded-sm object-cover sm:h-[380px]"
      />
      <p className="mt-2 mb-8 text-sm text-slate-500">
        {photo.caption} <span className="text-slate-400">Illustrative rendering.</span>
      </p>
    </>
  );
}

export const metadata: Metadata = {
  title: "Room Addition in a Houston Townhome: 1,000 Sq Ft Added Inside",
  description:
    "A four-storey Houston townhome with no room to expand gained about 1,000 square feet without the footprint changing. An attic became living space, an art studio went in over the stairs, a bathroom was added, and a load-bearing wall came out for a single beam.",
  openGraph: {
    images: [{ url: "/images/project-houston-townhome-1-attic.jpg", width: 1024, height: 559 }],
  },
};

const faqs = [
  {
    q: "Can you add space to a house without extending it?",
    a: "Often, yes. Most houses carry space nobody uses: an attic with enough height to stand in, a void over a stairwell, a two-storey room that only needed one storey. Turning that into usable floor area avoids a new foundation, which is usually the most expensive and most disruptive part of an addition. Whether it works comes down to what the existing structure can carry and whether the new space can meet habitable room requirements for height, light and egress.",
  },
  {
    q: "Is an attic structurally strong enough to become living space?",
    a: "Not as built, in most cases. Attic joists are normally sized to hold up a ceiling and some boxes, not people, furniture and a floor. Converting one means checking what those joists can take, usually reinforcing or replacing them, and confirming that the walls and foundation below can accept the extra load. That assessment comes before any design work, because it decides what is possible.",
  },
  {
    q: "Do you need a permit to remove a load-bearing wall in Houston?",
    a: "Yes, and the permit office will want an engineer's letter or sealed drawing showing the replacement beam has been sized for the load. That is true whether the wall is carrying a roof, a floor, or several floors above it. Taking a bearing wall out without that paperwork tends to surface later, during a sale or an insurance claim, at the worst possible moment.",
  },
  {
    q: "How is the work planned before demolition starts?",
    a: "It gets drawn. The owner sees the new layout and the structural changes on paper before anything is touched, because decisions made on a drawing are cheap and decisions made in a half-demolished house are not. It also means the crew, the engineer and the owner are all working from the same information.",
  },
];

export default function HoustonTownhomeProjectPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Adding 1,000 Square Feet Inside a Houston Townhome",
    description: metadata.description,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    about: {
      "@type": "Service",
      name: "Home Additions",
      areaServed: { "@type": "City", name: "Houston, TX" },
    },
    mainEntityOfPage: `${BUSINESS.siteUrl}/projects/room-addition-houston-townhome`,
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />

      <PageHero
        eyebrow="Project | Houston, TX"
        title="Adding 1,000 Square Feet Inside a Houston Townhome"
        subtitle="A four-storey townhome with nowhere left to build. The owners wanted more room, better rooms, and a house that would still suit them in twenty years. All of it had to come from inside the walls they already had."
        ctaLabel="Calculate Your Addition Cost in 2 Minutes"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
        current="Adding 1,000 Square Feet Inside a Houston Townhome"
      />

      <div className="mx-auto max-w-6xl px-5 pt-10">
        <img
          src={photos.attic.src}
          srcSet={`${photos.attic.src.replace(".jpg", "-800.jpg")} 800w, ${photos.attic.src} 1024w`}
          sizes="100vw"
          alt={`${photos.attic.alt} (${IMG_NOTE})`}
          fetchPriority="high"
          className="h-[300px] w-full rounded-sm object-cover sm:h-[420px]"
        />
        <p className="mt-2 text-sm text-slate-500">
          {photos.attic.caption} <span className="text-slate-400">Illustrative rendering.</span>
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 leading-relaxed text-slate-700">
            <h2 className="mb-4 text-xl font-bold text-[#0B1F3A]">The brief: more house, same footprint</h2>
            <p className="mb-5">
              A townhome of {FACTS.storeys} storeys in Houston, and a family that had run out of room in it. A
              townhome cannot spread sideways and it cannot take a yard it does not have. The only question worth
              asking was how much usable space was already inside the building and nobody was using.
            </p>
            <p className="mb-5">
              The answer turned out to be a lot. The brief became three things at once: find space inside the
              existing footprint, raise the quality of the rooms that were already there, and give the house a look
              the owners would still want to live in years later.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Where the space was hiding</h2>
            <p className="mb-5">
              Three places, and none of them required the building to get any bigger.
            </p>
            <p className="mb-5">
              The attic was the big one. It became a full {FACTS.atticSqFt} square feet of finished living space.
              That is not a storage loft with a ladder, it is another floor of the house. An attic only becomes that
              if the structure below will carry it, which is the first thing to work out and the thing that decides
              whether the rest of the idea is worth drawing.
            </p>
            <p className="mb-5">
              The second was the void above the stairwell. In most houses that volume is simply lost. Here it became
              a full art studio, a room that exists entirely in space the building was already wasting.
            </p>
            <Figure photo={photos.studio} />
            <p className="mb-5">
              The third was vertical. The house had a two-storey bathroom, which sounds impressive and mostly means
              a great deal of air above your head doing nothing. That height was put to work as a two-storey shower
              with two independent showers and rain heads, the kind of thing people expect in a hotel and rarely get
              at home. An extra bathroom was added as part of the same work.
            </p>
            <Figure photo={photos.shower} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The wall that came out</h2>
            <p className="mb-5">
              One of the structural changes was a load-bearing wall removed and replaced with a single beam. The
              reason was how the house looked and felt, not how it stood up: the wall was chopping up space that
              worked better open. But the moment a bearing wall is involved, the decision stops being a design
              decision.
            </p>
            <p className="mb-5">
              The beam has to be sized for what the wall was actually carrying, and the load it takes has to reach
              the foundation through posts and footings able to accept it. Done properly it disappears into the
              ceiling line and the room simply looks better.{" "}
              <Link href="/services/load-bearing-wall-removal" className="text-[#0B1F3A] underline hover:no-underline">
                Load-bearing wall removal
              </Link>{" "}
              and{" "}
              <Link href="/services/steel-beam-installation" className="text-[#0B1F3A] underline hover:no-underline">
                the beam that replaces the wall
              </Link>{" "}
              are the same job, not two of them.
            </p>
            <Figure photo={photos.beam} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The leak that was not where it looked</h2>
            <p className="mb-5">
              The house had a long-running leak at the porch that previous attempts had not fixed. The reason they
              had not is that the water was not coming from where the stain was. The problem sat in the substructure,
              which is a different kind of repair and needs someone willing to open it up and find the actual path
              rather than seal the symptom. It was fixed permanently as part of the same project.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Drawn before it was demolished</h2>
            <p className="mb-5">
              Every change was drawn out for the owners first, so they could see the new layout before anything was
              touched. Changes on paper cost nothing. Changes in a half-open house cost money and time, and they
              tend to be made badly because everyone is under pressure.
            </p>
            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The number at the start was the number at the end</h2>
            <p className="mb-5">
              The project finished on time and inside its budget, and the thing the owner remarked on afterwards was
              how closely the final cost tracked the original quote. On a renovation of this size that is unusual
              enough to be worth saying out loud.
            </p>
            <p className="mb-5">
              It is also not luck. A quote drifts when the structure turns out to be different from what the price
              assumed, and that happens when nobody looked properly before the number was written. Working out what
              the attic joists could carry, what the wall was holding up and what the beam would have to be, before
              pricing rather than during construction, is what keeps the first figure and the last figure close
              together.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Common questions</h2>
            <div className="mt-6 space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-slate-800">{f.q}</h3>
                  <p className="mt-2">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
                At a glance
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">Building</dt>
                  <dd className="text-slate-600">{FACTS.storeys}-storey townhome, Houston</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">Space gained</dt>
                  <dd className="text-slate-600">About {FACTS.atticSqFt} sq ft, footprint unchanged</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">Structural scope</dt>
                  <dd className="text-slate-600">
                    Attic to living space, art studio over the stairs, added bathroom, two-storey shower,
                    load-bearing wall removal with beam, porch substructure leak
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <CostEstimatorCTA label="Price a Similar Project" className="w-full py-3" />
              </div>
            </div>

            <div className="mt-6 rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
                Related
              </div>
              <ul className="mt-4 space-y-2 text-sm font-semibold">
                <li>
                  <Link href="/services/home-additions" className="text-[#0B1F3A] hover:text-orange-700">
                    Room additions in Houston →
                  </Link>
                </li>
                <li>
                  <Link href="/services/load-bearing-wall-removal" className="text-[#0B1F3A] hover:text-orange-700">
                    Load-bearing wall removal →
                  </Link>
                </li>
                <li>
                  <Link href="/projects/load-bearing-wall-removal-bellaire" className="text-[#0B1F3A] hover:text-orange-700">
                    Three walls removed in Bellaire →
                  </Link>
                </li>
                <li>
                  <Link href="/guides/planning-a-home-addition" className="text-[#0B1F3A] hover:text-orange-700">
                    Planning a home addition →
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
