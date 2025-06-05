"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type AboutSectionProps = {
  onOpenSurvey?: () => void;
};

const AboutSection = ({ onOpenSurvey }: AboutSectionProps) => {
  const handleOpenSurvey = () => {
    if (onOpenSurvey) {
      onOpenSurvey();
    } else {
      // Dispatch event to open survey if no direct handler provided
      const event = new CustomEvent('open-survey');
      document.dispatchEvent(event);
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Chargeback або повернення коштів за невиконану послугу
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Організація FDP працює у сфері повернення коштів, особливо в криптовалютній сфері. За цей період ми допомогли тисячам клієнтів повернути їхні кошти після шахрайства та інших незаконних дій. Наш багатий досвід, високий професіоналізм та індивідуальний підхід дозволяють нам добиватися успішного результату в більш ніж 90% випадків.
            </p>
            <div className="flex items-center space-x-4 mb-10">
              <div className="relative h-16 w-16 rounded-[50%] overflow-hidden">
                <Image
                  src="/images/nataly.png"
                  alt="Наталія Кокоріна"
                  width={64}
                  height={64}
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold">Наталія Кокоріна</h4>
                <p className="text-gray-400 text-sm">Засновниця та голова ГО "Виявлення та запобігання шахрайству Україніа"</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Повернення коштів при різних видах обману
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Наша команда експертів спеціалізується на поверненні коштів, втрачених через недобросовісні дії різних фінансових структур. Ми збираємо всі докази та ведемо справи проти таких організацій, брокерів, платформ, шахрайських гаманців, банків, карткових операцій та інших фінансових випадків і досягаємо успішного розв'язання для більш ніж 90% випадків.
            </p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={handleOpenSurvey}
            >
              Отримати консультацію
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-service col-span-1 md:col-span-3">
              <h4 className="text-xl font-semibold text-white mb-4">
                Збираемо докази
              </h4>
              <p className="text-gray-300">
                Ми збираємо всі докази та проводимо незалежне розслідування обставин, щоб повернути кошти. Професійний підхід в області фінансового права дозволяє отримати максимальний chargeback.
              </p>
            </div>
            <div className="card-service col-span-1 md:col-span-3">
              <h4 className="text-xl font-semibold text-white mb-4">
                Співпраця з відділами безпеки
              </h4>
              <p className="text-gray-300">
                Ми співпрацюємо з відділами безпеки у фінансових організаціях, щоб отримати максимальний шанс на chargeback. Наші експерти ретельно вивчають кожен випадок шахрайства та розробляють індивідуальну стратегію повернення коштів.
              </p>
            </div>
            <div className="card-service col-span-1 md:col-span-3">
              <h4 className="text-xl font-semibold text-white mb-4">
                Диспути з фінансовими організаціями
              </h4>
              <p className="text-gray-300">
                Ми ведемо переговори з регулюючими органами та представляємо докази, щоб досягти згоди та повернути клієнту втрачені кошти. Наші юристи вміють вести переговори та досягати компромісу навіть у найскладніших ситуаціях.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
