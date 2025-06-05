"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Сергій Григоренко",
    position: "Жертва шахрайства • OLX",
    image: "/images/r1.png",
    comment: "Команду FDP не зупинити! Допомогли повернути 5 000 гривень, які я перевів за неіснуючий товар. Їхня команда надала юридичну підтримку, банк повернув гроші. Повністю рекомендую! Безкоштовно та надійно."
  },
  {
    id: 2,
    name: "Ганна Ковальчук",
    position: "Бувший клієнт Binance • Криптовалюти",
    image: "/images/r2.png",
    comment: "Неймовірно задоволений послугами компанії. Біржа Binance стягнула гроші за несанкціоновані транзакції, та дякуючи FDP, я повернула усі гроші. Швидка допомога, ефективна і послідовна робота. Для мене це був справжній шок поривняно зі іншими юридичними компаніями, які тягнуть гроші за послуги!"
  },
  {
    id: 3,
    name: "Ольга Науменко",
    position: "Бувший клієнт Justmarkets • Трейдинг",
    image: "/images/r3.png",
    comment: "Повернули понад 30000 євро — просто неймовірно! Фахівці FDP діяли оперативно, професійно і виграли справу у Justmarkets. Дуже вдячна команді. Після того, як шахраї з Justmarkets намагалися мене обдурити - це було найкраще рішення звернутися до команди професіоналів."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="reviews" className="py-20 relative">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Відгуки
        </h2>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Slider Controls */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/20 border-primary/20 hover:bg-primary/20 text-white"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/20 border-primary/20 hover:bg-primary/20 text-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-background/20 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
                    <div className="flex items-center mb-6">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">
                      "{testimonial.comment}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                className={`w-2 h-2 rounded-full transition-all ${
                  testimonial.id - 1 === activeIndex ? "bg-primary w-6" : "bg-gray-500"
                }`}
                onClick={() => setActiveIndex(testimonial.id - 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
