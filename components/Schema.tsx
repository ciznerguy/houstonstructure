import { BUSINESS, SERVICE_AREAS } from "@/lib/business";

export default function Schema() {
  const json = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "GeneralContractor"],
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    url: BUSINESS.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: "US",
    },
    areaServed: SERVICE_AREAS.map((c) => ({
      "@type": "City",
      name: `${c.name}, TX`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
    },
    openingHoursSpecification: BUSINESS.hours
      .filter((h) => h.hours !== "Closed" && h.hours !== "By appointment")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "08:00",
        closes: "17:00",
      })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
