"use client";
import { useState } from "react";
import Loader from "./_Pages/Loader";
import Navigation from "./_Components/Navigation";
import HomePage from "./_Pages/HomePage";
import AboutSection from "./_Pages/AboutSection";
import Footer from "./_Components/Footer";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen portfolio-bg ">
      {/* Affichage du loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Contenu de la page principal */}
      <div className="w-full flex flex-col items-center justify-center">
        <Navigation />
        <HomePage />
        <AboutSection />
        <Footer />
      </div>
    </main>
  );
}
