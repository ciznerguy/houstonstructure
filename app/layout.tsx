import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import FloatingContactButton from "@/components/FloatingContactButton";
import { BUSINESS } from "@/lib/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} | Houston, TX`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    "Licensed structural engineering, foundation repair, and structural inspection reports serving Houston, The Woodlands, Sugar Land, and the surrounding metro. 5.0-star rated. Call for a straight engineering opinion.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
  },
  verification: {
    google: "jrts4ESremhJhAG2XsO_3AvxFqcYaJ5JHj2bKYrpZZs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${BUSINESS.gtmId}');`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${BUSINESS.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Schema />
        <Header />
        <FloatingContactButton />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
