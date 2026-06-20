"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
export default function AppointmentCTA() {
 
  return (
    <section 
    aria-labelledby="appointment-heading"
    className="py-12 lg:py-0 xl:py-28">
      <div className="max-w-8xl mx-auto px-5 sm:px-6 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
sm:rounded-4xl
lg:rounded-[36px]
            border
            border-[#FFFFFF1A]
            bg-[#03111C]
            shadow-[0px_8px_24px_0px_#001E300F]
            px-5
sm:px-8
md:px-12
lg:px-14

py-14
sm:py-18
md:py-20
lg:py-24
          "
        >
          {/* TOP RIGHT DECORATIVE CIRCLE */}
          <div
            className="
              absolute
              -top-28
              -right-28
              w-65
              h-65
              rounded-full
              bg-[#FFFFFF0D]
            "
          />

          {/* BOTTOM LEFT DECORATIVE CIRCLE */}
          <div
            className="
              absolute
              -bottom-28
              -left-28
              w-65
              h-65
              rounded-full
              bg-[#FFFFFF0D]
            "
          />

          {/* CONTENT */}
<div className="relative z-10 flex flex-col items-center text-center">
              <h2
  id="appointment-heading"
  className="
  text-white
  font-bold

  text-[24px]
  sm:text-[38px]
  md:text-[44px]
  lg:text-[50px]

  leading-[1.15]
  tracking-[-0.03em]
w-full
  md:max-w-225
"
>
              Ready To Begin Your Smile Journey?
            </h2>

           <p
  className="
  mt-5

  text-[#C8D4DF]

  text-[15px]
  sm:text-[17px]
  md:text-[18px]
  lg:text-[24px]

  leading-relaxed

  max-w-3xl
"
>
              Meet our dental experts and discover care
              designed around your needs.
            </p>

            <div
              className="mt-8
                sm:mt-10
                flex
                flex-col
                sm:flex-row
                justify-center
                items-center
                gap-4
                w-full
              "
            >
              {/* BOOK BUTTON */}
             <motion.div
  whileHover={{
    scale: 1.03,
    y: -2,
  }}
  whileTap={{ scale: 0.98 }}
>
  <Link
    href="/contact"
    className="
      h-14
      sm:h-15
      md:h-16
      px-8
      sm:px-10
      rounded-2xl
      bg-[#20C7D2]
      text-black
      font-bold
      text-sm
      sm:text-base
      md:text-lg
      min-w-55
      flex
      items-center
      justify-center
    "
  >
    Book Appointment
  </Link>
</motion.div>
              {/* CALL BUTTON */}
              <motion.a
              aria-label="Call WE KNOW Dental Clinic"
                href="tel:+918790525277"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  h-14
                  sm:h-16
                  px-6
                  sm:px-10
                  rounded-2xl
                  border
                  border-[#FFFFFF26]
                  text-white
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  min-w-60
                "
              >
                <Phone size={18} />
                Call : +91 8790 5252 77
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}