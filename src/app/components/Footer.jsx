"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const treatments = [
  {
    label: "Smile Designing",
    href: "/services/smile-designing",
  },
  {
    label: "Dental Implants",
    href: "/services/dental-implants",
  },
  {
    label: "Teeth Whitening",
    href: "/services/teeth-whitening",
  },
  {
    label: "Root Canal",
    href: "/services/root-canal",
  },
  {
    label: "Aligners",
    href: "/services/aligners",
  },
];

export default function Footer() {
  return (
    <footer aria-label="Website footer" className="relative bg-[#000F18] overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#43DDE11A]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6  lg:px-8">
        <div
          className="py-16
            md:py-20
            lg:py-28
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10 sm:gap-12
            lg:gap-16
          "
        >
          {/* Column 1 */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

            <h2
              className="
                text-[#11C5C9] text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.15] font-bold tracking-wide w-70 
              "
            >
              WE KNOW Dental Clinic
            </h2>

            <p
              className="
                sm:mt-8 mt-5
                text-[#FFFFFFB2]
                text-sm sm:text-[16px] lg:text-lg
                text-[18px]
                leading-7
                max-w-75"
            >
              Creating healthier and more confident smiles
              through personalized dental care.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
>

            <h3
              className="
                text-[#00D7E8]
                
                font-semibold
               text-[22px]
sm:text-[24px]
lg:text-[30px]

mb-5
sm:mb-6
lg:mb-8
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-3 sm:space-y-4 lg:space-y-5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                 <Link
      href={item.href}
      className="
        group
        text-[#FFFFFFB2]
        text-[16px]
sm:text-[17px]
lg:text-[19px]

 font-semibold
        transition-all
        duration-300
        hover:text-[#00D7E8]
        inline-flex
        items-center

        gap-1
      "
    >
      <span className="group-hover:translate-x-2 transition-transform duration-300">
        {item.label}
      </span>
    </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
            <h3
              className="text-[#00D7E8]  font-semibold text-[22px] sm:text-[24px] lg:text-[30px] mb-5 sm:mb-6 lg:mb-8
              "
            >
              Treatments
            </h3>

            <ul className="space-y-5">
              {treatments.map((item) => (
                <li key={item.label}>
    <Link
      href={item.href}
      className="group text-[#FFFFFFB2] text-[16px] sm:text-[17px] lg:text-[19px] transition-all font-semibold duration-300 hover:text-[#00D7E8] inline-flex items-center
      "
    >
      <span className="group-hover:translate-x-2 transition-transform duration-300">
        {item.label}
      </span>
    </Link>
  </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
            <h3
              className="
                text-[#00D7E8]
                
                font-semibold
               text-[22px]
sm:text-[24px]
lg:text-[30px]

mb-5
sm:mb-6
lg:mb-8
              "
            >
              Contact
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-4">
  <MapPin
    size={22}
    className="text-[#00D7E8] shrink-0 mt-1"
  />

  <a
    aria-label="Open clinic location on Google Maps"
  href="https://www.google.com/maps/search/?api=1&query=H.No.1-5-71+First+Floor+Opp+Sparsha+Skin+Hospital+Godown+Road+Kamareddy+Telangana+503111"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      text-[#D1D5DB]
      text-[15px]
sm:text-[16px]
lg:text-[18px]

leading-7
wrap-break-word
      hover:text-[#00D7E8]
      transition-all
      duration-300
    "
  >
    H.No. 1-5-71, First Floor,
    Opp Sparsha Skin Hospital,
    Godown Road, Kamareddy,
    Kamareddy Dist,
    Telangana State-503111
  </a>
</div>

              {/* Phone */}
              <div className="flex gap-4 items-center">
                <Phone
                  size={20}
                  className="text-[#00D7E8]"
                />

                <a
                  aria-label="Call WE KNOW Dental Clinic"
                  href="tel:+918790525277"
                  className="
text-[#D1D5DB]

text-[15px]
sm:text-[16px]
lg:text-[18px]

hover:text-[#00D7E8]
transition-colors
break-all
"
                >
                  +91 87905 25277
                </a>
              </div>

              {/* Mail */}
              <div className="flex gap-4 items-center">
                <Mail
                  size={20}
                  className="text-[#00D7E8]"
                />

                <a
                  aria-label="Send email to WE KNOW Dental Clinic"
                  href="mailto:weknowdentalclinic@gmail.com"
                  className="
text-[#D1D5DB]

text-[15px]
sm:text-[16px]
lg:text-[18px]

hover:text-[#00D7E8]
transition-colors
break-all
"
                >
                  weknowdentalclinic@gmail.com
                </a>
              </div>

              {/* Time */}
              <div className="flex gap-4 items-center">
                <Clock3
                  size={20}
                  className="text-[#00D7E8]"
                />

                <span
                  className="
                   text-[15px]
sm:text-[16px]
lg:text-[18px]

                  "
                >
                  Mon - Fri : 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <div
          className="
            border-t
            border-[#43DDE11A]
            sm:py-6 py-5
            text-center
          "
        >
          <p
            className="
              text-[#8E99A3]
              text-sm
              md:text-base
            "
          >
            Copyright © Developed by Workbees
            Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}