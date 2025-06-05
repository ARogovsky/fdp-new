import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-primary/20 mt-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Image
              src="/images/brand/fdp-logo.svg"
              alt="FDP Logo"
              width={100}
              height={40}
              priority
              className="mb-4"
            />
            <p className="text-gray-300 text-sm">
              Успішне повернення ваших коштів у більш ніж 90% випадків.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Меню</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Послуги
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Відгуки
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Політика конфіденційності
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакти</h3>
            <address className="not-italic space-y-2">
              <p className="text-gray-300 text-sm">
                65007, Україна, Одеса, вул. Старопортофранківська, 107/21
              </p>
              <p className="text-gray-300 text-sm">
                <a
                  href="mailto:admin@fdp.co.ua"
                  className="hover:text-white transition-colors"
                >
                  admin@fdp.co.ua
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-primary/20 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} FDP. Всі права захищені.
          </p>
        </div>

        <div className="mt-8 text-center text-gray-400 text-xs">
          <p>
            Цей сайт не є офіційним представником Visa, Mastercard, OLX, Binance, Justmarkets, НБУ. Ми не пов'язані з цими компаніями. Усі права на бренди належать їхнім власникам.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
