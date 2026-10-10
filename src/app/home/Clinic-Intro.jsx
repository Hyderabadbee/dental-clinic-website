"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Microscope,
  UserRound,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Comfortable Experience",
    description:
      "Relaxed dental visits focused on patient comfort.",
    icon: HeartHandshake,
  },
  {
    title: "Advanced Approach",
    description:
      "Modern technology supporting precise dental care.",
    icon: Microscope,
  },
  {
    title: "Personalized Care",
    description:
      "Every smile receives a treatment plan made for individual needs.",
    icon: UserRound,
  },
  {
    title: "Complete Dental Support",
    description:
      "From prevention to smile enhancement, your dental journey starts here.",
    icon: ShieldCheck,
  },
];

export default function ClinicIntroduction() {
  return (
    <section className="py-12 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden md:block"
          >
            <div className="overflow-hidd rounded-[28px] border border-[#43DDE140]">
              <Image
                src="/gallery/equipment2.jpg"
                alt="Dental Clinic"
                width={800}
                height={900}
                className="w-full h-auto object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="
                text-white
                font-bold
                leading-tight

                text-3xl
                
                lg:text-4xl
              "
            >
              Creating Confident Smiles With
              <br />
              Modern Dental Care
            </h2>

            <div className="mt-10 space-y-8">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-5"
                  >
                    {/* ICON */}
                    <div
                      className="
                        w-14
                        h-14
                        shrink-0
                        rounded-full
                        bg-[#61F4F833]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={26}
                        className="text-[#61F4F8]"
                        strokeWidth={2.3}
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="text-white font-bold text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[#FFFFFFCC] text-base  leading-relaxed">
                        {item.description}
                      </p>
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