"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";

type HeroSectionProps = {
  onOpenSurvey?: () => void;
};

const HeroSection = ({ onOpenSurvey }: HeroSectionProps) => {
  const handleOpenSurvey = () => {
    if (onOpenSurvey) {
      onOpenSurvey();
    } else {
      // Dispatch event to open survey if no direct handler provided
      const event = new CustomEvent('open-survey');
      document.dispatchEvent(event);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            ПОВЕРНІТЬ СВОЇ КОШТИ!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            FDP - це єдина організація в Україні, яка спеціалізується на поверненні коштів із криптовалютної індустрії, бірж, платформ, шахрайських гаманців, банків, карткових операцій та інших фінансових випадків. Наша допомога є абсолютно безкоштовною, адже ми є неприбутковою організацією.
          </p>
          <p className="text-white/80 mb-10">
            Ми напряму співпрацюємо з відділами безпеки у секторі криптовалют, Visa, Mastercard та НБУ, що дозволяє нам ефективно захищати ваші права та вирішувати ваші проблеми.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={scrollToContact}
            >
              Зв'язатися
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary hover:bg-primary/10 text-white">
              <Link href="/#about">
                Дізнатися більше
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
