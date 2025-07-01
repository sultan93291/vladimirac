"use client";

import React, { useState } from "react";
import useFetchData from "@/Hooks/UseFetchData";
import { HiOutlineNewspaper } from "react-icons/hi2";

const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";

interface Notice {
  id: number;
  title: string;
  sub_title: string;
  code: string;
  file: string;
  date: string;
}

const Boe = () => {
  const { data, error, isLoading } = useFetchData<{ data: Notice[] }>(
    "/transport-notice"
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState<string>("");

  const openPreview = (file: string, title: string) => {
    setPreviewFile(file);
    setPreviewTitle(title);
    setModalOpen(true);
  };

  const closePreview = () => {
    setModalOpen(false);
    setPreviewFile(null);
    setPreviewTitle("");
  };

  const handleDownload = (file: string, title: string) => {
    const link = document.createElement("a");
    link.href = baseURL + file;
    link.download = title + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <div className="text-center text-red-500 p-4 font-lucida">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C] text-white w-full">
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

      <div className="flex flex-col border-l-4 border border-[#C83C7C] rounded-[8px] border-r-[#C83C7C] w-full">
        {data?.data.map(notice => (
          <div key={notice.id} className="p-4 w-full">
            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h5 className="text-[15px] font-semibold font-lucida">
                  {notice.title}
                </h5>
                <p className="text-[14px] text-[#BCBCBC] font-lucida">
                  {notice.sub_title}
                </p>
                <span className="text-[12px] text-[#BCBCBC] font-lucida">
                  {notice.code}
                </span>
              </div>
              <span className="text-[13px] text-[#BCBCBC] font-lucida">
                {notice.date}
              </span>
            </div>
            <div className="flex gap-2 justify-end flex-wrap mt-2">
              <button
                onClick={() => openPreview(notice.file, notice.title)}
                className="text-white text-sm px-3 py-[5px] rounded-md cursor-pointer bg-[#C83C7C] hover:opacity-90 font-lucida"
              >
                Preview
              </button>
              <button
                onClick={() => handleDownload(notice.file, notice.title)}
                className="text-white text-sm px-3 py-[5px] rounded-md cursor-pointer bg-[#FAA312] hover:opacity-90 font-lucida"
              >
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
          <span className="text-[#C83C7C] cursor-pointer">
            official BOE website
          </span>
          . Our summary is provided as a convenience and may not include all
          relevant notices.
        </p>
      </div>
      {modalOpen && previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#32203C] p-6 rounded-lg w-[90vw] max-w-4xl max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => closePreview()}
              className="absolute top-3 right-3 text-white text-xl font-bold hover:text-red-500"
              aria-label="Close preview modal"
            >
              ×
            </button>
            <h3 className="text-white font-lucida text-lg mb-4">
              {previewTitle}
            </h3>
            <iframe
              src={baseURL + previewFile}
              className="w-full h-[70vh] border border-[#C83C7C] rounded-md"
              title="Document Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Boe;
