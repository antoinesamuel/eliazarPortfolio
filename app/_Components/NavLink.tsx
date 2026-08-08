"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function NavLink({ href, label, className = "" }: NavLinkProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(containerRef.current, {
      y: "-50%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {
      y: "0%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <Link
      href={href}
      className={`relative inline-block h-12 overflow-hidden select-none cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={containerRef} className="flex flex-col">
        {/* Texte initial */}
        <span className="flex items-center text-base text-black text-[2rem]">
          {label}
        </span>
        {/* Texte du survol */}
        <span className="flex items-center text-base text-gray-500 text-[2rem]">
          {label}
        </span>
      </div>
    </Link>
  );
}
