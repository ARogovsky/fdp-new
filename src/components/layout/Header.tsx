"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import Button from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

type HeaderProps = {
  onOpenSurvey: () => void;
};

const Header = ({ onOpenSurvey }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 bg-transparent relative z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          {/* Replace text logo with Image component */}
          <Image src="/images/brand/fdp-logo.svg" alt="FDP Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#about" className="text-white hover:text-primary-foreground transition-colors">
            Про нас
          </Link>
          <Link href="/#services" className="text-white hover:text-primary-foreground transition-colors">
            Послуги
          </Link>
          <Link href="/#reviews" className="text-white hover:text-primary-foreground transition-colors">
            Відгуки
          </Link>
          <Button
            onClick={onOpenSurvey}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Оцінити шанс повернення
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-primary/20 py-4">
          <nav className="container flex flex-col space-y-4">
            <Link
              href="/#about"
              className="text-white hover:text-primary-foreground transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Про нас
            </Link>
            <Link
              href="/#services"
              className="text-white hover:text-primary-foreground transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Послуги
            </Link>
            <Link
              href="/#reviews"
              className="text-white hover:text-primary-foreground transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Відгуки
            </Link>
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenSurvey();
              }}
              className="bg-primary hover:bg-primary/90 text-white mx-4"
            >
              Оцінити шанс повернення
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
