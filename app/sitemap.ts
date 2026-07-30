import type { MetadataRoute } from "next";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/business";
import { GUIDES } from "@/lib/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1, images: [`${base}/images/hero-framing.jpg`] },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5, images: [`${base}/images/about-renovation.jpg`] },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    ...(s.image && { images: [`${base}${s.image}`] }),
  }));

  const locationPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((c) => ({
    url: `${base}/locations/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
    images: [
      `${base}/images/load-bearing-wall-removal-1-inspection.jpg`,
      `${base}/images/load-bearing-wall-removal-2-measurement.jpg`,
      `${base}/images/load-bearing-wall-removal-3-shoring.jpg`,
      `${base}/images/load-bearing-wall-removal-4-demolition.jpg`,
      `${base}/images/load-bearing-wall-removal-5-beam-install.jpg`,
    ],
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...guidePages];
}
