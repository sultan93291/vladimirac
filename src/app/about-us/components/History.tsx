"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const timelineData = [
  {
    date: "August 2010",
    title: "SAVA LOGISTIC ROMANIA IS BORN",
    description:
      "Alina and Sergiu Cioca founded SAVA LOGISTIC to address complex transport needs.",
    image: "/timeline/romania2010.png",
  },
  {
    date: "February 2013",
    title: "SAVA LOGISTIC SPAIN IS BORN",
    description:
      "A new center launched in Spain to manage EU logistics operations.",
    image: "/timeline/spain2013.png",
  },
  {
    date: "EOIR REGISTRATION",
    title: "EOIR REGISTRATION",
    description: "EOIR registration for EU customs and logistics efficiency.",
    image: "/timeline/eoir.png",
  },
  {
    date: "September 2020",
    title: "Terminal Established",
    description: "Investment in terminal infrastructure for increased demand.",
    image: "/timeline/terminal2020.png",
  },
  {
    date: "August 2022",
    title: "TOP 1 AWARDED IN RO",
    description: "Ranked top logistics company in Romania for efficiency.",
    image: "/timeline/top1.png",
  },
  {
    date: "November 2022",
    title: "NEW SHIP ACQUISITION",
    description: "Expansion of maritime capabilities with new ship.",
    image: "/timeline/ship.png",
  },
  {
    date: "September 2023",
    title: "TOP 1 AGAIN",
    description: "Reaffirmed as top logistics provider in Romania.",
    image: "/timeline/top1.png",
  },
];

const TimelineSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#2C2C2C] text-white py-10 relative">
      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-6">
        Our History
      </h2>

      <div className="relative w-full overflow-x-auto px-4 md:px-20 pb-12">
        <div className="flex justify-between items-center w-[1000px] max-w-[95vw] mx-auto relative">
          {/* Horizontal bar centered with icons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-[2px] bg-[#444] z-0" />

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center w-[110px] text-center"
            >
              {/* Date */}
              <p
                className={`text-xs md:text-sm whitespace-nowrap mb-2 transition-all duration-300 ${
                  index === activeIndex ? "text-[#C83C7C]" : "text-white/70"
                }`}
              >
                {item.date}
              </p>

              {/* Icon centered on bar */}
              <div
                className={`text-2xl transition-all duration-300 bg-white rounded-full ${
                  index === activeIndex ? "text-[#C83C7C]" : "text-white/50"
                }`}
              >
                <MdAccessTime />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Swiper slides */}
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        onRealIndexChange={swiper => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="timelineSwiper px-4"
      >
        {timelineData.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`!w-[320px] md:!w-[360px] rounded-xl overflow-hidden transition-all duration-300 ${
              index === activeIndex
                ? "border-2 border-[#C83C7C] bg-[#3A2B3C]"
                : "border border-white/10 bg-[#3A2B3C]"
            }`}
          >
            <div className="relative w-full h-[180px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="swiper-button-prev p-2 rounded-full bg-[#C83C7C]">
          <FaArrowLeft className="text-white" />
        </button>
        <button className="swiper-button-next p-2 rounded-full bg-[#C83C7C]">
          <FaArrowRight className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default TimelineSlider;
