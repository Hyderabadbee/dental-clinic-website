import React from 'react'
import ServicesHero from './ServiceHero'
import FindByConcern from './Concern'
import TreatmentsSection from './ServiceSection'
import TreatmentProcessSection from './TreatmentProcess'
import WhyChooseUs from './WhyChooseUs'
export const metadata = {
  title: "Dental Services",
  description:
    "Explore our complete dental services including implants, root canal treatment, braces, cosmetic dentistry and preventive care.",
};
const page = () => {
  return (
    <div>
        <ServicesHero/>
        <FindByConcern/>
        <TreatmentsSection/>
        <TreatmentProcessSection/>
        <WhyChooseUs/>
    </div>
  )
}

export default page