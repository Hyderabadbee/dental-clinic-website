"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SmilePlus, UserRoundPlus, Building2 } from "lucide-react";

const features = [
  {
    icon: SmilePlus,
    text: "Friendly environment",
  },
  {
    icon: UserRoundPlus,
    text: "Personal attention",
  },
  {
    icon: Building2,
    text: "Modern clinic experience",
  },
];

export default function VisitExperienceSection() {
  return (
    <section
      aria-labelledby="visit-heading"
      className="bg-[#00263D] px-4 sm:px-6 md:px-8 py-12 sm:py-18 md:py-20 lg:py-24
"
    >
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          mx-auto
          max-w-375
          rounded-xl
          md:rounded-[34px]
          bg-[#E7ECEF]
          p-4
          sm:p-8
          lg:p-10
          
        "
      >
        <div
          className="
            grid
            gap-8
            sm:gap-10 md:gap-12
            lg:grid-cols-[1fr_1.05fr]
            xl:gap-16
            items-center
          "
        >
          {/* LEFT IMAGES */}

         <div
className="
hidden

md:grid

gap-4

md:grid-cols-[1.02fr_1fr] lg:grid-cols-[1.05fr_1fr]
"
>
            {/* Tall Image */}

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/gallery/team2.svg"
                alt=""
                width={700}
                height={900}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* Right Images */}

<div
className="


gap-4

md:grid-cols-[1.02fr_1fr]
"
>              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/gallery/patient.svg"
                  alt=""
                  width={700}
                  height={500}
                  className="
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/gallery/treatment.svg"
                  alt=""
                  width={700}
                  height={500}
                  className="
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="max-w-162.5 mx-auto lg:mx-0">
            <h2
             id="visit-heading"
              className="
                text-[#005C8C]
                font-bold
                leading-tight
                tracking-[-0.03em]
text-center
md:text-left
text-[22px]
sm:text-[34px]
md:text-[40px]
lg:text-[36px]
xl:text-[42px]
"
              
            >
              Experience WE KNOW Dental
              
              In Person
            </h2>

            <p
              className="
mt-5

mx-auto
md:mx-0

max-w-155

text-center
md:text-left

text-[#56606B]

text-sm
sm:text-base
lg:text-lg

leading-relaxed
"
            >
              Visit our clinic and experience dental care designed around
              comfort, trust and your smile.
            </p>

            {/* FEATURES */}

            <div className="mt-8 space-y-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    whileHover={{
                      x: 6,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      bg-white/55
                      px-5
                      py-5
                      backdrop-blur
                    "
                  >
                    <Icon size={22} className="text-[#007A8A] shrink-0" />

                    <span
                      className="
                        text-[#005C8C]
                        font-semibold text-sm
                        sm:text-base
                        lg:text-lg
                      "
                    >
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* BUTTONS */}

            <div
              className="
                mt-8
                flex
                flex-col
  justify-center
    md:justify-center
    lg:justify-start
                gap-4
                sm:flex-row
              "
            >
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-linear-to-r
                  from-[#0C90D0]
                  to-[#20D4D6]
                  md:px-8
                  md:py-4
                  
                  px-2 py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_35px_rgba(32,212,214,.35)]
                "
              >
                Book Appointment
              </Link>

              <a
                href="tel:+919494788082"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B8C3CC]
                  md:px-8
                  md:py-4
                  py-3
                  font-semibold
                  text-[#005C8C]
                  transition-all
                  duration-300
                  hover:bg-white
                "
              >
                Call : +91 9494788082
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
