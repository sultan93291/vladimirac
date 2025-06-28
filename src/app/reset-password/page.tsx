"use client";

import Link from "next/link";
import Authbanner from "@/Components/Reusable/Authbanner";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import useAxios from "@/Hooks/UseAxios";

type FormData = {
  password: string;
  password_confirmation: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const router = useRouter();
  const axiosInstance = useAxios();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await axiosInstance.post("/users/login/reset-password", {
        email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      });

      toast.success(res?.data?.message || "Password reset successful!");
      setTimeout(() => {
        router.push("/resetpassowrd-succesfull");
      }, 1000);
    } catch (error: any) {
      const message = error?.response?.data?.message || "Something went wrong";
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

          <div className="w-full max-w-[500px] mx-auto pt-[80px] sm:pt-[150px] relative">
            <h2 className="font-bold font-arial text-white text-center text-[32px] sm:text-[40px]">
              Reset Password
            </h2>

            <div className="border border-[#C83C7C] rounded-[12px] p-6 mt-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 mt-6"
              >
                <div>
                  <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                    Enter New Password
                  </h4>
                  <input
                    type="password"
                    placeholder="New password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                  />
                  {errors.password && (
                    <p className="text-red-400 text-sm pt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                    Re-Enter New Password
                  </h4>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    {...register("password_confirmation", {
                      required: "Please confirm your password",
                      validate: value =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                  />
                  {errors.password_confirmation && (
                    <p className="text-red-400 text-sm pt-1">
                      {errors.password_confirmation.message}
                    </p>
                  )}
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
                      <FaSpinner className="animate-spin" /> Resetting...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>

                <h3 className="text-center text-[14px] font-lucida font-normal text-[#C83C7C]">
                  <Link href="/sign-in">Back to Log in</Link>
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
