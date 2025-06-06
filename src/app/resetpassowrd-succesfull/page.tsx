import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { Wish1 } from "@/Components/Shared/Icons";
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
          <div className="mt-[200px] w-[500px] mx-auto">
            <div className="flex justify-center">
              <Wish1 />
            </div>
            <h2 className="font-arial font-bold text-white text-center pt-[60px] text-[40px]">
              Well Done Your Password Change Successfully
            </h2>
            <p className="text-white text-center">
              Now You can Explore Everything!
            </p>
            <Link href="/sign-in">
              <button
                className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[100px] bg-[#C83C7C] w-full text-[18px] text-[#F9F9F9]
               font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group mt-12"
              >
                Login
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
