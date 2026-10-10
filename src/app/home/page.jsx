import React from "react";
import Hero from "./Home-Hero";
import ConcernSection from "./Concern-Section";
import ClinicIntroduction from "./Clinic-Intro";
import TestimonialsSection from "./Feedback";
import AppointmentCTA from "./Appointments";

// ---------------------------------------------------------------------------
// Clinic details are filled in. Double-check the house number in streetAddress.
// IMPORTANT: this file must NOT have "use client" at the top, and the export
// must be named exactly `metadata` (Next.js ignores any other name).
// ---------------------------------------------------------------------------
const SITE_URL = "https://www.weknowdental.in";
const CITY = "Kamareddy";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Best Dental Clinic in ${CITY} | We Know Dental Clinic`,
  description: `We Know Dental Clinic in ${CITY} offers painless treatment for tooth pain, smile makeovers, missing teeth, teeth whitening and braces. Open Mon-Sat 9 AM-9 PM, Sun 9 AM-1 PM. Book your appointment today.`,
  keywords: [
    `dental clinic in ${CITY}`,
    `dentist in ${CITY}`,
    "smile makeover",
    "teeth whitening",
    "braces",
    "dental implants",
    "tooth pain treatment",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "We Know Dental Clinic",
    title: `We Know Dental Clinic | Comfort-focused Dentistry in ${CITY}`,
    description: "Personalized dental care for healthy, confident and beautiful smiles.",
    images: [
      { url: "/consultation.png", width: 1000, height: 700, alt: "Dentist consulting a patient" },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Know Dental Clinic",
    description: "Personalized, comfort-focused dental care.",
    images: ["/consultation.png"],
  },
};

// Browser theme colour on mobile (matches your dark teal hero)
export const viewport = {
  themeColor: "#08212A",
  width: "device-width",
  initialScale: 1,
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "We Know Dental Clinic",
  url: SITE_URL,
  image: `${SITE_URL}/consultation.png`,
  telephone: "+918790525277",
  priceRange: "$$",
  medicalSpecialty: "Dentistry",
  address: {
    "@type": "PostalAddress",
    streetAddress: "H.No. 1, 5-7, Godown Rd",
    addressLocality: CITY,
    addressRegion: "Telangana",
    postalCode: "503111",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

const HomePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dentistSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <Hero />
        <ConcernSection />
        <ClinicIntroduction />
        <TestimonialsSection />
        <AppointmentCTA />
      </main>
    </>
  );
};

export default HomePage;