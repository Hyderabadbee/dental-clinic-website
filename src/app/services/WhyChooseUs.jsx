"use client";

import Image from "next/image";
import {
  ShieldCheck,
  MonitorSmartphone,
  Leaf,
  Clock3,
  WalletCards,
  HandHeart,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Expert Specialists",
    description:
      "Highly trained professionals across all disciplines.",
  },
  {
    icon: MonitorSmartphone,
    title: "State-of-the-Art Tech",
    description:
      "Latest equipment for precise diagnostics and treatment.",
  },
  {
    icon: Leaf,
    title: "Comfortable Environment",
    description:
      "Designed to reduce anxiety and promote relaxation.",
  },
  {
    icon: Clock3,
    title: "Flexible Scheduling",
    description:
      "Appointments that fit your busy lifestyle.",
  },
  {
    icon: WalletCards,
    title: "Transparent Pricing",
    description:
      "Clear costs with no hidden fees.",
  },
  {
    icon: HandHeart,
    title: "Personalized Care",
    description:
      "Treatments tailored to your specific needs and goals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#001D35] overflow-hidden">
      <div
        className="
          mx-auto
          max-w-360

          px-5
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16

          py-16
md:py-20
lg:py-24
xl:py-28
       "
      >
        <div
          className="
            grid
items-center

gap-10
md:gap-14
lg:gap-12
xl:gap-26

lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* IMAGE – full image, natural ratio, scales with the screen */}
          <div className="mx-auto w-full lg:mx-0">
            <div
              className="
                relative
                overflow-hidden
                rounded-[30px]

                mx-auto
                lg:mx-0

                max-w-87.5
                sm:max-w-125
                md:max-w-150

                lg:max-w-170
                xl:max-w-175
                2xl:max-w-180
              "
            >
              {/* No fixed aspect-ratio + no object-cover => nothing gets cropped.
                  Set width/height below to your real image size (e.g. 1200x900). */}
              <Image
                src="/gallery/doctor2.jpg"
                alt="Experienced dental specialists providing advanced dental treatments and personalized oral care"
                width={1200}
                height={900}
                priority
                sizes="(max-width:640px) 350px, (max-width:768px) 500px, (max-width:1024px) 600px, (max-width:1280px) 50vw, 720px"
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* CONTENT */}
<div className="max-w-160

    lg:max-w-170
    xl:max-w-190 mx-auto lg:mx-0">           
   <h2
              className="
              text-center lg:text-left
                text-[#D8E7F5]
                font-semibold
                tracking-[-0.03em]
                leading-[1.1]
text-[30px]
sm:text-[34px]
md:text-[46px]
lg:text-[34px]
xl:text-4xl

                
              "
            >
              Why Choose WE KNOW Dental
            </h2>

            <p
             className="
mt-6
text-[#B7CBDD]
leading-relaxed

text-center
lg:text-left

text-[16px]
md:text-[18px]

max-w-175
"
            >
              We combine expertise with a patient-first approach
              to deliver exceptional care in a comfortable
              environment.
            </p>

            {/* FEATURES */}
            <div
              className="
                mt-8
sm:mt-10


               grid
gap-x-12
gap-y-9

sm:grid-cols-2
              "
            >
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      flex
                      items-start
                      gap-4

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-[#5CE1E6]
                      "
                    >
                      <Icon
                        size={22}
                        className="text-[#00344F]"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <h3
                        className="
                          text-[#D8E7F5]
                          font-semibold

                          text-[16px]
sm:text-[17px]
md:text-[18px]

                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[#B7CBDD]
                          leading-relaxed

                         text-[14px]
sm:text-[15px]
md:text-[16px]
lg:text-[17px]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}