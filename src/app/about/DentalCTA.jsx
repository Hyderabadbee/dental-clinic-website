export default function DentalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#010A17]">
     {/* Main Teal Glow */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at 18% 50%, rgba(0,178,181,0.45) 0%, rgba(0,178,181,0.28) 22%, rgba(0,178,181,0.12) 40%, transparent 65%)",
    }}
  />

  {/* Dark Overlay */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, #06212D 0%, #02111D 35%, #010A17 65%, #000814 100%)",
    }}
  />

  {/* Right Side Darkening */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, transparent 0%, transparent 45%, rgba(0,8,20,.35) 70%, rgba(0,8,20,.85) 100%)",
    }}
  />

      {/* Content */}
    <div
  className="
    relative z-10
    mx-auto
    flex
    min-h-105
    sm:min-h-115
    md:min-h-125
    lg:min-h-112.5

    max-w-7xl
    flex-col
    items-center
    justify-center

    px-5
    sm:px-6
    md:px-8

    text-center
  "
>
  {/* Heading */}
  <h2
    className="
      max-w-245
      font-semibold
      tracking-[-0.03em]
      text-[#D7E8FA]
      leading-[1.1]

      text-[30px]
      sm:text-[40px]
      md:text-[52px]
      lg:text-[62px]
    "
  >
    Experience Dental Care Made Around You
  </h2>

  {/* Description */}
  <p
    className="
      mt-5
      sm:mt-6
      md:mt-7

      max-w-3xl
      text-[#B7C6D8]
      leading-relaxed

      text-[15px]
      sm:text-[17px]
      md:text-[18px]
      lg:text-[20px]
    "
  >
    Meet our team and begin your journey towards a healthier,
    confident smile.
  </p>

  {/* Buttons */}
  <div
    className="
      mt-8
      sm:mt-10

      flex
      flex-row
      flex-wrap
      justify-center
      gap-3
      sm:gap-4
      md:gap-5
    "
  >
    {/* Primary Button */}
    <button
      className="
        h-12.5
        sm:h-13.5

        px-5
        sm:px-7

        rounded-full

        bg-linear-to-r
        from-[#1692D5]
        to-[#1ECAD3]

        text-[15px]
        sm:text-[16px]
        lg:text-[17px]

        font-semibold
        text-white

        shadow-[0_10px_30px_rgba(30,202,211,0.25)]

        transition-all
        duration-300

        hover:scale-[1.03]
      "
    >
      Book Appointment
    </button>

    {/* Secondary Button */}
    <button
      className="
        h-12.5
        sm:h-13.5

        px-5
        sm:px-7

        rounded-full

        border
        border-[#7E96AF]

        text-[#D7E8FA]
        bg-transparent

        text-[15px]
        sm:text-[16px]
        lg:text-[17px]

        font-medium

        transition-all
        duration-300

        hover:bg-white/5
      "
    >
      Call : +91 87905 25277
    </button>
  </div>
</div>
    </section>
  );
}