"use client";
import Image from "next/image";
import Container from "./Container";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";



const LanguageSelect = dynamic(() => import("../Reusable/LanguageSelect"), {
  ssr: false,
});

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <nav className="py-6 bg-[#32203C]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-1/5">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={212}
              height={48}
              placeholder="blur"
              blurDataURL="/Logo.png"
            />
          </div>
          <div className="w-1/2">
            <ul className="flex gap-x-8 relative cursor-pointer">
              <li className="font-lucida text-[#EDEDF2] font-normal text-[16px]">
                Our services
              </li>
              <li className="font-lucida text-[#EDEDF2] font-normal text-[16px]">
                Company
              </li>
              <li className="font-lucida text-[#EDEDF2] font-normal text-[16px]">
                Resources
              </li>
              <li className="font-lucida text-[#EDEDF2] font-normal text-[16px]">
                Budget
              </li>
              <li className="font-lucida text-[#EDEDF2] font-normal text-[16px]">
                About us
              </li>
              <li className="font-lucida text-[#EDEDF2] font-normal text-[16px]">
                Contact Us
              </li>

              <li
                className="font-lucida text-[#EDEDF2] font-normal text-[16px] cursor-pointer relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="flex items-center gap-1">
                  Others
                  <ChevronDown size={16} className="text-[#EDEDF2]" />
                </div>

                <div
                  className={`absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50 transform transition-all duration-200 ease-in-out origin-top ${
                    showDropdown
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 text-black cursor-pointer">
                      Careers
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 text-black cursor-pointer">
                      Partners
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 text-black cursor-pointer">
                      Legal
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-[30%] flex justify-end gap-x-6 items-center">
            <LanguageSelect />
            <button className="py-[10px] px-4 rounded-[12px] border border-[#FAA312] text-white font-arial text-[18px] transition duration-500 ease-in-out hover:bg-[linear-gradient(315deg,_#FAA312_-148.02%,_rgba(13,_13,_13,_0.00)_197.26%)] cursor-pointer">
              Log in
            </button>
            <button className="py-[10px] px-4 rounded-[12px] border border-[#FAA312] text-white font-arial text-[18px] transition duration-500 ease-in-out hover:bg-[linear-gradient(315deg,_#FAA312_-148.02%,_rgba(13,_13,_13,_0.00)_197.26%)] cursor-pointer">
              Sing Up
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
