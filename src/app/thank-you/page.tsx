// Instructions: Create a thank you page for successful form submission.

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";

const ThankYouPage = () => {
  return (
    <div className="py-20 text-center container">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Дякуємо за ваше звернення!
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Наші спеціалісти зв'яжуться з вами найближчим часом.
      </p>
      <Button asChild className="bg-primary hover:bg-primary/90 text-white">
        <Link href="/">Повернутися на головну</Link>
      </Button>
    </div>
  );
};

export default ThankYouPage;
