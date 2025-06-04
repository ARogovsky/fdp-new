"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

type QuestionStep = {
  id: number;
  question: string;
  options: { value: string; label: string }[];
  nextStep?: number;
};

const surveySteps: QuestionStep[] = [
  {
    id: 1,
    question: "Яку суму ви хочете повернути?",
    options: [
      { value: "less_1000", label: "До $1000" },
      { value: "1000_5000", label: "$1000-$5000" },
      { value: "more_5000", label: "Більше $5000" },
    ],
  },
  {
    id: 2,
    question: "Коли ви втратили ваші кошти?",
    options: [
      { value: "less_3months", label: "Менше 3 місяців тому" },
      { value: "3_6months", label: "3-6 місяців тому" },
      { value: "more_6months", label: "Більше 6 місяців тому" },
    ],
  },
  {
    id: 3,
    question: "Чи зв'язувалися ви з брокером щодо повернення коштів?",
    options: [
      { value: "yes", label: "Так, зв'язувався(-лась)" },
      { value: "no", label: "Ні, не зв'язувався(-лась)" },
    ],
  },
  {
    id: 4,
    question: "Чи є у вас докази взаємодії з брокером (листування, скріншоти, тощо)?",
    options: [
      { value: "yes", label: "Так, є докази" },
      { value: "no", label: "Ні, доказів немає" },
    ],
  },
  {
    id: 5,
    question: "Чи використовували ви кредитну картку для здійснення платежів?",
    options: [
      { value: "yes", label: "Так, використовував(-ла)" },
      { value: "no", label: "Ні, інший спосіб оплати" },
    ],
  },
];

type SurveyFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SurveyForm = ({ isOpen, onClose }: SurveyFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  // Listen for the custom event to open the survey
  useEffect(() => {
    const handleOpenSurvey = () => {
      setIsModalOpen(true);
    };

    document.addEventListener('open-survey', handleOpenSurvey);

    return () => {
      document.removeEventListener('open-survey', handleOpenSurvey);
    };
  }, []);

  // Sync with props
  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleOptionSelect = (optionValue: string) => {
    setAnswers({ ...answers, [currentStep]: optionValue });

    if (currentStep < surveySteps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result
      const positiveFactors = [
        answers[1] === "more_5000", // More money to recover
        answers[2] === "less_3months", // Recent fraud
        answers[3] === "yes", // Attempted contact
        answers[4] === "yes", // Has evidence
        answers[5] === "yes", // Used credit card
      ].filter(Boolean).length;

      // Determine result based on positive factors
      let resultText = "";
      let probabilityPercentage = 0;

      if (positiveFactors >= 4) {
        resultText = "Дуже висока ймовірність повернення коштів";
        probabilityPercentage = 90;
      } else if (positiveFactors === 3) {
        resultText = "Висока ймовірність повернення коштів";
        probabilityPercentage = 75;
      } else if (positiveFactors === 2) {
        resultText = "Середня ймовірність повернення коштів";
        probabilityPercentage = 60;
      } else {
        resultText = "Є шанси на повернення коштів";
        probabilityPercentage = 40;
      }

      setResult(`${resultText} (${probabilityPercentage}%)`);
      setIsComplete(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetSurvey = () => {
    setCurrentStep(1);
    setAnswers({});
    setIsComplete(false);
    setResult("");
  };

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  const getCurrentQuestion = () => {
    return surveySteps.find(step => step.id === currentStep);
  };

  const currentQuestion = getCurrentQuestion();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white/5 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden shadow-lg w-full max-w-md mx-4 my-6 md:my-0">
        {isComplete ? (
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Результат аналізу</h3>
            <p className="text-lg text-primary font-medium mb-4">{result}</p>
            <p className="text-gray-300 mb-6">
              Заповніть форму контакту нижче, і наші експерти зв'яжуться з вами для надання безкоштовної консультації
              щодо повернення ваших коштів.
            </p>
            <div className="flex justify-between">
              <Button
                onClick={resetSurvey}
                variant="outline"
                className="border-primary/20 hover:bg-primary/10 text-white"
              >
                Пройти опитування знову
              </Button>
              <Button
                onClick={scrollToContactForm}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Зв'язатися з нами
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  Оцінка шансів повернення коштів
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="h-1 bg-gray-700 w-full mt-4 mb-6 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / surveySteps.length) * 100}%` }}
                />
              </div>
              <h4 className="text-lg font-medium text-white mb-6">
                {currentQuestion?.question}
              </h4>

              <div className="space-y-3">
                {currentQuestion?.options.map((option) => (
                  <button
                    key={option.value}
                    className="w-full text-left p-3 rounded-md border border-primary/20 hover:bg-primary/10 focus:bg-primary/20 text-white transition-colors"
                    onClick={() => handleOptionSelect(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-4 flex justify-between">
              <Button
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="border-primary/20 hover:bg-primary/10 text-white"
              >
                <ChevronLeft className="h-4 w-4 mr-2" /> Назад
              </Button>

              <div className="text-white text-sm">
                Крок {currentStep} з {surveySteps.length}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SurveyForm;
