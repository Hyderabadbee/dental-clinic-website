"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Monitor,
  ShieldPlus,
  Sparkles,
  Syringe,
  Smile,
  Gem,
  Crown,
  HeartPulse,
  ScanLine,
  Scissors,
  Star,
  Baby,
  Activity,
  ShieldAlert,
  Stethoscope,
  Moon,
} from "lucide-react";

const treatments = [
  {
    title: "Digital Dentistry",
    icon: Monitor,
    image: "/service/digital.svg",
    description:
      "Experience modern dental care with advanced digital technology for accurate diagnosis and treatment planning.",
  },
  {
    title: "Oral Prophylaxis",
    icon: ShieldPlus,
    image: "/service/oral.svg",
    description:
      "Maintain healthy teeth and gums through professional cleaning that removes plaque and stains.",
  },
  {
    title: "Cavity Filling",
    icon: Sparkles,
    image: "/service/cavity.svg",
    description:
      "Restore cavities using natural-looking fillings that protect and strengthen your teeth.",
  },
  {
    title: "Root Canal Treatment",
    icon: Syringe,
    image: "/service/root-canal.svg",
    description:
      "Save infected teeth and eliminate pain with advanced root canal procedures.",
  },
  {
    title: "Braces & Aligners",
    icon: Smile,
    image: "/service/braces.svg",
    description:
      "Achieve a confident smile with modern orthodontic braces and clear aligner solutions.",
  },
  {
    title: "Dental Implants",
    icon: Gem,
    image: "/service/implant.svg",
    description:
      "Replace missing teeth with strong and natural-looking implant solutions.",
  },
  {
    title: "Crowns & Bridges",
    icon: Crown,
    image: "/service/bridges.svg",
    description:
      "Restore damaged or missing teeth with durable crowns and bridge treatments.",
  },
  {
    title: "Dentures",
    icon: HeartPulse,
    image: "/service/dentures.svg",
    description:
      "Improve chewing, speaking and confidence with custom denture solutions.",
  },
  {
    title: "Gum Treatments",
    icon: Activity,
    image: "/service/gum.svg",
    description:
      "Comprehensive gum care focused on maintaining healthy gums and oral health.",
  },
  {
    title: "Gum Lift & Contouring",
    icon: Scissors,
    image: "/service/contouring.svg",
    description:
      "Enhance smile aesthetics through precise gum contouring procedures.",
  },
  {
    title: "Laser Dentistry",
    icon: ScanLine,
    image: "/service/laser.svg",
    description:
      "Advanced laser-assisted treatments designed for comfort and faster recovery.",
  },
  {
    title: "Tooth Extraction",
    icon: ShieldAlert,
    image: "/service/extraction.svg",
    description:
      "Safe and comfortable removal of damaged or problematic teeth.",
  },
  {
    title: "Teeth Whitening",
    icon: Star,
    image: "/service/whitening.svg",
    description:
      "Brighten your smile and improve overall appearance with whitening treatments.",
  },
  {
    title: "Smile Designing",
    icon: Sparkles,
    image: "/service/makeover.svg",
    description:
      "Create your dream smile through customized cosmetic treatment planning.",
  },
  {
    title: "Preventive Dentistry",
    icon: ShieldPlus,
    image: "/service/dentistry.svg",
    description:
      "Protect oral health with regular checkups, cleaning and preventive care.",
  },
  {
    title: "Kids Dentistry",
    icon: Baby,
    image: "/service/kids.svg",
    description:
      "Gentle and friendly dental care specially designed for children.",
  },
  {
    title: "Wisdom Tooth Removal",
    icon: Activity,
    image: "/service/wisdom.svg",
    description:
      "Comfortable wisdom tooth extraction with modern surgical techniques.",
  },
  {
    title: "Gum Disease Treatment",
    icon: Stethoscope,
    image: "/service/gum-treatment.svg",
    description:
      "Treat bleeding gums and periodontal issues with specialized dental care.",
  },
  {
    title: "Mouth Ulcer Treatment",
    icon: HeartPulse,
    image: "/service/ulcers.svg",
    description:
      "Diagnosis and treatment support for recurring mouth ulcers and discomfort.",
  },
  {
    title: "Sedation Dentistry",
    icon: Moon,
    image: "/service/sedation.svg",
    description:
      "Relaxing treatment options for anxious patients and complex procedures.",
  },
];
const rows = [
  treatments.slice(0, 4),
  treatments.slice(4, 8),
  treatments.slice(8, 12),
  treatments.slice(12, 16),
  treatments.slice(16, 20),
];
export default function TreatmentsSection() {
  
  return (
    <section aria-labelledby="treatments-heading"
 className="relative overflow-hidden bg-[#001E30] py-20 md:py-28 xl:py-32">
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(17,197,201,0.08), transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-362.5 px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-[#D1E5FB] font-black tracking-tight text-2xl md:text-5xl xl:text-[56px]">
            Explore Our Dental Treatments
          </h2>

          <p className="mt-5 text-[#C7D6E2] text-sm md:text-lg  leading-relaxed">
            Find the right solution for your dental concern with
            expert care and advanced technology.
          </p>
        </div>

        {/* Cards */}
        {/* MOBILE ONLY */}
<div className="mt-10 md:mt-16 space-y-5 md:hidden">
  {rows.map((row, rowIndex) => (
    <div
      key={rowIndex}
      className="
        flex
        gap-4
        overflow-x-auto
        snap-x
      scroll-smooth
        snap-mandatory
        scrollbar-hide
      "
    >
      {row.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            className="
              group
              snap-center
              shrink-0
w-[85vw]
max-w-85
              overflow-hidden
              rounded-3xl
              bg-[#F4F4F4]
              border
              border-[#E5E7EB]

              transition-all
              duration-500
            "
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  top-3
                  right-3
                  h-10
                  w-10
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <Icon size={18} className="text-[#1184C1]" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#20262B]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm text-[#5F6770] leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  ))}
</div>
{/* Cards */}
<div
  className="hidden
    mt-16

   
    gap-5

    sm:gap-6

    md:grid
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    md:gap-6

    
  "
>          {treatments.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                 aria-label={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.03, 0.3)
                }}
                className="
    group

    snap-center
    shrink-0

    w-[88%]
    xs:w-[80%]
    sm:w-95

    md:w-auto

    overflow-hidden
    rounded-3xl
    bg-[#F4F4F4]
    border
    border-[#E5E7EB]

    hover:-translate-y-2
    transition-all
    duration-500
    hover:shadow-[0_20px_60px_rgba(0,0,0,.18)]
  "
              >
                {/* Image */}
                <div className="relative h-52 sm:h-60 md:h-57.5 overflow-hidden">
                 <Image
  src={item.image}
  alt={item.title}
  fill
  quality={85}
  loading="lazy"
  sizes="(max-width:768px) 88vw,
         (max-width:1024px) 50vw,
         (max-width:1280px) 33vw,
         25vw"
  className="
    object-cover
    transition-transform
    duration-700
    group-hover:scale-110
  "
/>

                  <div
                    className="
                      absolute
                      top-3
                      right-3
                      h-10
                      w-10
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-lg
                    "
                  >
                    <Icon
                      size={18}
                      className="text-[#1184C1]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-[#20262B] text-xl md:text-[28px] font-bold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[#5F6770] text-sm md:text-[16px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}