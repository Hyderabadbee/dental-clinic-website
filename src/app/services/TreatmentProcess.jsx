"use client";

import { motion } from "framer-motion";
import {
  MessageSquareMore,
  ScanSearch,
  ClipboardList,
  Smile,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareMore,
    title: "1. Consultation",
    description:
      "Discuss your goals and concerns with our specialists.",
  },
  {
    icon: ScanSearch,
    title: "2. Digital Diagnosis",
    description:
      "Advanced imaging for precise evaluation of your oral health.",
  },
  {
    icon: ClipboardList,
    title: "3. Personalized Plan",
    description:
      "A tailored treatment strategy designed just for you.",
  },
  {
    icon: Smile,
    title: "4. Confident Smile",
    description:
      "Expert treatment execution and follow-up care.",
  },
];

export default function TreatmentProcessSection() {
  return (
<section
  aria-labelledby="treatment-process-heading"
  className="
    relative
    overflow-hidden
    bg-[#001E30]

    py-14
    sm:py-16
    md:py-20
    lg:py-28
    xl:py-30
  "
>
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-120
w-120

sm:h-150
sm:w-150

lg:h-175
lg:w-175

          -translate-x-1/2
          rounded-full
          opacity-20
          blur-[100px]
          lg:blur-[140px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(17,197,201,.18) 0%, transparent 70%)",
        }}
      />

<div
  className="
    relative
    z-10
    mx-auto
    max-w-350

    px-4
    sm:px-6
    md:px-8
    lg:px-8
  "
>
        {/* Header */}
<header className="mx-auto max-w-4xl text-center">          <h2
  id="treatment-process-heading"
  className="
    text-[#D1E5FB]
    font-bold
    tracking-[-0.03em]

    text-[30px]
    sm:text-[40px]
    md:text-[48px]
    lg:text-5xl
    xl:text-[58px]

    leading-[1.1]
  "
>
            Our Treatment Process
          </h2>

          <p
            className="
              mt-5
              text-[#C8D7E3]
              text-lg
              md:text-xl
            "
          >
            A clear path to a healthier, brighter smile.
          </p>
        </header>

        {/* DESKTOP TIMELINE */}
        <div className="relative mt-22 hidden lg:block">

          {/* Connecting Line */}
          <div
            className="
              absolute
              top-8.5
              left-[12%]
              right-[12%]
              h-px
              bg-[#8FA7B81F]
            "
          />

          <div className="grid grid-cols-4 gap-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount:0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: Math.min(index * 0.1, 0.3),
                  }}
                  className="text-center"
                >
                  {/* Icon Circle */}
                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-17
                      w-17
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-[#0E81BB]
                      bg-white
                      shadow-[0_10px_30px_rgba(0,0,0,.15)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                    "
                  >
                    <Icon
                      size={28}
                      className="text-[#0E81BB]"
                    />
                  </div>

                  <h3
                    className="
                      mt-8
                      text-white
                      font-bold
                      text-[24px]
                      leading-tight
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-70
                      mx-auto
                      text-[#C8D7E3]
                      text-lg
                      leading-relaxed
                    "
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET TIMELINE */}
        <div className="sm:mt-14 mt-12 md:mt-16 lg:hidden">

          <div className="relative">

            {/* Vertical Line */}
            <div
              className="
                absolute
                left-5.75
sm:left-7
md:left-8.5
                top-0
                bottom-0
                w-px
                bg-[#8FA7B81F]
              "
            />

            <div className="space-y-12">

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                  aria-label={step.title}
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="relative flex gap-4 md:gap-6 sm:gap-5"
                  >
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-11.5
w-11.5

sm:h-14
sm:w-14

md:h-17
md:w-17
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#0E81BB]
                        bg-white
                      "
                    >
                      <Icon
                        size={26}
                        className="text-[#0E81BB]"
                      />
                    </div>

                    <div className="pt-2">
                      <h3
                        className="
                          text-white
                          font-bold
                          text-lg
sm:text-xl
md:text-2xl
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-[#C8D7E3]
                          leading-relaxed
                          text-sm
sm:text-base
md:text-lg

                        "
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}