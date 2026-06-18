"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
const concerns = [
  "Tooth Pain",
  "Smile Makeover",
  "Missing Teeth",
  "Teeth Whitening",
  "Braces",
];
export default function Hero() {
  const typingText =
    "We are specialized in treating dental problems with advanced and comfortable care.";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < typingText.length) {
        setDisplayText(typingText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative overflow-hidden  md:min-h-screen flex items-center pt-22 sm:pt-25  lg:pt-20 md:pb-16">
      <div className="mx-auto w-full px-1 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 md:gap-14 xl:gap-24 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1"
          >
            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#0D7188]
                bg-[#08212A]
                px-3
                py-2
                md:px-5
                md:py-3
                
              "
            >
              <span
                className="
                  text-[#43DDE1]
                  text-xs
                  xl:text-sm
                  font-semibold
                  tracking-[2px]
                "
              >
                WE KNOW DENTAL CLINIC
              </span>
            </div>

            {/* Heading */}
            <h1
  className="
    mt-6
    text-white
    font-bold
    leading-[1.1]

w-full
    text-[30px]
    sm:text-[48px]
    md:text-[58px]
    lg:text-[45px]
    xl:text-[56px]
  "
>
  <span className="block  lg:block">
    WE KNOW what
  </span>

  <span className="block  lg:block mt-1 lg:mt-0">
    your{" "}
    <span
      className="bg-clip-text text-transparent"
      style={{
        background:
          "linear-gradient(111.41deg, #1184C1 0%, #11C5C9 100%)",
        WebkitBackgroundClip: "text",
      }}
    >
      SMILE
    </span>{" "}
    needs
  </span>
</h1>

            {/* Description */}
            <p
              className="
               mt-8
                text-[#FFFFFFCC]
                lg:max-w-163

                text-base
                md:text-lg
                

                leading-relaxed
              "
            >
              Experience personalized dental care designed to create healthy,
              confident and beautiful smiles through comfort-focused treatments.
            </p>

            {/* Search Box */}
           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 1,
              }}
              className="
    mt-10
    w-full
    lg:max-w-140
    rounded-3xl
    bg-white
    p-2
    md:p-4
    shadow-[0_20px_50px_rgba(0,0,0,0.25)]
  "
            >
              <div
                className="
      bg-[#EDF2F5]
      rounded-[18px]
      md:px-6
      md:py-5
      px-3
      py-2
      md:min-h-23
      flex
      items-center
    "
              >
                <p
                  className="
        text-gray-600
        text-sm
        md:text-base
        leading-relaxed
      "
                >
                  {displayText}
                  <span className="animate-pulse text-[#11C5C9]">|</span>
                </p>
              </div>
            </motion.div>
            <div className="mt-6 flex flex-wrap gap-3  lg:max-w-138">
              {concerns.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="
        md:px-5
        md:py-3
        px-2 py-2
        rounded-full
        bg-[#FFFFFF1A]
        border
        border-[#43DDE133]
        text-[#43DDE1]
        text-sm
        font-medium
        cursor-pointer
      "
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-2"
          >
            {/* Image Frame */}
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="relative overflow-hidden hidden md:block rounded-2xl
                
              "
            >
              <Image
                src="/home/hero.svg"
                alt="Dental Clinic"
                width={1000}
                height={700}
                priority
                className="w-full h-auto object-cover
                "
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                hidden md:block
                left-4
                bottom-4

                sm:left-8
                sm:bottom-8
                 md:right-6
  md:-bottom-19
  md:left-auto
                xl:-left-10
                xl:-bottom-19

                bg-white
                rounded-3xl
                md:rounded-[30px]

                p-5
                md:p-6

                w-60
                sm:w-70
                md:w-[320px]
                xl:w-[320px]
                lg:w-75
                shadow-[0_25px_60px_rgba(0,0,0,0.25)]
              "
            >
              <div className="flex gap-4">
                <div
                  className="
                    h-12
                    w-12
                    xl:h-14
                    xl:w-14
lg:w-10 lg:h-10
                    rounded-2xl
                    bg-[#B9F8FF]

                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Heart size={28} className="text-[#0B7B92]" />
                </div>

                <div>
                  <h3
                    className="
                      text-[#0B5B77]
                      font-bold
                      leading-tight

                      text-xl
                      md:text-[22px]
                      xl:text-[22px]
                      lg:text-base
                    "
                  >
                    Comfort-
                    
                    focused
                    
                    Dentistry
                  </h3>

                  <p
                    className="
                      mt-2
                      text-gray-600
                      text-sm
                      md:text-base
                    "
                  >
                    Designed around your comfort
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
