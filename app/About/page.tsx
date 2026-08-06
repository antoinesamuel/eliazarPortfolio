"use client";

import Image from "next/image";
import Link from "next/link";
import profil from "@/app/Icon.svg";
import profileImage from "@/public/images/eliazar.jpg"; // Remplacez par votre image de portrait

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black font-nohemi-regular">
      {/* SECTION 1: EN-TÊTE ET PARCOURS */}
      <section className="p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
        {/* Bouton Retour */}
        <div className="mb-10 md:mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/80 active:scale-95 transition-all"
          >
            <span>←</span> Retour
          </Link>
        </div>

        {/* Grille Bio & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Colonne Gauche : Bio & Parcours */}
          <div className="lg:col-span-7 space-y-10">
            {/* Introduction */}
            <div className="space-y-4">
              <h1 className="text-xl md:text-2xl font-nohemi-medium flex items-center gap-2">
                Hello 👋
              </h1>
              <p className="text-black/80 leading-relaxed text-sm md:text-base max-w-2xl">
                Lorem ipsum dolor sit amet consectetur. In amet adipiscing risus
                scelerisque vitae pretium porttitor ac. Etiam turpis tincidunt
                morbi vel dolor semper egestas metus. Nulla nullam morbi id nunc
                posuere est sed libero. Auctor viverra mauris sed eu ullamcorper
                cras fringilla duis dictumst.
              </p>
            </div>

            {/* Experiences */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold font-nohemi-bold border-b border-black pb-2">
                Experiences
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-2 text-sm">
                <span className="sm:col-span-4 font-bold">2026 a present</span>
                <p className="sm:col-span-8 text-black/80 leading-relaxed">
                  Stage a Lorem ipsum dolor sit amet consectetur. In amet
                  adipiscing risus scelerisque vitae pretium porttitor ac.
                </p>
              </div>
            </div>

            {/* Formations */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold font-nohemi-bold border-b border-black pb-2">
                Formations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-2 text-sm">
                <span className="sm:col-span-4 font-bold">2024 a prsent</span>
                <p className="sm:col-span-8 text-black/80 leading-relaxed">
                  ESGIS a Lorem ipsum dolor sit amet consectetur. In amet
                  adipiscing risus scelerisque vitae pretium porttitor ac.
                </p>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Portrait (Masqué sur mobile si besoin ou empilé) */}
          <div className="lg:col-span-5 relative hidden md:block">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100">
              <Image
                src={profileImage}
                alt="Portrait"
                fill
                className="object-cover grayscale contrast-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: MES SERVICES & OUTILS (Fond Sombre sur Mobile, Fond Clair sur Desktop) */}
      <section className="bg-black text-white md:bg-white md:text-black py-16 px-6 md:px-12 transition-colors">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* MES SERVICES */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-nohemi-bold uppercase text-center tracking-tight mb-12">
              Mes Services
            </h2>

            {/* Cartes Services */}
            <div className="relative flex flex-col md:grid md:grid-cols-2 gap-8 items-center justify-center max-w-3xl mx-auto">
              {/* Carte 1 : Web Developpement */}
              <div className="w-full max-w-xs md:max-w-none bg-[#EAB308] text-black p-6 md:p-8 rounded-2xl relative shadow-lg z-10 md:z-auto">
                <div className="w-3 h-3 bg-white rounded-full absolute top-5 right-5" />
                <h3 className="text-xl md:text-2xl font-bold font-nohemi-bold leading-tight mb-4">
                  Web <br /> Developpement
                </h3>
                <p className="text-xs md:text-sm font-medium leading-relaxed opacity-90">
                  Stage a Lorem ipsum dolor sit amet consectetur. In amet
                  adipiscing risus scelerisque vitae pretium porttitor ac.
                </p>
              </div>

              {/* Carte 2 : UI/UX Design (Inclinée & Superposée sur Mobile) */}
              <div className="w-full max-w-xs md:max-w-none bg-[#0B2B1B] text-white p-6 md:p-8 rounded-2xl relative shadow-xl -mt-10 md:mt-0 ml-6 md:ml-0 -rotate-6 md:rotate-0 transition-transform">
                <div className="w-3 h-3 bg-white rounded-full absolute top-5 right-5" />
                <h3 className="text-xl md:text-2xl font-bold font-nohemi-bold leading-tight mb-4">
                  UI/UX <br /> Design
                </h3>
                <p className="text-xs md:text-sm font-medium leading-relaxed text-gray-300">
                  Stage a Lorem ipsum dolor sit amet consectetur. In amet
                  adipiscing risus scelerisque vitae pretium porttitor ac.
                </p>
              </div>
            </div>
          </div>

          {/* OUTILS & TECHNOLOGIES */}
          <div className="pt-8">
            <h2 className="text-3xl md:text-5xl font-extrabold font-nohemi-bold uppercase text-center tracking-tight mb-8">
              Outils & <br className="md:hidden" /> Technologies
            </h2>

            {/* Badges Outils */}
            <div className="flex items-center justify-center gap-4 md:gap-6">
              {/* JavaScript */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-800 md:bg-gray-100 text-black flex items-center justify-center font-bold text-sm shadow-sm">
                <span className="bg-[#F7DF1E] text-black px-1.5 py-0.5 rounded font-mono font-extrabold text-xs">
                  JS
                </span>
              </div>

              {/* Figma */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-800 md:bg-gray-100 flex items-center justify-center shadow-sm">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 38 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38L19 38V28.5Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
                    fill="#A259FF"
                  />
                </svg>
              </div>

              {/* React */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-800 md:bg-gray-100 flex items-center justify-center shadow-sm">
                <svg
                  className="w-7 h-7 text-[#61DAFB] animate-spin-slow"
                  viewBox="-11.5 -10.23174 23 20.46348"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                  <g stroke="#61DAFB" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
