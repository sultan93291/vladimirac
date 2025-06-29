"use client";

import Link from "next/link";
import Authbanner from "@/Components/Reusable/Authbanner";
import { Round1, Round2 } from "@/Components/Shared/Icons";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAxios from "@/Hooks/UseAxios";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";


type FormData = {
  name: string;
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [serverError, setServerError] = useState<string | null>(null);
  const Axiosinstance = useAxios();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      setServerError(null);
      const response = await Axiosinstance.post("/users/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "user",
      });
      console.log(response);

      toast.success("Registration successful!");
      reset();

      setTimeout(() => {
        router.push("/sign-in");
      }, 1000);
  
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

          <div className="w-full max-w-[500px] mx-auto pt-[60px] sm:pt-[100px] relative">
            <div className="absolute top-16 -right-10 z-20 hidden sm:block">
              <Round1 />
            </div>
            <div className="absolute -bottom-10 -left-10 z-10 hidden sm:block">
              <Round2 />
            </div>

            <div className="relative z-50 border border-[#C83C7C] rounded-[12px] p-6 mt-8">
              <h3 className="font-arial text-[24px] text-white font-bold">
                Register
              </h3>
              <p className="text-[#64748B] font-lucida text-[14px] pt-2">
                Fill in your details to request an account
              </p>

              <div className="mt-6">
                <Tabs defaultValue="User">
                  <TabsList className="flex justify-between gap-x-4 w-full bg-transparent border border-[#C83C7C] py-4 px-2 sm:py-6 sm:px-4">
                    {["User", "Supplier", "Driver"].map(role => (
                      <TabsTrigger
                        key={role}
                        value={role}
                        className="border border-[#C83C7C] text-[#C83C7C] cursor-pointer p-3 sm:p-4 rounded-[12px] data-[state=active]:bg-[#C83C7C] data-[state=active]:text-white"
                      >
                        {role}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="User">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-4 mt-6"
                    >
                      <div>
                        <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                          Full Name
                        </h4>
                        <input
                          {...register("name", {
                            required: "Full name is required",
                          })}
                          type="text"
                          placeholder="John Doe"
                          className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm pt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                          Email
                        </h4>
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email format",
                            },
                          })}
                          type="email"
                          placeholder="name@company.com"
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
                          Password
                        </h4>
                        <input
                          {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 6,
                              message: "Minimum 6 characters",
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
                        <p className="text-[12px] font-lucida font-normal text-[#6B7280] pt-3">
                          Your account will require approval by an administrator
                        </p>
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
                            <FaSpinner className="animate-spin" />{" "}
                            Registering...
                          </>
                        ) : (
                          "Register"
                        )}
                      </button>

                      <h3 className="text-center text-[14px] font-lucida font-normal text-white">
                        Already have an account?{" "}
                        <Link href="/sign-in">
                          <span className="text-[#C83C7C]">Log in</span>
                        </Link>
                      </h3>
                    </form>
                  </TabsContent>

                  <TabsContent value="Supplier">
                    <p className="text-white mt-6 text-sm italic text-center">
                      Registration is only available for users.
                    </p>
                  </TabsContent>

                  <TabsContent value="Driver">
                    <p className="text-white mt-6 text-sm italic text-center">
                      Registration is only available for users.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
