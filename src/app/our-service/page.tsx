"use client";
import { useState } from "react";
import services from "@/Data/Data";
import Countdown from "./_components/Countdown";
import Container from "@/Components/Shared/Container";
import ServiceCard from "@/Components/Reusable/Servicecard";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Page = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const visibleServices = showAll ? services : services.slice(0, 4);
  const selectedService = services[selectedIndex];


  const detailEntries = Object.entries(selectedService.details).filter(
    ([key]) => key !== "heading"
  );

  return (
    <section className="pt-40 pb-20">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-[64px] font-arial font-semibold text-[#FFF]">
            Our Services
          </h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-[180px] text-[18px] text-[#F9F9F9]
              font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group"
          >
            {showAll ? "Show Less" : "See All"}
            {showAll ? (
              <IoArrowBack className="text-[#FFF] group-hover:-ml-2 duration-300 ease-in-out" />
            ) : (
              <IoArrowForward className="text-[#FFF] group-hover:ml-5 duration-300 ease-in-out" />
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[60px]">
          {visibleServices.map((service, index) => (
            <div key={index} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => setSelectedIndex(index)}
                active={selectedIndex === index}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-[120px]">
          <div className="w-1/3">
            <div className="bg-[#32203C] w-[56px] h-[56px] rounded-full border-[10px] border-white flex justify-center items-center">
              {selectedService.details.heading.icon}
            </div>
            <h3 className="font-arial text-[24px] text-[#FFF] font-normal pt-8 pb-3">
              {selectedService.details.heading.text}
            </h3>
            <p className="font-normal font-lucida text-[16px] text-[#BCBCBC] leading-[24px]">
              Thanks to our Extensive Groupage Network at savalogistic we can
              comprehensively plan your transportation and merchandise
            </p>
            <button
              className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-[180px] text-[18px] text-[#F9F9F9]
              font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group mt-12"
            >
              Go To map
              <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
            </button>
          </div>
          <div className="w-2/3 grid grid-cols-2 gap-x-4 gap-y-8">
            {detailEntries.map(([key, { icon, text }], idx, arr) => {
              const isLast = arr.length === 3 && idx === arr.length - 1;
              const isSingle = arr.length === 1;
              const spanClass = isLast || isSingle ? "col-span-2" : "";

              return (
                <div
                  key={key}
                  className={`rounded-[12px] bg-[rgba(200,60,124,0.10)] p-6 ${spanClass}`}
                >
                  <div className="bg-[#32203C] flex justify-center items-center h-12 w-12 rounded-[10px]">
                    {icon}
                  </div>
                  <h3 className="font-arial text-[24px] text-[#FFF] font-bold pt-8 pb-3 capitalize">
                    {key}
                  </h3>
                  <p className="font-normal font-lucida text-[16px] text-[#BCBCBC] leading-[24px]">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-[120px]">
          <Countdown />
        </div>
      </Container>
    </section>
  );
};

export default Page;
