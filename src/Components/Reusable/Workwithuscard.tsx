import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";

interface WorkWithUsCardProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  location: string;
  buttonText?: string;
}

const Workwithuscard: React.FC<WorkWithUsCardProps> = ({
  backgroundImage,
  title,
  subtitle,
  location,
  buttonText = "View Job",
}) => {
  return (
    <div
      className="
        bg-cover bg-center 
        rounded-lg 
        px-8 py-16
        cursor-pointer
        transition-all duration-300 
        hover:shadow-2xl hover:-translate-y-1
        w-full max-w-[350px] 
        h-auto min-h-[350px]
        sm:px-10 sm:py-20
      "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h4 className="text-[20px] sm:text-[24px] text-white font-arial font-normal">
        {title}
      </h4>
      <p className="text-[14px] sm:text-[16px] text-[#BCBCBC] font-lucida font-normal py-3">
        {subtitle}
      </p>
      <p className="text-[14px] sm:text-[16px] text-[#BCBCBC] font-lucida font-normal flex gap-x-2 items-center">
        <CiLocationOn />
        {location}
      </p>
      <button
        className="
          flex gap-x-3 justify-center mt-6 items-center 
          border border-transparent 
          px-4 sm:px-5 py-2.5 sm:py-3 
          rounded-[12px] bg-[#C83C7C] 
          w-full sm:w-[240px] 
          text-[16px] sm:text-[18px] 
          text-[#F9F9F9] font-normal 
          cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] 
          font-lucida duration-300 ease-in-out group
        "
      >
        {buttonText}
        <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
      </button>
    </div>
  );
};

export default Workwithuscard;
