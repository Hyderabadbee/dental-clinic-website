"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const categories = [
  "All",
  "Clinic",
  "Treatments",
  "Doctors",
  "Patient Moments",
  "Team",
];

const galleryItems = [
  {
    id: 1,
    category: "Clinic",
    image: "/gallery/c1.svg",
  },
  {
    id: 2,
    category: "Clinic",
    image: "/gallery/c2.svg",
  },

  {
    id: 3,
    category: "Treatments",
    image: "/gallery/c1.svg",
  },
  {
    id: 4,
    category: "Treatments",
    image: "/gallery/c2.svg",
  },

  {
    id: 5,
    category: "Doctors",
    image: "/gallery/c1.svg",
  },
  {
    id: 6,
    category: "Doctors",
    image: "/gallery/c2.svg",
  },

  {
    id: 7,
    category: "Patient Moments",
    image: "/gallery/c1.svg",
  },
  {
    id: 8,
    category: "Patient Moments",
    image: "/gallery/c2.svg",
  },

  {
    id: 9,
    category: "Team",
    image: "/gallery/team.png",
  },
  {
    id: 10,
    category: "Team",
    image: "/gallery/team1.png",
  }
  
];

export default function ClinicGallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeTab
        );

  return (
    <section     
      id="clinic-gallery"
className="
relative
overflow-hidden
bg-[#00253A]

py-18
sm:py-20
md:py-24
lg:py-28
xl:py-32
">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-150
            w-150
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-375 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="
              text-[#D1E5FB]
              font-bold
              tracking-tight
             text-[30px]
sm:text-[40px]
md:text-[48px]
lg:text-[56px]
leading-[1.1]
            "
          >
            A Look Inside Our Clinic
          </h2>

          <p
            className="
              mt-5
              text-white/75
              text-base
              md:text-lg
            "
          >
            Explore our clinic spaces, patient care moments and
            everyday experiences.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="
           flex
overflow-x-auto
scrollbar-hide

gap-3
justify-start

md:flex-wrap
md:justify-center

pb-2
mt-10
          "
        >
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                rounded-full shrink-0
whitespace-nowrap
                px-6
                py-3
                text-sm
                lg:text-base
                font-medium
                transition-all
                duration-300

                ${
                  activeTab === tab
                    ? "bg-[#007A88] text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
mt-10

flex
gap-5

overflow-x-auto
scrollbar-hide

snap-x
snap-mandatory

sm:gap-6

md:grid
md:grid-cols-2

lg:grid-cols-3
"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                 group

overflow-hidden

rounded-3xl
sm:rounded-[28px]

shrink-0

w-[85vw]
sm:w-95

md:w-auto

snap-center

transition-all
duration-500

hover:-translate-y-2
                  
                "
              >
              <div
  className="
    relative

    w-[85vw]
    h-70

    sm:w-95
    sm:h-80

    md:w-full
    md:h-auto

    overflow-hidden
    rounded-3xl
  "
>
  <Image
    src={item.image}
    alt={`${item.category} gallery image`}
    width={1200}
    height={800}
    loading="lazy"
    sizes="(max-width:768px) 85vw,(max-width:1024px) 50vw,33vw"
    className="
      w-full
      h-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />
</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}