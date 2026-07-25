import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <Schema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
