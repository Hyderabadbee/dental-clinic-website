import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import FloatingSocials from "./components/SocialMedia";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://www.weknowdental.in"),

  title: {
    default: "WE KNOW Dental Clinic | Best Dental Care & Smile Solutions",
    template: "%s | WE KNOW Dental Clinic",
  },

  description:
    "WE KNOW Dental Clinic provides advanced dental treatments including implants, root canals, smile makeovers, braces, preventive dentistry, kids dentistry, gum treatments and cosmetic dental care.",

  keywords: [
    "Dental Clinic",
    "Dental Care",
    "Dental Clinic Near Me",
    "Dentist Near Me",
    "Dental Implants",
    "Root Canal Treatment",
    "Smile Makeover",
    "Teeth Whitening",
    "Braces",
    "Aligners",
    "Kids Dentistry",
    "Preventive Dentistry",
    "Cosmetic Dentistry",
    "Oral Health",
    "Dental Care",
  ],

  authors: [
    {
      name: "WE KNOW Dental",
    },
  ],

  creator: "WE KNOW Dental",

  publisher: "WE KNOW Dental",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "WE KNOW Dental Clinic",
    description:
      "Advanced dental care, smile makeovers, implants, braces, root canal treatments and preventive dentistry.",
    url: "www.weknowdental.in",
    siteName: "WE KNOW Dental",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WE KNOW Dental Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WE KNOW Dental Clinic",
    description:
      "Advanced dental care and smile solutions for the whole family.",
    images: ["/seo/og-image.jpg"],
  },

 icons: {
  icon: [
    {
      url: "/logo.svg",
      type: "image/svg+xml",
    },
  ],
  shortcut: "/logo.svg",
  apple: "/apple-touch-icon.png",
},

  alternates: {
    canonical: "https://www.weknowdental.in",
  },

  category: "Healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${montserrat.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",

      name: "WE KNOW Dental Clinic",

      url: "https://www.weknowdental.com",

      logo: "https://www.weknowdental.com/logo.svg",

      image: "https://www.weknowdental.com/seo/og-image.jpg",

      telephone: "+91-XXXXXXXXXX",

      priceRange: "$$",

      medicalSpecialty: "Dentistry",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Clinic Address",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500001",
        addressCountry: "IN"
      },

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          opens: "09:00",
          closes: "20:00"
        }
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dental Treatments",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Dental Implants"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Root Canal Treatment"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Teeth Whitening"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Braces & Aligners"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Smile Makeover"
            }
          }
        ]
      },

      sameAs: [
        "https://www.facebook.com/yourpage",
        "https://www.instagram.com/yourpage"
      ]
    }),
  }}
/>
        <Navbar />
        <FloatingSocials/>
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}