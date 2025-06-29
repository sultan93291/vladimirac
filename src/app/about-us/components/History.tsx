"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import useFetchData from "@/Hooks/UseFetchData";

type HistoryItem = {
  type: string;
  date: string;
  image: string;
  description: string;
  title: string;
};

type ApiResponse = {
  data: {
    histories: HistoryItem[];
  };
};

const TimelineSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineBarRef = useRef<SwiperClass | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const { data } = useFetchData<ApiResponse>("/get_about");

  const histories = data?.data?.histories || [];
  const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";

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
          {histories.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center justify-center cursor-pointer relative z-20"
                onClick={() => slideTo(index)}
              >
                <p className="text-sm md:text-base font-semibold mb-1 whitespace-nowrap">
                  {new Date(item.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
                <p className="text-xs text-[#BCBCBC] mb-2">{item.type}</p>
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
        <div className="absolute md:top-18 top-16 left-0 right-0 h-[2px] bg-white opacity-20 z-10" />
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
          {histories.map((item, index) => (
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
                    src={`${baseURL}${item.image}`}
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
