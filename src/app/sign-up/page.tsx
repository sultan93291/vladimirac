// Page.tsx

import Link from "next/link";
import Authbanner from "@/Components/Reusable/Authbanner";
import { Round1, Round2 } from "@/Components/Shared/Icons";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

const Page = () => {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col 2xl:flex-row">
        {/* Banner Section - only visible on 2xl and up */}
        <div className="hidden 2xl:block 2xl:w-1/2">
          <Authbanner />
        </div>

        {/* Form Section */}
        <div className="w-full 2xl:w-1/2 p-6 sm:p-10">
          <div className="flex justify-end">
            <LanguageSelect />
          </div>

          <div className="w-full max-w-[500px] mx-auto pt-[60px] sm:pt-[100px] relative">
            {/* Decorative Icons (only on md and up) */}
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
                    <div className="flex flex-col gap-4 mt-6">
                      <div>
                        <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                          Full Name
                        </h4>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                        />
                      </div>

                      <div>
                        <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                          Email
                        </h4>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                        />
                      </div>

                      <div>
                        <h4 className="font-nunito text-[14px] font-semibold text-white pb-3">
                          Password
                        </h4>
                        <input
                          type="password"
                          className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-[#32203C] text-white w-full rounded-[8px] border border-[#C83C7C]"
                        />
                        <p className="text-[12px] font-lucida font-normal text-[#6B7280] pt-3">
                          Your account will require approval by an administrator
                        </p>
                      </div>

                      <button className="w-full py-3 rounded-[12px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out">
                        Register
                      </button>

                      <h3 className="text-center text-[14px] font-lucida font-normal text-white">
                        Already have an account?{" "}
                        <Link href="/sign-in">
                          <span className="text-[#C83C7C]">Log in</span>
                        </Link>
                      </h3>
                    </div>
                  </TabsContent>

                  <TabsContent value="Supplier">
                    <p className="text-white mt-6">
                      Supplier registration form here.
                    </p>
                  </TabsContent>

                  <TabsContent value="Driver">
                    <p className="text-white mt-6">
                      Driver registration form here.
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
