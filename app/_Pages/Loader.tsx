"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterObj = useRef({ value: 1 });
  const [formattedCount, setFormattedCount] = useState("01%");

  useEffect(() => {
    // Verrouiller le scroll pendant le chargement
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        if (onComplete) onComplete();
      },
    });

    // 1. Compteur de 01% à 100%
    tl.to(counterObj.current, {
      value: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.floor(counterObj.current.value);
        // Formatage avec zéro initial (ex: 01%, 09%, 85%, 100%)
        const formatted = val < 10 ? `0${val}%` : `${val}%`;
        setFormattedCount(formatted);
      },
    })
      // 2. Légère animation de fondu/décalage sur le texte du pourcentage
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
      })
      // 3. Glissement du rideau blanc vers le haut pour révéler la page
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white select-none pointer-events-none"
    >
      <div
        ref={textRef}
        className="text-4xl md:text-6xl font-medium tracking-tight font-sans"
      >
        {formattedCount}
      </div>
    </div>
  );
}
