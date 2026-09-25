// Project / case-study pages live at app/projects/<slug>/page.tsx, one folder
// per project (same pattern as guides). Registering a project here wires it
// into the sitemap and into the "Recent project" box on its city page and its
// service page. No /projects index until there is more than one.
export type Project = {
  slug: string;
  title: string;
  summary: string;
  // Omit citySlug when the project is not tied to one named city; the page
  // then just does not appear in any location sidebar.
  citySlug?: string; // matches SERVICE_AREAS[].slug
  serviceSlug: string; // matches SERVICES[].slug
  // Omit both until real (or approved illustrative) images exist for the
  // project. Cards and sidebars render text-only when there is no image.
  image?: string;
  images?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "room-addition-case-study",
    title: "Adding a 380-Square-Foot Room to a 1970s Houston Home",
    summary:
      "A start-to-finish look at one ground-floor addition: evaluating the existing foundation, designing the tie-in so the seam does not crack later, and carrying it through permitting and construction.",
    serviceSlug: "home-additions",
    image: "/images/room-addition-case-study-5-completed-exterior.jpg",
    images: [
      "/images/room-addition-case-study-1-site-evaluation.jpg",
      "/images/room-addition-case-study-2-foundation-forms.jpg",
      "/images/room-addition-case-study-3-tie-in-detail.jpg",
      "/images/room-addition-case-study-4-framing.jpg",
      "/images/room-addition-case-study-5-completed-exterior.jpg",
      "/images/room-addition-case-study-6-engineering-letter.jpg",
    ],
  },
  {
    slug: "load-bearing-wall-removal-bellaire",
    title: "Removing Three Load-Bearing Walls in Bellaire",
    summary:
      "Three first-floor walls carrying the second floor came out to create one open living space. Demolition exposed a second floor that was already out of level, so it was corrected before the permanent beams went in.",
    citySlug: "bellaire",
    serviceSlug: "load-bearing-wall-removal",
    image: "/images/project-bellaire-open-plan-5-after.jpg",
    images: [
      "/images/project-bellaire-open-plan-1-before.jpg",
      "/images/project-bellaire-open-plan-2-shoring.jpg",
      "/images/project-bellaire-open-plan-3-level-check.jpg",
      "/images/project-bellaire-open-plan-4-correction.jpg",
      "/images/project-bellaire-open-plan-5-after.jpg",
    ],
  },
  {
    slug: "second-story-addition-katy",
    title: "Second Story Addition in Katy: A Farmhouse Primary Suite",
    summary:
      "A full second floor over a one-story Katy home: primary bedroom with tall windows, a two-person grey tile shower bath, and a walk-in closet built around the owner's collection. About 500 sq ft, four months, family stayed in the house.",
    citySlug: "katy",
    serviceSlug: "home-additions",
    image: "/images/project-katy-second-story-1-exterior.jpg",
    images: [
      "/images/project-katy-second-story-1-exterior.jpg",
      "/images/project-katy-second-story-2-bedroom.jpg",
      "/images/project-katy-second-story-3-bathroom.jpg",
      "/images/project-katy-second-story-4-closet.jpg",
    ],
  },
];
