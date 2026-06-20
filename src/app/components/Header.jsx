"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0  z-50 bg-black/70 backdrop-blur-xl border-b-2 border-[#43DDE11A] shadow-[0px_4px_6px_-4px_rgba(1,21,37,0.2),0px_10px_15px_-3px_rgba(1,21,37,0.2)]
 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4  lg:px-3 xl:px-6">
        <div className="h-20  grid grid-cols-[auto_1fr_auto] items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Dental Logo"
              width={48}
              height={48}
              priority
              className="md:h-12 md:w-auto w-8 h-8"
            />

            <span className="text-[#8FCDFF] font-extrabold text-sm md:text-[18px] xl:text-[20px] tracking-wide whitespace-nowrap">
              WE KNOW DENTAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center items-center gap-14">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-[18px] font-medium text-[#D1E5FB] hover:text-[#43DDE1] transition-colors duration-300 py-2"
                >
                  {item.name}

                  {/* Hover Underline */}
                  {!active && (
                    <span
                      className="
                        absolute
                        left-1/2
                        -bottom-2
                        h-0.5
                        w-0
                        bg-[#43DDE1]
                        transition-all
                        duration-300
                        group-hover:left-0
                        group-hover:w-full
                      "
                    />
                  )}

                  {/* Active Sliding Underline */}
                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="
                        absolute
                        left-0
                        right-0
                        -bottom-2
                        h-0.5
                        bg-[#43DDE1]
                      "
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.5,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex justify-end">
            <Link
            href="/contact"
              className="
                group
                relative
                overflow-hidden
                h-14
                px-8
                lg:px-4 xl:px-8
                rounded-full
                font-semibold
                text-[#003450]
                flex
                items-center
                gap-2
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(67,221,225,0.5)]
              "
              style={{
                background:
                  "linear-gradient(90deg, #3698D6 0%, #00C1C5 100%)",
              }}
            >
              Book Appointment

              <ArrowRight
                size={18}
                className="text-[#003450] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="justify-self-end text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 flex flex-col gap-6">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        text-lg
                        pb-3
                        border-b
                        border-white/10
                        transition-colors
                        duration-300
                        ${
                          active
                            ? "text-[#43DDE1]"
                            : "text-white hover:text-[#43DDE1]"
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  className="
                    mt-2
                    h-13
                      flex
    items-center
    justify-center
                    rounded-full
                    text-black
                    font-semibold
                    transition-transform
                    duration-300
                    hover:scale-[1.02]
                  "
                  style={{
                    background:
                      "linear-gradient(90deg, #3698D6 0%, #00C1C5 100%)",
                  }}
                >
                  
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}