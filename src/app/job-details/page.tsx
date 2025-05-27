import Container from "@/Components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";
import { BsFillShareFill } from "react-icons/bs";

const page = () => {
  return (
    <section className="pt-20">
      <Container>
        <div className="flex gap-x-8">
          <div className="relative w-[65%] h-[600px]">
            <Image
              src="/jobdetails.png"
              alt="jobdetails"
              fill
              className="object-cover rounded-[24px]"
            />
          </div>

          <div className="w-[30%] h-fit bg-[#32203C] px-[60px] py-8 rounded-[12px] flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <h4 className="text-[24px] text-white font-arial font-normal">
              Road Export Coordinator
            </h4>
            <div className="">
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                location
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff] flex gap-x-2 items-center">
                <CiLocationOn />
                Castellar del Vallès, Spain
              </h5>
            </div>
            <div className="">
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Career Level
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff]">
                Graduates / Professionals/ Academic
              </h5>
            </div>
            <div className="">
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Employment Type, worktype
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff]">
                Full Time
              </h5>
            </div>
            <div className="">
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Employment Type, worktype
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff]">
                Apr 28,20025 ,400584
              </h5>
            </div>
            <Link href="/apply-form" className="flex gap-x-5 items-center">
              <button
                className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-[250px] text-[18px] text-[#F9F9F9]
    font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group"
              >
                Apply now
                <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
              </button>
              <div className="w-11 h-11 rounded-full bg-white flex justify-center items-center cursor-pointer">
                <BsFillShareFill />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
