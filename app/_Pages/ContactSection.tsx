"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // --- ÉTAT DU FORMULAIRE ---
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  // Met à jour l'état à chaque frappe au clavier
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- LOGIQUE (SERVICES) DE PRÉ-REMPLISSAGE ---

  // 1. Service WhatsApp (avec pré-remplissage)
  const sendViaWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.message) return alert("Veuillez écrire un message.");

    const phoneNumber = "+22870126138"; // Remplace par ton vrai numéro
    const text = `Bonjour Eliazar, je suis ${formData.name}.\n\nObjet: ${formData.subject}\n\n${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  // 2. Service Email / Gmail (avec pré-remplissage)
  const sendViaEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.message) return alert("Veuillez écrire un message.");

    const email = "elilayebe@gmail.com"; // Remplace par ton email
    const subject = formData.subject || "Nouveau contact depuis le Portfolio";
    const body = `Bonjour Eliazar,\n\nJe suis ${formData.name}.\n\n${formData.message}`;
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = url;
  };

  // --- ANIMATION GSAP ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen py-32 flex flex-col md:flex-row justify-between items-center px-20 relative z-10 font-nohemi-regular"
      id="Contacts"
    >
      <div className="mb-16 text-center md:text-start flex flex-col md:justify-start">
        <h2 className="text-[6rem] font-black text-white tracking-tighter mb-4">
          Un idée
          <br /> de Projet <span className="text-red-700">?</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-nohemi-regular">
          Remplissez le formulaire et envoyez-le directement via votre canal
          favori.
        </p>
      </div>

      <div
        ref={formRef}
        className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md"
      >
        <form className="flex flex-col gap-6">
          {/* Champ Nom */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Votre Nom
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: John Doe"
              className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#EAC54F] transition-colors placeholder:text-gray-600"
            />
          </div>

          {/* Champ Objet */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Sujet
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ex: Création d'un site web"
              className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#EAC54F] transition-colors placeholder:text-gray-600"
            />
          </div>

          {/* Champ Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Parlez-moi de votre projet..."
              rows={4}
              className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#EAC54F] transition-colors resize-none placeholder:text-gray-600"
            />
          </div>

          {/* Boutons d'envoi interactifs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {/* Bouton Gmail / Email */}
            <button
              type="button"
              onClick={sendViaEmail}
              className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform duration-300 bg-transparent border-none cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-gray-700 flex hover:bg-white hover:border-transparent items-center justify-center text-red-500 shadow-sm group-hover:shadow-md transition-all">
                <SiGmail size={20} />
              </div>
              <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                Gmail
              </span>
            </button>

            {/* Bouton WhatsApp */}
            <button
              type="button"
              onClick={sendViaWhatsApp}
              className="flex flex-col items-center gap-2 group hover:-translate-y-1 transition-transform duration-300 bg-transparent border-none cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center text-green-500 hover:text-black hover:bg-[#25D366] hover:border-transparent shadow-sm group-hover:shadow-md transition-all">
                <FaWhatsapp size={24} />
              </div>
              <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                Whatsapp
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
