"use client";

import Image from "next/image";

const items = [
  {
    title: "Welcoming Environment",
    image: "/gallery/room.jpg",
  },
  {
    title: "Modern Treatment Spaces",
    image: "/about/experince1.svg",
  },
  {
    title: "Personal Attention",
    image: "/about/experince2.svg",
  },
];

export default function ClinicExperience() {
  return (
    <section className="relative overflow-hidden bg-[#001D35]">
      <div className="mx-auto max-w-360 px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24 lg:py-28 xl:py-32">

        {/* Heading */}
        <div className="mx-auto max-w-262.5 text-center">
          <p
            className="
              text-[#006191]
              uppercase
              tracking-[0.22em]
              text-[11px]
              sm:text-[12px]
              md:text-[14px]
              font-semibold
            "
          >
            OUR ENVIRONMENT
          </p>

          <h2
            className="w-full
              mt-4
              text-[#D9E8F7]
              font-semibold
             text-2xl

md:text-[48px]
lg:text-[56px]
xl:text-[64px]

leading-[1.08]
tracking-[-0.04em]
            "
          >
            Designed For A Comfortable Dental Experience
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-262.5
              text-[#B7CBDD]
              leading-relaxed

              text-base
              sm:text-lg
              md:text-[20px]
            "
          >
            Every detail of our clinic has been thoughtfully designed to
            reduce anxiety and promote relaxation, merging clinical
            excellence with hospitality.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-14
            sm:mt-16 lg:mt-24
            grid
            gap-8
md:gap-10
            md:grid-cols-3
            

            items-end
          "
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`
                group
                flex
                flex-col
                items-center

                transition-all
                duration-500

                hover:-translate-y-2

                ${
  index === 0
    ? "lg:-translate-y-5"
    : index === 1
    ? "lg:translate-y-10"
    : "lg:-translate-y-5"
}
              `}
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]

                 w-full

aspect-[1.2/1]

lg:aspect-[1.18/1]
xl:aspect-[1.22/1]

                  
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              <h3
                className="
                  mt-6
                  text-center
                  text-[#D9E8F7]
                  text-[22px]
sm:text-[24px]

lg:text-[28px]

font-light
tracking-[-0.02em]
                "
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}