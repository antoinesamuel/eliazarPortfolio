"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import profil from "@/app/favicon.ico";
import NavLink from "./NavLink";
import PrimaryButton from "./PrimaryButton";

const navLinks = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "About", href: "#About" },
  { number: "03", label: "Projects", href: "#Projects" },
  { number: "04", label: "Contacts", href: "#Contacts" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    // Évite d'exécuter l'animation au premier montage
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const ctx = gsap.context(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline();
        tl.to(menuRef.current, {
          y: "0%",
          duration: 0.5,
          ease: "power4.inOut",
        });

        // Sélection sécurisée des éléments pour GSAP
        const items = gsap.utils.toArray<HTMLElement>(
          ".mobile-nav-item",
          menuRef.current,
        );
        if (items.length > 0) {
          tl.from(
            items,
            {
              y: 30,
              opacity: 0,
              duration: 0.4,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.2",
          );
        }
      } else {
        document.body.style.overflow = "auto";
        gsap.to(menuRef.current, {
          y: "-100%",
          duration: 0.5,
          ease: "power4.inOut",
        });
      }
    }, menuRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      {/* Header Desktop */}
      <header className="w-full flex items-center justify-between p-6 px-12 mx-auto font-nohemi-regular">
        <div className="avatar avatar-online">
          <div className="avatar avatar-online">
            <div className="w-24 rounded-full">
              <Image src={profil} alt="mini photo d'Eliazar" />
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[2rem] font-nohemi-regular tracking-tight font-light">
          <NavLink href="/" label="Accueil" />
          <NavLink href="#About" label="About" />
          <NavLink href="#Projects" label="Projects" />
          <NavLink href="#Contacts" label="Contacts" />
          <PrimaryButton label="Contacter Moi" className="rounded-full" />
        </nav>
      </header>

      {/* Bouton Trigger Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="md:hidden fixed top-6 right-6 z-50 w-16 h-16 bg-black rounded-full border border-[whitesmoke] flex flex-col items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
      >
        <span
          className={`w-7 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1" : ""
          }`}
        />
        <span
          className={`w-7 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        />
      </button>

      {/* Overlay Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 w-full bg-black text-white flex flex-col justify-between p-8 md:hidden -translate-y-full"
      >
        <div className="flex justify-between items-center pt-2">
          <span className="text-[1.5rem] font-light font-nohemi-regular">
            {"</Eliazar>"}
          </span>
        </div>

        <div className="flex flex-col gap-6 my-auto font-nohemi-regular">
          {navLinks.map((item) => (
            <a
              key={item.number}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="mobile-nav-item flex items-center gap-6 group"
            >
              <div className="w-20 h-20 rounded-full bg-[#3C3737] flex items-center justify-center text-[1rem] text-white group-hover:bg-black group-hover:text-[#3C3737] transition-colors">
                {item.number}
              </div>
              <span className="text-[2.25rem] font-light tracking-tight uppercase transition-colors font-nohemi-medium group-hover:text-white hover:cursor-pointer">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <div className="flex items-center font-nohemi-medium justify-between text-[1.25rem] pt-6 border-t border-[#3C3737] mobile-nav-item">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/antoinesamuel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            Whatsapp
          </a>
        </div>
      </div>
    </>
  );
}
