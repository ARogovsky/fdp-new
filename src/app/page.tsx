"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactForm from "@/components/home/ContactForm";
import SurveyForm from "@/components/home/SurveyForm";

export default function Home() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  const openSurvey = () => setIsSurveyOpen(true);
  const closeSurvey = () => setIsSurveyOpen(false);

  return (
    <>
      <HeroSection onOpenSurvey={openSurvey} />
      <AboutSection onOpenSurvey={openSurvey} />
      <TestimonialsSection />
      <ContactForm />
      <SurveyForm isOpen={isSurveyOpen} onClose={closeSurvey} />
    </>
  );
}
