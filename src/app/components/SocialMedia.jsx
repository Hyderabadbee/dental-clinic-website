

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { Phone, MessageCircle, X, Share2 } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";


// const socials = [
//   {
//     href: "tel:+918790525277",
//     label: "Call",
//     bg: "#1184C1",
//     icon: <Phone size={20} />,
//   },
//   {
//     href: "https://wa.me/918790525277",
//     label: "WhatsApp",
//     bg: "#25D366",
//     image:"/whatsapp.svg",
//     external: true,
//     pulse: true,
//   },
//   {
//     href: "https://instagram.com/yourpage",
//     label: "Instagram",
//     bg: "#E1306C",
//     image: "/instagram.svg",
//     external: true,
//   },
//   {
//     href: "https://facebook.com/yourpage",
//     label: "Facebook",
//     bg: "#1877F2",
//     image: "/facebook.svg",
//     external: true,
//   },
// ];

// export default function FloatingSocials() {
//   const [open, setOpen] = useState(false);
//   const containerRef = useRef(null);

//   // Close the mobile fan if the user taps outside it
//   useEffect(() => {
//     if (!open) return;

//     function handleClickOutside(e) {
//       if (containerRef.current && !containerRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     }

//     document.addEventListener("touchstart", handleClickOutside);
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("touchstart", handleClickOutside);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [open]);

//   return (
//     <>
//       {/* ---------- DESKTOP: vertical rail, right edge ---------- */}
//       <div
//         className="
//           hidden
//           md:flex
//           fixed
//           right-5
//           top-1/2
//           -translate-y-1/2
//           z-50
//           flex-col
//           gap-3
//         "
//       >
//         {socials.map((item, index) => (
//           <motion.div
//             key={item.label}
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.45,
//               delay: 0.3 + index * 0.08,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="group relative"
//           >
//             {/* Tooltip */}
//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 right-full
//                 top-1/2
//                 -translate-y-1/2
//                 mr-3
//                 whitespace-nowrap
//                 rounded-md
//                 bg-[#0B1C26]
//                 px-3
//                 py-1.5
//                 text-xs
//                 font-medium
//                 text-white
//                 opacity-0
//                 shadow-lg
//                 transition-all
//                 duration-200
//                 group-hover:opacity-100
//                 group-hover:mr-3.5
//               "
//             >
//               {item.label}
//               <span
//                 className="
//                   absolute
//                   left-full
//                   top-1/2
//                   -translate-y-1/2
//                   border-4
//                   border-transparent
//                   border-l-[#0B1C26]
//                 "
//               />
//             </span>

//             {/* Pulse ring (WhatsApp only) */}
//             {item.pulse && (
//               <span
//                 className="
//                   absolute
//                   inset-0
//                   rounded-full
//                   animate-ping
//                   opacity-40
//                 "
//                 style={{ backgroundColor: item.bg }}
//               />
//             )}

//             <a
//               href={item.href}
//               target={item.external ? "_blank" : undefined}
//               rel={item.external ? "noopener noreferrer" : undefined}
//               aria-label={item.label}
//               className="
//                 relative
//                 flex
//                 h-12
//                 w-12
//                 items-center
//                 justify-center
//                 rounded-full
//                 text-white
//                 shadow-[0_4px_14px_rgba(0,0,0,0.25)]
//                 ring-1
//                 ring-white/20
//                 transition-transform
//                 duration-300
//                 hover:scale-110
//               "
//               style={{ backgroundColor: item.bg }}
//             >
//               {item.image ? (
//                 <Image src={item.image} alt="" width={22} height={22} />
//               ) : (
//                 item.icon
//               )}
//             </a>
//           </motion.div>
//         ))}
//       </div>

//       {/* ---------- MOBILE: expandable FAB, bottom-right ---------- */}
//       <div
//         ref={containerRef}
//         className="
//           md:hidden
//           fixed
//           right-4
//           bottom-5
//           z-50
//         "
//       >
//         {/* Dim backdrop when open */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               className="fixed inset-0 -z-10 bg-black/30 backdrop-blur-[1px]"
//               onClick={() => setOpen(false)}
//             />
//           )}
//         </AnimatePresence>

//         {/* Fanned-out icons */}
//         <AnimatePresence>
//           {open &&
//             socials.map((item, index) => {
//               const distance = 64 * (index + 1);

//               return (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: 0, scale: 0.5 }}
//                   animate={{ opacity: 1, y: -distance, scale: 1 }}
//                   exit={{ opacity: 0, y: 0, scale: 0.5 }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 380,
//                     damping: 26,
//                     delay: index * 0.04,
//                   }}
//                   className="
//                     absolute
//                     right-0
//                     bottom-0
//                     flex
//                     items-center
//                     justify-end
//                     gap-2.5
//                   "
//                 >
//                   <span
//                     className="
//                       whitespace-nowrap
//                       rounded-md
//                       bg-[#0B1C26]
//                       px-2.5
//                       py-1
//                       text-xs
//                       font-medium
//                       text-white
//                       shadow-md
//                     "
//                   >
//                     {item.label}
//                   </span>

//                   <a
//                     href={item.href}
//                     target={item.external ? "_blank" : undefined}
//                     rel={item.external ? "noopener noreferrer" : undefined}
//                     aria-label={item.label}
//                     onClick={() => setOpen(false)}
//                     className="
//                       flex
//                       h-12
//                       w-12
//                       items-center
//                       justify-center
//                       rounded-full
//                       text-white
//                       shadow-[0_4px_14px_rgba(0,0,0,0.3)]
//                       ring-1
//                       ring-white/20
//                       active:scale-95
//                       transition-transform
//                     "
//                     style={{ backgroundColor: item.bg }}
//                   >
//                     {item.image ? (
//                       <Image src={item.image} alt="" width={20} height={20} />
//                     ) : (
//                       item.icon
//                     )}
//                   </a>
//                 </motion.div>
//               );
//             })}
//         </AnimatePresence>

//         {/* Pulse ring around the main FAB (only when closed, to invite the tap) */}
//         {!open && (
//           <span
//             className="
//               absolute
//               inset-0
//               rounded-full
//               animate-ping
//               opacity-30
//               bg-[#1184C1]
//             "
//           />
//         )}

//         {/* Main toggle button */}
//         <motion.button
//           type="button"
//           aria-label={open ? "Close contact options" : "Open contact options"}
//           onClick={() => setOpen((v) => !v)}
//           whileTap={{ scale: 0.92 }}
//           className="
//             relative
//             flex
//             h-14
//             w-14
//             items-center
//             justify-center
//             rounded-full
//             bg-[#1184C1]
//             text-white
//             shadow-[0_6px_20px_rgba(0,0,0,0.35)]
//             ring-1
//             ring-white/20
//           "
//         >
//           <motion.span
//             animate={{ rotate: open ? 135 : 0 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="flex items-center justify-center"
//           >
//             {open ? <X size={24} /> : <Share2 size={22} />}
//           </motion.span>
//         </motion.button>
//       </div>
//     </>
//   );
// }


"use client";

import { useState, useEffect, useRef, useId, useCallback } from "react";
import Image from "next/image";
import { Phone, MapPin, X } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  CONFIG – change these once, everything else updates                        */
/* -------------------------------------------------------------------------- */
const SITE_NAME = "WeKnow Dental Clinic";

const LOGO_SRC = "/logo.svg";

const PHONE = "+918790525277";

const MAPS_URL = "https://maps.app.goo.gl/vtmiHvBcGvToUVLP6";

const SOCIALS = [
  {
    label: "Call",
    href: `tel:${PHONE}`,
    color: "#1184C1",
    show: "mobile",
    icon: "phone",
  },
  {
    label: "Google Maps",
    href: MAPS_URL,
    color: "#EA4335",
    show: "desktop",
    icon: "map",
    external: true,
  },
 {
  label: "WhatsApp",
  href: "https://wa.me/918790525277?text=Hello%20WeKnow%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment.",
  color: "#25D366",
  show: "all",
  image: "/whatsapp.svg",
  external: true,
},
  {
    label: "Instagram",
    href: "https://www.instagram.com/weknowdentalclinic/",
    color: "#E1306C",
    show: "all",
    image: "/instagram.svg",
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/weknowdentalclinic/",
    color: "#1877F2",
    show: "all",
    image: "/facebook.svg",
    external: true,
  },
];
/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */
export default function FloatingSocials({ withSchema = false }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const btnRef = useRef(null);
  const listId = useId();

  const close = useCallback(() => setOpen(false), []);

  // Close on outside press + Escape (only listens while open)
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) close();
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
        btnRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Optional JSON-LD (skip if your layout already outputs Organization schema)
  const schema = withSchema
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        telephone: PHONE,
        hasMap: MAPS_URL,
        sameAs: SOCIALS.filter((s) => s.external && /instagram|facebook/.test(s.href)).map((s) => s.href),
      })
    : null;

  return (
    <>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      )}

      <div ref={rootRef} className="fs-root" data-open={open}>
        {/* Backdrop */}
        <div className="fs-backdrop" onClick={close} aria-hidden="true" />

        {/* Social links */}
        <nav id={listId} aria-label="Contact and social links" className="fs-list">
          {SOCIALS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              data-show={item.show}
              className="fs-item"
              style={{ "--c": item.color, "--i": SOCIALS.length - 1 - i }}
              onClick={close}
            >
              <span className="fs-bubble">
                {item.image ? (
                  <Image src={item.image} alt="" width={24} height={24} className="fs-img" />
                ) : item.icon === "phone" ? (
                  <Phone strokeWidth={2.2} className="fs-svg" />
                ) : (
                  <MapPin strokeWidth={2.2} className="fs-svg" />
                )}
              </span>
            </a>
          ))}
        </nav>

        {/* Main toggle (logo) */}
        <button
          ref={btnRef}
          type="button"
          className="fs-fab"
          aria-expanded={open}
          aria-controls={listId}
          aria-label={open ? "Close contact options" : "Open contact options"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="fs-fab-inner">
            <span className="fs-fab-face fs-logo">
              <Image src={LOGO_SRC} alt={SITE_NAME} width={36} height={36} priority={false} className="fs-logo-img" />
            </span>
            <span className="fs-fab-face fs-close">
              <X strokeWidth={2.4} className="fs-svg" />
            </span>
          </span>
        </button>
      </div>

      <style>{CSS}</style>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Styles – pure CSS, GPU-only (transform/opacity), no animation library      */
/* -------------------------------------------------------------------------- */
const CSS = `
@property --fs-angle { syntax: "<angle>"; inherits: false; initial-value: 0deg; }

.fs-root {
  /* fluid sizing: phones -> laptops -> 4K */
  --fab: clamp(3.25rem, 2.9rem + 1.1vw, 4.5rem);
  --item: clamp(2.75rem, 2.5rem + 0.8vw, 3.5rem);
  --gap: clamp(0.6rem, 0.5rem + 0.3vw, 0.9rem);
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --spring: linear(0, 0.402 7.4%, 0.711 15.3%, 0.929 23.7%, 1.008 28.2%, 1.067 33%, 1.099 38.2%, 1.1 43%, 1.077 48.5%, 1.035 55%, 1.005 63%, 0.997 75%, 1);
  --ink: #0b1c26;

  position: fixed;
  z-index: 50;
  right: max(1rem, env(safe-area-inset-right));
  bottom: max(1.25rem, env(safe-area-inset-bottom));
  width: var(--fab);
  height: var(--fab);
  contain: layout style;
}
@media (min-width: 1024px) {
  .fs-root { right: clamp(1.5rem, 2vw, 3rem); bottom: clamp(1.5rem, 3vh, 3rem); }
}

/* ---------- backdrop ---------- */
.fs-backdrop {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: radial-gradient(120% 90% at 100% 100%, rgb(11 28 38 / 0.55), rgb(11 28 38 / 0.1) 60%, transparent);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}
.fs-root[data-open="true"] .fs-backdrop { opacity: 1; pointer-events: auto; }

/* ---------- list ---------- */
.fs-list {
  position: absolute;
  right: 0;
  bottom: calc(var(--fab) + var(--gap));
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--gap);
}

.fs-item {
  --d: calc(var(--i) * 55ms);
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  /* closed */
  opacity: 0;
  visibility: hidden;
  transform: translate3d(0, 1.25rem, 0) scale(0.5);
  transform-origin: 100% 100%;
  transition:
    transform 0.35s ease calc(var(--d) * 0.4),
    opacity 0.25s ease calc(var(--d) * 0.4),
    visibility 0s linear 0.4s;
}
.fs-item[data-show="mobile"] { display: flex; }
.fs-item[data-show="desktop"] { display: none; }
@media (min-width: 1024px) {
  .fs-item[data-show="mobile"] { display: none; }
  .fs-item[data-show="desktop"] { display: flex; }
}

/* open */
.fs-root[data-open="true"] .fs-item {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition:
    transform 0.6s var(--spring) var(--d),
    opacity 0.3s ease var(--d),
    visibility 0s;
}

/* ---------- bubble ---------- */
.fs-bubble {
  position: relative;
  display: grid;
  place-items: center;
  width: var(--item);
  height: var(--item);
  border-radius: 50%;
  color: #fff;
  background:
    linear-gradient(145deg, rgb(255 255 255 / 0.28), transparent 55%),
    var(--c);
  box-shadow:
    0 10px 26px -8px color-mix(in oklab, var(--c) 75%, transparent),
    inset 0 0 0 1px rgb(255 255 255 / 0.25);
  transition: transform 0.4s var(--spring), box-shadow 0.3s ease;
}
.fs-item:hover .fs-bubble { transform: translateY(-3px) scale(1.12); }
.fs-item:active .fs-bubble { transform: scale(0.94); }
.fs-item:focus-visible { outline: none; }
.fs-item:focus-visible .fs-bubble { box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--c); }

.fs-svg { width: 46%; height: 46%; }
.fs-img { width: 48%; height: 48%; object-fit: contain; }

/* ---------- main FAB (animated conic ring + logo) ---------- */
.fs-fab {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 3px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  background: conic-gradient(from var(--fs-angle), #1184c1, #25d366, #e1306c, #1877f2, #1184c1);
  box-shadow: 0 12px 32px -10px rgb(17 132 193 / 0.7), 0 4px 12px rgb(0 0 0 / 0.25);
  animation: fs-spin 6s linear infinite;
  transition: transform 0.4s var(--spring);
  -webkit-tap-highlight-color: transparent;
}
.fs-fab:hover { transform: scale(1.07); }
.fs-fab:active { transform: scale(0.93); }
.fs-fab:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }

/* soft attention pulse while closed */
.fs-fab::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgb(17 132 193 / 0.55);
  animation: fs-pulse 2.6s ease-out infinite;
  pointer-events: none;
}
.fs-root[data-open="true"] .fs-fab { animation-play-state: paused; }
.fs-root[data-open="true"] .fs-fab::after { animation: none; }

.fs-fab-inner {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
}
.fs-fab-face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  transition: transform 0.55s var(--spring), opacity 0.25s ease;
}
.fs-logo-img { width: 62%; height: 62%; object-fit: contain; }
.fs-close { color: var(--ink); opacity: 0; transform: rotate(-90deg) scale(0.4); }
.fs-close .fs-svg { width: 42%; height: 42%; }
.fs-root[data-open="true"] .fs-logo { opacity: 0; transform: rotate(90deg) scale(0.4); }
.fs-root[data-open="true"] .fs-close { opacity: 1; transform: none; }

/* ---------- keyframes ---------- */
@keyframes fs-spin { to { --fs-angle: 360deg; } }
@keyframes fs-pulse {
  0%   { box-shadow: 0 0 0 0 rgb(17 132 193 / 0.5); }
  70%  { box-shadow: 0 0 0 18px rgb(17 132 193 / 0); }
  100% { box-shadow: 0 0 0 0 rgb(17 132 193 / 0); }
}

/* ---------- accessibility: reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .fs-fab, .fs-fab::after { animation: none; }
  .fs-item, .fs-root[data-open="true"] .fs-item,
  .fs-bubble, .fs-fab, .fs-fab-face, .fs-backdrop {
    transition-duration: 0.01ms;
    transition-delay: 0s;
  }
}

/* ---------- printing ---------- */
@media print { .fs-root { display: none; } }
`;