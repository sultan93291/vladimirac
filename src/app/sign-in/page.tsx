import Link from "next/link";
import Authbanner from "@/Components/Reusable/Authbanner";
import { Round1, Round2 } from "@/Components/Shared/Icons";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";

const Page = () => {
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

          <div className="w-[500px] mx-auto pt-[100px] relative">
            <div className="absolute top-38 -right-16 z-20">
              <Round1 />
            </div>
            <div className="absolute -bottom-10 -left-10 z-10">
              <Round2 />
            </div>

            <h2 className="font-bold font-arial text-white text-center text-[40px] relative z-10">
              Sign In Your Account
            </h2>

            <div className="8relative z-50 border border-[#C83C7C] rounded-[12px] p-6 mt-8">
              <h3 className="font-arial text-[24px] text-white font-bold">
                SignIn
              </h3>
              <p className="text-[#64748B] font-lucida text-[14px] pt-2">
                Enter your credentials to access your dashboard
              </p>

              <div className="mt-6">
                <div className="flex flex-col gap-4 mt-6">
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
                    <Link href="/forgot-password">
                      <p className="text-[14px] font-lucida font-normal text-[#fff] pt-3 text-end">
                        Forget Password
                      </p>
                    </Link>
                  </div>
                  <Link href="/login-successfull">
                    <button className="w-full py-3 rounded-[12px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out">
                      Login
                    </button>
                  </Link>

                  <h3 className="text-center text-[14px] font-lucida font-normal text-white">
                    {" "}
                    Don’t have an account?{" "}
                    <Link href="/sign-up">
                      <span className="text-[#C83C7C]">Sign Up</span>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
