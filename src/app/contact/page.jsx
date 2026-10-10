import React from "react";
import ContactPage from "./Contact";

export const metadata = {
  title: "Contact WeKnow Dental Clinic | Book a Dental Appointment",

  description:
    "Contact WeKnow Dental Clinic to book a dental appointment, speak with our dental team, ask about treatments or get directions to our clinic.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact WeKnow Dental Clinic | Book a Dental Appointment",

    description:
      "Get in touch with WeKnow Dental Clinic to book an appointment, discuss your dental needs or find our clinic location.",

    url: "/contact",

    siteName: "WeKnow Dental Clinic",

    type: "website",

    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Contact WeKnow Dental Clinic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contact WeKnow Dental Clinic | Book a Dental Appointment",

    description:
      "Contact WeKnow Dental Clinic to book an appointment or speak with our dental team.",

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

export default function ContactPageRoute() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}