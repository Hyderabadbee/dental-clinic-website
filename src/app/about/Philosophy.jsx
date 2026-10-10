"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Lightbulb, HandHeart } from "lucide-react";

const philosophyCards = [
  {
    icon: Leaf,
    title: "Comfort First",
    description:
      "A relaxing environment designed to ease anxiety and promote well-being during every visit.",
  },
  {
    icon: Lightbulb,
    title: "Honest Guidance",
    description:
      "Transparent treatment plans tailored to your specific needs, with clear explanations every step of the way.",
  },
  {
    icon: HandHeart,
    title: "Long-Term Care",
    description:
      "Building lasting relationships focused on maintaining your oral health for a lifetime.",
  },
];

export default function PhilosophySection() {
  return (
    <section
      className="
    relative
    overflow-hidden
    bg-[#021726]

    py-14
    sm:py-16
    md:py-20
    lg:py-20
  "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              circle at 70% 50%,
              rgba(17,197,201,.08),
              transparent 45%
            )
          `,
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
        <div
          className="
            grid
            items-center
           gap-10
sm:gap-12
lg:gap-14
xl:gap-24
lg:grid-cols-[1.1fr_0.9fr]
lg:items-center
          "
        >
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              order-2
              lg:order-1
            "
          >
           <div
  className="
    relative
    overflow-hidden
    rounded-4xl
    shadow-[0_40px_100px_rgba(0,0,0,.35)]

    aspect-4/3
    sm:aspect-16/10
    md:aspect-video
    lg:aspect-5/7
    xl:aspect-4/5
  "
>
  <Image
    src="/gallery/treatment.JPG"
    alt="Dental Philosophy"
    fill
    className="
      object-cover

      object-center
      lg:object-[center_top]
      xl:object-center

      transition-transform
      duration-700
      hover:scale-[1.03]
    "
  />
</div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              order-1
              lg:order-2
              lg:max-w-2xl
            "
          >
            {/* Label */}
            <span
              className="
                text-[#1184C1]
                uppercase
                tracking-[2px]
                font-medium
                text-sm
              "
            >
              Our Philosophy
            </span>

            {/* Heading */}
            <h2
              className="
    mt-5
    text-[#D1E5FB]
    tracking-[0.01em]

    leading-[1.15]
    sm:leading-[1.1]
    text-[24px]
    sm:text-[40px]
    md:text-[48px]
lg:text-4xl
    xl:text-[56px]
    font-semibold
    md:font-bold
  "
            >
              <span className="">We Believe Every Smile Has A Story</span>
            </h2>

            {/* Description */}
            <p
              className="
                sm:mt-8
                mt-6
                text-[#C7D8E6]
                leading-relaxed

                text-base
                sm:text-lg
                lg:text-[20px]
              "
            >
              We understand that visiting the dentist can be daunting.
              That&apos;s why our practice is built entirely around your
              comfort. From the moment you walk through our doors, our priority
              is to listen to your needs, understand your dental goals, and
              provide personalized care in a tranquil environment.
            </p>

            {/* Cards */}
            <div className="xl:mt-12 mt-8 sm:mt-10 lg:space-y-4 sm:space-y-5 space-y-4">
              {philosophyCards.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      rounded-[22px]
sm:rounded-3xl
lg:rounded-[28px]
                      bg-[#F7F7F7]
                      p-5
                      sm:p-6
                      lg:p-8

                      shadow-[0_10px_30px_rgba(0,0,0,.10)]
                    "
                  >
                    <div className="flex sm:gap-4 gap-3 lg:gap-5">
                      <div
                        className="
                         h-11
w-11

sm:h-12
sm:w-12

lg:h-14
lg:w-14
                          shrink-0
                          rounded-full
                          bg-[#DCE5EA]

                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon size={24} className="text-[#1184C1]" />
                      </div>

                      <div>
                        <h3
                          className="
                            text-[#1C232A]
                            font-semibold
                            text-lg
sm:text-xl
lg:text-2xl
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-[#626B73]
                            leading-relaxed
                            text-sm
sm:text-base
lg:text-lg
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
