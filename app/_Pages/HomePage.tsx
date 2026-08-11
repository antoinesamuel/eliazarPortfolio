import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import photo from "@/public/Marcus.jpg";
import { profile } from "console";
import PrimaryButton from "@/app/_Components/PrimaryButton";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline d'apparition élégante au chargement
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.fromTo(
        avatarRef.current,
        { scale: 0.8, opacity: 0, rotate: -5 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1.2 },
      )
        .fromTo(
          bubbleRef.current,
          { y: 15, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.6",
        )
        .fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.8",
        )
        .fromTo(
          [subtitleRef.current, descRef.current],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
          "-=0.6",
        )
        .fromTo(
          buttonsRef.current?.children
            ? Array.from(buttonsRef.current.children)
            : [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full text-white overflow-hidden px-6 md:px-16 lg:px-24 py-8 flex flex-col justify-between selection:bg-white selection:text-black font-nohemi-regular"
    >
      {/* ── MAIN HERO CONTENT ── */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 my-auto py-12 z-10">
        {/* LEFT COLUMN : Text & Info */}
        <div className="w-full lg:w-3/5 space-y-6">
          {/* Main Name Heading */}
          <h1
            ref={titleRef}
            className="text-[5rem] md:text-[7rem] lg:text-[10rem] tracking-tight leading-[0.95] font-bold"
          >
            LAYEBE <br />
            Eliazar
          </h1>

          {/* Subtitle / Role */}
          <div
            ref={subtitleRef}
            className="flex items-center space-x-2 text-[2rem] font-bold text-white pt-2"
          >
            <h2>
              Etudiant en <span className="text-red-500">Genie Logiciel</span>
            </h2>
          </div>

          {/* Action Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-wrap items-center gap-3 pt-4"
          >
            {/*
            <PrimaryButton label="Projets" />
            */}
            <PrimaryButton
              label="Mes Projets"
              href="#Contacts"
              className="hidden md:flex"
            />
            <PrimaryButton
              label="Me Contacter"
              href="#Contacts"
              className="md:hidden flex"
            />
            <PrimaryButton
              label="Mon CV"
              href="https://drive.google.com/file/d/1UJBQG5gwlgzFYSxm7wVazmWcxwiwEcMB/view"
            />
          </div>
        </div>

        {/* RIGHT COLUMN : Avatar & Bubble */}
        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center relative min-h-[360px] sm:min-h-[420px]">
          {/* Large Circle Avatar */}
          <div
            ref={avatarRef}
            className=" overflow-hidden border-2 border-zinc-800 shadow-2xl relative bg-sky-300"
          >
            <Image
              src={photo}
              alt="LAYEBE Eliazar Avatar"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500 ease-out"
            />
            {/* Speech Bubble "Hello world" */}
            <div
              ref={bubbleRef}
              className="absolute top-4 left-6 sm:left-12 bg-white text-black text-[1rem] font-light px-5 py-2 rounded-full shadow-lg z-20 flex items-center justify-center"
            >
              Hello world
              {/* Bubble Tail */}
              <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-10 border-t-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
