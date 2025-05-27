"use client";

import { useRef } from "react";
import Container from "@/Components/Shared/Container";
import { Recapta } from "@/Components/Shared/Icons";
import Image from "next/image";

const Page = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <section className="pt-20">
      <Container className="w-[800px] mx-auto">
        <h2 className="text-[64px] font-bold text-white font-arial text-center">
          Apply For Your Position
        </h2>
        <form className="pt-[60px] px-[100px]">
          <div className="grid grid-cols-2 gap-8">
            {/* Form Fields */}
            {["First name", "Last name"].map((label, index) => (
              <div key={index}>
                <h4 className="font-nunito text-[18px] font-semibold text-[#fff]">
                  {label}
                </h4>
                <input
                  type="text"
                  placeholder={label}
                  className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-white text-[#787878] w-full rounded-[8px]"
                />
              </div>
            ))}
            <div className="col-span-2">
              <h4 className="font-nunito text-[18px] font-semibold text-[#fff]">
                Email
              </h4>
              <input
                type="email"
                placeholder="yourname@email.com"
                className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-white text-[#787878] w-full rounded-[8px]"
              />
            </div>
            <div className="col-span-2">
              <h4 className="font-nunito text-[18px] font-semibold text-[#fff]">
                Position
              </h4>
              <input
                type="text"
                placeholder="Administration"
                className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-white text-[#787878] w-full rounded-[8px]"
              />
            </div>
          </div>

          {/* Upload Section */}
          <div className="mt-6 text-center">
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <Image
              src="/upload.png"
              alt="upload"
              width={152}
              height={120}
              className="mx-auto cursor-pointer"
              onClick={handleUploadClick}
            />
            <h5 className="font-arial font-medium text-[16px] text-white pt-4 pb-1">
              Upload Resume
            </h5>
            <h6 className="text-[14px] font-lucida text-[#F9F9F9] font-normal">
              Format: .jpeg, .png & pdf · Max file size: 25 MB
            </h6>
          </div>

          {/* I'm not a robot */}
          <div className="py-6">
            <div className="border-2 border-white px-3 py-2 rounded-[2px] w-[300px] mx-auto flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  id="notRobot"
                  className="w-6 h-6 accent-[#C83C7C] cursor-pointer"
                />
                <label
                  htmlFor="notRobot"
                  className="text-white text-[16px] font-lucida cursor-pointer"
                >
                  I’m not a robot
                </label>
              </div>
              <div className="flex flex-col items-center gap-2 justify-center">
                <Recapta />
                <p className="text-[#A6A6A6] font-lucida text-[14px]">
                  Privacy - Terms
                </p>
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div className="flex items-center justify-center gap-x-3">
            <input
              type="checkbox"
              id="agree"
              className="w-5 h-5 rounded-[6px] appearance-none bg-white checked:bg-[#C83C7C] cursor-pointer"
            />
            <label
              htmlFor="agree"
              className="text-white text-[16px] font-lucida cursor-pointer"
            >
              You agree to our friendly privacy policy.
            </label>
          </div>

          {/* Upload Button */}
          <div className="flex justify-center py-10">
            <button
              type="button"
              onClick={handleUploadClick}
              className="w-[180px] py-4 rounded-[12px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out"
            >
              Upload Resume
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Page;
