import React from "react";
import Hero from "./Home-Hero";
import ConcernSection from "./Concern-Section";
import ClinicIntroduction from "./Clinic-Intro";
import TestimonialsSection from "./Feedback";
import AppointmentCTA from "./Appointments";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ConcernSection/>
      <ClinicIntroduction/>
      <TestimonialsSection/>
      <AppointmentCTA/>
    </div>
  );
};

export default HomePage;
