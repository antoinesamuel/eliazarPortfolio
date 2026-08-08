import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import WavingEmoji from "../_Components/WavingEmoji";
export function ServicesCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  return (
    <div className="">
      <div className="stack">
        <div className="bg-[#082415] text-white grid place-content-center rounded-box p-4">
          {/*The dot */}
          <div className="flex justify-end items-center gap-2">
            <div className="h-5 w-5 bg-white block rounded-full"></div>
          </div>
          {/**Le Corps */}
          <div className="text-start flex flex-col gap-2">
            <h1 className="uppercase text-[5rem] font-nohemi-regular tracking-tight font-black leading-20">
              UI/UX <br /> Design
            </h1>
            <p className="">
              Stage a Lorem ipsum dolor sit amet consectetur. In amet adipiscing
              risus scelerisque vitae pretium porttitor ac.
            </p>
          </div>
        </div>
        <div className="bg-accent text-accent-content grid place-content-center rounded-box">
          2
        </div>
        <div className="bg-secondary text-secondary-content grid place-content-center rounded-box">
          3
        </div>
      </div>
    </div>
  );
}
