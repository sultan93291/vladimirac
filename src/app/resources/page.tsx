"use client";
import { useState } from "react";
import Cmr from "./Components/Cmr";
import Boe from "./Components/Boe";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";
import Container from "@/Components/Shared/Container";
import Restrictions from "./Components/Restrictions";
import Regulations from "./Components/Regulations";
import Holidays from "./Components/Holidays";

const Page = () => {
  const items: string[] = [
    "Europe Holidays",
    "Transport Restrictions",
    "Transport Regulations",
    "BOE",
    "CMR Convention",
    "Terms of Service",
    "Privacy Policy",
  ];

  const [activeItem, setActiveItem] = useState<string>("Europe Holidays");

  const renderContent = () => {
    switch (activeItem) {
      case "Europe Holidays":
        return (
          <div className="">
            <Holidays />
          </div>
        );
      case "Transport Restrictions":
        return (
          <div className="text-white">
            <Restrictions />
          </div>
        );
      case "Transport Regulations":
        return (
          <div className="text-white">
            <Regulations />
          </div>
        );
      case "BOE":
        return (
          <div className="text-white">
            <Boe />
          </div>
        );
      case "CMR Convention":
        return (
          <div className="text-white">
            <Cmr />
          </div>
        );
      case "Terms of Service":
        return (
          <div className="text-white">
            <Terms />
          </div>
        );
      case "Privacy Policy":
        return (
          <div className="text-white">
            <Privacy />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="lg:pt-20 pt-8 pb-10 2xl:px-0 px-5">
      <Container>
        <h2 className="text-[48px] sm:text-[64px] font-bold text-white text-center">
          Resources
        </h2>
        <div
          className="
            flex flex-col gap-y-6 mt-10
            xl:flex-row sm:gap-x-[70px]
          "
        >
          {/* Sidebar Menu */}
          <div
            className="
              p-4 border border-[#C83C7C] rounded-[8px]
              bg-[#32203C]
              w-full xl:w-[380px] 
              h-auto xl:h-[380px]
         
              max-h-[400px] sm:max-h-[380px]
            "
          >
            <ul className="flex flex-col gap-y-3">
              {items.map(item => (
                <li
                  key={item}
                  onClick={() => setActiveItem(item)}
                  className={`
                    w-full 
                    py-2 px-4 rounded-[8px] 
                    font-lucida font-normal 
                    cursor-pointer transition-colors duration-200
                    ${
                      activeItem === item
                        ? "bg-[#C83C7C] text-white"
                        : "bg-transparent text-white hover:bg-[#C83C7C]"
                    }
                  `}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Content Area */}
          <div
            className="
              flex-1
              text-white
              max-w-full
              overflow-auto
              min-h-[380px]
              sm:min-h-auto
            "
          >
            {renderContent()}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
