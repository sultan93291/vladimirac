"use client";

import Authbanner from "@/Components/Reusable/Authbanner";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/Components/ui/input-otp";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import useAxios from "@/Hooks/UseAxios";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const axiosInstance = useAxios();

  const email = searchParams.get("email") || "";

  const maskedEmail = email
    ? email.replace(/^(.{2})(.*)(?=@)/, (_, a, b) => a + "*".repeat(b.length))
    : "your email";

  const handleVerify = async () => {
    if (otp.length < 4) {
      toast.error("Please enter a valid 4-digit OTP.");
      return;
    }

    setIsVerifying(true);
    setServerError(null);

    try {
      const response = await axiosInstance.post("/users/login/otp-verify", {
        email,
        otp,
      });
      toast.success(response.data.message || "OTP verified successfully!");
      router.push(`/reset-password?email=${encodeURIComponent(email)}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const message = error?.response?.data?.message || "Invalid OTP";
      setServerError(message);
      toast.error(message);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    setServerError(null);

    try {
      const response = await axiosInstance.post("/users/login/otp-resend", {
        email,
      });
      toast.success(response.data.message || "OTP resent successfully!");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to resend OTP";
      setServerError(message);
      toast.error(message);
    } finally {
      setIsResending(false);
    }
  };

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
              Code has been sent to {maskedEmail}
            </p>

            <div className="py-10 sm:py-14 flex justify-center">
              <InputOTP maxLength={4} value={otp} onChange={setOtp}>
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

            {serverError && (
              <p className="text-red-500 text-center mb-3">{serverError}</p>
            )}

            <p className="text-center text-[16px] sm:text-[20px] font-lucida text-white mb-6">
              Didnt receive the code?
              <button
                onClick={handleResend}
                disabled={isResending}
                className="ml-2 text-[#C83C7C] underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResending ? "Resending..." : "Resend OTP"}
              </button>
            </p>

            <button
              onClick={handleVerify}
              disabled={isVerifying}
              className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[100px] bg-[#C83C7C] w-full text-[18px] text-[#F9F9F9]
                font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group"
            >
              {isVerifying ? (
                <>
                  <IoArrowForward className="animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  Continue
                  <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
                </>
              )}
            </button>

            <div className="text-center mt-6">
              <Link
                href="/forgot-password"
                className="text-[#C83C7C] underline"
              >
                Back to Forget Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpPage;
