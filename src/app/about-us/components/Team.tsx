"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Vlad Cioca",
    role: "CEO",
    description:
      "Vlad directs SAVA Logistics with a vision to expand exports in Germany, driving growth and excellence in logistics.",
    image: "/manimage.png",
  },
  {
    name: "Vlad Cioca",
    role: "CEO",
    description:
      "Vlad directs SAVA Logistics with a vision to expand exports in Germany, driving growth and excellence in logistics.",
    image: "/manimage2.png",
  },
  {
    name: "Vlad Cioca",
    role: "CEO",
    description:
      "Vlad directs SAVA Logistics with a vision to expand exports in Germany, driving growth and excellence in logistics.",
    image: "/manimage3.png",
  },
  {
    name: "Vlad Cioca",
    role: "CEO",
    description:
      "Vlad directs SAVA Logistics with a vision to expand exports in Germany, driving growth and excellence in logistics.",
    image: "/manimage.png",
  },
  {
    name: "Vlad Cioca",
    role: "CEO",
    description:
      "Vlad directs SAVA Logistics with a vision to expand exports in Germany, driving growth and excellence in logistics.",
    image: "/manimage2.png",
  },
  {
    name: "Vlad Cioca",
    role: "CEO",
    description:
      "Vlad directs SAVA Logistics with a vision to expand exports in Germany, driving growth and excellence in logistics.",
    image: "/manimage.png",
  },
  {
    name: "Vlad Cioca",
    role: "CEO",
    description:
      "Vlad directs SAVA Logistics with a vision to expand exports in Germany, driving growth and excellence in logistics.",
    image: "/manimage.png",
  },
];

const Team = () => {
  return (
    <section className="px-4 relative z-10">
      <h2 className="text-[48px] font-normal text-center font-arial text-white">
        Our Awesome Team
      </h2>
      <p className="text-[24px] font-normal text-[#BCBCBC] font-lucida pt-6 text-center">
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
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="!w-[350px] cursor-pointer">
                <div className="relative w-full h-[278px] rounded-md overflow-hidden">
                  <button
                    className="absolute top-2 left-2 px-6 py-3 text-white font-arial text-sm shadow-md z-10"
                    style={{
                      borderRadius: "8px",
                      background:
                        "linear-gradient(315deg, #C83C7C -148.02%, rgba(13, 13, 13, 0.00) 197.26%)",
                    }}
                  >
                    {member.role}
                  </button>
                  <Image
                    src={member.image}
                    alt="Team member"
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
                      {member.description}
                    </p>
                  </div>
                  <div className="border-t border-t-[#C83C7C] flex">
                    {[1, 2, 3].map((_, idx) => (
                      <div
                        key={idx}
                        className="w-1/3 flex justify-center items-center p-4 border-r last:border-r-0 border-[#C83C7C]"
                      >
                        {idx === 0 && (
                          <RiTwitterXLine className="text-white size-[24px]" />
                        )}
                        {idx === 1 && (
                          <FaLinkedinIn className="text-white size-[24px]" />
                        )}
                        {idx === 2 && (
                          <FaLinkedinIn className="text-white size-[24px]" />
                        )}
                      </div>
                    ))}
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
