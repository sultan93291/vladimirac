import CustomSelect from "@/Components/Reusable/Select";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Monthoption = [
  { label: "Spain", value: "Spain" },
  { label: "Romania", value: "Romania" },
  { label: "Albenia", value: "Albenia" },
  { label: "England", value: "England" },
  { label: "Australia", value: "Australia" },
];

const Restrictions = () => {
  const [month, setMonth] = useState("");
  const [show, setShow] = useState<string | null>(null);

  const toggleCollapse = (country: string) => {
    setShow(prev => (prev === country ? null : country));
  };

  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C]">
      <h3 className="text-[24px] font-lucida font-normal text-white">
        Transport Restrictions Across Europe
      </h3>
      <p className="text-[18px] font-lucida text-[#BCBCBC] font-normal">
        Country-specific driving restrictions, weekend
        <br /> bans and weight limitations
      </p>

      <div className="mt-4">
        <CustomSelect
          options={Monthoption}
          label="All Countries"
          placeholder="All Countries"
          value={month}
          onChange={setMonth}
        />
      </div>

      <div className="flex flex-col gap-3 mt-6">
        {["Germany", "France", "Italy", "spain", "Romania"].map(country => (
          <div key={country}>
            <div
              className="flex justify-between items-center py-3 border-b border-[#E2E8F0] cursor-pointer"
              onClick={() => toggleCollapse(country)}
            >
              <h4 className="text-white font-lucida text-[20px]">{country}</h4>
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
      <div className="mt-[30px] bg-[#FAA312] rounded-[8px] p-4">
        <p className="text-[16px] font-lucida text-[#13213C] font-normal">
          Note: Restrictions may change without notice. This information is
          provided as guidance only and may not reflect the most current
          regulations. Always verify with local authorities before planning your
          route.
        </p>
      </div>
    </div>
  );
};

export default Restrictions;
