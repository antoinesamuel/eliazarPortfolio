import React from "react";
import Image from "next/image"; // Optionnel : à remplacer par <img> si ce n'est pas du Next.js
import { SiGmail } from "react-icons/si";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import avatar from "@/app/favicon.ico";

export function Footer() {
  return (
    <footer className="w-full max-w-5xl h-[35vh] mx-auto px-4 py-8">
      {/* Ligne de séparation supérieure */}
      <hr className="border-t border-gray-700 mb-6 w-full" />
      <div className="flex justify-between items-center p-4">
        {/* Section Gauche : Avatar */}
        <div className="shrink-0">
          <div className="w-18 h-18 rounded-full border border-gray-200 shadow-sm relative overflow-hidden">
            {/* Remplacez '/votre-avatar.png' par le bon chemin dans votre dossier public */}
            <Image
              src={avatar}
              alt="Logo de Layebe Eliazar"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Section Droite : Réseaux Sociaux */}
        <div className="flex gap-6 md:gap-8">
          {/* Bouton Gmail */}
          <a
            href="mailto:votre-email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full border border-gray-700 flex hover:bg-white hover:border-none items-center justify-center text-red-500 shadow-sm group-hover:shadow-md transition-shadow">
              <SiGmail size={20} />
            </div>
            <span className="text-[10px] md:text-xs font-medium text-gray-700">
              Gmail
            </span>
          </a>

          {/* Bouton Github */}
          <a
            href="https://github.com/lorem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-transparent hover:bg-white hover-border-none border border-gray-700 flex items-center justify-center text-gray-800 shadow-sm group-hover:shadow-md transition-shadow">
              <FaGithub size={22} />
            </div>
            <span className="text-[10px] md:text-xs font-medium text-gray-700">
              Github
            </span>
          </a>

          {/* Bouton WhatsApp */}
          <a
            href="https://wa.me/012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center text-green-500 hover:text-white hover:bg-green-500 shadow-sm group-hover:shadow-md transition-shadow">
              <FaWhatsapp size={24} />
            </div>
            <span className="text-[10px] md:text-xs font-medium text-gray-700">
              Whatsapp
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
