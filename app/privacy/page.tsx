import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${BUSINESS.name} collects, uses and protects the information you share through houstonstructure.com.`,
  alternates: { canonical: "/privacy" },
};

const CONTACT_EMAIL = "levi@levihomes.com";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        subtitle="What we collect through this website, why, and what we do with it."
      />
      <section className="mx-auto max-w-3xl px-5 py-14 text-slate-700 leading-relaxed">
        <p className="mb-5 text-sm text-slate-500">Last updated: November 12, 2026</p>

        <p className="mb-5">
          This policy covers houstonstructure.com, operated by {BUSINESS.name} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;). It explains what information we collect when you use the site, how we use
          it and the choices you have.
        </p>

        <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Information you give us</h2>
        <p className="mb-5">
          When you fill out a contact form, request a callback or use the cost estimator, we collect
          what you enter: your name, phone number, email address, the service you are interested in,
          your message, and the answers you give about your project. We only receive this information
          if you choose to send it.
        </p>

        <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">How we use it</h2>
        <p className="mb-5">
          We use it to answer your request: to call or email you back, to give you an estimate, and to
          schedule a site visit if you want one. Form submissions are delivered to our team by email,
          and a copy is kept by Netlify, the company that hosts this website. We do not sell your
          information, and we do not share it with anyone outside our business except the service
          providers that host the site and deliver the email.
        </p>

        <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Analytics and cookies</h2>
        <p className="mb-5">
          We use Google Analytics and Google Tag Manager to understand how visitors find and use the
          site, for example which pages are read and whether a form was sent. These tools use cookies
          and collect information such as your browser, device, approximate location and the pages you
          visit. They do not give us your name or contact details. You can block cookies in your
          browser settings or use Google&rsquo;s{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener"
            className="text-[#0B1F3A] underline hover:no-underline"
          >
            Analytics opt-out add-on
          </a>
          .
        </p>

        <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Google services we use</h2>
        <p className="mb-5">
          We use Google&rsquo;s APIs to manage our own Google Business Profile, YouTube channel and
          website statistics. These tools access only accounts that belong to our business. They do
          not access the Google account of anyone who visits this site, and we do not receive any
          Google user data from visitors. Our use of information received from Google APIs follows the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener"
            className="text-[#0B1F3A] underline hover:no-underline"
          >
            Google API Services User Data Policy
          </a>
          , including its Limited Use requirements.
        </p>

        <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">How long we keep it</h2>
        <p className="mb-5">
          We keep the details you send us for as long as we need them to work with you on your project
          and to keep normal business records. You can ask us to delete them at any time.
        </p>

        <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Your choices</h2>
        <p className="mb-5">
          You can ask what information we hold about you, ask us to correct it, or ask us to delete it.
          Email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#0B1F3A] underline hover:no-underline">
            {CONTACT_EMAIL}
          </a>{" "}
          or call{" "}
          <a href={BUSINESS.phoneHref} className="text-[#0B1F3A] underline hover:no-underline">
            {BUSINESS.phone}
          </a>
          .
        </p>

        <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Children</h2>
        <p className="mb-5">
          This site is meant for adults planning work on a home or building. We do not knowingly
          collect information from children under 13.
        </p>

        <h2 className="mt-10 mb-4 text-xl font-bold text-[#0B1F3A]">Changes to this policy</h2>
        <p className="mb-5">
          If we change this policy, we will update it on this page and change the date at the top.
        </p>

        <p className="mt-10">
          Questions? <Link href="/contact" className="text-[#0B1F3A] underline hover:no-underline">Contact us</Link>.
        </p>
      </section>
    </>
  );
}
