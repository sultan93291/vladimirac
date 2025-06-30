"use client";

import React, { useState, useMemo } from "react";
import CustomSelect from "@/Components/Reusable/Select";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useFetchData from "@/Hooks/UseFetchData";

interface Country {
  id: number;
  name: string;
  code?: string;
}

interface RestrictionData {
  id: number;
  country_id: number;
  description: string;
  country: Country;
}

const Restrictions = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [show, setShow] = useState<string | null>(null);

  const { data: countryData } = useFetchData<{ data: Country[] }>("/countries");

  const { data: restrictionData, isLoading } = useFetchData<{
    data: RestrictionData[];
  }>("/transport-restriction");

  const countryOptions = useMemo(() => {
    return (
      countryData?.data?.map(country => ({
        label: country.name,
        value: country.name,
      })) || []
    );
  }, [countryData]);

  // Filtered restriction items
  const filteredRestrictions = useMemo(() => {
    if (!restrictionData?.data) return [];
    if (selectedCountry) {
      return restrictionData.data.filter(
        item => item.country.name === selectedCountry
      );
    }
    return restrictionData.data;
  }, [restrictionData, selectedCountry]);

  const toggleCollapse = (country: string) => {
    setShow(prev => (prev === country ? null : country));
  };

  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C] w-full mx-auto">
      <h3 className="text-[22px] sm:text-[24px] font-lucida font-normal text-white">
        Transport Restrictions Across Europe
      </h3>
      <p className="text-[16px] sm:text-[18px] font-lucida text-[#BCBCBC] font-normal leading-relaxed">
        Country-specific driving restrictions, weekend
        <br className="hidden sm:block" /> bans and weight limitations
      </p>

      <div className="mt-4 w-full max-w-full sm:max-w-[300px]">
        <CustomSelect
          options={countryOptions}
          label="All Countries"
          placeholder="All Countries"
          value={selectedCountry}
          onChange={setSelectedCountry}
        />
      </div>

      <div className="flex flex-col gap-3 mt-6">
        {isLoading ? (
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
        ) : filteredRestrictions.length > 0 ? (
          filteredRestrictions.map(({ country, description }) => (
            <div key={country.id} className="w-full">
              <div
                className="flex justify-between items-center py-3 border-b border-[#E2E8F0] cursor-pointer"
                onClick={() => toggleCollapse(country.name)}
              >
                <h4 className="text-white font-lucida text-[18px] sm:text-[20px]">
                  {country.name}
                </h4>
                {show === country.name ? (
                  <IoIosArrowUp className="text-white" />
                ) : (
                  <IoIosArrowDown className="text-white" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  show === country.name
                    ? "max-h-[2000px] opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="text-[16px] sm:text-[17px] font-lucida text-[#BCBCBC] leading-relaxed prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-[#BCBCBC]">No restriction data found.</p>
        )}
      </div>

      <div className="mt-[30px] bg-[#FAA312] rounded-[8px] p-4">
        <p className="text-[14px] sm:text-[16px] font-lucida text-[#13213C] font-normal leading-relaxed">
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
