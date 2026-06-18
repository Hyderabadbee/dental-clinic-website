"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const tags = [
  "Patient First Approach",
  "Modern Dental Care",
  "Smile-Focused Dentistry",
];

export default function AboutSection() {
  return (
<section
  className="
    relative
    overflow-hidden

    py-24
    
    md:py-24
    lg:py-36
  "
>      {/* Background */}
      <div className="absolute inset-0 bg-[#021726]" />

      {/* Gradient Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-110
h-110
sm:w-150
sm:h-150
lg:w-225
lg:h-225

blur-[90px]
lg:blur-[140px]
          rounded-full
          opacity-60
          
        "
        style={{
          background:
            "radial-gradient(circle, rgba(17,197,201,0.18) 0%, rgba(17,132,193,0.12) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
<div
  className="
    grid
    gap-12
    md:gap-14

    lg:grid-cols-[1fr_1.05fr]
    lg:gap-14

    xl:grid-cols-[1fr_1.08fr]
    xl:gap-20

    items-center
  "
>          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              className="max-w-full
lg:max-w-140
xl:max-w-155
                inline-flex
                items-center
                rounded-full
                border
                border-[#11C5C933]
                bg-[#11C5C914]
                sm:px-6
                sm:py-3
                px-4 py-2
              "
            >
              <span
                className="
                  text-[#65EDF1]
                  text-xs
                  sm:text-sm
                  font-semibold
                  tracking-[1.8px]
                "
              >
                ABOUT WE KNOW DENTAL CLINIC
              </span>
            </div>

            {/* Heading */}
          <h2
  className="
    mt-8
    text-white
    font-black
    leading-[1.15]
w-full
    text-[32px]
    sm:text-[42px]
    md:text-[48px]

    lg:text-[52px]
    xl:text-[56px]

    tracking-[-0.03em]
  "
>
  Creating{" "}
  <span
    className="
      bg-linear-to-r
      from-[#1184C1]
      to-[#11C5C9]
      bg-clip-text
      text-transparent
    "
  >
    Smiles
  </span>{" "}
  Through Care, Precision & Trust
</h2>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-4xl
                text-[#C7D8E6]
                leading-relaxed text-base sm:text-lg md:text-xl"
            >
              At WE KNOW Dental Clinic, every smile receives
              personal attention. We combine modern dentistry,
              advanced technology and compassionate care to create
              comfortable dental experiences.
            </p>

            {/* Tags */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-[#11C5C926]
                    bg-[#11C5C912]
                    sm:px-6
                    sm:py-3
                  px-4 py-2.5
                    text-[#31DCE0]
                    font-medium
                    text-sm
                    md:text-base

                    backdrop-blur-xl
                  "
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
className="
relative
mx-auto
w-full

lg:max-w-175
xl:max-w-190
"          >
            {/* Main Image */}
            <div
className="
w-full
aspect-[1.3/1]

object-cover
rounded-4xl
block

  "
>
  <Image
    src="/about/hero.svg"
    alt="Dental Team"
    width={1200}
    height={800}
    priority
    className="
      w-full
      h-full
      object-cover
      rounded-4xl
      block
    "
  />
</div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
className="
absolute

left-1/2
-translate-x-1/2
-bottom-24

sm:left-auto
sm:right-4
sm:translate-x-0

lg:-right-5
lg:-bottom-20

xl:-right-8.75
xl:-bottom-22

w-65
sm:w-75
lg:w-75
xl:w-[320px]

rounded-3xl
border
border-[#FFFFFF1A]
bg-[#FFFFFF0D]
backdrop-blur-[22px]

p-4
sm:p-5

shadow-[0_8px_24px_rgba(0,30,48,.2)]
"            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    h-14
                    w-14
                    rounded-full
                    bg-[#11C5C9]

                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Heart
                    size={26}
                    className="text-[#032233]"
                  />
                </div>

                <div>
                  <h4 className="text-white text-2xl font-semibold">
                    Personalized Care
                  </h4>

                  <p className="mt-2 text-[#C7D8E6] text-base">
                    Designed around every smile.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}