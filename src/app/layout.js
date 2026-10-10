import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import FloatingSocials from "./components/SocialMedia";

/* ---------- Fonts: swap = text visible immediately (better LCP/CLS) ---------- */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

/* ---------- Business details (single source of truth) ---------- */
const SITE_URL = "https://www.weknowdental.in";
const NAME = "WE KNOW Dental Clinic";

/* ---------- Metadata (site-wide defaults; pages override title/description) ---------- */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: NAME,

  title: {
    default: "Best Dentist in Kamareddy | WE KNOW Dental Clinic",
    template: "%s | WE KNOW Dental Clinic",
  },

  description:
    "WE KNOW Dental Clinic in Kamareddy - dental implants, root canal, braces, teeth whitening and smile makeovers. Open Mon-Sat 9 AM-9 PM, Sun 9 AM-1 PM. Book today.",

  keywords: [
    "dentist in Kamareddy",
    "dental clinic in Kamareddy",
    "dental clinic near me",
    "dental implants Kamareddy",
    "root canal treatment",
    "smile makeover",
    "teeth whitening",
    "braces and aligners",
    "kids dentistry",
    "cosmetic dentistry",
  ],

  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  category: "Healthcare",
  referrer: "origin-when-cross-origin",

  // NOTE: no site-wide canonical here. A canonical in the layout would point
  // EVERY page to the home page. Set `alternates.canonical` inside each page.

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: NAME,
    title: NAME,
    description:
      "Advanced dental care, smile makeovers, implants, braces, root canal treatments and preventive dentistry in Kamareddy.",
    images: [
      { url: "/seo/og-image.jpg", width: 1200, height: 630, alt: NAME },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: NAME,
    description: "Advanced dental care and smile solutions for the whole family.",
    images: ["/logo.jpg"],
  },

  // .ico fallback = older browsers/Safari that ignore SVG favicons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",

  formatDetection: { telephone: true, email: false, address: false },

  // Paste your Google Search Console / Bing tokens here
  // verification: { google: "REPLACE", other: { "msvalidate.01": "REPLACE" } },

  // Local-SEO hints (Bing & some directories)
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Kamareddy",
  },
};

/* Viewport is its own export in Next 14+ */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08212A",
  colorScheme: "dark light",
};

/* ---------- Structured data (JSON-LD) ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: NAME,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#clinic` },
    },
    {
      "@type": "Dentist",
      "@id": `${SITE_URL}/#clinic`,
      name: NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      image: `${SITE_URL}/seo/og-image.jpg`,
      telephone: "+91-8790525277",
      priceRange: "$$",
      medicalSpecialty: "Dentistry",
      areaServed: "Kamareddy",
      address: {
        "@type": "PostalAddress",
        streetAddress: "H.No. 1, 5-7, Godown Rd",
        addressLocality: "Kamareddy",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dental Treatments",
        itemListElement: [
          "Dental Implants",
          "Root Canal Treatment",
          "Teeth Whitening",
          "Braces & Aligners",
          "Smile Makeover",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "MedicalProcedure", name },
        })),
      },
      // Add your REAL profile links here (Google Maps, Instagram, Facebook).
      // Placeholder links like ".../yourpage" hurt trust, so none are included.
       sameAs: ["https://www.instagram.com/weknowdentalclinic/", "https://www.facebook.com/weknowdentalclinic/", "https://maps.app.goo.gl/vtmiHvBcGvToUVLP6"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* Accessibility + Lighthouse: keyboard users can skip the navbar */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#08212A]"
        >
          Skip to main content
        </a>

        <Navbar />
        <FloatingSocials />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}