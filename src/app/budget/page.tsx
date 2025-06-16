"use client";

import Istimatecard from "@/Components/Reusable/Istimatecard";
import Container from "@/Components/Shared/Container";
import { Budjet } from "@/Components/Shared/Icons";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const Page = () => {
  const [showEstimateCards, setShowEstimateCards] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEstimateClick = () => {
    setLoading(true);
    setShowEstimateCards(false);

    setTimeout(() => {
      setLoading(false);
      setShowEstimateCards(true);
    }, 1500);
  };

  return (
    <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-10 xl:px-0">
      <Container>
        <h1 className="text-[30px] sm:text-[40px] md:text-[48px] xl:text-[64px] font-bold text-center font-arial text-white">
          Budget
        </h1>

        <div className="mt-10 bg-white px-5 sm:px-10 md:px-16 xl:px-[120px] pt-10 pb-6 rounded-[20px]">
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-arial font-bold text-[#13213C] mb-6">
            Where are you shipping?
          </h3>

          <form>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* Ship From */}
              <div className="w-full md:w-2/5">
                <h4 className="text-[#000] font-arial text-[20px] md:text-[24px]">
                  Ship From
                </h4>
                <h5 className="text-[#000] font-arial text-[18px] md:text-[20px] my-2">
                  Country *
                </h5>
                <div className="flex gap-4">
                  <div className="relative w-1/2">
                    <select
                      name="fromCountry"
                      className="appearance-none w-full py-2 bg-white text-black text-[16px] md:text-[20px] font-arial border-b border-[#BCBCBC] focus:outline-none"
                    >
                      <option value="Spain">Spain</option>
                      <option value="Romania">Romania</option>
                      <option value="Germany">Germany</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none">
                      <SlArrowDown />
                    </div>
                  </div>
                  <input
                    type="number"
                    name="fromPostal"
                    placeholder="Postal code"
                    className="w-1/2 py-2 bg-white border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[16px] md:text-[20px] focus:outline-none"
                  />
                </div>
              </div>

              {/* Icon */}
              <div className="self-center md:self-end">
                <div className="bg-[#13213C] w-[52px] h-[46px] rounded-[16px] flex justify-center items-center">
                  <Budjet />
                </div>
              </div>

              {/* Ship To */}
              <div className="w-full md:w-2/5">
                <h4 className="text-[#000] font-arial text-[20px] md:text-[24px]">
                  Ship To
                </h4>
                <h5 className="text-[#000] font-arial text-[18px] md:text-[20px] my-2">
                  Country *
                </h5>
                <div className="flex gap-4">
                  <div className="relative w-1/2">
                    <select
                      name="toCountry"
                      className="appearance-none w-full py-2 bg-white text-black text-[16px] md:text-[20px] font-arial border-b border-[#BCBCBC] focus:outline-none"
                    >
                      <option value="Spain">Spain</option>
                      <option value="Romania">Romania</option>
                      <option value="Germany">Germany</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none">
                      <SlArrowDown />
                    </div>
                  </div>
                  <input
                    type="number"
                    name="toPostal"
                    placeholder="Postal code"
                    className="w-1/2 py-2 bg-white border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[16px] md:text-[20px] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Cargo Details */}
            <div className="mt-10">
              <h3 className="text-[24px] md:text-[32px] font-arial font-bold text-[#13213C] mb-6">
                Cargo Details
              </h3>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Merchandise */}
                <div className="relative w-full">
                  <h5 className="text-[#000] font-arial text-[18px] md:text-[20px] mb-2">
                    Type of Merchandise *
                  </h5>
                  <select
                    name="merchandise"
                    className="appearance-none w-full py-2 bg-white text-black text-[16px] md:text-[20px] font-arial border-b border-[#BCBCBC] focus:outline-none"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                  <div className="absolute right-3 top-[90%] -translate-y-[90%] text-black text-sm pointer-events-none">
                    <SlArrowDown />
                  </div>
                </div>

                {/* Linear Meters */}
                <div className="relative w-full">
                  <h5 className="text-[#000] font-arial text-[18px] md:text-[20px] mb-2">
                    Linear Meters
                  </h5>
                  <input
                    type="number"
                    placeholder="Enter meter"
                    className="w-full py-2 bg-white border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[16px] md:text-[20px] focus:outline-none"
                  />
                  <div className="absolute right-3 top-[90%] -translate-y-[90%] text-black text-sm pointer-events-none">
                    M
                  </div>
                </div>

                {/* Gross Weight */}
                <div className="relative w-full">
                  <h5 className="text-[#000] font-arial text-[18px] md:text-[20px] mb-2">
                    Gross Weight
                  </h5>
                  <input
                    type="number"
                    placeholder="Enter Weight"
                    className="w-full py-2 bg-white border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[16px] md:text-[20px] focus:outline-none"
                  />
                  <div className="absolute right-3 top-[90%] -translate-y-[90%] text-black text-sm pointer-events-none">
                    KG
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={handleEstimateClick}
                  className="bg-[#13213C] rounded-[12px] px-5 py-3 font-lucida font-normal text-white"
                >
                  Get Estimate
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Estimate Cards or Loading Skeletons */}

        <div className="pt-[60px] flex flex-col lg:flex-row gap-6 lg:gap-x-[60px] justify-between">
          {loading ? (
            <>
              <div className="w-full lg:w-1/2 h-[280px] rounded-[16px] bg-gray-300 animate-pulse" />
              <div className="w-full lg:w-1/2 h-[280px] rounded-[16px] bg-gray-300 animate-pulse" />
            </>
          ) : (
            showEstimateCards && (
              <>
                <Istimatecard
                  backgroundImage="/istimate.png"
                  title="Estimate Price"
                  buttonText="606 €"
                />
                <Istimatecard
                  backgroundImage="/istimate2.png"
                  title="Average Time"
                  buttonText="120-168H"
                  buttonColor="#FFF"
                  textColor="#000"
                />
              </>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Page;
