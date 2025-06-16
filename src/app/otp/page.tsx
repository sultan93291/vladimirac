"use client";
import Authbanner from "@/Components/Reusable/Authbanner";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/Components/ui/input-otp";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Page = () => {
  const [value, setValue] = React.useState("");

  return (
    <section className="min-h-screen">
      <div className="flex flex-col 2xl:flex-row">
        {/* Left banner only on large screens */}
        <div className="hidden 2xl:block 2xl:w-1/2">
          <Authbanner />
        </div>

        {/* Right OTP Form */}
        <div className="w-full 2xl:w-1/2 p-6 sm:p-10">
          <div className="flex justify-end">
            <LanguageSelect />
          </div>

          <div className="w-full max-w-[550px] mx-auto mt-[80px] sm:mt-[150px]">
            <h2 className="font-arial font-bold text-white text-center text-[32px] sm:text-[40px]">
              OTP
            </h2>
            <p className="text-[#BCBCBC] text-center mt-2">
              Enter OTP to continue Login
            </p>
            <p className="text-[#BCBCBC] text-center mt-1">
              Code has been sent to vlad ******99@gmail.com
            </p>

            <div className="py-10 sm:py-14 flex justify-center">
              <InputOTP maxLength={4} value={value} onChange={setValue}>
                <InputOTPGroup className="flex flex-wrap justify-center gap-4 sm:gap-5">
                  {[0, 1, 2, 3].map(i => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      className="border border-[#C83C7C] h-[70px] sm:h-[98px] w-[70px] sm:w-[98px] rounded-[16px] outline-0 text-white text-[22px] sm:text-[25px] flex items-center justify-center"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            <p className="text-center text-[16px] sm:text-[20px] font-lucida text-white">
              Resend code in <span className="text-[#C83C7C]">53 s</span>
            </p>

            <Link href="/reset-password">
              <button
                className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[100px] bg-[#C83C7C] w-full text-[18px] text-[#F9F9F9]
                font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group mt-10"
              >
                Continue
                <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
