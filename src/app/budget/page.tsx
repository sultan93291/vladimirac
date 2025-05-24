"use client";

import Istimatecard from "@/Components/Reusable/Istimatecard";
import Container from "@/Components/Shared/Container";
import { Budjet } from "@/Components/Shared/Icons";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

const Page = () => {
  const [showEstimateCards, setShowEstimateCards] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEstimateClick = () => {
    setLoading(true);
    setShowEstimateCards(false);

    setTimeout(() => {
      setLoading(false);
      setShowEstimateCards(true);
    }, 1500); 
  };

  return (
    <section className="pt-20 pb-28">
      <Container>
        <h1 className="text-[64px] font-bold text-center font-arial text-white">
          Budget
        </h1>

        <div className="mt-[60px] bg-white px-[120px] pt-[60px] pb-5 rounded-[20px]">
          <h3 className="text-[32px] font-arial font-bold text-[#13213C]">
            Where are you shipping?
          </h3>

          <form>
            <div className="flex justify-between items-end">
              {/* Ship From */}
              <div className="w-2/5">
                <h4 className="text-[#000] font-normal font-arial text-[24px] mt-3">
                  Ship From
                </h4>
                <h5 className="text-[#000] font-normal font-arial text-[20px] my-3">
                  Country *
                </h5>
                <div className="flex justify-between gap-4">
                  <div className="relative w-1/2">
                    <select
                      name="fromCountry"
                      className="appearance-none w-full py-2 bg-white text-black text-[20px] font-arial border-b border-[#BCBCBC] rounded-t-md rounded-b-none focus:outline-none cursor-pointer"
                    >
                      <option value="Spain">Spain</option>
                      <option value="Romania">Romania</option>
                      <option value="Germany">Germany</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black text-sm">
                      <SlArrowDown />
                    </div>
                  </div>

                  <input
                    type="number"
                    name="fromPostal"
                    placeholder="Postal code"
                    className="w-1/2 py-2 bg-white border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[20px] focus:outline-none"
                  />
                </div>
              </div>

              <div className="bg-[#13213C] w-[52px] h-[46px] rounded-[16px] flex justify-center items-center">
                <Budjet />
              </div>

              {/* Ship To */}
              <div className="w-2/5">
                <h4 className="text-[#000] font-normal font-arial text-[24px] mt-3">
                  Ship To
                </h4>
                <h5 className="text-[#000] font-normal font-arial text-[20px] my-3">
                  Country *
                </h5>
                <div className="flex justify-between gap-4">
                  <div className="relative w-1/2">
                    <select
                      name="toCountry"
                      className="appearance-none w-full py-2 bg-white text-black text-[20px] font-arial border-b border-[#BCBCBC] rounded-t-md rounded-b-none focus:outline-none cursor-pointer"
                    >
                      <option value="Spain">Spain</option>
                      <option value="Romania">Romania</option>
                      <option value="Germany">Germany</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black text-sm">
                      <SlArrowDown />
                    </div>
                  </div>

                  <input
                    type="number"
                    name="toPostal"
                    placeholder="Postal code"
                    className="w-1/2 py-2 bg-white border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[20px] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Cargo Details */}
            <div className="mt-[65px]">
              <h3 className="text-[32px] font-arial font-bold text-[#13213C]">
                Cargo Details
              </h3>
              <div className="flex gap-x-20">
                {/* Merchandise */}
                <div className="relative w-full">
                  <h5 className="text-[#000] font-normal font-arial text-[20px] my-3">
                    Type of Merchandise *
                  </h5>
                  <select
                    name="merchandise"
                    className="appearance-none w-full py-2 bg-white text-black text-[20px] font-arial border-b border-[#BCBCBC] rounded-t-md rounded-b-none focus:outline-none cursor-pointer"
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                  <div className="pointer-events-none absolute right-3 top-[90%] -translate-y-[90%] text-black text-sm">
                    <SlArrowDown />
                  </div>
                </div>

                {/* Linear Meters */}
                <div className="w-full relative">
                  <h5 className="text-[#000] font-normal font-arial text-[20px] my-3">
                    Linear Meters
                  </h5>
                  <input
                    type="number"
                    placeholder="Enter meter"
                    className="py-2 w-full bg-white border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[20px] focus:outline-none"
                  />
                  <div className="pointer-events-none absolute right-3 top-[90%] -translate-y-[90%] text-black text-sm">
                    M
                  </div>
                </div>

                {/* Gross Weight */}
                <div className="w-full relative">
                  <h5 className="text-[#000] font-normal font-arial text-[20px] my-3">
                    Gross Weight
                  </h5>
                  <input
                    type="number"
                    placeholder="Enter Weight"
                    className="py-2 w-full bg-white border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[20px] focus:outline-none"
                  />
                  <div className="pointer-events-none absolute right-3 top-[90%] -translate-y-[90%] text-black text-sm">
                    KG
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-7">
                <button
                  type="button"
                  onClick={handleEstimateClick}
                  className="bg-[#13213C] rounded-[12px] px-5 py-3 font-lucida font-normal text-white cursor-pointer"
                >
                  Get Estimate
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Estimate Cards or Loader */}
        <div className="pt-[60px] flex gap-x-[60px] justify-between">
          {loading ? (
            <>
              <div className="w-full h-[280px] rounded-[16px] bg-gray-300 animate-pulse" />
              <div className="w-full h-[280px] rounded-[16px] bg-gray-300 animate-pulse" />
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
