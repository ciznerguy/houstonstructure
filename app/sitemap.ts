import type { MetadataRoute } from "next";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/business";
import { GUIDES } from "@/lib/guides";
import { PROJECTS } from "@/lib/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1, images: [`${base}/images/hero-framing.jpg`] },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cost-estimator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5, images: [`${base}/images/about-renovation.jpg`] },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [
      ...(s.image ? [`${base}${s.image}`] : []),
      ...(s.sections ?? []).flatMap((sec) => (sec.image ? [`${base}${sec.image.src}`] : [])),
    ],
  }));

  const locationPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((c) => ({
    url: `${base}/locations/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guideImages: Record<string, string[]> = {
    "load-bearing-wall-removal": [
      "/images/load-bearing-wall-removal-1-inspection.jpg",
      "/images/load-bearing-wall-removal-2-measurement.jpg",
      "/images/load-bearing-wall-removal-3-shoring.jpg",
      "/images/load-bearing-wall-removal-4-demolition.jpg",
      "/images/load-bearing-wall-removal-5-beam-install.jpg",
      "/images/load-bearing-wall-removal-6-engineer-consultation.jpg",
    ],
    "planning-a-home-addition": ["/images/home-additions.jpg"],
    "commercial-wall-removal": [
      "/images/commercial-wall-removal-1-before.jpg",
      "/images/commercial-wall-removal-2-shoring.jpg",
      "/images/commercial-wall-removal-3-beam.jpg",
      "/images/commercial-wall-removal-4-finished.jpg",
    ],
    "second-story-addition-cost": [
      "/images/second-story-addition-cost-1-before.jpg",
      "/images/second-story-addition-cost-2-framing.jpg",
      "/images/second-story-addition-cost-3-sheathing.jpg",
      "/images/second-story-addition-cost-4-completed.jpg",
    ],
  };

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
    ...(guideImages[g.slug] && { images: guideImages[g.slug].map((img) => `${base}${img}`) }),
  }));

  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
    ...(p.images?.length && { images: p.images.map((img) => `${base}${img}`) }),
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...guidePages, ...projectPages];
}
