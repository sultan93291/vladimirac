import Link from "next/link";
import Authbanner from "@/Components/Reusable/Authbanner";
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

          <div className="w-[500px] mx-auto pt-[200px]">
            <h2 className="font-bold font-arial text-white text-center text-[40px] relative z-10">
              Fotget Password
            </h2>

            <div className="relative z-50 border border-[#C83C7C] rounded-[12px] p-6 mt-8">
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
                  <Link href="/otp">
                    <button className="w-full py-3 rounded-[12px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out">
                      Forget Password
                    </button>
                  </Link>

                  <h3 className="text-center text-[14px] font-lucida font-normal text-[#C83C7C]">
                    <Link href="/sign-in">Back to Log in</Link>
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
