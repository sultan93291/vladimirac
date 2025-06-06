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
      "Alina and Sergio Cioca, after 10 years as drivers in express transport, founded SAVA LOGISTIC, merging their expertise into a family business named after its members: Sergio, Alina, Vlad, and Andrei. They started with their own fleet, now including trailers, rigid trucks, Mega trucks, and vans.",
    image: "/testi.png",
  },
  {
    date: "February 2013",
    status: "Expansion",
    title: "SAVA LOGISTIC SPAIN IS BORN",
    description:
      "Alina and Sergio Cioca, after 10 years as drivers in express transport, founded SAVA LOGISTIC, merging their expertise into a family business named after its members: Sergio, Alina, Vlad, and Andrei. They started with their own fleet, now including trailers, rigid trucks, Mega trucks, and vans.",
    image: "/testi1.png",
  },
  {
    date: "August 2018",
    title: "EORI REGISTRATION",
    status: "Crossing borders",
    description:
      "Alina and Sergio Cioca, after 10 years as drivers in express transport, founded SAVA LOGISTIC, merging their expertise into a family business named after its members: Sergio, Alina, Vlad, and Andrei. They started with their own fleet, now including trailers, rigid trucks, Mega trucks, and vans.",
    image: "/testi2.png",
  },
  {
    date: "November 2020",
    title: "SAVA LOGISTIC ROMANIA IS BORN",
    status: "Towards a digital age",
    description:
      "Alina and Sergio Cioca, after 10 years as drivers in express transport, founded SAVA LOGISTIC, merging their expertise into a family business named after its members: Sergio, Alina, Vlad, and Andrei. They started with their own fleet, now including trailers, rigid trucks, Mega trucks, and vans.",
    image: "/testi.png",
  },
  {
    date: "December 2022",
    status: "Awards",
    title: "SAVA LOGISTIC ROMANIA IS BORN",
    description:
      "Alina and Sergio Cioca, after 10 years as drivers in express transport, founded SAVA LOGISTIC, merging their expertise into a family business named after its members: Sergio, Alina, Vlad, and Andrei. They started with their own fleet, now including trailers, rigid trucks, Mega trucks, and vans.",
    image: "/testi1.png",
  },
  {
    date: "January 2022",
    title: "SAVA LOGISTIC ROMANIA IS BORN",
    status: "Extension",
    description:
      "Alina and Sergio Cioca, after 10 years as drivers in express transport, founded SAVA LOGISTIC, merging their expertise into a family business named after its members: Sergio, Alina, Vlad, and Andrei. They started with their own fleet, now including trailers, rigid trucks, Mega trucks, and vans.",
    image: "/testi2.png",
  },
  {
    date: "July 2023",
    status: "Awards",
    title: "SAVA LOGISTIC ROMANIA IS BORN",
    description:
      "Alina and Sergio Cioca, after 10 years as drivers in express transport, founded SAVA LOGISTIC, merging their expertise into a family business named after its members: Sergio, Alina, Vlad, and Andrei. They started with their own fleet, now including trailers, rigid trucks, Mega trucks, and vans.",
    image: "/authbg.png",
  },
];

const TimelineSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const timelineBarRef = useRef<SwiperClass | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const heights = slideRefs.current.map(ref => ref?.offsetHeight || 0);
    setMaxHeight(Math.max(...heights));
  }, [activeIndex]);

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

      {/* Timeline Dots */}
      <div className="relative w-full overflow-hidden px-4 md:px-20">
        <Swiper
          onSwiper={swiper => (timelineBarRef.current = swiper)}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides
          loop
          allowTouchMove={false}
          initialSlide={activeIndex}
        >
          {timelineData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center justify-center cursor-pointer"
                onClick={() => slideTo(index)}
              >
                <p className="text-lg font-semibold mb-1 whitespace-nowrap">
                  {item.date}
                </p>
                <p className="text-sm text-[#BCBCBC] mb-2">{item.status}</p>
                <div
                  className={`h-9 w-9 flex items-center justify-center rounded-full transition-all duration-300 ${
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
        <div className="absolute bottom-4 left-4 md:left-20 right-4 md:right-20 h-[2px] bg-white opacity-20 pointer-events-none" />
      </div>

      {/* Content Swiper */}
      <div className="w-full px-4 md:px-20 mt-12 relative">
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          slidesPerView={1}
          breakpoints={{
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
            <SwiperSlide
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 flex flex-col ${
                index === activeIndex
                  ? "border-2 border-[#C83C7C]"
                  : "border border-white/10"
              } bg-[#3A2B3C]`}
              style={{ minHeight: `${maxHeight}px` }}
            >
              <div
                ref={el => {
                  slideRefs.current[index] = el;
                }}
                className="flex flex-col h-full"
              >
                <div className="relative w-full h-[300px] mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="absolute -bottom-16 left-28 right-28 flex justify-between px-10 z-20">
          <div className="swiper-button-prev text-white text-3xl cursor-pointer">
            <FaArrowLeftLong />
          </div>
          <div className="swiper-button-next text-white text-3xl cursor-pointer">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSlider;
