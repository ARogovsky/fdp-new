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
                  fill
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
              Наша команда експертів спеціалізується на відновленні фінансів, втрачених через
              недобросовісні дії різних фінансових структур. Ми обіцяємо збирання всіх доказів та ведення судових процесів
              проти таких організацій і досягнення успішного розв'язання для більш ніж 90% випадків.
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
                Юридичні розслідування
              </h4>
              <p className="text-gray-300">
                Я зібрав докази та провів незалежне розслідування обставин шахрайства, що допомогло відновити кошти. Професійний підхід експертів та їх знання в області фінансового права допомогли мені отримати максимальну компенсацію.
              </p>
            </div>
            <div className="card-service col-span-1 md:col-span-3">
              <h4 className="text-xl font-semibold text-white mb-4">
                Аналітичні дослідження
              </h4>
              <p className="text-gray-300">
                Ми використовуємо новітні методи аналізу транзакцій та виявлення незаконних дій на фінансовому ринку. Наші експерти ретельно вивчають кожен випадок шахрайства та розробляють індивідуальну стратегію відновлення втрачених коштів.
              </p>
            </div>
            <div className="card-service col-span-1 md:col-span-3">
              <h4 className="text-xl font-semibold text-white mb-4">
                Конфронтація
              </h4>
              <p className="text-gray-300">
                В результаті переговорів з брокером та представлення доказів, ми змогли досягти згоди та повернути клієнту втрачені кошти. Наші юристи вміють вести переговори та досягати компромісу навіть у найскладніших ситуаціях.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
