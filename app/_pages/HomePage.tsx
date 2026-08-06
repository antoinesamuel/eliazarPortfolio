"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Eliazer from "@/public/images/eliazar.jpg";
import PrimaryButton from "../_Components/PrimaryButton";
import WavingEmoji from "../_Components/WavingEmoji";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline d'apparition des éléments du Hero
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-fade", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })
        .from(
          imageRef.current,
          {
            scale: 0.9,
            opacity: 0,
            rotate: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          titleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-white text-black flex flex-col justify-between p-6 md:p-12 relative overflow-hidden font-nohemi-regular"
    >
      {/* Layout Mobile */}
      <div className="md:hidden w-full flex flex-col items-start gap-4 py-6 hero-fade">
        <div className="">
          <p className="text-[1.25rem] flex items-center gap-1 ">
            Hello
            <span className="">
              <WavingEmoji />
            </span>
            {""} i&apos;m
          </p>
          <h1 className="text-[6rem] tracking-tight leading-none font-nohemi-medium font-black">
            LAYEBE <br /> Eliazar
          </h1>
          <p className="text-[1.25rem] font-medium">
            A junior Front dev from Tchad 🇹🇩
          </p>
        </div>
        <div className="">
          <Image
            src={Eliazer}
            alt="Eliazar Layebe"
            className="object-cover inset-0 border border-gray-200"
          />
        </div>
        <div className="">
          <PrimaryButton />
        </div>
      </div>
      {/* Layout Desktop and tablet */}
      <div className="h-screen overflow-hidden hidden md:flex flex-col w-full items-center justify-between gap-12">
        <div className="h-2/3 w-full flex items-center justify-center gap-12 relative">
          {/* Image de profil */}
          <div className="hover-3d">
            {/*<!-- Header -->*/}
            <figure className="">
              <Image
                src={Eliazer}
                alt="Tailwind CSS 3D card"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </figure>
            {/*<!-- content -->*/}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="absolute w-full p-4 z-100 flex items-center justify-between gap-4">
            <div className="w-1/2 flex flex-col md:items-start lg:items-center justify-center gap-4 text-center">
              <h1 className="">
                FrontEnd
                <br />
                Dev
              </h1>
            </div>
            <div className="w-1/2 flex flex-col md:items-end lg:items-center justify-center gap-4 text-center">
              <h1 className="">
                Based in Lomé,
                <br />
                Togo
              </h1>
            </div>
          </div>
        </div>
        <div className="h-1/3 w-full flex flex-col items-center justify-center gap-6">
          <h1
            ref={titleRef}
            className=" md:text-[10rem] lg:text-[15rem] tracking-tight text-center font-nohemi-medium font-light mt-6 z-20 whitespace-nowrap"
          >
            Layebe Eliazar
          </h1>
        </div>
      </div>
    </div>
  );
}
