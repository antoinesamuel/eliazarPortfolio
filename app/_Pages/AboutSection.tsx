"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrement du plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const formationsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du grand titre "A propos"
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // Animation du texte d'introduction
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // Animation des sections Expériences et Formations
      const lists = [experiencesRef.current, formationsRef.current];
      lists.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });

      // Animation des logos de compétences
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.children,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 90%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-6 md:px-16 lg:px-24 font-nohemi-regular selection:bg-black text-white"
      id="About"
    >
      <div className="max-w-7xl mx-auto">
        {/* EN-TÊTE : Titre massif & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 place-items-center">
          <div>
            <h1
              ref={titleRef}
              className="text-[5rem] md:text-[12rem] uppercase leading-[0.85] tracking-tighter hidden"
            >
              A <br /> propos
            </h1>
          </div>

          <div ref={introRef} className="flex flex-col justify-center max-w-xl">
            <h2 className="text-3xl font-bold mb-6">Hola 👋</h2>
            <p className="text-[1.5rem]  text-gray-800 leading-relaxed font-medium">
              Lorem ipsum dolor sit amet consectetur. Ipsum tincidunt morbi
              sapien tristique facilisi at dolor integer in. Feugiat commodo
              tellus nisi egestas eget gravida pellentesque. Quis ipsum tempor
              praesent euismod. Nulla molestie rutrum quisque libero lorem.
              Lorem elit sit dolor eget sed velit nunc libero.
            </p>
          </div>
        </div>

        {/* CONTENU : Expériences & Formations */}
        <div className="space-y-20 flex flex-col justify-start items-start w-full">
          {/* Section Expériences */}
          <div ref={experiencesRef} className="w-full">
            <h3 className="text-4xl md:text-5xl font-black mb-8 border-b-[3px] border-black pb-4 tracking-tight">
              Expériences
            </h3>

            <div className="flex flex-col md:flex-row gap-4 md:gap-16 pt-4">
              <div className="md:w-1/3 shrink-0">
                <span className="text-[1.8rem] font-extrabold block">
                  2026 à présent
                </span>
              </div>
              <div className="md:w-2/3 space-y-3">
                <h4 className="text-[1.8rem] font-bold">Stage a LoremBank</h4>
                <p className="text-gray-700 text-[1.5rem]  leading-relaxed">
                  Conception et développement de l'application DocuMind AI
                  (déployée sur Render). Création d'interfaces interactives
                  avancées utilisant React, Next.js, et intégration d'animations
                  complexes via l'écosystème GSAP (ScrollTrigger, SplitText).
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-16 pt-12">
              <div className="md:w-1/3 shrink-0">
                <span className="text-[1.8rem] font-extrabold block">
                  Juillet 2026
                </span>
              </div>
              <div className="md:w-2/3 space-y-3">
                <h4 className="text-[1.8rem] font-bold">
                  Auditeur SI (Projet Académique)
                </h4>
                <p className="text-gray-700 text-[1.5rem]  leading-relaxed">
                  Évaluation structurelle de l'infrastructure technique
                  universitaire. Analyse des workflows opérationnels, audit des
                  processus, et élaboration d'une soutenance architecturale pour
                  l'optimisation des systèmes d'information.
                </p>
              </div>
            </div>
          </div>

          {/* Section Formations */}
          <div ref={formationsRef} className="w-full">
            <h3 className="text-4xl md:text-5xl font-black mb-8 border-b-[3px] border-black pb-4 tracking-tight">
              Formations
            </h3>

            <div className="flex flex-col md:flex-row gap-4 md:gap-16 pt-4">
              <div className="md:w-1/3 shrink-0">
                <span className="text-[1.8rem] font-extrabold block">
                  2024 à Aujourd'hui
                </span>
              </div>
              <div className="md:w-2/3 space-y-3">
                <h4 className="text-[1.8rem] font-bold">
                  Licence Professionnelle en Génie Logiciel
                </h4>
                <p className="text-gray-700 text-[1.5rem]  leading-relaxed">
                  Cours à l'ESGIS. Étude approfondie de l'architecture
                  logicielle, de la sécurité informatique, de la modélisation de
                  données complexes et du développement back-end avec Java
                  (Spring Boot) et Python (Django).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COMPÉTENCES : Ce que je maitrise */}
        <div className="mt-32 text-start md:text-center">
          <h3 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">
            Mes Outils et Technologies
          </h3>

          <div
            ref={skillsRef}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {/* React */}
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-3xl shadow-sm flex items-center justify-center border border-gray-200">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                height={12}
                width={12}
                className="w-12 md:w-16 h-12 md:h-16"
              />
            </div>
            {/* Angular */}
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-3xl shadow-sm flex items-center justify-center border border-gray-200">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                alt="Angular"
                height={12}
                width={12}
                className="w-12 md:w-16 h-12 md:h-16"
              />
            </div>
            {/* Next.js */}
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-3xl shadow-sm flex items-center justify-center border border-gray-200">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                height={12}
                width={12}
                className="w-12 md:w-16 h-12 md:h-16"
              />
            </div>
            {/* Tailwind CSS */}
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-3xl shadow-sm flex items-center justify-center border border-gray-200">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind"
                height={12}
                width={12}
                className="w-12 md:w-16 h-12 md:h-16"
              />
            </div>
            {/* Spring Boot */}
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-3xl shadow-sm flex items-center justify-center border border-gray-200">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                alt="Spring Boot"
                height={12}
                width={12}
                className="w-12 md:w-16 h-12 md:h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
