"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrement du plugin ScrollTrigger côté client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Type TypeScript pour un service
export type ServiceType = {
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
  baseRotation: number;
};

// --- Définition des données des services ---
const services: ServiceType[] = [
  {
    title: "UI/UX Design",
    desc: "Création d'interfaces intuitives et de maquettes interactives centrées sur l'utilisateur.",
    bgColor: "bg-[#EAC54F]", // Jaune
    textColor: "text-black",
    baseRotation: -10, // Penché vers la gauche
  },
  {
    title: "Front-End Dev",
    desc: "Intégration d'interfaces dynamiques et animées avec Next.js, React et Tailwind CSS.",
    bgColor: "bg-[#112A1F]", // Vert foncé
    textColor: "text-white",
    baseRotation: 0, // Droit au centre
  },
  {
    title: "Back-End & Sécurité",
    desc: "Architectures robustes et sécurisées utilisant Spring Boot et les bonnes pratiques SI.",
    bgColor: "bg-zinc-900", // Gris très foncé
    textColor: "text-white",
    baseRotation: 10, // Penché vers la droite
  },
];

// --- Sous-composant pour isoler l'effet Magnétique de chaque carte ---
export function MagneticCard({
  service,
  index,
  cardRef,
}: {
  service: ServiceType;
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const innerRef = useRef<HTMLDivElement>(null);

  // Combinaison des refs pour GSAP et le composant local
  const setRef = (el: HTMLDivElement | null) => {
    innerRef.current = el;
    cardRef(el);
  };

  // Gère le mouvement de la souris sur la carte
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!innerRef.current) return;

    // Récupère les dimensions et la position de la carte
    const rect = innerRef.current.getBoundingClientRect();

    // Calcule le centre de la carte
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calcule la distance de la souris par rapport au centre
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Animation GSAP : La carte bouge en direction de la souris
    gsap.to(innerRef.current, {
      x: distanceX * 0.2, // Force de l'aimant horizontal
      y: distanceY * 0.2, // Force de l'aimant vertical
      rotation: service.baseRotation + distanceX * 0.05, // Léger pivotement supplémentaire
      scale: 1.05, // Met la carte légèrement en avant
      zIndex: 50, // Passe au-dessus des autres
      duration: 0.4,
      ease: "power3.out",
    });
  };

  // Réinitialise la carte quand la souris la quitte
  const handleMouseLeave = () => {
    if (!innerRef.current) return;

    gsap.to(innerRef.current, {
      x: 0,
      y: 0,
      rotation: service.baseRotation, // Retour à la rotation d'origine
      scale: 1,
      zIndex: 1, // Retourne dans le flux normal
      duration: 0.8,
      ease: "elastic.out(1, 0.3)", // Effet de rebond naturel
    });
  };

  return (
    <div
      ref={setRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-92 ${service.bgColor} ${service.textColor} rounded-3xl p-8 shadow-2xl flex flex-col justify-between cursor-pointer border border-white/10 shrink-0 transition-shadow hover:shadow-white/5 font-nohemi-regular`}
    >
      {/* Le "point" noir / punaise style brutaliste */}
      <div className="absolute top-6 right-6 w-5 h-5 bg-black/40 rounded-full shadow-inner backdrop-blur-sm" />
      <div className="mt-8">
        <h3 className="text-[3rem] font-bold uppercase tracking-tight leading-none mb-6">
          {service.title.split(" ").map((word: string, i: number) => (
            <React.Fragment key={i}>
              {word} <br />
            </React.Fragment>
          ))}
        </h3>
      </div>

      <p className="text-[1rem] font-Montserrat opacity-90 leading-relaxed">
        {service.desc}
      </p>
    </div>
  );
}

// --- Composant Principal de la Section ---
export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configuration de l'état initial des cartes (masquées et plus bas)
      gsap.set(cardsRef.current, {
        y: 120,
        opacity: 0,
        rotation: 0,
        scale: 0.8,
      });

      // Animation d'entrée au Scroll
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: (index) => services[index].baseRotation, // Applique la rotation spécifique de chaque carte
        duration: 1,
        stagger: 0.2, // Décale l'apparition de chaque carte de 0.2s
        ease: "back.out(1.4)", // Effet de déploiement légèrement élastique
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // L'animation se déclenche quand le haut de la section atteint 75% de l'écran
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Nettoyage lors du démontage
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen py-32 overflow-hidden flex flex-col items-center justify-center font-sans"
    >
      {/* Conteneur Flex pour aligner les cartes côte à côte (l'éventail) */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 lg:-space-x-12 relative w-full px-4">
        {services.map((service, index) => (
          <MagneticCard
            key={index}
            service={service}
            index={index}
            cardRef={(el) => (cardsRef.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
}