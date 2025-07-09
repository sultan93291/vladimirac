"use client";

import Link from "next/link";
import Authbanner from "@/Components/Reusable/Authbanner";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import useAxios from "@/Hooks/UseAxios";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type FormData = {
  email: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const axiosInstance = useAxios();
  const router = useRouter();
  const t = useTranslations("ForgotPasswordPage");

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    setSuccessMessage(null);
    try {
      const response = await axiosInstance.post("/users/login/email-verify", {
        email: data.email,
      });
      const message = response.data.message || t("otpSent");
      setSuccessMessage(message);
      toast.success(message);
      reset();
      setTimeout(() => {
        router.push(`/otp?email=${encodeURIComponent(data.email)}`);
      }, 1000);
    } catch (error: any) {
      const message = error?.response?.data?.message || t("error.generic");
      setServerError(message);
      toast.error(message);
    }
  };

  return (
    <section className="min-h-screen">
      <div className="flex flex-col 2xl:flex-row">
        {/* Left side banner */}
        <div className="hidden 2xl:block 2xl:w-1/2">
          <Authbanner />
        </div>

        {/* Right side form */}
        <div className="w-full 2xl:w-1/2 p-6 sm:p-10">
          <div className="flex justify-end">
            <LanguageSelect />
          </div>

          <div className="w-full max-w-[500px] mx-auto pt-[80px] sm:pt-[150px] relative z-10">
            <h2 className="font-bold font-arial text-white text-center text-[32px] sm:text-[40px]">
              {t("title")}
            </h2>

            <div className="border border-[#C83C7C] rounded-[12px] p-6 mt-8 relative z-20">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 mt-6"
              >
                <div>
                  <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                    {t("email")}
                  </h4>
                  <input
                    {...register("email", {
                      required: t("error.emailRequired"),
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: t("error.emailInvalid"),
                      },
                    })}
                    type="email"
                    placeholder={t("placeholder.email")}
                    className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm pt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="text-red-500 text-sm">{serverError}</p>
                )}
                {successMessage && (
                  <p className="text-green-400 text-sm">{successMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-[12px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> {t("sending")}
                    </>
                  ) : (
                    t("sendReset")
                  )}
                </button>

                <h3 className="text-center text-[14px] font-lucida font-normal text-[#C83C7C]">
                  <Link href="/sign-in">{t("backToLogin")}</Link>
                </h3>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
