"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const timelineData = [
  {
    date: "August 2010",
    status: "Beginnings",
    title: "SAVA LOGISTIC ROMANIA IS BORN",
    description:
      "Alina and Sergio Cioca founded SAVA LOGISTIC after a decade of experience in transport.",
    image: "/testi.png",
  },
  {
    date: "February 2013",
    status: "Expansion",
    title: "SAVA LOGISTIC SPAIN IS BORN",
    description:
      "They expanded their services by opening a new branch in Spain, strengthening EU operations.",
    image: "/testi1.png",
  },
  {
    date: "August 2018",
    status: "Crossing borders",
    title: "EORI REGISTRATION",
    description:
      "EORI registration enabled seamless cross-border logistics for SAVA throughout Europe.",
    image: "/testi2.png",
  },
  {
    date: "November 2020",
    status: "Digitization",
    title: "Digital Era Integration",
    description:
      "SAVA digitized all operations, bringing more transparency, efficiency, and customer satisfaction.",
    image: "/testi.png",
  },
  {
    date: "December 2022",
    status: "Awards",
    title: "Best Logistics Provider",
    description:
      "SAVA was awarded 'Best EU Logistics Provider 2022' by the National Freight Union.",
    image: "/testi1.png",
  },
  {
    date: "January 2022",
    status: "Growth",
    title: "New Logistic Hubs",
    description:
      "Established new hubs in France and Germany, enhancing rapid delivery capacity.",
    image: "/testi2.png",
  },
  {
    date: "July 2023",
    status: "Milestone",
    title: "Global Outreach",
    description:
      "Reached new territories including the Middle East and expanded long-haul services.",
    image: "/authbg.png",
  },
];

const TimelineSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineBarRef = useRef<SwiperClass | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const slideTo = (index: number) => {
    swiperRef.current?.slideToLoop(index);
    timelineBarRef.current?.slideToLoop(index);
    setActiveIndex(index);
  };

  return (
    <section className="text-white pt-10 pb-[128px] relative">
      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-6">
        Our History
      </h2>

      {/* Timeline Bar */}
      <div className="relative w-full overflow-hidden px-4 md:px-20 mt-6">
        <Swiper
          onSwiper={swiper => (timelineBarRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          centeredSlides
          spaceBetween={30}
          loop
          allowTouchMove
          initialSlide={activeIndex}
        >
          {timelineData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center justify-center cursor-pointer relative z-20"
                onClick={() => slideTo(index)}
              >
                <p className="text-sm md:text-base font-semibold mb-1 whitespace-nowrap">
                  {item.date}
                </p>
                <p className="text-xs text-[#BCBCBC] mb-2">{item.status}</p>
                <div
                  className={`h-8 w-8 md:h-9 md:w-9 flex items-center justify-center rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#C83C7C] text-white"
                      : "bg-white text-[#C83C7C]"
                  }`}
                >
                  <MdAccessTime />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute md:top-18 top-16 left-0 right-0 h-[2px] bg-white opacity-20  z-10" />
      </div>

      {/* Content Cards */}
      <div className="w-full px-4 md:px-20 mt-12 relative">
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          centeredSlides
          spaceBetween={30}
          loop
          initialSlide={activeIndex}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onRealIndexChange={swiper => {
            const index = swiper.realIndex;
            setActiveIndex(index);
            timelineBarRef.current?.slideToLoop(index);
          }}
          modules={[Navigation]}
        >
          {timelineData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-6 rounded-xl transition-all duration-300 flex flex-col justify-between h-[480px] bg-[#3A2B3C] ${
                  index === activeIndex
                    ? "border-2 border-[#C83C7C]"
                    : "border border-white/10"
                }`}
              >
                <div className="relative w-full h-[220px] mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div className="absolute -bottom-16 left-8 right-8 flex justify-between px-4 md:px-10 z-20">
          <div className="swiper-button-prev text-white text-2xl md:text-3xl cursor-pointer">
            <FaArrowLeftLong />
          </div>
          <div className="swiper-button-next text-white text-2xl md:text-3xl cursor-pointer">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSlider;
