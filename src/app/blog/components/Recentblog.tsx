"use client";

import Container from "@/Components/Shared/Container";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const blogPosts = [1, 2, 3, 4, 5, 6];

const Recentblog = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <section className="pt-20">
      <Container>
        <h2 className="text-[32px] font-arial font-bold text-white">
          Recent Blog
        </h2>

        <div className="relative mt-20 mx-[60px]">
          {isReady && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current as HTMLElement | null,
                nextEl: nextRef.current as HTMLElement | null,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {blogPosts.map((_, index) => (
                <SwiperSlide key={index}>
                  <Link href="/blog-details">
                    <div className="bg-[#32203C] px-6 py-8 rounded-[12px] h-full">
                      <div className="relative h-[220px] w-full">
                        <Image
                          src="/recentblogimage.png"
                          alt="recentblog"
                          fill
                          className="object-cover object-center rounded-[12px]"
                        />
                      </div>
                      <h3 className="font-arial text-[20px] text-white font-normal pt-5">
                        Sava Logistic: Pioneering the Future of Transportation
                        Solutions
                      </h3>
                      <p className="font-lucida text-[#BCBCBC] text-[16px] font-normal pt-3 pb-5">
                        SAVA Logistics: The Best Choice for Your Logistics Needs
                        in Spain?
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-x-3">
                          <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center cursor-pointer hover:border-pink-400 duration-300 ease-in-out">
                            <FaFacebook className="text-white text-[24px]" />
                          </div>
                          <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center cursor-pointer hover:border-pink-400 duration-300 ease-in-out">
                            <FaLinkedin className="text-white text-[24px]" />
                          </div>
                        </div>
                        <button
                          className="flex gap-x-3 justify-center items-center hover:border hover:border-transparent px-5 py-3 rounded-[12px] hover:bg-[#C83C7C] w-[240px] text-[18px] text-[#F9F9F9]
                        font-normal cursor-pointer bg-[#13213C] border border-[#C83C7C] font-lucida duration-300 ease-in-out group"
                        >
                          Discover More
                          <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute top-1/2 -left-20 z-10 transform -translate-y-1/2 border border-white hover:border-0 hover:bg-[#C83C7C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer transition"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 -right-20 z-10 transform -translate-y-1/2 border  border-white hover:border-0 hover:bg-[#C83C7C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer transition"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Recentblog;
