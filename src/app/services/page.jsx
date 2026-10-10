import React from "react";
import ServicesHero from "./ServiceHero";
import FindByConcern from "./Concern";
import TreatmentsSection from "./ServiceSection";
import TreatmentProcessSection from "./TreatmentProcess";
import WhyChooseUs from "./WhyChooseUs";

export const metadata = {
  title: "Dental Services | WeKnow Dental Clinic",

  description:
    "Explore dental treatments at WeKnow Dental Clinic, including dental implants, root canal treatment, braces, teeth whitening, cosmetic dentistry and preventive care.",

 

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Dental Services | WeKnow Dental Clinic",
    description:
      "Explore dental implants, root canal treatment, braces, teeth whitening, cosmetic dentistry and preventive dental care at WeKnow Dental Clinic.",
    url: "/services",
    siteName: "WeKnow Dental Clinic",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Services at WeKnow Dental Clinic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dental Services | WeKnow Dental Clinic",
    description:
      "Explore dental implants, root canal treatment, braces, teeth whitening, cosmetic dentistry and preventive dental care.",
    images: ["/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <FindByConcern />
      <TreatmentsSection />
      <TreatmentProcessSection />
      <WhyChooseUs />
    </main>
  );
}