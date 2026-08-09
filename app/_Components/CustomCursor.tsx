"use client";
import Image from "next/image"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import cursorImage from "@/public/Philippos.jpg"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Utilisation de gsap.quickTo pour des performances optimales sans lag
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-15 h-15 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
    >
      {/* Ton icône ou une petite image / point à l'intérieur */}
      <Image 
        src={cursorImage} 
        alt="cursor" 
        fill
        className="object-contain pointer-events-none select-none rounded-full" 
      />
    </div>
  );
}