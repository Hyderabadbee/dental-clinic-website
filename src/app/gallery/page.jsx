import React from "react";
import MomentsSection from "./GalleryHero";
import ClinicGallery from "./ClinicGallery";
import FeaturedStories from "./Stories";
import VisitExperienceSection from "./Experience";

export const metadata = {
  title: "Dental Clinic Gallery | WeKnow Dental Clinic",

  description:
    "Explore the WeKnow Dental Clinic gallery featuring our modern clinic, treatment rooms, dental technology, patient care environment and in-clinic experience.",

  alternates: {
    canonical: "/gallery",
  },

  openGraph: {
    title: "Dental Clinic Gallery | WeKnow Dental Clinic",

    description:
      "Take a look inside WeKnow Dental Clinic, including our modern treatment rooms, dental technology, clinic environment and patient experience.",

    url: "/gallery",

    siteName: "WeKnow Dental Clinic",

    type: "website",

    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "WeKnow Dental Clinic Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Dental Clinic Gallery | WeKnow Dental Clinic",

    description:
      "Explore the WeKnow Dental Clinic environment, treatment rooms, technology and patient care experience.",

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

const page = () => {
  return (
    <main>
      <MomentsSection />
      <ClinicGallery />
      <FeaturedStories />
      <VisitExperienceSection />
    </main>
  );
};

export default page;