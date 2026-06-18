"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
export default function MomentsSection() {
  return (
<section
  aria-labelledby="gallery-heading"
  className="
  relative
  overflow-hidden
  bg-black

  py-24
  sm:py-20
  md:py-24
  
  
"
>      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top Right Glow */}
        <div
          className="absolute -right-40 -top-40 h-175 w-175 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(72,255,255,.9) 0%, rgba(72,255,255,.35) 40%, transparent 75%)",
          }}
        />

        {/* Bottom Left Glow */}
        <div
          className="absolute hidden md:block -left-40 -bottom-62.5 h-162.5 w-162.5 rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,170,255,.8) 0%, rgba(0,170,255,.25) 40%, transparent 75%)",
          }}
        />
      </div>

<div
  className="
  relative
  z-10
  mx-auto
  max-w-375

  px-5
  sm:px-6
  md:px-8
  lg:px-10
"
>
<div
className="
grid
md:items-center
items-start
gap-12
md:gap-16
lg:grid-cols-[0.95fr_1fr]
lg:gap-16
xl:gap-24
"
>
            {/* LEFT SIDE */}
<motion.div
className="max-w-175 md:mx-auto lg:mx-0  lg:text-left
"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>            <div className="inline-flex items-center rounded-full border border-[#0D7188] bg-cyan-500/10 md:px-5 md:py-3 px-3 py-2  text-xs md:text-sm font-medium uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-md">
              Inside We Know Dental
            </div>

            <h1
              className="
                md:mt-6 mt-4
                text-white
                font-bold
               text-[28px]
sm:text-[46px]
md:text-[58px]
lg:text-[62px]
leading-[1.05]               
              "
            >
              Moments Of Care,
              <br />
              Comfort &{" "}
              <span className="bg-linear-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                Smiles
              </span>
            </h1>

            <p
              className="
                md:mt-8 mt-6
                max-w-300
                text-white/80
               text-[15px]
sm:text-lg
md:text-[20px]
leading-relaxed
                mx-auto
                lg:mx-0
              "
            >
              Take a closer look at the moments, experiences and smiles
              created every day at WE KNOW Dental Clinic.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
                justify-center
                lg:justify-start
              "
            >
              <Link
                href="/contact"
                className="w-full
                  h-14
                  px-8
                  rounded-xl
                  font-semibold
                  text-white
                  flex
                  items-center
                  justify-center
                  bg-linear-to-r
                  from-cyan-600
                  to-cyan-400
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_15px_40px_rgba(34,211,238,.4)]
                "
              >
                Book Appointment
              </Link>

              <Link
  href="#clinic-gallery"
                 
                className="w-full
                  h-14
                  px-8
                  rounded-xl
                  border
                  border-white/10
                  bg-[#0B1622]
                  text-white
                  flex
                  items-center
                  justify-center
                  gap-2
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:bg-[#142536]
                "
              >
                View Photos
                <ArrowDown size={18} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
<motion.div
className="
hidden
lg:block

relative
mx-auto

w-full
max-w-175
xl:max-w-190
"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
>            {/* Main Image */}
            <div
              className="
                overflow-hidden
                rounded-[28px]
                transition-all
                duration-700
                hover:-translate-y-2
              "
            >
              <Image
  src="/gallery/gallery-hero.svg"
  alt="Inside WE KNOW Dental Clinic showing patient care and treatment environment"
  width={1200}
  height={900}
  priority
  sizes="(max-width:1024px) 100vw, 50vw"
  className="
  h-auto
  w-full
  object-contain

  transition-transform
  duration-700

  hover:scale-[1.03]
"
/>
            </div>
            </motion.div>
           
          </div>
        </div>
    </section>
  );
}