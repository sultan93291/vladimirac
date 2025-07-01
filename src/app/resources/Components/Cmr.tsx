"use client";

import React, { useState } from "react";
import useFetchData from "@/Hooks/UseFetchData";

interface CmrDataItem {
  type: string;
  overview?: string;
  sender_responsibilities?: string;
  carrier_responsibilities?: string;
}

interface CmrApiResponse {
  title: string;
  sub_title: string;
  description: string;
  data: CmrDataItem[];
}

const tabs = [
  "Overview",
  "Sender Responsibilities",
  "Carrier Responsibilities",
];

const Cmr = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Use your hook here:
  const { data, error, isLoading } = useFetchData<{ data: CmrApiResponse }>(
    "/cmr-convention"
  );

  const cmrData = data?.data || null;

  // Helper to get HTML content string per tab
  const getTabContent = () => {
    if (!cmrData) return "";
    const item = cmrData.data.find(d => {
      if (activeTab === "Overview") return d.type === "overview";
      if (activeTab === "Sender Responsibilities") return d.type === "sender";
      if (activeTab === "Carrier Responsibilities") return d.type === "carrier";
      return false;
    });
    if (!item) return "";
    if (item.overview) return item.overview;
    if (item.sender_responsibilities) return item.sender_responsibilities;
    if (item.carrier_responsibilities) return item.carrier_responsibilities;
    return "";
  };

  if (isLoading)
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

  if (error)
    return (
      <div className="p-10 text-center text-red-500 font-lucida">{error}</div>
    );

  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C] text-white w-full font-lucida">
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
        <div className="p-3 rounded-[8px] flex justify-center items-center bg-[#C83C7C]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold">
            {cmrData?.title || "CMR Convention"}
          </h2>
          <p className="text-sm text-[#BCBCBC]">{cmrData?.sub_title}</p>
        </div>
      </div>

      {cmrData?.description && (
        <div
          className="text-[#DADADA] text-sm mb-6"
          dangerouslySetInnerHTML={{ __html: cmrData.description }}
        />
      )}

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 my-4 border border-[#C83C7C] rounded-[8px] p-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full sm:w-auto px-4 py-2 text-sm font-medium cursor-pointer border border-[#C83C7C] ${
                activeTab === tab
                  ? "bg-[#C83C7C] text-white rounded-[8px]"
                  : "bg-transparent hover:bg-[#C83C7C]/20 rounded-[8px]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="border border-[#C83C7C] rounded-[5px] p-4 text-sm text-[#DADADA]">
          <div dangerouslySetInnerHTML={{ __html: getTabContent() }} />
        </div>
      </div>

      <div className="mt-[30px] bg-[#FAA312] rounded-[8px] p-4">
        <p className="text-[16px] text-[#13213C] font-normal">
          <strong>Note:</strong> While we provide this CMR template for
          convenience, carriers are responsible for ensuring their documentation
          complies with the latest requirements of all countries through which
          goods will transit. Always check with authorities or legal counsel if
          you are uncertain about documentation requirements.
        </p>
      </div>
    </div>
  );
};

export default Cmr;
