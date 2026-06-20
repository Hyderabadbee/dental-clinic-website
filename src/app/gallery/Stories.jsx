"use client";

import {
  MessageSquareText,
  Sprout,
  Heart,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Personalized Consultations",
    description:
      "Understanding every patient's needs before creating their dental care journey.",
    icon: MessageSquareText,
  },

  {
    title: "Comfortable Treatment Experience",
    description:
      "Modern dentistry focused on comfort and confidence.",
    icon: Sprout,
  },

  {
    title: "Care Beyond Treatment",
    description:
      "Building lasting relationships through trusted dental care.",
    icon: Heart,
  },
];

const tags = [
  "Smile Stories",
  "Patient Care",
  "Clinic Moments",
  "Happy Experiences",
];

export default function FeaturedStories() {
  return (
<section
aria-labelledby="stories-heading"
className="
bg-[#001E30]

py-18
sm:py-20
md:py-24
lg:py-28
xl:py-32
"
>      <div className="mx-auto max-w-375 px-5 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2
          id="stories-heading"
            className="
              text-[#D1E5FB]
              font-bold
              tracking-[-0.03em]
             text-[28px]
sm:text-[38px]
md:text-[46px]
lg:text-[54px]
leading-[1.1]
            "
          >
            Stories Behind Every Smile
          </h2>

          <p
            className="
              mt-5
              text-white/70
              text-sm
              sm:text-base
              md:text-lg
            "
          >
            Every photo represents a journey of trust,
            care and confidence.
          </p>
        </motion.div>

        {/* Cards */}

        {/* Cards */}

<div
  className="
    mt-10

    flex
    gap-5

    overflow-x-auto
    overflow-y-hidden
    overscroll-x-contain
    scrollbar-hide

    snap-x
    snap-mandatory
    items-stretch

    md:grid
    md:grid-cols-3
  "
  style={{ touchAction: "pan-x" }}
>
  {cards.map((card, index) => {
    const Icon = card.icon;

    return (
      <motion.div
        key={card.title}
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.35,
          delay: index * 0.08,
        }}
        className="
group

shrink-0
snap-center

w-[88vw]
sm:w-105

md:w-auto

rounded-3xl
lg:rounded-[28px]

border
border-white/10

bg-[#2B3133CC]

p-6
sm:p-8
md:p-9
xl:p-10

backdrop-blur-xl

transition-all
duration-500

hover:-translate-y-2
hover:border-cyan-400/20
hover:shadow-[0_20px_60px_rgba(0,0,0,.25)]

md:[transition-property:transform,border-color,box-shadow,opacity]
"
      >
                {/* Icon */}

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-400/15
                    text-cyan-300
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                >
                  <Icon size={24} />
                </div>

                {/* Title */}

                <h3
                  className="
                    md:mt-8 mt-6
                    
                    text-white
                    font-semibold
                    leading-tight
                    text-[20px]
sm:text-[28px]
md:text-xl
xl:text-[30px]

                  "
                >
                  {card.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    md:mt-6 mt-4
                    text-white/70
                    text-[15px]
sm:text-base
md:text-lg
leading-relaxed
                    max-w-[320px]
                  "
                >
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            md:mt-16 mt-10
            h-px
            w-full
            bg-white/10
          "
        />

        {/* Tags */}

        <div
  className="
    md:mt-10 mt-6

    grid
    grid-cols-2
    gap-x-4
    gap-y-5

    sm:grid-cols-2

    md:flex
    md:flex-wrap
    md:justify-center
    md:gap-x-10
    md:gap-y-5
  "

        >
          {tags.map((tag, index) => (
            <motion.div
              key={tag}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
             className="
  flex
  items-center
  justify-center

  gap-2

  rounded-xl

  px-3
  py-2

  bg-white/3
  border
  border-white/10

  text-white

  md:bg-transparent
  md:border-0
  md:px-0
  md:py-0
">
              <CheckCircle2
                size={18}
                className="text-cyan-300"
              />

              <span
                className="text-xs
                  sm:text-sm
                  md:text-base
                  font-medium
                  text-white/90
                "
              >
                {tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}