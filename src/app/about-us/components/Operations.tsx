"use client";

import CountdownReusable from "@/Components/Reusable/Countdownreusable";
import Container from "@/Components/Shared/Container";
import Image from "next/image";
import React from "react";
import useFetchData from "@/Hooks/UseFetchData";

type SavaOperation = {
  offices: string;
  countries: string;
  employees: string;
};

type ApiResponse = {
  data: {
    savaOperation: SavaOperation;
  };
};

const Operations = () => {
  const { data } = useFetchData<ApiResponse>("/get_about");

  const operation = data?.data?.savaOperation || {
    offices: "",
    countries: "",
    employees: "",
  };

  return (
    <div className="relative w-full py-16 sm:py-20">
      <Container>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/operationbg.png"
            alt="operation"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-opacity-40" />{" "}
          {/* Optional dark overlay */}
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 text-white text-center">
          <h4 className="text-3xl sm:text-4xl md:text-[48px] font-normal font-arial">
            Inside SAVA’s Operations
          </h4>

          <div className="mt-10 flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0">
            <CountdownReusable
              title={`${operation.offices}+`}
              para="Office and Logistic Facilities"
            />
            <CountdownReusable
              title={`${operation.countries}+`}
              para="Countries Worldwide"
            />
            <CountdownReusable
              title={`${operation.employees}~`}
              para="Employees"
              showBorder={false}
            />
          </div>

          <div className="flex justify-center mt-10 sm:mt-[60px]">
            <button className="px-6 py-3 bg-[#FAA312] rounded-[12px] text-lg font-lucida font-normal text-[#13213C] cursor-pointer hover:bg-[#C83C7C] hover:text-white duration-300 ease-in-out">
              Discover Where SAVA Operates
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Operations;
