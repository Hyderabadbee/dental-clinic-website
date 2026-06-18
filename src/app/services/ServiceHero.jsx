"use client";

import { motion } from "framer-motion";
import { Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section
      aria-labelledby="services-heading"
      className="
    relative
    overflow-hidden
    pt-24
    pb-16
    sm:pt-28
    sm:pb-20
    md:pt-32
    md:pb-24
    lg:py-32
  "
    >
      {/* Background Image */}

      <div className="absolute inset-0">
        <Image
          src="/service/service-hero.svg"
          alt="Advanced dental treatments and smile care at WE KNOW Dental Clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#001E30 0%,rgba(0,30,48,.9) 50%,rgba(0,30,48,0) 100%)",
        }}
      />
      {/* Optional Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 20%, rgba(17,197,201,0.15), transparent 40%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-350 px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:gap-14 xl:gap-20 lg:grid-cols-[1.2fr_.8fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#43DDE133]
                bg-[#43DDE114]
                px-4 py-2.5
sm:px-5 sm:py-3
              "
            >
              <Stethoscope size={18} className="text-[#43DDE1]" />

              <span
                className="
                  text-[#43DDE1]
                  text-sm
                  font-medium
                  tracking-[1px]
                "
              >
                COMPLETE DENTAL SOLUTIONS
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-8
                text-white
                font-black
                leading-[1.1]
                tracking-wide
                text-[34px]
sm:text-[42px]
md:text-[48px]
lg:text-[50px]
              "
            >
              <span className="block sm:inline">Advanced Care For Every</span>
              <br className="hidden sm:block" />
              <span
                className="
                  bg-linear-to-r
                  from-[#1184C1]
                  to-[#11C5C9]
                  bg-clip-text
                  text-transparent
                "
              >
                SMILE
              </span>{" "}
              Need
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-2xl
                text-[#D8E3EB]
                leading-relaxed
               text-base
sm:text-lg
lg:text-[20px]
              "
            >
              From preventive care to advanced smile transformations, WE KNOW
              Dental provides complete dental treatments designed for healthy,
              confident and lasting smiles.
            </p>

            {/* Features */}
            <div
              className="
                mt-10
                flex
               flex-col
sm:flex-row
sm:flex-wrap
gap-4
sm:gap-x-8
              "
            >
              {[
                "Experienced Specialists",
                "Advanced Technology",
                "Personalized Care",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={22} className="text-[#43DDE1]" />

                  <span
                    className="
                      text-white
                      text-base
                      lg:text-lg
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="
                mt-12
                flex
               
flex-col
sm:flex-row
gap-4
sm:gap-5
              "
            >
              <Link
                href="/contact"
                aria-label="Book a dental appointment"
                className="
    inline-flex
    items-center
    justify-center
    w-full
sm:w-auto
h-14
sm:h-16
px-8
sm:px-10
    rounded-2xl
    font-semibold
    text-[#032233]
    bg-linear-to-r
    from-[#1184C1]
    to-[#11C5C9]
    transition-all
    duration-300
    hover:scale-105
  "
              >
                Book Appointment
              </Link>

              <Link
                href="/treatments"
                aria-label="View all dental treatments"
                className="
                 w-full
sm:w-auto
h-14
sm:h-16
px-8
sm:px-10
justify-center
                  rounded-2xl
                  border
                  border-[#FFFFFF1A]
                  bg-[#FFFFFF08]
                  backdrop-blur-xl
                  text-white
                  font-semibold
                  flex
                  items-center
                  gap-3
                  transition-all
                  duration-300
                  hover:bg-[#FFFFFF12]
                "
              >
                View Treatments
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#43DDE122]
              min-h-80
sm:min-h-95
md:min-h-0
lg:min-h-112.5
                
                shadow-[0_20px_80px_rgba(0,0,0,.45)]
              "
            >
              {/* Background Image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                  linear-gradient(
                    90deg,
                    #001E30 0%,
                    rgba(0,30,48,.92) 45%,
                    rgba(0,30,48,.7) 70%,
                    rgba(0,30,48,.2) 100%
                  ),
                  url('/services/service-bg.jpg')
                `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Extra Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_right,rgba(67,221,225,.15),transparent_45%)]
                "
              />

              {/* Content */}
              <div
                className="
                  relative
                  z-10
                  h-full
                  p-6
sm:p-8
lg:p-10
                  flex
                  flex-col
                  justify-between
                "
              >
                <div
                  className="
                   h-14
w-14
sm:h-18
sm:w-18
                    rounded-full
                    bg-[#43DDE122]
                    flex
                    items-center
                    justify-center
                    backdrop-blur-xl
                  "
                >
                  <Stethoscope size={34} className="text-[#7DF6F9]" />
                </div>

                <div>
                  <h3 className="lg:text-left text-white font-bold leading-tight text-[32px] sm:text-4xl lg:text-5xl">
                    16+ Dental
                    <br className="hidden lg:block" />
                    <span className="lg:block ">Specialties</span>
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[#D5E7F3]
                      text-lg
                    "
                  >
                    Advanced care for every smile
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
