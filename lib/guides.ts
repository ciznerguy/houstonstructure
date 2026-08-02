export type Guide = {
  slug: string;
  title: string;
  summary: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "load-bearing-wall-removal",
    title: "Can You Remove a Load-Bearing Wall? Here's How to Tell",
    summary:
      "How to tell if a wall is load-bearing, what the engineering process actually involves, and answers to the questions Houston homeowners ask most before opening up a floor plan.",
  },
  {
    slug: "planning-a-home-addition",
    title: "Planning a Home Addition in Houston? Start With the Foundation, Not the Floor Plan",
    summary:
      "Why the engineering question should come before the floor plan, building out versus building up, Houston-specific permit issues, and answers to the questions homeowners ask most before adding onto their home.",
  },
  {
    slug: "how-to-choose-a-structural-engineer",
    title: "How to Choose a Structural Engineer",
    summary:
      "What to check before hiring a structural engineer in Houston: licensing, independence from repair sales, local soil experience, and the questions worth asking before you sign anything.",
  },
];
