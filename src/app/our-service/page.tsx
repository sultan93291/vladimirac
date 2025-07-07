"use client";

import { useState } from "react";

import Container from "@/Components/Shared/Container";
import ServiceCard from "@/Components/Reusable/Servicecard";
import Countdown from "./_components/Countdown";
import Spinner from "@/Components/Shared/Spinner";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import useFetchData from "@/Hooks/UseFetchData";
import Image from "next/image";

type ServiceListItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type ServiceFeature = {
  id: number;
  feature_title: string;
  feature_description: string;
  feature_image: string;
};

type ServiceDetail = {
  id: number;
  title: string;
  description: string;
  image: string;
  our_service_features: ServiceFeature[];
};

export default function Page() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);






  const {
    data: servicesData,
    error: servicesError,
    isLoading: servicesLoading,
  } = useFetchData<{ success: boolean; data: ServiceListItem[] }>("/services");


  const selectedServiceId = servicesData?.data?.[selectedIndex]?.id ?? null;


  const {
    data: selectedServiceDetailsData,
    error: detailsError,
    isLoading: detailsLoading,
  } = useFetchData<{ success: boolean; data: ServiceDetail }>(
    selectedServiceId ? `/services/feature/${selectedServiceId}` : null
  );

  if (servicesLoading)
    return (
      <div className="flex justify-center items-center p-10">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        <style>{`
          .loader {
            border-top-color: #C83C7C;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </div>
    );

  if (servicesError)
    return (
      <p className="text-center text-red-500 py-20">
        Error loading services: {servicesError}
      </p>
    );

  const services = servicesData?.data || [];
  const visibleServices = showAll ? services : services.slice(0, 3);
  const selectedServiceDetails = selectedServiceDetailsData?.data || null;

  return (
    <section className="lg:pt-40 pt-10 lg:pb-20 2xl:px-0 px-5">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-6">
          <h2

            className="text-[40px] md:text-[48px] lg:text-[64px] font-arial font-semibold text-[#FFF] text-center md:text-left overflow-hidden"
          >
            Our Services
          </h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-fit text-[16px] md:text-[18px] text-[#F9F9F9]
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-[40px] sm:mt-[60px]">
          {visibleServices.map((service, idx) => (
            <div key={service.id} className="h-full">
              <ServiceCard
                icon={
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_URL || ""}${
                      service.image
                    }`}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                }
                title={service.title}
                description={service.description}
                onClick={() => setSelectedIndex(idx)}
                active={selectedIndex === idx}
              />
            </div>
          ))}
        </div>

        {detailsLoading ? (
          <div className="flex justify-center py-20">
            <Spinner />
          </div>
        ) : detailsError ? (
          <p className="text-red-500 text-center mt-10">
            Error loading service details: {detailsError}
          </p>
        ) : selectedServiceDetails ? (
          <div className="flex flex-col lg:flex-row justify-between gap-10 mt-[80px] lg:mt-[120px]">
            <div className="w-full lg:w-1/3">
              <div className="bg-[#32203C] w-[56px] h-[56px] rounded-full border-[10px] border-white flex justify-center items-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_URL || ""}${
                    selectedServiceDetails.image
                  }`}
                  alt={selectedServiceDetails.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="font-arial text-[20px] md:text-[24px] text-[#FFF] font-normal pt-8 pb-3">
                {selectedServiceDetails.title}
              </h3>
              <p className="font-normal font-lucida text-[15px] md:text-[16px] text-[#BCBCBC] leading-[24px]">
                {selectedServiceDetails.description}
              </p>
              <button
                className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-fit text-[16px] md:text-[18px] text-[#F9F9F9]
              font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group mt-10"
              >
                Go To map
                <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
              </button>
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
              {selectedServiceDetails.our_service_features.map(feature => (
                <div
                  key={feature.id}
                  className="rounded-[12px] bg-[rgba(200,60,124,0.10)] p-6"
                >
                  <div className="bg-[#32203C] flex justify-center items-center h-12 w-12 rounded-[10px]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_URL || ""}${
                        feature.feature_image
                      }`}
                      alt={feature.feature_title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <h3 className="font-arial text-[20px] md:text-[24px] text-[#FFF] font-bold pt-8 pb-3 capitalize">
                    {feature.feature_title}
                  </h3>
                  <p className="font-normal font-lucida text-[15px] md:text-[16px] text-[#BCBCBC] leading-[24px]">
                    {feature.feature_description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-[80px] lg:mt-[120px]">
          <Countdown />
        </div>
      </Container>
    </section>
  );
}
