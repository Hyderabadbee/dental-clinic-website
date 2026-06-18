"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: `"The most comfortable dental experience I've ever had. They truly listened to my concerns and designed a plan that fit my needs perfectly."`,
    author: "Patient Experience",
  },
  {
    text: `"I finally have the confidence to smile in photos again. The technology and care here are unmatched."`,
    author: "Patient Experience",
  },
  {
    text: `"Amazing team and outstanding service. The entire process was smooth and stress-free."`,
    author: "Patient Experience",
  },
  {
    text: `"Professional, caring and highly skilled. I couldn't be happier with my results."`,
    author: "Patient Experience",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonial-heading"
     className="py-20 lg:py-32 overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1  
          id="testimonial-heading" 
          className="text-white font-bold  text-2xl sm:text-4xl lg:text-5xl">
            Real Smiles. Real Transformations
          </h1>
        </motion.div>

        {/* Content */}
        <div className="mt-6 lg:mt-16 grid lg:grid-cols-[1.05fr_1fr] gap-8 xl:gap-12 items-start">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:flex lg:items-center lg:justify-center"
          >
            <div className="overflow-hidden lg:w-130 lg:h-175
      xl:w-full
      xl:h-auto
 rounded-4xl">
              <Image
                src="/home/feedback.svg"
                 alt="Happy dental patient sharing experience"
                width={900}
                height={700}
                 priority
  sizes="(max-width:1024px) 100vw, 50vw"
                className="w-full h-auto object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
           className="
flex
gap-5
overflow-x-auto
snap-x
snap-mandatory
scrollbar-hide

lg:block
lg:max-h-140
lg:overflow-y-auto
lg:overflow-x-hidden

lg:space-y-6
lg:pr-2

review-scroll
"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
               className="
group

snap-center
shrink-0

w-[88%]
sm:w-105
md:w-120

lg:w-auto

bg-white
rounded-[30px]

p-6
sm:p-8
xl:p-10

shadow-[0_20px_50px_rgba(0,0,0,0.15)]

transition-all
duration-300
hover:-translate-y-1
"
              >
                {/* Stars */}
                <div
                 aria-label="5 star review"
                className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill="#E0A800"
                      className="text-[#E0A800]"
                    />
                  ))}
                </div>

                {/* Review */}
                <p
                  className="
                    md:mt-6 mt-4
                    text-[#5D6673]
                    italic
                    leading-relaxed
                    text-sm
                    md:text-lg
                    lg:text-[20px]
                  "
                >
                  {review.text}
                </p>

                {/* Author */}
                <h3
                  className="
                    md:mt-8 mt-4
                    text-[#101828]
                    font-bold
                    md:text-xl
                  "
                >
                  {review.author}
                </h3>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}