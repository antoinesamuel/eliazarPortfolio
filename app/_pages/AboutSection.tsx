"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation d'apparition au scroll pour chaque bloc
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-white text-black py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-24"
    >
      {/* 1. SECTION À PROPOS & PARCOURS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Colonne Gauche : Bio + Expériences + Formations */}
        <div className="lg:col-span-7 space-y-10 reveal">
          {/* Bouton Retour (Visible sur Desktop selon maquette) */}
          <button className="px-5 py-2 bg-black text-white text-xs rounded-full font-medium transition-transform hover:scale-105">
            ← Retour
          </button>

          {/* Salutation & Présentation */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              Hello 👋
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-sans max-w-xl">
              Passionné par le développement web frontend et le design
              d&apos;interface, je conçois des expériences numériques fluides,
              esthétiques et performantes. Mon objectif est d&apos;allier
              rigueur technique et créativité visuelle pour donner vie à des
              projets uniques.
            </p>
          </div>

          {/* Expériences */}
          <div className="space-y-4 pt-4">
            <h4 className="text-lg font-bold font-nohemi uppercase tracking-tight border-b border-black pb-2">
              Expériences
            </h4>
            <div className="flex justify-between items-start text-sm pt-2">
              <span className="font-semibold w-1/3">2026 à présent</span>
              <p className="text-gray-700 w-2/3">
                Stage & Développeur Front-End — Conception et intégration
                d&apos;applications web modernes et interactives.
              </p>
            </div>
          </div>

          {/* Formations */}
          <div className="space-y-4 pt-4">
            <h4 className="text-lg font-bold font-nohemi uppercase tracking-tight border-b border-black pb-2">
              Formations
            </h4>
            <div className="flex justify-between items-start text-sm pt-2">
              <span className="font-semibold w-1/3">2024 à présent</span>
              <p className="text-gray-700 w-2/3">
                ESGIS — Parcours universitaire en Informatique et Ingénierie
                Logicielle.
              </p>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Portrait Noir & Blanc */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end reveal">
          <div className="relative w-full max-w-[360px] aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
            <Image
              src="/hero-portrait.jpg"
              alt="Layebe Eliazar Portrait"
              fill
              className="object-cover grayscale contrast-125"
            />
          </div>
        </div>
      </div>

      {/* 2. SECTION MES SERVICES */}
      <div className="space-y-12 pt-12 reveal">
        <h2 className="text-4xl md:text-6xl font-bold font-nohemi tracking-tight text-center uppercase">
          Mes Services
        </h2>

        {/* Cartes Post-it / Cartes de Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Carte 1 : Web Développement (Jaune Figma) */}
          <div className="bg-[#F3C649] text-black p-8 rounded-sm shadow-lg relative flex flex-col justify-between min-h-[280px] transform md:-rotate-1 transition-transform hover:rotate-0">
            <div className="w-4 h-4 bg-white rounded-full absolute top-4 right-4 shadow-inner" />
            <h3 className="text-2xl md:text-3xl font-extrabold font-nohemi uppercase leading-tight pt-4">
              Web <br /> Développement
            </h3>
            <p className="text-xs md:text-sm font-medium leading-relaxed pt-6">
              Création de sites web responsive, performants et animés avec
              React, Next.js, Tailwind CSS et GSAP.
            </p>
          </div>

          {/* Carte 2 : UI/UX Design (Vert Sombre Figma) */}
          <div className="bg-[#0D2818] text-white p-8 rounded-sm shadow-lg relative flex flex-col justify-between min-h-[280px] transform md:rotate-2 transition-transform hover:rotate-0">
            <div className="w-4 h-4 bg-white rounded-full absolute top-4 right-4 shadow-inner" />
            <h3 className="text-2xl md:text-3xl font-extrabold font-nohemi uppercase leading-tight pt-4">
              UI/UX <br /> Design
            </h3>
            <p className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed pt-6">
              Conception de maquettes interactives, wireframes et prototypes
              sous Figma centrés sur l&apos;expérience utilisateur.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SECTION OUTILS & TECHNOLOGIES */}
      <div className="space-y-8 pt-12 text-center reveal">
        <h2 className="text-3xl md:text-5xl font-bold font-nohemi tracking-tight uppercase">
          Outils & Technologies
        </h2>

        {/* Badges / Icônes Tech */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
          {/* JavaScript */}
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-sm font-bold text-xl text-yellow-500 hover:scale-110 transition-transform">
            JS
          </div>

          {/* Figma */}
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
            <span className="text-2xl">🎨</span>
          </div>

          {/* React / Next.js */}
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-sm text-cyan-500 hover:scale-110 transition-transform">
            <span className="text-2xl">⚛️</span>
          </div>
        </div>
      </div>
    </section>
  );
}
