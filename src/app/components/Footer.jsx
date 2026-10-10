"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Mail, Clock3, ChevronDown } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const TREATMENTS = [
  { label: "Smile Designing", href: "/services#our-services" },
  { label: "Dental Implants", href: "/services#our-services" },
  { label: "Teeth Whitening", href: "/services#our-services" },
  { label: "Root Canal", href: "/services#our-services" },
  { label: "Aligners", href: "/services#our-services" },
];

const CLINIC = {
  name: "WE KNOW Dental Clinic",
  phone: "+91 8790 5252 77",
  phoneHref: "tel:+918790525277",
  email: "weknowdentalclinic@gmail.com",
  mapsHref: "https://maps.app.goo.gl/vtmiHvBcGvToUVLP6",
  address: [
    "H.No. 1-5-71, First Floor,",
    "Opp Sparsha Skin Hospital,",
    "Godown Road, Kamareddy,",
    "Kamareddy Dist,",
    "Telangana State-503111",
  ],
  hours: [
    { days: "Mon - Sat", time: "9:00 AM - 9:00 PM" },
    { days: "Sunday", time: "9:00 AM - 1:00 PM" },
  ],
};

/* ---------------------------------------------------------------------- */
/* FooterAccordion — collapsible on mobile/tablet, always expanded from lg */
/* ---------------------------------------------------------------------- */

 
function FooterAccordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="
          flex w-full items-center justify-between gap-4 text-left
          lg:pointer-events-none lg:cursor-default
        "
      >
        <span
          className="
            text-[22px] font-semibold text-[#00D7E8]
            sm:text-[24px] lg:text-[30px]
          "
        >
          {title}
        </span>
        <ChevronDown
          aria-hidden="true"
          size={20}
          className={`
            shrink-0 text-[#00D7E8] transition-transform duration-300 ease-in-out
            motion-reduce:transition-none
            lg:hidden
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      <div
        id={contentId}
        role="region"
        aria-label={title}
        className={`
          grid transition-[grid-template-rows] duration-300 ease-in-out
          motion-reduce:transition-none
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
          lg:grid-rows-[1fr]
        `}
      >
        <div className="overflow-hidden">
          <div className="pt-5 sm:pt-6 lg:pt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

 
export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC.name,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "H.No. 1-5-71, First Floor, Opp Sparsha Skin Hospital, Godown Road",
      addressLocality: "Kamareddy",
      addressRegion: "Telangana",
      postalCode: "503111",
      addressCountry: "IN",
    },
    hasMap: CLINIC.mapsHref,
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

  const fadeIn = (delay) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay },
        };

  return (
    <footer aria-label="Website footer" className="relative overflow-hidden bg-[#000F18]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* top border */}
      <div className="absolute left-0 top-0 h-px w-full bg-[#43DDE11A]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 2xl:max-w-[100rem] 2xl:px-12">
        <div
          className="
            grid grid-cols-1 gap-10
            py-16 sm:grid-cols-2 sm:gap-12
            md:py-20
            lg:grid-cols-4 lg:gap-16 lg:py-28
            2xl:gap-20 2xl:py-32
          "
        >
          {/* Column 1 — brand */}
          <motion.div {...fadeIn(0)}>
            <h2
              className="
                w-full max-w-70 text-[24px] font-bold leading-[1.15] tracking-wide text-[#11C5C9]
                sm:text-[28px] lg:text-[32px] 2xl:text-[36px]
              "
            >
              {CLINIC.name}
            </h2>

            <p
              className="
                mt-5 max-w-75 text-[15px] leading-7 text-[#FFFFFFB2]
                sm:mt-8 sm:text-[16px] lg:text-lg 2xl:text-xl
              "
            >
              Creating healthier and more confident smiles through personalized
              dental care.
            </p>
          </motion.div>

          {/* Column 2 — quick links */}
          <motion.div {...fadeIn(0.1)}>
            <FooterAccordion title="Quick Links">
              <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
                {QUICK_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="
                        group inline-flex items-center gap-1 text-[16px] font-semibold text-[#FFFFFFB2]
                        transition-colors duration-300 hover:text-[#00D7E8]
                        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D7E8]
                        sm:text-[17px] lg:text-[19px] 2xl:text-[20px]
                      "
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordion>
          </motion.div>

          {/* Column 3 — treatments */}
          <motion.div {...fadeIn(0.2)}>
            <FooterAccordion title="Treatments">
              <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
                {TREATMENTS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="
                        group inline-flex items-center text-[16px] font-semibold text-[#FFFFFFB2]
                        transition-colors duration-300 hover:text-[#00D7E8]
                        focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D7E8]
                        sm:text-[17px] lg:text-[19px] 2xl:text-[20px]
                      "
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterAccordion>
          </motion.div>

          {/* Column 4 — contact */}
          <motion.div {...fadeIn(0.3)}>
            <FooterAccordion title="Contact">
              <div className="space-y-4">
                {/* address */}
                <div className="flex gap-4">
                  <MapPin aria-hidden="true" size={22} className="mt-1 shrink-0 text-[#00D7E8]" />
                  <a
                    aria-label="Open clinic location on Google Maps"
                    href={CLINIC.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-[15px] leading-7 text-[#D1D5DB] transition-colors duration-300
                      hover:text-[#00D7E8] focus-visible:outline-2 focus-visible:outline-offset-4
                      focus-visible:outline-[#00D7E8]
                      sm:text-[16px] lg:text-[18px] 2xl:text-[19px]
                    "
                  >
                    {CLINIC.address.join(" ")}
                  </a>
                </div>

                {/* phone */}
                <div className="flex items-start gap-4">
                  <Phone aria-hidden="true" size={20} className="mt-1 shrink-0 text-[#00D7E8]" />
                  <a
                    href={CLINIC.phoneHref}
                    className="
                      text-[15px] text-[#D1D5DB] transition-colors hover:text-[#00D7E8]
                      focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D7E8]
                      sm:text-[16px] lg:text-[18px] 2xl:text-[19px]
                    "
                  >
                    {CLINIC.phone}
                  </a>
                </div>

                {/* email */}
                <div className="flex items-start gap-4">
                  <Mail aria-hidden="true" size={20} className="mt-1 shrink-0 text-[#00D7E8]" />
                  <a
                    href={`mailto:${CLINIC.email}`}
                    className="
                      break-all text-[15px] text-[#D1D5DB] transition-colors hover:text-[#00D7E8]
                      focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D7E8]
                      sm:text-[16px] lg:text-[18px] 2xl:text-[19px] sm:whitespace-nowrap
                    "
                  >
                    {CLINIC.email}
                  </a>
                </div>

                {/* hours */}
                <div className="flex w-full items-start gap-4">
                  <Clock3 aria-hidden="true" size={20} className="mt-1 shrink-0 text-[#00D7E8]" />
                  <dl className="space-y-1">
                    {CLINIC.hours.map((row) => (
                      <div key={row.days} className="flex gap-1.5">
                        <dt className="whitespace-nowrap text-[15px] text-[#D1D5DB] sm:text-[16px] lg:text-[18px] 2xl:text-[19px]">
                          {row.days} :
                        </dt>
                        <dd className="whitespace-nowrap text-[15px] text-[#D1D5DB] sm:text-[16px] lg:text-[18px] 2xl:text-[19px]">
                          {row.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </FooterAccordion>
          </motion.div>
        </div>

        {/* bottom copyright */}
        <div className="border-t border-[#43DDE11A] py-5 text-center sm:py-6 2xl:py-7">
          <p className="text-sm text-[#8E99A3] md:text-base 2xl:text-[17px]">
            Copyright © Developed by{" "}
            <a
              href="https://www.workbees.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8E99A3] transition-colors duration-300 hover:text-[#00D7E8]"
            >
              Workbees Technologies Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}