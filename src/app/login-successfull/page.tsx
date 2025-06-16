import Authbanner from "@/Components/Reusable/Authbanner";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import { Wish } from "@/Components/Shared/Icons";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

const Page = () => {
  return (
    <section className="min-h-screen ">
      <div className="flex flex-col 2xl:flex-row min-h-screen">
        {/* Left side banner, hidden on smaller than 2xl */}
        <div className="hidden 2xl:block 2xl:w-1/2">
          <Authbanner />
        </div>

        {/* Right side content */}
        <div className="w-full 2xl:w-1/2 p-6 sm:p-10 flex flex-col">
          <div className="flex justify-end">
            <LanguageSelect />
          </div>

          <div className="2xl:mt-[150px] mt-[70px] w-full max-w-[550px] mx-auto px-4 sm:px-0 text-center">
            <div className="flex justify-center">
              <Wish />
            </div>

            <h2 className="font-arial font-bold text-white pt-[40px] text-[40px] sm:text-[64px] leading-tight">
              Log in Successful
            </h2>

            <p className="text-white mt-4 text-sm sm:text-base">
              Now You can Explore Everything!
            </p>

            <Link href="/" passHref>
              <button
                type="button"
                className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[100px] bg-[#C83C7C] w-full text-[18px] text-[#F9F9F9]
               font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group mt-12 max-w-[350px] mx-auto"
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
