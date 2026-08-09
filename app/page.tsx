"use client";

import { useState, useEffect } from "react";
import Loader from "./_Pages/Loader";
import Navigation from "./_Components/Navigation";
import HomePage from "./_Pages/HomePage";
import AboutSection from "./_Pages/AboutSection";
import Footer from "./_Components/Footer";
import ServicesSection from "./_Pages/ServicesSection";
import CustomCursor from "./_Components/CustomCursor"; // <-- Import du curseur
import ContactSection from "./_Pages/ContactSection";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen portfolio-bg cursor-default lg:cursor-none">
      {/* Affichage du curseur personnalisé (masqué sur mobile/tablette pour garder le tactile natif) */}
      <CustomCursor />

      {/* Affichage du loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Contenu de la page principale */}
      <div className="w-full flex flex-col items-center justify-center relative z-10">
        <Navigation />
        <HomePage />
        <AboutSection />
        <ServicesSection />
        <ContactSection/>
        <Footer />
      </div>
    </main>
  );
}