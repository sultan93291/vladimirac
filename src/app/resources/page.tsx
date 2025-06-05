"use client";
import Container from "@/Components/Shared/Container";
import { useState } from "react";
import Holidays from "./Components/Holidays";
import Restrictions from "./Components/Restrictions";
import Regulations from "./Components/Regulations";
import Boe from "./Components/Boe";
import Cmr from "./Components/Cmr";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";

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
    <section className="pt-5">
      <Container>
        <h2 className="text-[64px] font-bold text-[#FFF] text-center">
          Resources
        </h2>
        <div className="flex gap-x-[70px] mt-[120px] px-20">
          <div className="p-4 border border-[#C83C7C] rounded-[8px]">
            <ul className="flex flex-col gap-y-2">
              {items.map(item => (
                <li
                  key={item}
                  onClick={() => setActiveItem(item)}
                  className={`w-[350px] py-2 px-4  rounded-[8px] font-lucida font-normal cursor-pointer transition-colors duration-200 ${
                    activeItem === item
                      ? "bg-[#C83C7C] text-white"
                      : "bg-transparent text-white hover:bg-[#C83C7C]"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 border border-[#C83C7C] rounded-[8px] p-6 min-h-[300px]">
            {renderContent()}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
