import RegulationsCard from "@/Components/Reusable/Regulationscard";
import { LuWeight } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Regulations = () => {
  const [show, setShow] = useState<string | null>(null);

  const toggleCollapse = (country: string) => {
    setShow(prev => (prev === country ? null : country));
  };

  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C]">
      <h3 className="text-[24px] font-lucida font-normal text-white">
        Transport Regulations
      </h3>
      <p className="text-[18px] font-lucida text-[#BCBCBC] font-normal">
        EU & country-specific transport laws and compliance rules
      </p>
      <div className="mt-6 flex gap-x-6 justify-between">
        <RegulationsCard
          title="Driving Time"
          icon={FaRegCalendarAlt}
          points={[
            "Max. 9 hours daily driving (extendable to 10 hours twice weekly)",
            "Max. 56 hours weekly driving",
            "Max. 90 hours fortnightly driving",
            "45 min break required after 4.5 hours driving",
          ]}
        />
        <RegulationsCard
          title="Vehicle Weight"
          icon={LuWeight}
          points={[
            "Standard EU limit: 40 tonnes",
            "Max. 56 hours weekly driving",
            "Max. 90 hours fortnightly driving",
            "45 min break required after 4.5 hours driving",
          ]}
        />
        <RegulationsCard
          title="Customs & Packaging"
          icon={FiPackage}
          points={[
            "Proper documentation for cross-border shipments required",
            "Max. 56 hours weekly driving",
            "Max. 90 hours fortnightly driving",
            "45 min break required after 4.5 hours driving",
          ]}
        />
      </div>
      <div className="py-[60px]">
        <h2 className="text-[20px] font-lucida text-white font-normal">
          EU Logistics Compliance
        </h2>
        <div className="flex flex-col gap-3 mt-6">
          {[
            "Regulation (EC) No 561/2006 - Driver's Hours",
            "Directive 2002/15/EC - Working Time",
            "Regulation (EU) No 165/2014 - Tachographs",
          ].map(country => (
            <div key={country}>
              <div
                className="flex justify-between items-center py-3 border-b border-[#E2E8F0] cursor-pointer"
                onClick={() => toggleCollapse(country)}
              >
                <h4 className="text-white font-lucida text-[20px]">
                  {country}
                </h4>
                {show === country ? (
                  <IoIosArrowUp className="text-white" />
                ) : (
                  <IoIosArrowDown className="text-white" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  show === country
                    ? "max-h-[150px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[18px] font-lucida text-[#BCBCBC] font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, ipsum!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[30px] bg-[#FAA312] rounded-[8px] p-4">
        <p className="text-[16px] font-lucida text-[#13213C] font-normal">
          Disclaimer: This information serves as general guidance only and
          should not be considered legal advice. Regulations change frequently,
          and it's the carrier's responsibility to ensure compliance with
          current laws.
        </p>
      </div>
    </div>
  );
};

export default Regulations;
