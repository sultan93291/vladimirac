import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const Aboutbanner = () => {
  return (
    <div>
      <h2 className="text-[32px] lg:text-[64px] font-bold text-white font-arial text-center leading-tight sm:leading-normal">
        Discover Our Newest Blog
      </h2>

      <div className="flex flex-col sm:flex-row justify-between gap-y-10 sm:gap-x-[60px] pt-10 sm:pt-20">
        {/* Image */}
        <div className="relative w-full sm:w-2/5 h-[250px] sm:h-[400px] rounded-[12px] overflow-hidden">
          <Image
            src="/aboutbannerimg.png"
            alt="bannerimg"
            fill
            className="object-cover rounded-[12px]"
          />
        </div>

        {/* Text content */}
        <div className="w-full sm:w-3/5 flex flex-col">
          <h3 className="font-arial text-[20px] sm:text-[32px] font-normal text-white leading-snug">
            Discover the Top Logistics Company in Barcelona That Can Elevate
            Your Business Operations.
          </h3>

          <p className="font-lucida text-[#BCBCBC] text-[16px] sm:text-[20px] font-normal py-4 sm:py-8 leading-relaxed">
            Exploring the Landscape of Logistics Transport Companies in
            Cluj-Napoca: Discover the Perfect Partner to Streamline Your
            Business Operations and Significantly Boost Your Supply Chain
            Efficiency for Greater Success.
          </p>

          <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-12 py-4 sm:py-5">
            {[
              { label: "Category", value: "Environment" },
              { label: "Publication Date", value: "November 7, 2017" },
              { label: "Author", value: "Jane Cooper" },
            ].map(({ label, value }) => (
              <div key={label}>
                <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                  {label}
                </h6>
                <h5 className="text-[18px] sm:text-[20px] font-lucida font-normal text-[#fff]">
                  {value}
                </h5>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 sm:gap-y-0">
            {/* Social icons */}
            <div className="flex gap-x-4">
              <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center cursor-pointer hover:border-pink-400 duration-300 ease-in-out">
                <FaFacebook className="text-white text-[24px]" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center cursor-pointer hover:border-pink-400 duration-300 ease-in-out">
                <FaLinkedin className="text-white text-[24px]" />
              </div>
            </div>

            {/* Discover More button */}
            <Link href="/blog-details" passHref>
              <button
                className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-full sm:w-[280px] text-[18px] text-[#F9F9F9]
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
