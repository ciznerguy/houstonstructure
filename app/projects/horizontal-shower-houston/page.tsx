import Img from "@/components/Img";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESS } from "@/lib/business";

// Written from real photographs of the finished shower and from what the owners
// told Levi: they came with the idea, the price surprised them for the better,
// the job was short, and they have since sent two more families. No size, cost,
// duration or neighbourhood was given, so none is stated. Real photographs, so
// no "Illustrative rendering" note under them.
//
// 2026-11-27 rewrite: plainer contractor voice, descriptive H2s, numeric FAQ
// answers. Where job-site specs (flow ratings, pipe size, water heater, duration)
// were not given, the copy gives general guidance rather than numbers for this job.
//
// The photos arrived at 528 px wide (portrait), so the main file and the -800
// file are the same width and are shown at that size rather than stretched.

export const metadata: Metadata = {
  title: "Horizontal Shower in Houston: A Vichy-Style Tiled Lounger",
  description:
    "How we built a horizontal (Vichy-style) shower in a Houston bathroom: a curved tiled lounger under five rain heads, the plumbing and water heater checks, and the waterproofing.",
  openGraph: {
    images: [{ url: "/images/project-horizontal-shower-1-finished.jpg", width: 528, height: 960 }],
  },
};

type Photo = { src: string; alt: string; caption: string };
const photos: Record<
  "finished" | "glass" | "fromAbove" | "overhead" | "angle" | "drain" | "top" | "niche" | "valve" | "wide",
  Photo
> = {
  finished: {
    src: "/images/project-horizontal-shower-1-finished.jpg",
    alt: "Finished horizontal shower in a Houston bathroom: curved tiled lounger along the back wall, five square rain heads on short arms under a tiled soffit, dark grey porcelain walls with a white marble band, river pebble floor and frameless glass",
    caption: "Finished shower. Five rain heads hang from the soffit in a line over the full length of the lounger.",
  },
  glass: {
    src: "/images/project-horizontal-shower-2-through-glass.jpg",
    alt: "Horizontal shower seen through the open frameless glass door, showing the curved lounger, pebble floor and a window above the bench",
    caption: "View through the glass door. The lounger runs the full width of the back wall.",
  },
  fromAbove: {
    src: "/images/project-horizontal-shower-3-lounger-from-above.jpg",
    alt: "Looking down the length of the shower at the wave-shaped face of the lounger in 2x2 grey mosaic, with the river pebble floor and drain below",
    caption: "The lounger face in 2x2 grey mosaic, following the curve from the back rest down to the knees and up to the feet.",
  },
  overhead: {
    src: "/images/project-horizontal-shower-4-rain-heads-overhead.jpg",
    alt: "View straight up from the lounger at a row of square rain heads along the underside of a soffit faced in white marble subway tile",
    caption: "The view from the lounger, looking up at the row of rain heads.",
  },
  angle: {
    src: "/images/project-horizontal-shower-5-rain-heads-angle.jpg",
    alt: "Square brushed-nickel rain heads in a row on short arms under a soffit faced in white marble subway tile and dark grey porcelain",
    caption: "Each rain head hangs on a short arm so the water drops straight down onto the lounger.",
  },
  drain: {
    src: "/images/project-horizontal-shower-6-curve-and-drain.jpg",
    alt: "Curved lounger face in 2x2 grey square mosaic meeting a river pebble shower floor that slopes to a single round drain",
    caption: "Where the lounger meets the floor. The pebble floor slopes to one point drain at the low spot.",
  },
  top: {
    src: "/images/project-horizontal-shower-7-lounger-top.jpg",
    alt: "Top of the curved lounger capped in white marble subway tile, rising and falling along its length above the grey mosaic face",
    caption: "White marble subway tile caps the top of the lounger, cut to follow the curve.",
  },
  niche: {
    src: "/images/project-horizontal-shower-8-niche.jpg",
    alt: "Recessed tiled niche in the dark grey porcelain wall above the rounded end of the marble-capped lounger",
    caption: "Recessed niche at the end of the lounger, within reach while lying down.",
  },
  valve: {
    src: "/images/project-horizontal-shower-9-valve.jpg",
    alt: "Brushed-nickel standing shower head and a three-handle valve trim on dark grey porcelain tile below a white marble accent band",
    caption: "The standing shower head and the three-handle valve on the side wall.",
  },
  wide: {
    src: "/images/project-horizontal-shower-10-wide.jpg",
    alt: "Wide view of the finished glass-enclosed horizontal shower with the curved lounger, pebble floor and rain heads under the soffit",
    caption: "The whole shower as seen from the bathroom door.",
  },
};

function Figure({ photo }: { photo: Photo }) {
  return (
    <>
      <Img
        src={photo.src}
        srcSet={`${photo.src.replace(".jpg", "-800.jpg")} 528w`}
        sizes="(min-width: 768px) 528px, 100vw"
        alt={photo.alt}
        loading="lazy"
        className="mx-auto mb-2 block h-auto w-full max-w-[420px] rounded-sm"
      />
      <p className="mx-auto mt-2 mb-8 max-w-[420px] text-sm text-slate-500">{photo.caption}</p>
    </>
  );
}

function Pair({ a, b }: { a: Photo; b: Photo }) {
  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-2">
      {[a, b].map((p) => (
        <div key={p.src}>
          <Img
            src={p.src}
            srcSet={`${p.src.replace(".jpg", "-800.jpg")} 528w`}
            sizes="(min-width: 640px) 50vw, 100vw"
            alt={p.alt}
            loading="lazy"
            className="h-[420px] w-full rounded-sm object-cover"
          />
          <p className="mt-2 text-sm text-slate-500">{p.caption}</p>
        </div>
      ))}
    </div>
  );
}

const faqs = [
  {
    q: "What is a horizontal shower, and how is it different from a Vichy shower?",
    a: "They are the same idea. A Vichy shower is the spa name for a row of shower heads mounted above a table, so water falls along the whole body of someone lying down. A horizontal shower at home is a residential version of it: a tiled lounger built into the shower, with a row of rain heads mounted in the ceiling or a soffit above it. This one has five heads over the length of the lounger.",
  },
  {
    q: "How much water do five rain heads use at once?",
    a: "Showerheads sold in the US are rated at no more than 2.5 gallons per minute each, and many rain heads are rated lower, around 1.8 to 2.0 gpm. Five heads at 1.8 to 2.5 gpm add up to roughly 9 to 12.5 gallons per minute while they all run together. That is three to five times what a single standard shower head uses, so the supply line and the water heater have to be sized for it.",
  },
  {
    q: "Will my water heater keep up with a horizontal shower?",
    a: "A standard 50-gallon tank gives you roughly 35 gallons of usable hot water before it cools off. At 9 to 12 gallons per minute of mixed water, with about 60 percent of that coming from the heater, a tank that size runs out in five to seven minutes. A whole-house tankless unit typically delivers around 5 to 9 gpm of hot water depending on the model and how cold the incoming water is, so it may need a second unit or a dedicated one for this shower. We check this before the design is final, not after the tile is up.",
  },
  {
    q: "What size water supply line does a five-head shower need?",
    a: "A typical 1/2-inch shower branch is sized for one or two heads. Feeding five heads at the same time usually means a 3/4-inch supply to the valve and enough static pressure at the house. Static pressure of roughly 50 to 70 psi at the house is a comfortable range; below that, the heads at the far end of the row run noticeably weaker.",
  },
  {
    q: "How much does a horizontal shower cost in Houston?",
    a: "It costs more than a standard walk-in shower of the same size, and less than most people expect. The extra cost comes from the additional heads and valve, the larger supply line, the soffit framing, and the hand labor of building and tiling the curved lounger. As a planning range for Houston bathroom remodels, a primary bathroom with a mid-range finish usually runs $35,000 to $60,000 and luxury bathrooms start around $75,000. The owners here expected a luxury price and said the number came in lower than that.",
  },
  {
    q: "Can a horizontal shower fit in my existing bathroom?",
    a: "You need a shower area at least as long as an adult lying down, which in practice means about the length of a standard 60-inch bathtub or more, plus room for the lounger to be built up off the floor. Replacing an existing tub is often the easiest way to get that length. The lounger itself is usually built 16 to 20 inches high, close to normal bench height, so it is easy to sit on before lying back.",
  },
  {
    q: "Do I need a permit for a horizontal shower in Houston?",
    a: "If the drain moves, the supply lines are resized, or a new valve is added, yes. Inside the City of Houston that is a plumbing permit pulled by a licensed plumber, with inspections before the walls and floor are closed. Some smaller cities in the metro, such as Bellaire or West University Place, run their own permit offices with their own forms.",
  },
  {
    q: "How long does it take to build?",
    a: "This job was short. A shower remodel of this kind inside an existing bathroom typically takes three to five weeks, with the frameless glass ordered last, since it is measured only after the tile is finished and usually takes one to two weeks to arrive.",
  },
];

export default function HorizontalShowerPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Horizontal Shower in Houston: A Vichy-Style Tiled Lounger",
    description: metadata.description,
    image: `${BUSINESS.siteUrl}${photos.finished.src}`,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    about: {
      "@type": "Service",
      name: "Bathroom remodeling",
      areaServed: { "@type": "City", name: "Houston, TX" },
    },
    mainEntityOfPage: `${BUSINESS.siteUrl}/projects/horizontal-shower-houston`,
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

  const link = "text-[#0B1F3A] underline hover:no-underline";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />

      <PageHero
        eyebrow="Project | Houston, TX"
        title="Horizontal Shower in Houston: A Vichy-Style Tiled Lounger"
        subtitle="A walk-in shower built around a curved tiled lounger, with five rain heads overhead, a standing shower head for everyday use, and a river pebble floor."
        ctaLabel="Talk to Levi About Your Bathroom"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
        current="Horizontal Shower in Houston"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 leading-relaxed text-slate-700">
            <Img
              src={photos.finished.src}
              srcSet={`${photos.finished.src.replace(".jpg", "-800.jpg")} 528w`}
              sizes="(min-width: 768px) 528px, 100vw"
              alt={photos.finished.alt}
              fetchPriority="high"
              className="mx-auto mb-2 block h-auto w-full max-w-[460px] rounded-sm"
            />
            <p className="mx-auto mt-2 mb-10 max-w-[460px] text-sm text-slate-500">{photos.finished.caption}</p>

            <h2 className="mb-4 text-xl font-bold text-[#0B1F3A]">What the homeowners asked for</h2>
            <p className="mb-5">
              The owners came to Levi with a specific request: a shower they could lie down in, with water
              falling along the length of the body. Spas call this a Vichy shower. They had seen the idea and
              wanted a version of it in their own bathroom, and they assumed it would be priced as a luxury
              item. After the design was drawn up and priced, the number came in lower than they had expected,
              and they went ahead.
            </p>
            <p className="mb-5">
              The finished shower has a built-up tiled lounger along the back wall, five square rain heads on
              short arms under a tiled soffit directly above it, a regular standing shower head on the side
              wall, a recessed niche, a river pebble floor and a frameless glass enclosure. The bathroom itself kept its footprint.
            </p>
            <Figure photo={photos.glass} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              How a horizontal shower works: five rain heads over a tiled lounger
            </h2>
            <p className="mb-5">
              The lounger is shaped to the body of a person lying on their back. It is higher behind the
              shoulders, dips under the knees and rises again at the feet. The soffit above it runs the full
              length of the shower and carries the five rain heads, spaced so the water covers the body from
              head to feet.
            </p>
            <Pair a={photos.overhead} b={photos.angle} />
            <p className="mb-5">
              The standing head and the three-handle valve on the side wall let the owners use it as a normal
              shower day to day. On a three-handle setup like this, one handle typically sets the water temperature and the other two turn on and adjust the flow to each outlet, the standing head and the row of rain heads, so either can run on its own. When nobody is lying on it, the lounger
              works as a long bench.
            </p>
            <Figure photo={photos.valve} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Plumbing and water heater checks for a five-head shower
            </h2>
            <p className="mb-5">
              Most of the planning on a shower like this goes into the water supply. Showerheads sold in the
              US are rated at 2.5 gallons per minute or less, and rain heads are often rated around 1.8 to 2.0.
              Five of them running together draw roughly 9 to 12.5 gallons per minute, which is three to five
              times what a single shower uses. Before the design was final we looked at three things:
            </p>
            <ul className="mb-5 list-disc space-y-2 pl-5">
              <li>
                <strong>Supply line size.</strong> A standard 1/2-inch shower branch will not feed five heads at
                full flow. A five-head shower is normally fed by a 3/4-inch supply line to the valve.
              </li>
              <li>
                <strong>Water pressure.</strong> Measured at a hose bib with a simple gauge before design. Roughly 50 to 70 psi is a comfortable range for a multi-head shower.
              </li>
              <li>
                <strong>Hot water capacity.</strong> A 50-gallon tank gives roughly 35 gallons of usable hot
                water, which is about five to seven minutes with all five heads open. Depending on what the house already has, the answer can be a larger tank, a tankless unit, or a dedicated heater for the shower.
              </li>
            </ul>
            <p className="mb-5">
              The drain is a Houston question of its own. Most homes here sit on a concrete slab, and moving a
              shower drain means cutting that slab. In newer homes the slab is often post-tensioned, with steel
              cables under high tension running through it, so we confirm the slab type and locate any cables
              before anything is cut. Keeping the drain where it already is saves both the slab work and the cost. Inside the City of Houston, changing the drain or the supply also means a
              plumbing permit pulled by a licensed plumber.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Building and waterproofing the curved tiled lounger
            </h2>
            <p className="mb-5">
              A lounger like this is built up from the shower floor in masonry or a solid bench form and shaped to the curve before any waterproofing goes on. A wood-framed bench is not a good base inside a shower, because any moisture that gets past the membrane rots it. The face is finished in 2x2 grey square mosaic, because tile that small is
              the only kind that follows a wave without cracking or leaving wide joints. The top is capped in
              white marble subway tile, each piece cut so the cap rises and falls with the shape below it.
            </p>
            <Pair a={photos.fromAbove} b={photos.top} />
            <p className="mb-5">
              Tile and grout are not waterproof, so the membrane under them does the real work. It has to be
              continuous across the floor, up the walls, over the whole lounger and into the drain, with no gaps
              at corners or curves. That can be a sheet membrane bonded to the substrate, a liquid membrane rolled on in coats, or a traditional pan liner under a mortar bed. What matters more than the brand is that it is continuous and that it is flood tested before any tile goes on. The flat top of a bench is where
              water tends to sit, so the top of the lounger is pitched toward the shower floor rather than laid
              dead level. In a Houston bathroom with high humidity, a surface that never dries is where mildew
              and failed grout start.
            </p>
            <p className="mb-5">
              The floor is river pebble set over a mortar bed sloped to a single point drain at the low spot of
              the curve. Building code calls for a shower floor slope of at least 1/4 inch per foot toward the
              drain. Pebble is comfortable underfoot and grips well when wet.
            </p>
            <Figure photo={photos.drain} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              Tile and fixture choices: porcelain, marble and frameless glass
            </h2>
            <p className="mb-5">
              The walls are large-format dark grey porcelain laid in a staggered pattern, with a band of white
              marble subway tile at shoulder height that wraps the shower and repeats on the face of the
              soffit. The rain heads and the standing head are brushed nickel. Frameless glass encloses the
              shower so the lounger and the soffit are visible from the bathroom door. A recessed niche at the
              end of the lounger holds soap and shampoo within reach while lying down. Frameless shower glass is usually 3/8-inch or 1/2-inch tempered glass, heavy enough to stand with only hinges and clips.
            </p>
            <Pair a={photos.niche} b={photos.wide} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The result and what the owners said</h2>
            <p className="mb-5">
              The job was short and stayed focused on the shower. When it was done,
              the owners posted:
            </p>
            <blockquote className="mb-5 border-l-4 border-orange-600 pl-4 italic text-slate-800">
              &ldquo;Horizontal shower... we are DONE!!!! We are starting to take reservations to use this
              amazing therapeutic shower!&rdquo;
            </blockquote>
            <p className="mb-5">
              The same owners also had Levi remodel their kitchen. They had been through bad experiences with
              other remodelers and wrote afterwards:
            </p>
            <blockquote className="mb-5 border-l-4 border-orange-600 pl-4 italic text-slate-800">
              &ldquo;From day one, the communication was great. They showed up when they said they would, kept me
              updated throughout the project, and most importantly, stayed on schedule.&rdquo;
            </blockquote>
            <blockquote className="mb-5 border-l-4 border-orange-600 pl-4 italic text-slate-800">
              &ldquo;It&rsquo;s such a relief to finally find a remodeling company that actually delivers what
              they promise.&rdquo;
            </blockquote>
            <p className="mb-5">Since then they have sent two more families to Levi to design showers of their own.</p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">
              How to tell if your bathroom can take a horizontal shower
            </h2>
            <p className="mb-5">A few things you can check yourself before calling anyone:</p>
            <ul className="mb-5 list-disc space-y-2 pl-5">
              <li>
                <strong>Length.</strong> Measure the longest wall of your shower or tub. Under about 60 inches
                there is not enough room for an adult to lie down comfortably.
              </li>
              <li>
                <strong>Water heater.</strong> Read the label on the tank or tankless unit. A 40 or 50-gallon tank
                will run a five-head shower for only a few minutes at a time.
              </li>
              <li>
                <strong>Ceiling height.</strong> The soffit hangs below the ceiling, so an 8-foot ceiling leaves
                less clearance than a 9 or 10-foot one. Stand where the lounger would go and look up.
              </li>
              <li>
                <strong>Foundation.</strong> If your house is on a slab, look for a warning stamp in the garage
                slab or a builder note saying &ldquo;post-tensioned&rdquo;. It does not rule
                anything out, but it changes how a drain is moved.
              </li>
            </ul>
            <p className="mb-5">
              If those look workable, the next step is a visit to check the plumbing, the slab and the framing
              over the shower. Our{" "}
              <Link href="/services/bathroom-remodeling" className={link}>
                bathroom remodeling in Houston
              </Link>{" "}
              page covers tub-to-shower conversions, waterproofing and typical costs. You can also call{" "}
              <a href={BUSINESS.phoneHref} className={link}>
                {BUSINESS.phone}
              </a>{" "}
              or{" "}
              <Link href="/contact" className={link}>
                send us a message
              </Link>
              .
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Horizontal shower questions</h2>
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
                  <dt className="font-semibold text-[#0B1F3A]">Project</dt>
                  <dd className="text-slate-600">Horizontal (Vichy-style) shower in a Houston bathroom remodel</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">What was built</dt>
                  <dd className="text-slate-600">
                    Curved built-up tiled lounger, soffit with five rain heads, standing shower head with a
                    three-handle valve, recessed niche, frameless glass
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">Materials</dt>
                  <dd className="text-slate-600">
                    Large-format dark grey porcelain walls, white marble subway band and lounger cap, 2x2 grey
                    mosaic lounger face, river pebble floor to a single point drain
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">Result</dt>
                  <dd className="text-slate-600">Priced lower than the owners expected; two referrals so far</dd>
                </div>
              </dl>
              <a
                href={BUSINESS.phoneHref}
                className="mt-6 block rounded-sm bg-[#EA580C] px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#c94b0a]"
              >
                Call {BUSINESS.phone}
              </a>
            </div>

            <div className="mt-6 rounded-sm border border-slate-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
                Related
              </div>
              <ul className="mt-4 space-y-2 text-sm font-semibold">
                <li>
                  <Link href="/services/bathroom-remodeling" className="text-[#0B1F3A] hover:text-orange-700">
                    Bathroom remodeling in Houston →
                  </Link>
                </li>
                <li>
                  <Link href="/projects/bedroom-bathroom-addition-houston" className="text-[#0B1F3A] hover:text-orange-700">
                    A bedroom and bathroom added to a Houston home →
                  </Link>
                </li>
                <li>
                  <Link href="/services/kitchen-remodeling" className="text-[#0B1F3A] hover:text-orange-700">
                    Kitchen remodeling →
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-[#0B1F3A] hover:text-orange-700">
                    All projects →
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        heading="Thinking about a custom shower?"
        subheading="Call or send a few details. We will tell you what your bathroom, plumbing and water heater can handle before anything is designed."
      />
    </>
  );
}
