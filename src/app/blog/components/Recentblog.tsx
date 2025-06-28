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
import useFetchData from "@/Hooks/UseFetchData";
import Spinner from "@/Components/Shared/Spinner"; // Import your Spinner component

type BlogPost = {
  id: number;
  image: string;
  short_description: string;
  title: string;
};

const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";

const Recentblog = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  const { data, error, isLoading } = useFetchData<{
    success: boolean;
    data: BlogPost[];
  }>("/get_blogs");

  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!data?.data || data.data.length === 0) return;

    const heights = slideRefs.current
      .map(el => (el ? el.getBoundingClientRect().height : 0))
      .filter(h => h > 0);

    if (heights.length > 0) {
      const tallest = Math.max(...heights);
      setMaxHeight(tallest);
    }
  }, [data, isReady]);

  if (isLoading)
    return (
      <div className="flex justify-center py-20 text-white">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 py-20">
        Error loading blogs: {error}
      </div>
    );

  const blogPosts = data?.data || [];

  return (
    <section className="lg:pt-20 pt-8">
      <Container>
        <h2 className="text-[32px] font-arial font-bold text-white lg:mx-[60px] mx-0 lg:text-start text-center">
          Recent Blog
        </h2>

        <div className="relative mt-20 lg:mx-[60px] mx-0">
          {isReady && blogPosts.length > 0 && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={swiper => {
                setTimeout(() => {
                  // @ts-ignore
                  swiper.params.navigation.prevEl = prevRef.current;
                  // @ts-ignore
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              className="!h-full"
            >
              {blogPosts.map((blog, idx) => (
                <SwiperSlide key={blog.id} className="h-full">
                  <Link href="/blog-details">
                    <div
                      className="bg-[#32203C] px-6 py-8 rounded-[12px] h-full flex flex-col justify-between cursor-pointer"
                      ref={el => {
                        slideRefs.current[idx] = el;
                      }}
                      style={{ minHeight: maxHeight || "auto" }}
                    >
                      <div className="relative h-[220px] w-full rounded-[12px] overflow-hidden">
                        <Image
                          src={baseURL + blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover object-center"
                        />
                      </div>

                      <div>
                        <h3 className="font-arial text-[20px] text-white font-normal pt-5">
                          {blog.title}
                        </h3>
                        <p className="font-lucida text-[#BCBCBC] text-[16px] font-normal pt-3 pb-5">
                          {blog.short_description}
                        </p>
                      </div>

                      <div className="lg:flex justify-between items-center mt-auto">
                        <div className="flex gap-x-3">
                          <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center cursor-pointer hover:border-pink-400 duration-300 ease-in-out">
                            <FaFacebook className="text-white text-[24px]" />
                          </div>
                          <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center cursor-pointer hover:border-pink-400 duration-300 ease-in-out">
                            <FaLinkedin className="text-white text-[24px]" />
                          </div>
                        </div>
                        <button
                          className="flex lg:mt-0 mt-5 gap-x-3 justify-center items-center hover:border hover:border-transparent px-5 py-3 rounded-[12px] hover:bg-[#C83C7C] w-[240px] text-[18px] text-[#F9F9F9]
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
            className="absolute lg:top-1/2 lg:-left-20 -top-10 left-0 z-10 transform -translate-y-1/2 border border-white hover:border-0 hover:bg-[#C83C7C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer transition"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="absolute lg:top-1/2 lg:-right-20 -top-10 right-0 z-10 transform -translate-y-1/2 border  border-white hover:border-0 hover:bg-[#C83C7C] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md cursor-pointer transition"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Recentblog;
