"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactNode } from "react";


gsap.registerPlugin(ScrollTrigger);

interface SectorcardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  index?: number; 
}

const Sectorcard: React.FC<SectorcardProps> = ({
  icon,
  title,
  description,
  onClick,
  index = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          x: -1000,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: index * 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="bg-[rgba(200,60,124,0.10)] px-6 py-8 rounded-[12px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
      <div className="flex gap-x-2 items-center">
        <div className="h-10 w-10 rounded-full border border-white flex justify-center items-center">
          {icon}
        </div>
        <h3 className="text-[32px] font-arial font-normal text-[#FFF]">
          {title}
        </h3>
      </div>
      <p className="text-[18px] font-lucida font-normal text-[#BCBCBC] pt-3">
        {description}
      </p>
    </div>
  );
};

export default Sectorcard;