"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ContactForm from "@/components/home/ContactForm";
import SurveyForm from "@/components/home/SurveyForm";

const HeroSection = dynamic(() => import("@/components/home/HeroSection"));
const AboutSection = dynamic(() => import("@/components/home/AboutSection"));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"));

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
