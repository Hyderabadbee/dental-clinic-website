import React from 'react'
import DentalCTA from './DentalCTA'
import ClinicExperience from './ClinicExperience'
import AboutSection from './AboutHero'
import PhilosophySection from './Philosophy'
import MeetTheExperts from './Experts'
export const metadata = {
  title: "About Us",
  description:
    "Learn about WE KNOW Dental Clinic, our philosophy, expert dentists, advanced technology and patient-focused dental care.",
};
const page = () => {

  return (
    <div>
      <AboutSection/>
       <PhilosophySection/>
       <MeetTheExperts/>
       <ClinicExperience/>
      <DentalCTA />
    </div>
  )
}

export default page