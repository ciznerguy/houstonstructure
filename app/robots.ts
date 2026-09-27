import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

export const dynamic = "force-static";

// The wildcard rule already permits these, so naming them changes nothing
// today. It is here so the permission is explicit and survives: if someone
// ever narrows the wildcard, AI access does not disappear quietly with it.
// Two of our three leads so far arrived through ChatGPT, which reads Bing and
// crawls as GPTBot and ChatGPT-User.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI training and search index
  "OAI-SearchBot", // OpenAI search
  "ChatGPT-User", // fetches a page when a user asks about it
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Google-Extended", // Gemini grounding; separate from Googlebot
  "Applebot-Extended",
  "CCBot", // Common Crawl, which many models train on
  "Bytespider",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${BUSINESS.siteUrl}/sitemap.xml`,
    host: BUSINESS.siteUrl,
  };
}
