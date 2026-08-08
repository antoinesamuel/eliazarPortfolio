"use client";
import { useState } from "react";
import Loader from "./_pages/Loader";
import HomePage from "./_pages/HomePage";
import Navigation from "./_Components/Navigation";
import AboutSection from "./_pages/AboutSection";
import { Services } from "./_pages/Services";
import { OutilsTechnologies } from "./_pages/OutilsTechnologies";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-white">
      {/* Affichage du loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Contenu de la page principal */}
      <div className="w-full flex flex-col items-center justify-center">
        <Navigation />
        <HomePage />
        <AboutSection />
        <Services />
        <OutilsTechnologies />
      </div>
    </main>
  );
}
