import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/business";

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
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: SERVICE_AREAS.map((c) => ({
      "@type": "City",
      name: `${c.name}, TX`,
    })),
    openingHoursSpecification: BUSINESS.hours
      .filter((h) => h.hours !== "Closed" && h.hours !== "By appointment")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "08:00",
        closes: "17:00",
      })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.summary,
          url: `${BUSINESS.siteUrl}/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
