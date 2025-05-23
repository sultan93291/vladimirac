import React from "react";
import { IoArrowForward } from "react-icons/io5";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
  buttonLabel?: string;
  active?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  onClick,
  buttonLabel = "Read more",
  active = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`h-full flex flex-col justify-between p-8 rounded-[16px] border border-[#C83C7C] cursor-pointer duration-300 ease-in-out
        ${active ? "bg-[#32203C]" : "hover:bg-[#32203C]"}`}
    >
      <div>
        <div className="bg-[#32203C] w-[56px] h-[56px] rounded-full border-[10px] border-white flex justify-center items-center">
          {icon}
        </div>
        <h3 className="font-arial text-[24px] text-[#FFF] font-normal pt-8 pb-3">
          {title}
        </h3>
        <p className="font-normal font-lucida text-[16px] text-[#BCBCBC] leading-[24px]">
          {description}
        </p>
      </div>

      <div className="flex justify-end mt-[18px]">
        <button
          className={`flex gap-x-3 justify-center items-center px-5 py-3 rounded-[12px] w-[180px] text-[18px] text-[#F9F9F9]
            font-normal cursor-pointer font-lucida duration-300 ease-in-out group
            ${
              active
                ? "bg-[#C83C7C] text-[#000] hover:bg-[#13213C] hover:border hover:border-[#C83C7C]"
                : "bg-[#13213C] hover:bg-[#13213C] border border-[#C83C7C]"
            }`}
        >
          {buttonLabel}
          <IoArrowForward className="group-hover:ml-2 duration-300 ease-in-out" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
