"use client";
import Link from "next/link";
import Authbanner from "@/Components/Reusable/Authbanner";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";

const Page = () => {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col 2xl:flex-row">
        {/* Left side banner, only visible on 2xl+ screens */}
        <div className="hidden 2xl:block 2xl:w-1/2">
          <Authbanner />
        </div>

        {/* Right side form */}
        <div className="w-full 2xl:w-1/2 p-6 sm:p-10">
          <div className="flex justify-end">
            <LanguageSelect />
          </div>

          <div className="w-full max-w-[500px] mx-auto pt-[80px] sm:pt-[150px] relative">
            <h2 className="font-bold font-arial text-white text-center text-[32px] sm:text-[40px] relative z-10">
              Reset Password
            </h2>

            <div className="relative z-50 border border-[#C83C7C] rounded-[12px] p-6 mt-8">
              <div className="flex flex-col gap-4 mt-6">
                {/* New Password */}
                <div>
                  <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                    Enter New Password
                  </h4>
                  <input
                    type="password"
                    placeholder="New password"
                    className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                    Re-Enter New Password
                  </h4>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                  />
                </div>

                {/* Submit Button */}
                <Link href="/login-successfull">
                  <button className="w-full py-3 rounded-[12px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out">
                    Reset Password
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
