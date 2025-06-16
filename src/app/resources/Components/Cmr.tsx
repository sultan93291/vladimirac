import React, { useState } from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";

const tabs = [
  "Overview",
  "Sender Responsibilities",
  "Carrier Responsibilities",
];

const Cmr = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C] text-white w-full">
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
        <div className="p-3 rounded-[8px] flex justify-center items-center bg-[#C83C7C]">
          <HiOutlineNewspaper className="text-[22px]" />
        </div>
        <div>
          <h2 className="text-xl font-bold">CMR Convention</h2>
          <p className="text-sm text-[#BCBCBC]">
            International agreement for cross-border road transport contracts
          </p>
        </div>
      </div>

      <p className="text-[#DADADA] text-sm mb-6">
        The CMR Convention on the Contract for the International Carriage of
        Goods by Road is an international convention that standardizes the
        conditions governing contracts for the international carriage of goods
        by road. It applies to any contract for the carriage of goods by road in
        vehicles when the place of taking over the goods and the place of
        delivery are situated in different countries.
      </p>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Why CMR is Required:</h3>
        <ul className="list-disc pl-6 text-sm text-[#fff] space-y-1">
          <li>
            Creates a standardized framework for transport contracts across
            different countries
          </li>
          <li>
            Defines transport liability limits and compensation procedures
          </li>
          <li>Provides legal protection for both senders and carriers</li>
          <li>Serves as proof of shipping instructions and receipt of goods</li>
          <li>
            Required documentation for customs clearance in many countries
          </li>
        </ul>
      </div>

      <h4>CMR Document Guide</h4>

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

      <div className="border border-[#C83C7C] rounded-[5px]">
        <div className="p-4 text-sm text-[#DADADA]">
          {activeTab === "Overview" && (
            <div>
              <h4 className="pb-4">
                A CMR consignment note must include the following information:
              </h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Date and place of completion</li>
                <li>Name and address of sender, carrier, and consignee</li>
                <li>Place and date of collection and delivery</li>
                <li>Description of goods and packaging method</li>
                <li>Number of packages and weight</li>
                <li>
                  Costs related to carriage (freight charges, customs duties)
                </li>
                <li>Instructions for customs and other formalities</li>
                <li>Statement that carriage is subject to CMR convention</li>
              </ul>
            </div>
          )}
          {activeTab === "Sender Responsibilities" && (
            <div>
              <h4 className="pb-4">The sender’s responsibilities include:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Accurate consignment note details</li>
                <li>Proper packaging and labeling of goods</li>
                <li>Providing customs and regulatory documents</li>
                <li>Ensuring goods are safe for transport</li>
              </ul>
            </div>
          )}
          {activeTab === "Carrier Responsibilities" && (
            <div>
              <h4 className="pb-4">Carrier’s obligations include:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Safe and timely delivery of goods</li>
                <li>Inspecting the consignment before transit</li>
                <li>Following instructions listed in the CMR note</li>
                <li>Assuming liability in case of loss or damage</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-[30px] bg-[#FAA312] rounded-[8px] p-4">
        <p className="text-[16px] font-lucida text-[#13213C] font-normal">
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
