"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesSection from "../_Components/ServicesSection";
import portrait from "@/public/images/eliazar.jpg";

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
      className="md:hidden w-full bg-white text-black py-8 px-6  max-w-7xl mx-auto space-y-24 font-nohemi-regular"
    >
      {/* 1. SECTION À PROPOS & PARCOURS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Colonne Gauche : Bio + Expériences + Formations */}
        <div className="lg:col-span-7 space-y-10 reveal">
          {/* Salutation & Présentation */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2 text-[1.5rem]">
              Hola 👋
            </h3>
            <p className="text-[2rem] md:text-base text-gray-700 leading-relaxed max-w-xl font-nohemi-regular">
              Passionné par le développement web frontend et le design
              d&apos;interface, je conçois des expériences numériques fluides,
              esthétiques et performantes. Mon objectif est d&apos;allier
              rigueur technique et créativité visuelle pour donner vie à des
              projets uniques.
            </p>
          </div>

          {/* Expériences */}
          <div className="space-y-4">
            <h4 className="font-bold text-[2rem] font-nohemi uppercase tracking-tight border-b border-black pb-2">
              Expériences
            </h4>
            <div className="flex flex-col justify-start items-start pt-2 gap-4">
              <span className="w-1/3 text-[1.5rem]">2026 à présent</span>
              <p className="text-gray-700 w-2/3 text-[1.25rem]">
                Stage & Développeur Front-End — Conception et intégration
                d&apos;applications web modernes et interactives.
              </p>
            </div>
          </div>

          {/* Formations */}
          <div className="space-y-4 pt-4">
            <h4 className=" font-bold text-[2rem] font-nohemi uppercase tracking-tight border-b border-black pb-2">
              Formations
            </h4>
            <div className="flex flex-col justify-start items-start gap-4 pt-2">
              <span className="w-1/3 text-[1.5rem]">2024 à présent</span>
              <p className="text-gray-700 w-2/3 text-[1.25rem]">
                ESGIS — Parcours universitaire en Informatique et Ingénierie
                Logicielle.
              </p>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Portrait Noir & Blanc */}
        <div className="hidden lg:col-span-5 flex justify-center lg:justify-end reveal">
          <div className="relative w-full max-w-[360px] aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
            <Image
              src={portrait}
              alt="Layebe Eliazar Portrait"
              fill
              className="object-cover grayscale contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
