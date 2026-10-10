import React from "react";
import DentalCTA from "./DentalCTA";
import ClinicExperience from "./ClinicExperience";
import AboutSection from "./AboutHero";
import PhilosophySection from "./Philosophy";
import MeetTheExperts from "./Experts";

export const metadata = {
  title: "About WeKnow Dental Clinic | Expert & Patient-Focused Dental Care",

  description:
    "Learn about WeKnow Dental Clinic, our dental experts, patient-first philosophy, modern clinic experience and commitment to comfortable, quality dental care.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About WeKnow Dental Clinic | Patient-Focused Dental Care",

    description:
      "Discover WeKnow Dental Clinic, our experienced dental professionals, care philosophy and modern approach to comfortable dental treatment.",

    url: "/about",

    siteName: "WeKnow Dental Clinic",

    type: "website",

    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "WeKnow Dental Clinic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About WeKnow Dental Clinic | Patient-Focused Dental Care",

    description:
      "Meet the team and learn about the philosophy and patient-focused approach behind WeKnow Dental Clinic.",

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

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <PhilosophySection />
      <MeetTheExperts />
      <ClinicExperience />
      <DentalCTA />
    </main>
  );
}