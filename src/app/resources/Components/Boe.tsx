import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";

const boeNotices = [
  {
    title: "Ley 15/2009 - Contract of Land Transport of Goods",
    description: "Defines conditions for goods transport contracts",
    code: "BOE-A-2009-18004",
    date: "2023-09-15",
  },
  {
    title: "Ley 37/2015 - Road Transport Infrastructure Law",
    description: "Regulates road infrastructure and planning",
    code: "BOE-A-2015-12644",
    date: "2023-09-15",
  },
  {
    title: "Real Decreto 2822/1998 - General Vehicle Regulation",
    description: "Technical and safety standards for vehicles",
    code: "BOE-A-1998-24742",
    date: "2023-09-15",
  },
  {
    title: "Ley 6/2024 - [Pending Final Title, recent law]",
    description: "Most recent transport-related legislation",
    code: "BOE-A-2024-XXXX",
    date: "2023-09-15",
  },
  {
    title: "Real Decreto 1737/2010 - Transport Control Document Regulation",
    description: "Regulates control documents in road transport",
    code: "BOE-A-2010-18514",
    date: "2023-09-15",
  },
  {
    title: "Tachograph Use and Driver Records",
    description: "Covers tachograph usage, driver duty hours",
    code: "BOE-A-2012-14628",
    date: "2023-09-15",
  },
];

const Boe = () => {
  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C] text-white">
      <div className="flex items-center gap-2 mb-2 text-[#fff]">
        <div className="p-3 rounded-[8px] flex justify-center items-center bg-[#C83C7C]">
          <HiOutlineNewspaper className="text-[22px]" />
        </div>
        <h3 className="text-[18px] font-normal font-lucida">
          BOE (Boletín Oficial del Estado)
        </h3>
      </div>
      <p className="text-[#BCBCBC] text-[15px] font-lucida mb-4">
        The Spanish Government’s official bulletin for logistics & transport law
      </p>
      <p className="text-[#BCBCBC] text-[14px] font-lucida mb-6">
        The BOE is Spain’s state official gazette that publishes laws,
        regulations, and official announcements. For transport and logistics
        companies, it contains essential information about regulatory changes,
        new requirements, and other legal notices that may affect operations in
        Spanish territory.
      </p>

      <h4 className="text-[16px] text-white font-normal font-lucida mb-4">
        Latest Transport-Related Notices
      </h4>

      <div className="flex flex-col border-l-4 border border-[#C83C7C] rounded-[8px] roder-r-[8px] border-r-[#C83C7C]">
        {boeNotices.map((notice, index) => (
          <div key={index} className=" p-4">
            <div className="flex justify-between">
              <div>
                <h5 className="text-[15px] font-semibold font-lucida">
                  {notice.title}
                </h5>
                <p className="text-[14px] text-[#BCBCBC] font-lucida">
                  {notice.description}
                </p>
                <span className="text-[12px] text-[#BCBCBC] font-lucida">
                  {notice.code}
                </span>
              </div>
              <span className="text-[13px] text-[#BCBCBC] font-lucida">
                {notice.date}
              </span>
            </div>
            <div className="flex gap-2 justify-end">
              <button className="text-white text-sm px-3 py-[5px] rounded-md cursor-pointer bg-[#C83C7C] hover:opacity-90 font-lucida">
                Preview
              </button>
              <button className="text-white text-sm px-3 py-[5px] rounded-md cursor-pointer bg-[#FAA312] hover:opacity-90 font-lucida">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-8">
        <button className="bg-[#C83C7C] rounded-[6px] border border-[#fff] text-white font-lucida px-4 py-3 cursor-pointer hover:bg-transparent hover:border hover:border-[#C83C7C] duration-300 ease-in-out">
          View All BOE Transport Notices
        </button>
      </div>

      <div className="mb-[30px] bg-[#FAA312] rounded-[8px] p-4">
        <p className="text-[16px] font-lucida text-[#13213C] font-normal">
          For the most up-to-date official information, visit the{" "}
          <span className="text-[#C83C7C] cursor-pointer">official BOE website</span>. Our
          summary is provided as a convenience and may not include all relevant
          notices.
        </p>
      </div>
    </div>
  );
};

export default Boe;
