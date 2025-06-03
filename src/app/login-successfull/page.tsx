import Authbanner from "@/Components/Reusable/Authbanner";
import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import {  Wish } from "@/Components/Shared/Icons";
import { IoArrowForward } from "react-icons/io5";

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
          <div className="mt-[200px] w-[550px] mx-auto">
            <div className="flex justify-center">
              <Wish />
            </div>
            <h2 className="font-arial font-bold text-white text-center pt-[60px] text-[64px]">
              Log in Successful
            </h2>
            <p className="text-white text-center">Now You can Explore Everything!</p>
            <button
              className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[100px] bg-[#C83C7C] w-full text-[18px] text-[#F9F9F9]
               font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group mt-12"
            >
              Continue
              <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
