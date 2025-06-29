"use client";

import { useParams } from "next/navigation";
import Container from "@/Components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";
import { BsFillShareFill } from "react-icons/bs";
import { notFound } from "next/navigation";
import useFetchData from "@/Hooks/UseFetchData";
import Spinner from "@/Components/Shared/Spinner";


interface JobDetail {
  id: number;
  title: string;
  department: string;
  deadline: string;
  location: string;
  career_level: string;
  employment_status: string;
  description: string;
}

const page = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchData<{
    success: boolean;
    data: JobDetail;
  }>(`/job/${id}/details`);

  if (isLoading) return <Spinner />;


  const job = data?.data;

  return (
    <section className="lg:py-20 py-8 2xl:px-0 px-5">
      <Container>
        <div className="flex gap-x-8 lg:flex-row flex-col">
          {/* Left Side */}
          <div className="w-full">
            <div className="relative w-full h-[600px]">
              <Image
                src="/jobdetails.png"
                alt="jobdetails"
                fill
                className="object-cover rounded-[24px] w-full"
              />
            </div>

            <div
              className="text-white font-sans space-y-6 pt-[60px] w-full"
              dangerouslySetInnerHTML={{ __html: job?.description ?? "" }}
            />
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[30%] lg:mt-0 mt-5 bg-[#32203C] px-6 sm:px-10 py-8 rounded-[12px] flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 self-start">
            <h4 className="text-[24px] text-white font-arial font-normal">
              {job?.title}
            </h4>
            <div>
              <h6 className="text-[14px] font-lucida text-[#BCBCBC]">
                Location
              </h6>
              <h5 className="text-[20px] text-white flex gap-x-2 items-center">
                <CiLocationOn />
                {job?.location}
              </h5>
            </div>
            <div>
              <h6 className="text-[14px] font-lucida text-[#BCBCBC]">
                Career Level
              </h6>
              <h5 className="text-[20px] text-white">{job?.career_level}</h5>
            </div>
            <div>
              <h6 className="text-[14px] font-lucida text-[#BCBCBC]">
                Employment Type
              </h6>
              <h5 className="text-[20px] text-white">
                {job?.employment_status}
              </h5>
            </div>
            <div>
              <h6 className="text-[14px] font-lucida text-[#BCBCBC]">
                Deadline
              </h6>
              <h5 className="text-[20px] text-white">{job?.deadline}</h5>
            </div>
            <Link href="/apply-form" className="flex gap-x-5 items-center">
              <button className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-[250px] text-[18px] text-[#F9F9F9] cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group">
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
