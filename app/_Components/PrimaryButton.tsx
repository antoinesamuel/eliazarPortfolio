"use client";

import { useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import de la flèche

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function PrimaryButton({
  label,
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const iconRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(iconRef.current, {
      x: 4,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(iconRef.current, {
      x: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const content = (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex items-center font-nohemi-regular justify-center gap-3 p-6 bg-[#3C3737] text-white text-[1.25rem] tracking-wide transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-95 cursor-pointer select-none ${className}`}
    >
      <span>{label}</span>
      <div ref={iconRef} className="flex items-center justify-center">
        <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
      </div>
    </div>
  );

  return (
    <a href="/Resume" className="inline-block">
      {content}
    </a>
  );
}
