'use client'
import { motion } from "framer-motion";
import { Frown, Smile,Sparkles,ArrowRight } from "lucide-react";
import Image from "next/image";
const concerns = [
  {
    title: "Tooth Pain",
    description:
      "Discomfort or sensitivity affecting your daily life?",
    icon: Frown,
    iconBg: "#F9DADA",
    iconColor: "#A60B17",
  },
  {
    title: "Not Happy With Smile",
    description:
      "Improve confidence with personalized smile care.",
    icon: Smile,
    iconBg: "#0F7DBA",
    iconColor: "#FFFFFF",
  },
  {
    title: "Missing Teeth",
    description:
      "Bring back comfort, function and confidence.",
    icon: "/home/teeth.svg",
    isSvg:true,
    iconBg: "#67E5EB",
    iconColor: "#0B7384",
  },
  {
  title: "Sensitive Teeth",
  description:
    "Pain while eating hot, cold or sweet foods and drinks.",
  icon: Sparkles,
  iconBg: "#E0FDF4",
  iconColor: "#0F766E",
}
];
const ConcernSection= () => {
  return (
    <section  aria-label="Dental concerns and treatment solutions" className="py-20 sm:py-20 lg:py-28">
  <div className="mx-auto
max-w-400
px-4
sm:px-6
md:px-8
lg:px-0">
    
    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto">
      <h1 
  className="
  text-white
  font-bold
  leading-[1.1]

  text-[24px]
  sm:text-[38px]
  md:text-[44px]

  lg:text-5xl

  max-w-4xl
  mx-auto
"
>
        Tell Us Your Concern, We&apos;ll Guide Your Smile Journey
      </h1>

<p
className="
mt-5
mx-auto
max-w-2xl

text-[#D0D5DD]
leading-relaxed

text-[15px]
sm:text-base
md:text-lg
"
>        Every smile has a story. Discover personalized care
        designed around your dental needs.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-stretch">
      {concerns.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0  }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
  y: typeof window !== "undefined" && window.innerWidth < 768 ? -4 : -10,
}}
            className="group bg-white rounded-[30px] p-4 sm:p-7 md:p-8  flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.25)]  border border-transparent hover:border-[#43DDE140] 
md:hover:-translate-y-2 transition-all duration-500"
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="md:w-16 md:h-16 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: item.iconBg,
              }}
            >
             {item.isSvg ? (
  <Image
    src={item.icon}
    alt={item.title}
    width={32}
    height={32}
    className="object-contain"
  />
) : (
  <Icon
    size={30}
    color={item.iconColor}
    strokeWidth={2.2}
  />
)}
            </motion.div>

            {/* Title */}
            <h3 className="mt-6 md:mt-8 text-[#101828] text-[24px]
sm:text-[26px]
md:text-[28px]
lg:text-2xl font-bold leading-tight">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 md:mt-4 text-[#667085] sm:text-base text-sm lg:text-lg leading-8">
              {item.description}
            </p>

           
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
  )
}

export default ConcernSection