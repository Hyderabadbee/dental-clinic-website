"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Sparkles,
  BriefcaseMedical,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Advanced Dental Technology",
  },
  {
    icon: Sparkles,
    title: "Personalized Smile Planning",
  },
  {
    icon: BriefcaseMedical,
    title: "Comfort-Focused Treatments",
  },
  {
    icon: BadgeCheck,
    title: "Quality Dental Care",
  },
];

export default function MeetTheExperts() {
  return (
<section
  aria-labelledby="meet-expert-heading"
  className="
    relative
    overflow-hidden

    py-10
    sm:py-16
    md:py-18
    lg:py-28
    xl:py-36
  "
>      {/* Background */}
      <div className="absolute inset-0 bg-[#001E30]" />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-60
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at 50% 15%, rgba(17,197,201,.12), transparent 45%)",
         }}
      />

      <div className="relative z-10 mx-auto max-w-350 px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h2
          id="meet-expert-heading"
            className="
              text-[#D1E5FB]
              font-black
              tracking-wide
              leading-[1.1]
text-2xl
md:text-[48px] 
lg:text-6xl          
            "
          >
            Experience Care From Our Lead Dental Expert
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-[#C4D4E2]
              leading-relaxed

             text-sm
sm:text-[17px]
md:text-lg
lg:text-xl
            "
          >
            Our team of dedicated professionals brings years
            of specialized experience, utilizing advanced
            technology to deliver exceptional results.
          </p>
        </div>

        {/* Doctor Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <div
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-[#1A4358]
              bg-[#0B2B42]

              w-full
            max-w-75
sm:max-w-90
md:max-w-105
lg:max-w-110

              shadow-[0_20px_80px_rgba(0,0,0,.35)]
            "
          >
            {/* Image */}
<div
  className="
    relative

    h-70
    sm:h-90
    md:h-110
    lg:h-130
    xl:h-150
  "
>              <Image
                src="/about/James.svg"
                  alt="Dr. Praneeth Kumar, Lead Dental Surgeon"

                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Info */}
            <div
              className="
                bg-[#102C42]
                px-8
                py-8
                text-center
              "
            >
              <h3
                className="
                  text-white
                  text-xl
sm:text-2xl
lg:text-3xl
                  font-medium
                "
              >
                Dr. Praneeth Kumar
              </h3>

              <p
                className="
                  mt-3
                  text-[#11C5C9]
                  text-base
sm:text-lg
lg:text-xl
                "
              >
                Lead Dental Surgeon
              </p>

              <p
                className="
                  mt-5
                  text-[#B5C7D5]
                  leading-relaxed
                  text-[15px]
sm:text-base
lg:text-lg
                "
              >
                Over 15 years of experience in complex
                restorative dentistry and implantology.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div
          className="
            mt-20

            grid
            gap-6

            grid-cols-1
sm:grid-cols-2
lg:grid-cols-2
xl:grid-cols-4
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                aria-label={item.title}
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  rounded-[28px]
                  border
                  border-[#0F5B72]

                  bg-linear-to-br
                  from-[#0A3550]
                  to-[#082B40]

                 min-h-35
sm:min-h-38.75
lg:min-h-42.5

                  flex
                  flex-col
                  items-center
                  justify-center

                  px-8
                  text-center

                  shadow-[0_15px_40px_rgba(0,0,0,.25)]

                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#11C5C9]
                "
              >
                <div
                  className="
                   h-12
w-12

sm:h-14
sm:w-14

lg:h-16
lg:w-16
                    rounded-full
                    bg-[#1B5064]

                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={28}
                    className="text-[#11C5C9]"
                  />
                </div>

                <h4
                  className="
                    mt-6
                    text-white
                    font-semibold
                    leading-snug

                    sm:text-lg text-base
                  "
                >
                  {item.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}