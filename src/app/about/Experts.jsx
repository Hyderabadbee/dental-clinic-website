
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseMedical,
  Cpu,
  ScanFace,
  Sparkles,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Cpu,
    title: "Advanced Technology",
    description: "Precision-led dental care with modern techniques.",
  },
  {
    number: "02",
    icon: ScanFace,
    title: "Personalized Planning",
    description: "Treatment plans tailored to your unique smile.",
  },
  {
    number: "03",
    icon: BriefcaseMedical,
    title: "Comfort-First Care",
    description: "Thoughtful treatment at every step of your journey.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Quality You Can Trust",
    description: "A patient-first approach built around lasting results.",
  },
];

const expertise = [
  "Restorative Dentistry",
  "Dental Implants",
  "Smile Rehabilitation",
];

export default function MeetTheExperts() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      aria-labelledby="meet-expert-heading"
      className="relative isolate overflow-hidden bg-[#05090D] py-16 text-white sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#00D5D5]/[0.07] blur-[120px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute right-[-180px] top-[35%] h-[380px] w-[380px] rounded-full bg-[#0C7291]/[0.09] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 2xl:px-16">
        {/* Section introduction */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-6 sm:mb-14 md:mb-16 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#11C5C9]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#11C5C9] sm:text-xs">
                The People Behind Your Smile
              </span>
            </div>

            <h2
              id="meet-expert-heading"
              className="max-w-4xl text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#F2F7FA] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Expertise you can trust.
              <span className="mt-1 block text-[#11C5C9]">
                Care you can feel.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-sm leading-7 text-[#A4B2BD] sm:text-base sm:leading-8">
              Exceptional dentistry starts with understanding you. Meet the
              expertise, precision, and personal care behind every confident
              smile.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium tracking-wide text-[#D3E1E9] sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#11C5C9]" />
              A more thoughtful dental experience
            </div>
          </div>
        </motion.div>

        {/* Main doctor profile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={reveal}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative"
        >
          <div className="grid overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0A1219]/90 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:rounded-3xl lg:grid-cols-[0.82fr_1.18fr] xl:grid-cols-[0.9fr_1.1fr]">
            {/* Doctor image */}
            <div className="relative min-h-0 overflow-hidden bg-[#0B1A23]">
              <div className="relative h-[310px] w-full sm:h-[420px] md:h-[470px] lg:h-full lg:min-h-[520px] xl:min-h-[560px]">
                <Image
                  src="/about/James.svg"
                  alt="Dr. Praneeth Kumar, Lead Dental Surgeon"
                  fill
                  priority
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 45vw"
                  className="object-cover object-top"
                />

                {/* Image overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071016] via-[#071016]/10 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A1219]/30" />

                {/* Top image label */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-[#071016]/60 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6 sm:px-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#11C5C9]" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-[10px]">
                    Meet Your Specialist
                  </span>
                </div>

                {/* Image footer */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7 lg:bottom-8 lg:left-8 lg:right-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/60 sm:text-xs">
                      Clinical Focus
                    </p>

                    <p className="mt-2 max-w-[230px] text-sm font-medium leading-relaxed text-white sm:text-base">
                      Precision. Experience. Your smile.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md sm:h-12 sm:w-12">
                    <ArrowDownRight
                      size={20}
                      className="text-[#11C5C9]"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor details */}
            <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-10 lg:py-12 xl:px-14 xl:py-16 2xl:px-16">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#11C5C9]/25 bg-[#11C5C9]/[0.08] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#5FE1DF] sm:text-[10px]">
                  Lead Dental Surgeon
                </span>

                <span className="flex items-center gap-1.5 text-[10px] text-[#9AAAB6] sm:text-xs">
                  <BadgeCheck
                    size={15}
                    className="text-[#11C5C9]"
                    aria-hidden="true"
                  />
                  Specialist-led care
                </span>
              </div>

              <h3
  className="
    mt-6
    text-3xl
    font-semibold
    leading-tight
    tracking-[-0.04em]
    text-white
    sm:mt-7
    sm:text-4xl
    md:text-5xl
    xl:text-6xl
    whitespace-nowrap
  "
>
  Dr. Praneeth{" "}
  <span className="text-[#11C5C9]">
    Kumar.
  </span>
</h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#A4B2BD] sm:text-base sm:leading-8">
                With over 15 years of experience in complex restorative
                dentistry and implantology, Dr. Praneeth brings together
                clinical expertise, modern techniques, and a personalized
                approach to every patient&apos;s needs.
              </p>

              {/* Expertise tags */}
              <div className="mt-7 sm:mt-8">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#728593]">
                  Areas of Expertise
                </p>

                <div className="flex flex-wrap gap-2">
                  {expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.09] bg-white/[0.025] px-3 py-2 text-[11px] text-[#C7D3DB] transition-colors duration-300 hover:border-[#11C5C9]/40 hover:text-white sm:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience statistic */}
              <div className="mt-8 grid grid-cols-[auto_1fr] items-center gap-4 border-t border-white/[0.09] pt-6 sm:mt-10 sm:pt-8">
                <div className="flex h-[68px] w-[76px] flex-col items-center justify-center rounded-xl border border-[#11C5C9]/20 bg-[#11C5C9]/[0.06] sm:h-20 sm:w-24">
                  <span className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    15+
                  </span>

                  <span className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-[#11C5C9] sm:text-[10px]">
                    Years
                  </span>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#E7EFF4] sm:text-base">
                    Experience that matters
                  </p>

                  <p className="mt-1 text-xs leading-6 text-[#8496A3] sm:text-sm">
                    Dedicated to thoughtful, precision-focused dental care.
                  </p>
                </div>
              </div>

              {/* Bottom note */}
              <div className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5 sm:mt-8 sm:pt-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#11C5C9]/[0.09]">
                  <Sparkles
                    size={17}
                    className="text-[#11C5C9]"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-xs leading-6 text-[#A4B2BD] sm:text-sm">
                  Your comfort and confidence are part of every treatment plan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy and capabilities */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-6 bg-[#11C5C9]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#11C5C9]">
                  Our Approach
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                Better care, by design.
              </h3>
            </div>

            <p className="max-w-md text-xs leading-6 text-[#8496A3] sm:text-sm sm:leading-7">
              Modern technology meets a human approach to help make every
              dental visit more considered and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className="group relative flex min-h-[190px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A1219]/80 p-5 transition-colors duration-300 hover:border-[#11C5C9]/35 hover:bg-[#0C1820] sm:min-h-[210px] sm:p-6 lg:p-7"
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#11C5C9]/[0.06] blur-3xl transition-all duration-500 group-hover:bg-[#11C5C9]/[0.16]"
                  />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#11C5C9]/20 bg-[#11C5C9]/[0.07] transition-transform duration-300 group-hover:-translate-y-1 sm:h-12 sm:w-12">
                      <Icon
                        size={21}
                        strokeWidth={1.6}
                        className="text-[#36D5D5]"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="font-mono text-[10px] tracking-wider text-[#526572]">
                      /{item.number}
                    </span>
                  </div>

                  <div className="relative mt-auto pt-7">
                    <h4 className="text-base font-medium tracking-tight text-[#EDF4F8] sm:text-lg">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-[#8496A3] sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="absolute bottom-6 right-5 text-[#49606E] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#11C5C9] sm:bottom-7 sm:right-6"
                    aria-hidden="true"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p className="text-xs leading-6 text-[#8496A3] sm:text-sm">
            Thoughtful expertise. Modern dentistry. Care centered on you.
          </p>

          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#11C5C9]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#11C5C9]" />
            A better standard of care
          </div>
        </div>
      </div>
    </section>
  );
}
