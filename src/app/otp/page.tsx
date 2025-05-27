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
    <section>
      <div className="flex">
        <div className="w-1/2">
          <Authbanner />
        </div>

        <div className="w-1/2 p-10">
          <div className="flex justify-end">
            <LanguageSelect />
          </div>
          <div className="mt-[150px] w-[550px] mx-auto">
            <h2 className="font-arial font-bold text-white text-center pt-[40px] text-[40px]">
              OTP
            </h2>
            <p className="text-[#BCBCBC] text-center">
              Enter Otp to continue Login
            </p>
            <p className="text-[#BCBCBC] text-center">
              Code has been send to vlad ******99@gmail.com
            </p>
            <div className="py-14 flex justify-center">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={value => setValue(value)}
              >
                <InputOTPGroup className="flex gap-x-5">
                  <InputOTPSlot
                    index={0}
                    className="border border-[#C83C7C] h-[98px] w-[98px] rounded-[16px] outline-0 text-white text-[25px] flex items-center justify-center"
                  />
                  <InputOTPSlot
                    index={1}
                    className="border border-[#C83C7C] h-[98px] w-[98px] rounded-[16px] outline-0 text-white text-[25px] flex items-center justify-center"
                  />
                  <InputOTPSlot
                    index={2}
                    className="border border-[#C83C7C] h-[98px] w-[98px] rounded-[16px] outline-0 text-white text-[25px] flex items-center justify-center"
                  />
                  <InputOTPSlot
                    index={3}
                    className="border border-[#C83C7C] h-[98px] w-[98px] rounded-[16px] outline-0 text-white text-[25px] flex items-center justify-center"
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <p className="text-center text-[20px] font-lucida text-white">
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
