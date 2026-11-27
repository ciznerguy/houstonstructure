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
// The photos arrived at 528 px wide (portrait), so the main file and the -800
// file are the same width. Frames are tall to keep the portrait shots whole.

export const metadata: Metadata = {
  title: "Horizontal Shower in Houston: Rain Heads Over a Tiled Lounger",
  description:
    "A Houston couple wanted a shower you lie down in. Five rain heads over a curved tiled lounger, built in a short job for less than they expected.",
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
    alt: "Finished horizontal shower behind frameless glass: a curved tiled lounger along the back wall, five square rain heads hanging from a tiled soffit above it, dark grey wall tile with a white marble band and a river pebble floor",
    caption: "The finished shower. Five rain heads hang from the soffit, lined up over the length of the lounger.",
  },
  glass: {
    src: "/images/project-horizontal-shower-2-through-glass.jpg",
    alt: "The horizontal shower seen through the open glass door, with the curved lounger, pebble floor and a window above the bench",
    caption: "Through the glass. The lounger takes the whole back wall.",
  },
  fromAbove: {
    src: "/images/project-horizontal-shower-3-lounger-from-above.jpg",
    alt: "Looking down the length of the shower at the wave-shaped edge of the lounger, finished in small grey square mosaic, with a river pebble floor and the drain below it",
    caption: "The lounger edge follows the shape of a body lying down: up at the back, down under the knees, up again at the feet.",
  },
  overhead: {
    src: "/images/project-horizontal-shower-4-rain-heads-overhead.jpg",
    alt: "View looking straight up from the lounger at a row of square rain heads set along the underside of a marble-tiled soffit",
    caption: "The view from the lounger: a row of rain heads directly overhead.",
  },
  angle: {
    src: "/images/project-horizontal-shower-5-rain-heads-angle.jpg",
    alt: "Square brushed-nickel rain heads in a row under a soffit faced in white marble subway tile and dark grey porcelain",
    caption: "Each head sits on a short arm so the water falls straight down onto the person lying below.",
  },
  drain: {
    src: "/images/project-horizontal-shower-6-curve-and-drain.jpg",
    alt: "Close view of the curved lounger face in grey square mosaic meeting a river pebble shower floor, with a round drain in the low point",
    caption: "Small mosaic is the only tile that will bend around a curve like this. The pebble floor drains to one point.",
  },
  top: {
    src: "/images/project-horizontal-shower-7-lounger-top.jpg",
    alt: "The top of the lounger finished in white marble subway tile, rising and falling along its length, with the grey mosaic face below",
    caption: "The top of the lounger in marble, laid so it rises and falls with the curve.",
  },
  niche: {
    src: "/images/project-horizontal-shower-8-niche.jpg",
    alt: "A recessed tiled niche in the dark grey shower wall above the rounded end of the marble-topped lounger",
    caption: "A recessed niche at the end of the lounger, within reach when you are lying down.",
  },
  valve: {
    src: "/images/project-horizontal-shower-9-valve.jpg",
    alt: "Brushed-nickel shower head and a valve plate with three square handles on dark grey tile, under a white marble accent band",
    caption: "A regular standing shower head and a three-handle valve on the side wall.",
  },
  wide: {
    src: "/images/project-horizontal-shower-10-wide.jpg",
    alt: "Wide view of the finished glass-enclosed shower with the curved lounger, pebble floor and rain heads under the soffit",
    caption: "The whole shower from the bathroom door.",
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
    q: "What is a horizontal shower?",
    a: "A shower you lie down in. Instead of one head over a standing person, a row of heads runs along the ceiling over a bench or lounger, so the water falls along the whole length of your body at once. Spas call the same idea a Vichy shower. At home it is usually built as a tiled lounger under a soffit that carries the heads.",
  },
  {
    q: "Is a horizontal shower much more expensive than a regular walk-in shower?",
    a: "Less than most people assume. The owners here expected a luxury price and were surprised by the number. What adds cost is real but limited: more shower heads, the supply piping to feed them, a soffit to hang them from, and the hand work of tiling a curved lounger. The room itself, the glass and the waterproofing are much the same as for any large walk-in shower.",
  },
  {
    q: "Can I still use it as a normal shower?",
    a: "Yes. This one has a regular head on the side wall for standing showers, and a three-handle valve beside it. The lounger also works as a long bench when you are not lying on it.",
  },
  {
    q: "Does running five heads at once need a bigger water heater?",
    a: "It can. Several heads running together use more hot water per minute than one, so the water heater, the pipe sizes and the water pressure in the house should be checked before the design is settled. That is a question for the start of the job, not the end.",
  },
  {
    q: "Can a horizontal shower go into an existing bathroom?",
    a: "Usually, if the room is long enough for a person to lie down, roughly the length of a standard bathtub or more. Replacing a tub with one is a common way to do it. On a slab foundation the drain may need to move, which means cutting the concrete, so the layout should be agreed before any demolition.",
  },
  {
    q: "How long does a job like this take?",
    a: "This one was short and focused. A shower remodel inside an existing bathroom is a much smaller job than an addition, and most of the calendar goes to waterproofing, tile and the glass, which is measured only after the tile is done.",
  },
];

export default function HorizontalShowerPage() {
  const articleJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A Horizontal Shower in Houston: Rain Heads Over a Tiled Lounger",
    description: metadata.description,
    image: `${BUSINESS.siteUrl}${photos.finished.src}`,
    author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    publisher: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
    about: {
      "@type": "Service",
      name: "Bathroom and shower remodeling",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />

      <PageHero
        eyebrow="Project | Houston, TX"
        title="A Horizontal Shower in Houston"
        subtitle="The owners did not want a bigger shower. They wanted one they could lie down in."
        ctaLabel="Talk to Levi About Your Bathroom"
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
        current="A Horizontal Shower in Houston"
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

            <h2 className="mb-4 text-xl font-bold text-[#0B1F3A]">The idea came from the owners</h2>
            <p className="mb-5">
              Most bathroom calls start with a problem: a leaking pan, a tub nobody uses, tile that has seen
              better days. This one started with a picture in the owners&rsquo; heads. They wanted a shower you
              lie down in, with the water falling along the whole length of your body instead of onto your head
              and shoulders.
            </p>
            <p className="mb-5">
              Spas have a name for it, a Vichy shower, and a price to match. The owners assumed a home version
              would be priced like a luxury item too. They brought the idea to Levi anyway, and the first
              pleasant surprise was the number. It was lower than they had braced for.
            </p>
            <Figure photo={photos.glass} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">How it works</h2>
            <p className="mb-5">
              Along the back wall is a tiled lounger, built up from the floor and shaped like a body lying on
              its back. It rises behind the shoulders, dips under the knees and comes up again at the feet.
              Above it, a tiled soffit runs the length of the shower and carries five square rain heads, each
              on a short arm, spaced so the water lands from head to toe.
            </p>
            <Pair a={photos.overhead} b={photos.angle} />
            <p className="mb-5">
              Lie down, turn it on, and the water comes straight down on you from five points at once. That is
              the whole idea, and it is why the owners started calling it therapeutic before the glass was
              even in.
            </p>
            <p className="mb-5">
              It is still a normal shower when you want one. A standing head on the side wall and a
              three-handle valve take care of the everyday shower, and the lounger doubles as a long bench.
            </p>
            <Figure photo={photos.valve} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The curve is the hard part</h2>
            <p className="mb-5">
              Flat tile does not bend. The face of the lounger is finished in small square mosaic, the only
              kind of tile that will follow a wave without cracking or leaving wide gaps, and the top is capped
              in white marble subway tile, cut and laid so it rises and falls with the shape below.
            </p>
            <Pair a={photos.fromAbove} b={photos.top} />
            <p className="mb-5">
              Under the tile, every surface of the lounger has to be waterproofed and pitched so water runs off
              it rather than sitting in the dips. Water on a bench that never dries is how mould starts and how
              grout fails. The floor is river pebble, which is comfortable underfoot and slopes to a single
              drain at the low point of the curve.
            </p>
            <Figure photo={photos.drain} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">The finish</h2>
            <p className="mb-5">
              The walls are large dark grey porcelain tile, set in a staggered pattern, with a band of white
              marble running around the shower at shoulder height and again on the face of the soffit. Frameless
              glass closes it in, so the lounger and the row of heads are the first thing you see from the
              bathroom door. A recessed niche sits at the end of the lounger, where you can reach it lying down.
            </p>
            <Pair a={photos.niche} b={photos.wide} />

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">A short job</h2>
            <p className="mb-5">
              The work itself was short and focused. Most of the time on a shower like this goes to the parts nobody
              sees: the plumbing for five heads, the waterproofing, and the tile on the curve.
            </p>
            <p className="mb-5">When it was finished, the owners put it this way:</p>
            <blockquote className="mb-5 border-l-4 border-orange-600 pl-4 italic text-slate-800">
              &ldquo;Horizontal shower... we are DONE!!!! We are starting to take reservations to use this
              amazing therapeutic shower!&rdquo;
            </blockquote>
            <p className="mb-5">
              They were only half joking. Since then they have sent two more families to Levi to design a
              shower of their own.
            </p>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">What the owners said</h2>
            <p className="mb-5">
              The same owners had Levi remodel their kitchen as well. They had been through bad experiences with
              other remodelers before, and said they were nervous about starting again. Afterwards they wrote:
            </p>
            <blockquote className="mb-5 border-l-4 border-orange-600 pl-4 italic text-slate-800">
              &ldquo;From day one, the communication was great. They showed up when they said they would, kept me
              updated throughout the project, and most importantly, stayed on schedule.&rdquo;
            </blockquote>
            <blockquote className="mb-5 border-l-4 border-orange-600 pl-4 italic text-slate-800">
              &ldquo;It&rsquo;s such a relief to finally find a remodeling company that actually delivers what
              they promise.&rdquo;
            </blockquote>

            <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Have an idea for your bathroom?</h2>
            <p className="mb-5">
              See our <Link href="/services/bathroom-remodeling" className="text-[#0B1F3A] underline hover:no-underline">bathroom remodeling in Houston</Link>{" "}
              page for showers, tub conversions and what a remodel costs. Bring the picture you have in your head, even if it sounds unusual. Levi will tell you what it
              takes to build it, what it will cost, and whether the plumbing and the room can carry it. Call{" "}
              <a href={BUSINESS.phoneHref} className="text-[#0B1F3A] underline hover:no-underline">
                {BUSINESS.phone}
              </a>{" "}
              or{" "}
              <Link href="/contact" className="text-[#0B1F3A] underline hover:no-underline">
                send us a message
              </Link>
              .
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
                  <dt className="font-semibold text-[#0B1F3A]">The idea</dt>
                  <dd className="text-slate-600">A shower you lie down in, brought to us by the owners</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">What was built</dt>
                  <dd className="text-slate-600">
                    Curved tiled lounger, soffit with five rain heads, standing shower head, recessed niche,
                    frameless glass
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0B1F3A]">Finish</dt>
                  <dd className="text-slate-600">
                    Dark grey porcelain walls, white marble band and lounger top, grey square mosaic, river
                    pebble floor
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
                  <Link href="/projects/bedroom-bathroom-addition-houston" className="text-[#0B1F3A] hover:text-orange-700">
                    A bedroom and bathroom added to a Houston home →
                  </Link>
                </li>
                <li>
                  <Link href="/services/bathroom-remodeling" className="text-[#0B1F3A] hover:text-orange-700">
                    Bathroom remodeling in Houston →
                  </Link>
                </li>
                <li>
                  <Link href="/services/kitchen-remodeling" className="text-[#0B1F3A] hover:text-orange-700">
                    Kitchen design and remodeling →
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

      <CTASection />
    </>
  );
}
