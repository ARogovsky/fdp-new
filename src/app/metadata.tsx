// Instructions: Update metadata with correct branding 'FDP', add more SEO relevant keywords, OpenGraph and Twitter card information.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FDP - Повернення коштів від шахраїв | Допомога юристів",
  description: "FDP - професійна юридична допомога у поверненні коштів від шахрайських брокерів та інших фінансових афери. Багаторічний досвід, тисячі задоволених клієнтів.",
  keywords: "повернення коштів, FDP, юристи, шахраї, брокери, фінансові афери, юридична допомога, Одеса, Україна",
  authors: [{ name: "FDP" }],
  openGraph: {
    title: "FDP - Повернення коштів від шахраїв",
    description: "Професійна юридична допомога у поверненні коштів від шахрайських брокерів.",
    url: "https://fdp.co.ua", // Замініть на актуальну URL, коли вона буде
    siteName: "FDP",
    images: [
      {
        url: "/images/brand/fdp-logo.svg", // Шлях до вашого лого для соцмереж
        width: 1200, // Рекомендовані розміри
        height: 630,
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FDP - Повернення коштів від шахраїв",
    description: "Професійна юридична допомога у поверненні коштів.",
    images: ["/images/brand/fdp-logo.svg"], // Шлях до вашого лого
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/brand/fdp-logo.svg",
    apple: "/images/brand/fdp-logo.svg", // Можна використовувати той самий лого
  },
  // manifest: '/site.webmanifest', // Якщо у вас є файл маніфесту
  // verification: { // Якщо потрібно для Google Search Console чи інших сервісів
  //   google: 'your_google_verification_code',
  // },
};
