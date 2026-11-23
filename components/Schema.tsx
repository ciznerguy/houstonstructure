import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/business";

export default function Schema() {
  const json = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "GeneralContractor"],
    // A stable @id lets every other JSON-LD block on the site point at one
    // entity instead of describing a new business on each page.
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    telephone: BUSINESS.phone,
    url: BUSINESS.siteUrl,
    // sameAs ties this site to its profiles so search engines read them as one
    // business. Only profiles whose name and phone match BUSINESS exactly belong
    // here. Facebook was added 2026-11-23 once its name change to match the
    // Google profile went through and its phone was corrected; LinkedIn was
    // created 2026-11-09 with the same name and phone.
    sameAs: [BUSINESS.googleMapsUrl, BUSINESS.youtubeUrl, BUSINESS.facebookUrl, BUSINESS.linkedinUrl],
    hasMap: BUSINESS.googleMapsUrl,
    image: `${BUSINESS.siteUrl}/images/hero-framing.jpg`,
    priceRange: "$$",
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
      .filter((h) => h.opens && h.closes)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.opens,
        closes: h.closes,
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
          ...(s.image && { image: `${BUSINESS.siteUrl}${s.image}` }),
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
