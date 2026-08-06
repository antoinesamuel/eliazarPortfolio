"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WavingEmoji() {
  const emojiRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = emojiRef.current;
    if (!el) return;

    // Animation en boucle infinie avec angles et durées aléatoires
    const animateWave = () => {
      gsap.to(el, {
        rotation: gsap.utils.random(-30, 30),
        duration: gsap.utils.random(0.25, 0.5),
        ease: "power1.inOut",
        onComplete: animateWave, // Relance l'animation avec une nouvelle valeur random
      });
    };

    animateWave();

    return () => {
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <span
      ref={emojiRef}
      className="inline-block origin-[70%_70%] select-none cursor-pointer"
    >
      👋
    </span>
  );
}
