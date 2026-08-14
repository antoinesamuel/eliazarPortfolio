import React from "react";
import Image from "next/image"; // Optionnel : à remplacer par <img> si ce n'est pas du Next.js
import { SiGmail } from "react-icons/si";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import logo from "@/public/logo.png";

export function Footer() {
  return (
    <footer className="w-full h-[45vh] overflow-hidden mx-auto px-4 py-8">
      {/* Ligne de séparation supérieure */}
      <hr className="border-t border-gray-700 mb-6 w-full" />
      <div className="flex justify-between items-center p-4">
        {/* Section Gauche : Avatar */}
        <div className="shrink-0">
          <div className="w-24 h-24 rounded-full shadow-sm relative overflow-hidden">
            {/* Remplacez '/votre-avatar.png' par le bon chemin dans votre dossier public */}
            <Image
              src={logo}
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
            href="mailto:elilayebe@gmail.com"
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
            href="https://github.com/Eliazar-Layebe"
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
            href="https://wa.me/+22870126138"
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
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.412397388732!2d1.18141907291441!3d6.2092121267401135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1021584125c0882f%3A0x11e8cba601416cf4!2sESGIS%20Annexe%20Avedji!5e0!3m2!1sfr!2stg!4v1786297098431!5m2!1sfr!2stg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;
