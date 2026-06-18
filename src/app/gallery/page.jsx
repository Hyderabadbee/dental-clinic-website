import React from 'react'
import MomentsSection from './GalleryHero'
import ClinicGallery from './ClinicGallery'
import FeaturedStories from './Stories'
import VisitExperienceSection from './Experience'
export const metadata = {
  title: "Dental Clinic Gallery",
  description:
    "View our modern dental clinic, treatment rooms, advanced technology and patient care environment.",
};
const page = () => {
  return (
    <div>
        <MomentsSection/>
        <ClinicGallery/>
        <FeaturedStories/>
        <VisitExperienceSection/>
    </div>
  )
}

export default page