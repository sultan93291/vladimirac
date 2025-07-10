"use client";

import Link from "next/link";
import Authbanner from "@/Components/Reusable/Authbanner";
import { Round1, Round2 } from "@/Components/Shared/Icons";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useAxios from "@/Hooks/UseAxios";
import { useTranslations } from "next-intl";
import { AxiosError } from "axios"; // ✅ Add this

type FormData = {
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();
  const axiosInstance = useAxios();
  const t = useTranslations("SignInPage");

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const response = await axiosInstance.post("/users/login", {
        email: data.email,
        password: data.password,
      });

      const token = response.data.data.token;

      if (token) {
        localStorage.setItem("token", token);
        toast.success(t("success"));
        router.push("/login-successfull");
      } else {
        throw new Error("Token not found in response");
      }
    } catch (error: unknown) {
      let message = t("error.generic");

      // ✅ Use AxiosError to narrow and safely access response
      if (error instanceof AxiosError && error.response?.data?.message) {
        message = error.response.data.message;
      }

      setServerError(message);
      toast.error(message);
    }
  };

  return (
    <section className="min-h-screen">
      <div className="flex flex-col 2xl:flex-row">
        <div className="hidden 2xl:block 2xl:w-1/2">
          <Authbanner />
        </div>

        <div className="w-full 2xl:w-1/2 p-6 sm:p-10">
          <div className="flex justify-end">
            <LanguageSelect />
          </div>

          <div className="w-full max-w-[500px] mx-auto pt-[60px] sm:pt-[100px] relative">
            <div className="absolute top-24 -right-16 z-20 hidden sm:block">
              <Round1 />
            </div>
            <div className="absolute -bottom-10 -left-10 z-10 hidden sm:block">
              <Round2 />
            </div>

            <h2 className="font-bold font-arial text-white text-center lg:text-[32px] text-[24px] relative z-10">
              {t("title")}
            </h2>

            <div className="relative z-50 border border-[#C83C7C] rounded-[12px] p-6 mt-8">
              <h3 className="font-arial text-[24px] text-white font-bold">
                {t("cardTitle")}
              </h3>
              <p className="text-[#64748B] font-lucida text-[14px] pt-2">
                {t("subtitle")}
              </p>

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

                <div>
                  <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                    {t("password")}
                  </h4>
                  <input
                    {...register("password", {
                      required: t("error.passwordRequired"),
                      minLength: {
                        value: 6,
                        message: t("error.passwordMin"),
                      },
                    })}
                    type="password"
                    className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                  />
                  {errors.password && (
                    <p className="text-red-400 text-sm pt-1">
                      {errors.password.message}
                    </p>
                  )}
                  <Link href="/forgot-password">
                    <p className="text-[14px] font-lucida font-normal text-[#fff] pt-3 text-end cursor-pointer hover:underline">
                      {t("forgotPassword")}
                    </p>
                  </Link>
                </div>

                {serverError && (
                  <p className="text-red-500 text-sm">{serverError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-[12px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> {t("loggingIn")}
                    </>
                  ) : (
                    t("login")
                  )}
                </button>

                <h3 className="text-center text-[14px] font-lucida font-normal text-white">
                  {t("noAccount")}{" "}
                  <Link href="/sign-up">
                    <span className="text-[#C83C7C] cursor-pointer">
                      {t("signup")}
                    </span>
                  </Link>
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
