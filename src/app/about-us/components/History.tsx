"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const timelineData = [
  {
    date: "August 2010",
    status: "Beginnings",
    title: "SAVA LOGISTIC ROMANIA IS BORN",
    description:
      "Alina and Sergiu Cioca founded SAVA LOGISTIC to address complex transport needs.",
    image: "/timeline/romania2010.png",
  },
  {
    date: "September 2013",
    status: "Expansion",
    title: "SAVA LOGISTIC SPAIN IS BORN",
    description:
      "A new center launched in Spain to manage EU logistics operations.",
    image: "/timeline/spain2013.png",
  },
  {
    date: "October 2020",
    title: "EOIR REGISTRATION",
    status: "Crossing borders",
    description: "EOIR registration for EU customs and logistics efficiency.",
    image: "/timeline/eoir.png",
  },
  {
    date: "November 2020",
    title: "Terminal Established",
    status: "Towards a digital age",
    description: "Investment in terminal infrastructure for increased demand.",
    image: "/timeline/terminal2020.png",
  },
  {
    date: "December 2022",
    status: "Awards",
    title: "TOP 1 AWARDED IN RO",
    description: "Ranked top logistics company in Romania for efficiency.",
    image: "/timeline/top1.png",
  },
  {
    date: "January 2022",
    title: "NEW SHIP ACQUISITION",
    status: "Extension",
    description: "Expansion of maritime capabilities with new ship.",
    image: "/timeline/ship.png",
  },
  {
    date: "July 2023",
    status: "Awards",
    title: "TOP 1 AGAIN",
    description: "Reaffirmed as top logistics provider in Romania.",
    image: "/timeline/top1.png",
  },
];

const TimelineSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineBarRef = useRef<SwiperClass | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const slideTo = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <section className="text-white py-10 relative">
      <h2 className="text-3xl md:text-4xl text-center font-semibold mb-6">
        Our History
      </h2>

      {/* Timeline bar with date/status/icons */}
      <div className="relative w-full px-4 md:px-20">
        <Swiper
          onSwiper={swiper => (timelineBarRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          allowTouchMove={false}
          className="!overflow-visible z-10"
        >
          {timelineData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => slideTo(index)}
              >
                <p className="text-lg font-semibold whitespace-nowrap mb-1">
                  {item.date}
                </p>
                <p className="text-sm text-[#BCBCBC] mb-2">{item.status}</p>
                <div
                  className={`text-xl h-9 w-9 flex justify-center items-center rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "text-white bg-[#C83C7C]"
                      : "text-[#C83C7C] bg-white"
                  }`}
                >
                  <MdAccessTime />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-2 left-20 right-20 h-[2px] bg-white opacity-20 z-0" />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-[50%] left-4 z-10 swiper-button-prev cursor-pointer !text-white text-2xl md:text-3xl bg-[#C83C7C] p-2 rounded-full hover:bg-[#a02f64] transition">
        <FaArrowLeftLong />
      </div>
      <div className="absolute top-[50%] right-4 z-10 swiper-button-next cursor-pointer !text-white text-2xl md:text-3xl bg-[#C83C7C] p-2 rounded-full hover:bg-[#a02f64] transition">
        <FaArrowRightLong />
      </div>

      {/* Timeline Content Slides */}
      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        onRealIndexChange={swiper => {
          setActiveIndex(swiper.realIndex);
          timelineBarRef.current?.slideTo(swiper.realIndex);
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="timelineSwiper px-4 mt-12"
      >
        {timelineData.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`w-full rounded-xl overflow-hidden transition-all duration-300 ${
              index === activeIndex
                ? "border-2 border-[#C83C7C] bg-[#3A2B3C]"
                : "border border-white/10 bg-[#3A2B3C]"
            }`}
          >
            <div className="relative w-full h-[180px] px-6 py-8">
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
    </section>
  );
};

export default TimelineSlider;
