"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Développement",
    description:
      "Stage a Lorem ipsum dolor sit amet consectetur. In amet adipiscing risus scelerisque vitae pretium porttitor ac.",
    bgColor: "bg-[#F4C448]", // Jaune de votre maquette
    textColor: "text-black",
    dotColor: "bg-white",
    rotation: "-rotate-2", // Inclinaison mobile
    zIndex: "z-10",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Stage a Lorem ipsum dolor sit amet consectetur. In amet adipiscing risus scelerisque vitae pretium porttitor ac.",
    bgColor: "bg-[#092B19]", // Vert foncé de votre maquette
    textColor: "text-white",
    dotColor: "bg-white",
    rotation: "rotate-6", // Inclinaison mobile superposée
    zIndex: "z-20",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-16 px-6 bg-white dark:bg-black transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Titre */}
        <h2 className="text-4xl md:text-6xl font-black text-center mb-12 tracking-tight text-black dark:text-white font-nohemi-bold">
          Mes Services
        </h2>

        {/* ================= 💻 DESKTOP & TABLETTE (Fixe & Alignations) ================= */}
        <div className="hidden md:flex flex-row justify-center items-stretch gap-8 w-full max-w-4xl">
          {services.map((service) => (
            <div
              key={`desktop-${service.id}`}
              className={`relative w-1/2 p-8 ${service.bgColor} ${service.textColor} shadow-md flex flex-col justify-between min-h-[380px]`}
            >
              {/* Pastille en haut à droite */}
              <div
                className={`absolute top-6 right-6 w-5 h-5 rounded-full ${service.dotColor}`}
              />

              <div className="mt-8">
                <h3 className="text-3xl font-extrabold mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-base opacity-90 leading-relaxed font-nohemi-regular">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= 📱 MOBILE UNIQEMENT (Draggable & Superposé) ================= */}
        <div className="relative w-full h-[460px] flex items-center justify-center md:hidden mt-4 overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={`mobile-${service.id}`}
              drag
              dragConstraints={{
                left: -150,
                right: 150,
                top: -150,
                bottom: 150,
              }}
              dragElastic={0.1}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              className={`absolute w-[290px] p-6 ${service.bgColor} ${service.textColor} shadow-2xl cursor-grab select-none ${service.rotation} ${service.zIndex}`}
              style={{
                top: index === 0 ? "30px" : "60px",
              }}
            >
              {/* Pastille en haut à droite */}
              <div
                className={`absolute top-5 right-5 w-4 h-4 rounded-full ${service.dotColor}`}
              />

              <div className="mt-6">
                <h3 className="text-2xl font-black mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed font-nohemi-regular">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
