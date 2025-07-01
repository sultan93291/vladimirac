"use client";

import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuWeight } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RegulationsCard from "@/Components/Reusable/Regulationscard";
import useFetchData from "@/Hooks/UseFetchData";

const Regulations = () => {
  const [show, setShow] = useState<string | null>(null);

  const { data, isLoading, error } = useFetchData<{
    data: {
      getTransportRegulationData: { id: number; description: string }[];
      compliances: { title: string; description: string }[];
    };
  }>("/transport-regulation");

  const toggleCollapse = (title: string) => {
    setShow(prev => (prev === title ? null : title));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        <style>{`
          .loader {
            border-top-color: #C83C7C;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        Failed to load regulations. Please try again.
      </div>
    );
  }

  const cards = data?.data?.getTransportRegulationData || [];
  const compliances = data?.data?.compliances || [];

  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C] max-w-full mx-auto">
      <h3 className="text-[24px] sm:text-[28px] font-lucida font-normal text-white">
        Transport Regulations
      </h3>
      <p className="text-[16px] sm:text-[18px] font-lucida text-[#BCBCBC] font-normal mt-1 max-w-full">
        EU & country-specific transport laws and compliance rules
      </p>

      {/* Top Cards */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between">
        {cards.map((item, index) => {
          const icons = [FaRegCalendarAlt, LuWeight, FiPackage];
          return (
            <RegulationsCard
              key={item.id}
              title={
                item.description.match(/<h4>(.*?)<\/h4>/)?.[1] ||
                `Card ${index + 1}`
              }
              icon={icons[index] || FaRegCalendarAlt}
              html={item.description}
            />
          );
        })}
      </div>

      {/* Collapsible Compliances */}
      <div className="py-[40px] sm:py-[60px] max-w-full">
        <h2 className="text-[18px] sm:text-[20px] font-lucida text-white font-normal">
          EU Logistics Compliance
        </h2>
        <div className="flex flex-col gap-3 mt-6 max-w-full">
          {compliances.map(comp => (
            <div key={comp.title}>
              <div
                className="flex justify-between items-center py-3 border-b border-[#E2E8F0] cursor-pointer"
                onClick={() => toggleCollapse(comp.title)}
              >
                <h4 className="text-white font-lucida text-[16px] sm:text-[20px]">
                  {comp.title}
                </h4>
                {show === comp.title ? (
                  <IoIosArrowUp className="text-white" />
                ) : (
                  <IoIosArrowDown className="text-white" />
                )}
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  show === comp.title
                    ? "max-h-[1000px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="text-[14px] sm:text-[16px] font-lucida text-[#BCBCBC] font-normal prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: comp.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[30px] bg-[#FAA312] rounded-[8px] p-4 max-w-full">
        <p className="text-[14px] sm:text-[16px] font-lucida text-[#13213C] font-normal">
          Disclaimer: This information serves as general guidance only and
          should not be considered legal advice. Regulations change frequently,
          and its the carriers responsibility to ensure compliance with
          current laws.
        </p>
      </div>
    </div>
  );
};

export default Regulations;
