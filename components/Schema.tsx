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
    // sameAs is what ties this site to the verified Google Business Profile and
    // the YouTube channel. Add Yelp, Apple Maps, Facebook and LinkedIn here as
    // each one is claimed and its name matches BUSINESS.name exactly. Facebook
    // is deliberately still out: that page reads "Structural Inspection &
    // Consulting" and carries a different phone number, so linking it now would
    // tell a search engine these are two businesses rather than one.
    sameAs: [BUSINESS.googleMapsUrl, BUSINESS.youtubeUrl],
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
