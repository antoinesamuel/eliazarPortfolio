"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticCard from "./MagneticCard";

// Enregistrement du plugin ScrollTrigger pour les animations au défilement
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const yellowCardRef = useRef<HTMLDivElement>(null);
  const greenCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Se déclenche quand le haut de la section atteint 75% du viewport
        },
      });

      // 1. Apparition du grand titre
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      )
        // 2. Apparition de la carte jaune (fond)
        .fromTo(
          yellowCardRef.current,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.5)" },
          "-=0.4",
        )
        // 3. Apparition de la carte verte (premier plan) avec sa rotation
        .fromTo(
          greenCardRef.current,
          { opacity: 0, scale: 0.9, x: 50, y: 50, rotate: 0 },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotate: -8, // Rotation fidèle à la maquette
            duration: 0.8,
            ease: "back.out(1.2)",
          },
          "-=0.4",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center overflow-hidden font-nohemi-regular"
    >
      {/* TITRE DE LA SECTION */}
      <h2
        ref={titleRef}
        className="text-[5rem] font-black text-white tracking-tighter"
      >
        Mes Services
      </h2>

      {/* CONTENEUR DES CARTES SUPERPOSÉES */}
      <div className="relative w-full flex items-center justify-center">
        {/* Carte de Fond (Jaune) */}
        <MagneticCard />
        {/* Carte Principale (Verte Foncé) */}
      </div>
    </section>
  );
}
