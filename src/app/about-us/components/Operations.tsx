import CountdownReusable from "@/Components/Reusable/Countdownreusable";
import Container from "@/Components/Shared/Container";
import Image from "next/image";
import React from "react";

const Operations = () => {
  return (
    <div className="relative w-full py-20">
      <Container>
        <Image
          src="/operationbg.png"
          alt="operation"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="relative z-10">
          <h4 className="relative text-white text-[48px] font-normal font-arial text-center z-10">
            Inside SAVA’s Operations
          </h4>
          <div className="flex justify-between mt-10">
            <CountdownReusable
              title="4,000+"
              para="Office and  Logistic  Fecilities"
            />
            <CountdownReusable title="95+ " para="Countries Worldwide" />
            <CountdownReusable
              title=" 230,000~"
              para="Employes"
              showBorder={false}
            />
          </div>
          <div className="flex justify-center mt-[60px]">
            <button className="px-5 py-3 bg-[#FAA312] rounded-[12px] text-[18px] font-lucida font-normal text-[#[13213C] cursor-pointer hover:bg-[#C83C7C] hover:text-white duration-300 ease-in-out">
              Discover Where SAVA Operates
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Operations;
