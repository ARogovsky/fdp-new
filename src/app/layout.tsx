"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ClientBody } from "./ClientBody";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// Metadata needs to be moved to a separate file for client components
const siteTitle = "STOP FRAUD - Допомога у поверненні коштів від недобросовісних брокерів";
const siteDescription = "STOP FRAUD має більше 10 років досвіду і тисячі задоволених клієнтів у сфері повернення грошей від недобросовісних брокерів.";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Set metadata on client side
  useEffect(() => {
    document.title = siteTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", siteDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = siteDescription;
      document.head.appendChild(meta);
    }

    // Add favicon link
    let faviconLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (faviconLink) {
      faviconLink.href = "/images/brand/fdp-logo.svg";
    } else {
      faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      faviconLink.href = "/images/brand/fdp-logo.svg";
      faviconLink.type = "image/svg+xml";
      document.head.appendChild(faviconLink);
    }
  }, []);

  const handleOpenSurvey = () => {
    // This handler will dispatch the event to open the survey modal
    const event = new CustomEvent('open-survey');
    document.dispatchEvent(event);
  };

  return (
    <html lang="uk">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header onOpenSurvey={handleOpenSurvey} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <ClientBody />
      </body>
    </html>
  );
}
