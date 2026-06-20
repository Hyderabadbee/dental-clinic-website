

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, MessageCircle, X, Share2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


const socials = [
  {
    href: "tel:+918790525277",
    label: "Call",
    bg: "#1184C1",
    icon: <Phone size={20} />,
  },
  {
    href: "https://wa.me/918790525277",
    label: "WhatsApp",
    bg: "#25D366",
    image:"/whatsapp.svg",
    external: true,
    pulse: true,
  },
  {
    href: "https://instagram.com/yourpage",
    label: "Instagram",
    bg: "#E1306C",
    image: "/instagram.svg",
    external: true,
  },
  {
    href: "https://facebook.com/yourpage",
    label: "Facebook",
    bg: "#1877F2",
    image: "/facebook.svg",
    external: true,
  },
];

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close the mobile fan if the user taps outside it
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* ---------- DESKTOP: vertical rail, right edge ---------- */}
      <div
        className="
          hidden
          md:flex
          fixed
          right-5
          top-1/2
          -translate-y-1/2
          z-50
          flex-col
          gap-3
        "
      >
        {socials.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.3 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative"
          >
            {/* Tooltip */}
            <span
              className="
                pointer-events-none
                absolute
                right-full
                top-1/2
                -translate-y-1/2
                mr-3
                whitespace-nowrap
                rounded-md
                bg-[#0B1C26]
                px-3
                py-1.5
                text-xs
                font-medium
                text-white
                opacity-0
                shadow-lg
                transition-all
                duration-200
                group-hover:opacity-100
                group-hover:mr-3.5
              "
            >
              {item.label}
              <span
                className="
                  absolute
                  left-full
                  top-1/2
                  -translate-y-1/2
                  border-4
                  border-transparent
                  border-l-[#0B1C26]
                "
              />
            </span>

            {/* Pulse ring (WhatsApp only) */}
            {item.pulse && (
              <span
                className="
                  absolute
                  inset-0
                  rounded-full
                  animate-ping
                  opacity-40
                "
                style={{ backgroundColor: item.bg }}
              />
            )}

            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                text-white
                shadow-[0_4px_14px_rgba(0,0,0,0.25)]
                ring-1
                ring-white/20
                transition-transform
                duration-300
                hover:scale-110
              "
              style={{ backgroundColor: item.bg }}
            >
              {item.image ? (
                <Image src={item.image} alt="" width={22} height={22} />
              ) : (
                item.icon
              )}
            </a>
          </motion.div>
        ))}
      </div>

      {/* ---------- MOBILE: expandable FAB, bottom-right ---------- */}
      <div
        ref={containerRef}
        className="
          md:hidden
          fixed
          right-4
          bottom-5
          z-50
        "
      >
        {/* Dim backdrop when open */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 -z-10 bg-black/30 backdrop-blur-[1px]"
              onClick={() => setOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Fanned-out icons */}
        <AnimatePresence>
          {open &&
            socials.map((item, index) => {
              const distance = 64 * (index + 1);

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: 1, y: -distance, scale: 1 }}
                  exit={{ opacity: 0, y: 0, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 26,
                    delay: index * 0.04,
                  }}
                  className="
                    absolute
                    right-0
                    bottom-0
                    flex
                    items-center
                    justify-end
                    gap-2.5
                  "
                >
                  <span
                    className="
                      whitespace-nowrap
                      rounded-md
                      bg-[#0B1C26]
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      text-white
                      shadow-md
                    "
                  >
                    {item.label}
                  </span>

                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      text-white
                      shadow-[0_4px_14px_rgba(0,0,0,0.3)]
                      ring-1
                      ring-white/20
                      active:scale-95
                      transition-transform
                    "
                    style={{ backgroundColor: item.bg }}
                  >
                    {item.image ? (
                      <Image src={item.image} alt="" width={20} height={20} />
                    ) : (
                      item.icon
                    )}
                  </a>
                </motion.div>
              );
            })}
        </AnimatePresence>

        {/* Pulse ring around the main FAB (only when closed, to invite the tap) */}
        {!open && (
          <span
            className="
              absolute
              inset-0
              rounded-full
              animate-ping
              opacity-30
              bg-[#1184C1]
            "
          />
        )}

        {/* Main toggle button */}
        <motion.button
          type="button"
          aria-label={open ? "Close contact options" : "Open contact options"}
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.92 }}
          className="
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#1184C1]
            text-white
            shadow-[0_6px_20px_rgba(0,0,0,0.35)]
            ring-1
            ring-white/20
          "
        >
          <motion.span
            animate={{ rotate: open ? 135 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {open ? <X size={24} /> : <Share2 size={22} />}
          </motion.span>
        </motion.button>
      </div>
    </>
  );
}