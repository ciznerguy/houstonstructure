// Project / case-study pages live at app/projects/<slug>/page.tsx, one folder
// per project (same pattern as guides). Registering a project here wires it
// into the sitemap and into the "Recent project" box on its city page and its
// service page. No /projects index until there is more than one.
export type Project = {
  slug: string;
  title: string;
  summary: string;
  citySlug: string; // matches SERVICE_AREAS[].slug
  serviceSlug: string; // matches SERVICES[].slug
  image: string;
  images: string[];
};

export const PROJECTS: Project[] = [
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
