"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import useFetchData from "@/Hooks/UseFetchData";

type TeamMember = {
  name: string;
  image: string;
  bio: string;
  twitter: string | null;
  instagram: string | null;
  linkedin: string | null;
  position: string;
};

type AboutData = {
  teams: TeamMember[];
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: AboutData;
  code: number;
};

const Team = () => {
  const { data: apiResponse } = useFetchData<ApiResponse>("/get_about");
  const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";

  const teams = apiResponse?.data?.teams;

  if (!teams)
    return <p className="text-white text-center">Loading team data...</p>;

  return (
    <section className="px-4 relative z-10">
      <h2 className="lg:text-[48px] text-[30px] font-normal text-center font-arial text-white">
        Our Awesome Team
      </h2>
      <p className="lg:text-[24px] text-[18px] font-normal text-[#BCBCBC] font-lucida pt-6 text-center">
        We have created a new product that will help designers, developers and
        companies create websites for their startups quickly and easily.
      </p>

      <div className="relative py-[60px] max-w-6xl mx-auto">
        <div className="relative -mx-10 md:-mx-20 lg:-mx-32 overflow-visible">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} custom-bullet"></span>`,
            }}
            modules={[Pagination]}
            className="teamSwiper !overflow-visible px-10 md:px-20 lg:px-32"
          >
            {teams.map((member, index) => (
              <SwiperSlide key={index} className="!w-[350px] cursor-pointer">
                <div className="relative w-full h-[278px] rounded-md overflow-hidden">
                  <button
                    className="absolute top-2 left-2 px-6 py-3 text-white font-arial text-sm shadow-md z-10"
                    style={{
                      borderRadius: "8px",
                      background:
                        "linear-gradient(315deg, #C83C7C -148.02%, rgba(13, 13, 13, 0) 197.26%)",
                    }}
                  >
                    {member.position}
                  </button>
                  <Image
                    src={`${baseURL}${member.image}`}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-[#32203C] border-l border-r border-b border-[#C83C7C] rounded-b-[16px]">
                  <div className="p-3">
                    <h3 className="text-[24px] font-arial font-normal text-white">
                      {member.name}
                    </h3>
                    <p className="text-[14px] font-lucida font-normal text-white pt-2">
                      {member.bio}
                    </p>
                  </div>
                  <div className="border-t border-t-[#C83C7C] flex">
                    {/* Twitter */}
                    <div className="w-1/3 flex justify-center items-center p-4 border-r border-[#C83C7C]">
                      {member.twitter ? (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                          aria-label="Twitter"
                        >
                          <RiTwitterXLine size={24} />
                        </a>
                      ) : (
                        <RiTwitterXLine size={24} className="text-gray-600" />
                      )}
                    </div>

                    <div className="w-1/3 flex justify-center items-center p-4 border-r border-[#C83C7C]">
                      {member.instagram ? (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                          aria-label="Instagram"
                        >
                          <FaInstagram size={24} />
                        </a>
                      ) : (
                        <FaInstagram size={24} className="text-gray-600" />
                      )}
                    </div>

         
                    <div className="w-1/3 flex justify-center items-center p-4 border-r-0 border-[#C83C7C]">
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedinIn size={24} />
                        </a>
                      ) : (
                        <FaLinkedinIn size={24} className="text-gray-600" />
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
