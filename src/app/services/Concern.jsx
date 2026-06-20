"use client";

import { motion } from "framer-motion";
import { Frown, PackageOpen, Sparkles, ShieldCheck, Smile } from "lucide-react";

const concerns = [
  {
    title: "Tooth Pain",
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
    icon: PackageOpen,
    iconBg: "bg-[#78E8EA]",
    iconColor: "text-[#006E74]",
    items: ["Dental Implants", "Dentures", "Crowns & Bridges"],
  },
  {
    title: "Better Smile",
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
    icon: Smile,
    iconBg: "bg-[#8CC8FF]",
    iconColor: "text-[#0A5EA8]",
    items: ["Kids Dentistry", "Preventive Care"],
  },
];

export default function FindByConcern() {
  return (
    <section className="relative overflow-hidden bg-[#001E30] py-10 md:py-24 xl:py-28">
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(17,197,201,.08), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-350 px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2
            className="
              text-white
              font-black
              tracking-tight
              leading-tight

           text-[30px]
sm:text-[38px]
md:text-5xl
xl:text-[56px]
            "
          >
            Find Treatments By Concern
          </h2>

          <p
            className="
              mt-5
              text-[#C5D4DF]
              mx-auto
              max-w-2xl

             text-base
sm:text-lg
md:text-xl
            "
          >
            Select your dental concern to see recommended treatments.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
    mt-10
    sm:mt-12
    lg:mt-16

    flex
    items-stretch
    overflow-x-auto
    overflow-y-hidden
    overscroll-x-contain
    snap-x
    snap-mandatory
    gap-4
    md:gap-5

    scrollbar-hide

    lg:grid
    lg:grid-cols-3
    xl:grid-cols-5
    lg:gap-6

    lg:overflow-visible
  "
          style={{ touchAction: "pan-x" }}
        >
          {concerns.map((concern, index) => {
            const Icon = concern.icon;

            return (
              <motion.div
                key={concern.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="
  snap-center

  min-w-[280px]
  sm:min-w-[320px]
  md:min-w-85

  w-[85%]
  sm:w-[75%]
  md:w-[50%]

  shrink-0

  lg:min-w-0
  lg:w-auto

  rounded-[20px]
  bg-[#F4F4F4]

  px-5 py-5
  sm:px-6 sm:py-6
  lg:px-8 lg:py-8

  transition-all
  duration-300
  hover:-translate-y-2
"
              >
                {/* Icon */}
                <div
                  className={`
                     h-12
  w-12

  sm:h-14
  sm:w-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    ${concern.iconBg}
                  `}
                >
                  <Icon size={24} className={concern.iconColor} />
                </div>

                {/* Title */}
                <h3
                  className="
  mt-5
  sm:mt-6
  lg:mt-8

  text-[#20262B]
  font-bold
  leading-tight

  text-[18px]
  sm:text-[20px]
  lg:text-[24px]
"
                >
                  {concern.title}
                </h3>

                {/* Treatments */}
                <ul className="mt-5 sm:mt-6 lg:mt-8 space-y-3 sm:space-y-4 lg:space-y-5">
                  {" "}
                  {concern.items.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <span
                        className="
                          mt-1
                            h-4
  w-4

  sm:h-5
  sm:w-5
                          rounded-full
                          border-2
                          border-[#0069A8]
                          shrink-0
                        "
                      />

                      <span
                        className="
  text-[#56616C]
  leading-relaxed

  text-[15px]
  sm:text-[16px]
  lg:text-[18px]
"
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
