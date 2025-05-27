import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const Aboutbanner = () => {
  return (
    <div>
      <h2 className="text-[64px] font-bold text-white font-arial text-center">
        Discover Our Newest Blog
      </h2>
      <div className="flex justify-between gap-x-[60px] pt-20">
        <div className="relative w-2/5 h-[400px]">
          <Image
            src="/aboutbannerimg.png"
            alt="bannerimg"
            fill
            className="object-cover rounded-[12px]"
          />
        </div>

        <div className="w-3/5">
          <h3 className="font-arial text-[32px] font-normal text-white">
            Discover the Top Logistics Company in Barcelona That Can Elevate
            Your Business Operations.
          </h3>
          <p className="font-lucida text-[#BCBCBC] text-[20px] font-normal py-8">
            Exploring the Landscape of Logistics Transport Companies in
            Cluj-Napoca: Discover the Perfect Partner to Streamline Your
            Business Operations and Significantly Boost Your Supply Chain
            Efficiency for Greater Success.
          </p>
          <div className="flex gap-x-12 py-5">
            <div className="">
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Category
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff]">
                Environment
              </h5>
            </div>
            <div className="">
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Publication Date
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff]">
                November 7, 2017
              </h5>
            </div>
            <div className="">
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Author
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff]">
                Jane Cooper
              </h5>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-x-3">
              <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center cursor-pointer hover:border-pink-400 duration-300 ease-in-out">
                <FaFacebook className="text-white text-[24px]" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center cursor-pointer hover:border-pink-400 duration-300 ease-in-out">
                <FaLinkedin className="text-white text-[24px]" />
              </div>
            </div>
            <Link href="/blog-details">
              <button
                className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-[280px] text-[18px] text-[#F9F9F9]
    font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group"
              >
                Discover More
                <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutbanner;
