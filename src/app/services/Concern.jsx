"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Frown,
  PackageOpen,
  Sparkles,
  ShieldCheck,
  Smile,
} from "lucide-react";

const CONCERNS = [
  {
    title: "Tooth Pain",
    description:
      "Relief for toothaches, infections and damaged teeth.",
    icon: Frown,
    iconBg: "bg-[#FFD9D7]",
    iconColor: "text-[#D83B35]",
    items: [
      "Root Canal Treatment",
      "Cavity Filling",
      "Wisdom Tooth Removal",
      "Tooth Extraction",
    ],
  },

  {
    title: "Missing Teeth",
    description:
      "Ways to replace one tooth or a full set.",
    icon: PackageOpen,
    iconBg: "bg-[#78E8EA]",
    iconColor: "text-[#006E74]",
    items: [
      "Dental Implants",
      "Dentures",
      "Crowns & Bridges",
    ],
  },

  {
    title: "Better Smile",
    description:
      "Cosmetic treatments to reshape and brighten your smile.",
    icon: Sparkles,
    iconBg: "bg-[#0B7CC1]",
    iconColor: "text-white",
    items: [
      "Smile Designing",
      "Teeth Whitening",
      "Braces & Aligners",
      "Gum Lift & Contouring",
    ],
  },

  {
    title: "Healthy Teeth & Gums",
    description:
      "Preventive and routine care to keep problems from starting.",
    icon: ShieldCheck,
    iconBg: "bg-[#7B8EA2]",
    iconColor: "text-white",
    items: [
      "Oral Prophylaxis",
      "Preventive Dentistry",
      "Gum Treatments",
      "Gum Disease Treatment",
    ],
  },

  {
    title: "Kids Dental Care",
    description:
      "Gentle, age-appropriate dentistry for children.",
    icon: Smile,
    iconBg: "bg-[#8CC8FF]",
    iconColor: "text-[#0A5EA8]",
    items: [
      "Kids Dentistry",
      "Preventive Care",
    ],
  },
];

export default function FindByConcern({
  heading = "Find Treatments By Concern",
  intro = "Select your dental concern to explore the treatments we offer.",
  concerns = CONCERNS,
}) {
  const headingId = "find-by-concern-heading";
  const prefersReducedMotion = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    medicalSpecialty: "Dentistry",

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: heading,

      itemListElement: concerns.map((concern) => ({
        "@type": "OfferCatalog",
        name: concern.title,

        itemListElement: concern.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: item,
          },
        })),
      })),
    },
  };

  return (
    <section
      aria-labelledby={headingId}
      className="
        relative
        overflow-hidden
        bg-[#001E30]
        py-10
        md:py-24
        xl:py-28
        2xl:py-32
      "
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(17,197,201,.08), transparent 60%)",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-6
          lg:px-8
          2xl:px-10
        "
      >
        {/* Header */}
        <div className="text-center">
          <h2
            id={headingId}
            className="
              text-[30px]
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-[38px]
              md:text-5xl
              xl:text-[56px]
              2xl:text-[60px]
            "
          >
            {heading}
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              text-[#C5D4DF]
              sm:text-lg
              md:text-xl
            "
          >
            {intro}
          </p>
        </div>

        {/* Concern Cards */}
        <ul
          role="list"
          aria-label="Dental concerns and their treatments"
          className="
            mt-10
            flex
            items-stretch
            gap-4
            overflow-x-auto
            overflow-y-hidden
            overscroll-x-contain
            scroll-smooth
            snap-x
            snap-mandatory
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden

            sm:mt-12

            md:gap-5

            lg:mt-16
            lg:grid
            lg:grid-cols-3
            lg:gap-6
            lg:overflow-visible

            xl:grid-cols-5

            2xl:grid-cols-5
            2xl:gap-7
          "
          style={{ touchAction: "pan-x" }}
        >
          {concerns.map((concern, index) => {
            const Icon = concern.icon;
            const cardHeadingId = `concern-${index}-heading`;

            return (
              <motion.li
                key={concern.title}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="
                  w-[85%]
                  shrink-0
                  snap-center
                  rounded-[20px]
                  bg-[#F4F4F4]
                  px-5
                  py-5
                  transition-all
                  duration-300

                  sm:w-[75%]
                  sm:px-6
                  sm:py-6

                  md:w-[50%]
                  md:min-w-[22rem]

                  lg:w-auto
                  lg:min-w-0
                  lg:px-8
                  lg:py-8

                  hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div
                  aria-hidden="true"
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    sm:h-14
                    sm:w-14
                    ${concern.iconBg}
                  `}
                >
                  <Icon
                    size={24}
                    className={concern.iconColor}
                  />
                </div>

                {/* Card Heading */}
                <h3
                  id={cardHeadingId}
                  className="
                    mt-5
                    text-[18px]
                    font-bold
                    leading-tight
                    text-[#20262B]

                    sm:mt-6
                    sm:text-[20px]

                    lg:mt-8
                    lg:text-[24px]
                  "
                >
                  {concern.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-relaxed
                    text-[#68737D]
                    sm:text-[15px]
                    lg:text-[16px]
                  "
                >
                  {concern.description}
                </p>

                {/* Treatments */}
                <ul
                  role="list"
                  aria-labelledby={cardHeadingId}
                  className="
                    mt-5
                    space-y-3

                    sm:mt-6
                    sm:space-y-4

                    lg:mt-8
                    lg:space-y-5
                  "
                >
                  {concern.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      {/* Bullet */}
                      <span
                        aria-hidden="true"
                        className="
                          mt-1
                          h-4
                          w-4
                          shrink-0
                          rounded-full
                          border-2
                          border-[#0069A8]

                          sm:h-5
                          sm:w-5
                        "
                      />

                      {/* Treatment Name */}
                      <span
                        className="
                          text-[15px]
                          leading-relaxed
                          text-[#56616C]

                          sm:text-[16px]

                          lg:text-[18px]
                        "
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}