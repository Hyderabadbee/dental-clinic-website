'use client'
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";
const cards = [
  {
    title: "Visit Us",
    icon: <MapPin size={28} />,
    href: "https://maps.google.com/?q=123+Luxury+Ave+Suite+100+Beverly+Hills+CA+90210",
    content: (
      <>
        123 Luxury Ave, Suite 100
        <br />
        Beverly Hills, CA 90210
      </>
    ),
  },
  {
    title: "Call Us",
    icon: <Phone size={28} />,
    href: "tel:+15551234567",
    content: (
      <>
        (555) 123-4567
        <br />
        Mon-Fri: 8am - 6pm
      </>
    ),
  },
  {
    title: "Email Us",
    icon: <Mail size={28} />,
    href: "mailto:smile@weknowdental.com",
    content: <>smile@weknowdental.com</>,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");
const handleChange = (
  e
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const handleSubmit = async (
  e
) => {
  e.preventDefault();

  setError("");
  setSuccess("");

  if (!formData.name.trim()) {
    setError("Please enter your name");
    return;
  }

  if (!formData.phone.trim()) {
    setError("Please enter your phone number");
    return;
  }

  try {
    setLoading(true);

    

    console.log(formData);

    setSuccess("Request submitted successfully!");

    setFormData({
      name: "",
      phone: "",
    });
  } catch (err) {
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#001A2D 0%,#001526 45%,#001220 100%)",
      }}
    >
      {/* ================= Glow ================= */}
      <div className="absolute inset-x-0 -top-80 flex justify-center pointer-events-none">
        <div
          className="
            h-275
            w-350
            rounded-full
          "
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(31,214,223,1) 0%,
                rgba(31,214,223,.55) 3%,
                rgba(31,214,223,.55) 5%,
                rgba(31,214,223,.35) 4%,
                rgba(31,214,223,.15) 8%,
                transparent 100%
              )
            `,
            filter: "blur(35px)",
          }}
        />
      </div>

      {/* ================= Hero ================= */}
      <div className="relative z-10 mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="pt-30 pb-20 md:pt-32 lg:pt-40 text-center">
          <h1
           className="
  text-white
  font-bold
  text-[36px]
  sm:text-[48px]
  md:text-[64px]
  lg:text-[82px]
  leading-[0.95]
  tracking-[-0.03em]
"
          >
            Get In Touch
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-white/80
              text-base
sm:text-lg
md:text-xl
lg:text-[22px]
              leading-relaxed
            "
          >
            Experience the pinnacle of dental care. Contact us today to
            schedule your consultation or inquire about our premium
            services.
          </p>
        </div>
      </div>

      {/* ================= Cards ================= */}
      <div className="relative z-10 px-4">
        <div
          className="
            mx-auto
            max-w-7xl
            grid
            grid-cols-1
gap-5
sm:gap-6
md:grid-cols-3
xl:grid-cols-3
          "
        >
          {cards.map((card) => (
            <a
  key={card.title}
  href={card.href}
  target={card.title === "Visit Us" ? "_blank" : "_self"}
  rel="noopener noreferrer"
  className="
    group
    rounded-[28px]
    bg-[#F5F7F8]
    min-h-55
    sm:min-h-60
    px-5
    sm:px-8
    py-8
    sm:py-12
    lg:py-12
    md:py-10
    text-center
    flex
    flex-col
    items-center
    justify-center
    shadow-[0_12px_40px_rgba(0,0,0,0.10)]
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
    hover:bg-white
    cursor-pointer
  "
>
  <div
    className="
      flex
      h-16
      w-16
      sm:h-18
      sm:w-18
      items-center
      justify-center
      rounded-full
      bg-[#DDE8EC]
      text-[#0D6A97]
      transition-all
      duration-500
      group-hover:scale-110
      group-hover:bg-[#0D6A97]
      group-hover:text-white
    "
  >
    {card.icon}
  </div>

  <h2
    className="
      mt-8
      text-[26px]
      xl:text-[32px]
      md:text-2xl
      font-semibold
      text-[#1C2127]
    "
  >
    {card.title}
  </h2>

  <div
    className="
      mt-4
      text-base
      lg:text-[18px]
      leading-relaxed
      text-[#626B73]
    "
  >
    {card.content}
  </div>
</a>
          ))}
        </div>
      </div>

      {/* ================= Form Section ================= */}
      <div className="relative px-4 py-8 sm:py-20 md:py-28 lg:py-36">
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
            rounded-4xl
            bg-[#F5F5F5]
           px-5
py-8
sm:px-8
sm:py-10
lg:px-14
lg:py-16
md:px-10
md:py-12

            shadow-[0_25px_80px_rgba(0,0,0,0.20)]
          "
        >
          <h2
            className="
              text-center
             text-[28px]
sm:text-[34px]
md:text-[48px]
              font-bold
              text-[#1A2026]
            "
          >
            Request a Callback
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-162.5
              text-center
              text-[#5D6570]
             text-sm
sm:text-base
md:text-[20px]
              leading-relaxed
            "
          >
            Enter these details and you will receive a call from us
            shortly to discuss your premium dental care needs.
          </p>
<form onSubmit={handleSubmit}>
          <div className="mt-8 sm:mt-12 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium text-[#20262D]">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="
                  h-13
sm:h-14.5
                  w-full
                  rounded-xl
                  border
                  border-[#D7DEE4]
                  bg-[#EDF2F5]
                  text-[#6B7280]
                  sm:px-4  px-3
                  outline-none
                  transition-all
                  duration-300
                  focus:border-cyan-500
                "
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-[#20262D]">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="
                  h-13
                  sm:h-14.5
                  w-full
                  rounded-xl
                  border
                  border-[#D7DEE4]
                  bg-[#EDF2F5]
                  text-[#6B7280]
                  sm:px-4 px-3
                  outline-none
                  transition-all
                  duration-300
                  focus:border-cyan-500
                "
              />
            </div>
          </div>
{error && (
  <p className="mt-6 text-center text-red-500">
    {error}
  </p>
)}

{success && (
  <p className="mt-6 text-center text-green-600">
    {success}
  </p>
)}
          <div className="mt-12 flex justify-center">
            <button
            type="submit"
            disabled={loading}
              className="
                h-13
sm:h-15
w-full
sm:w-auto
px-8
sm:px-12
                rounded-full
                
                font-semibold
                text-white
                bg-linear-to-r
                from-[#198FD0]
                to-[#1ED7D8]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_10px_35px_rgba(30,215,216,0.35)]
              "
            >
              {loading ? "Submitting..." : "Request Callback"}
            </button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}