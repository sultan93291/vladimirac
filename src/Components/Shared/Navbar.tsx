"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const LanguageSelect = dynamic(() => import("../Reusable/LanguageSelect"), {
  ssr: false,
});

const Navbar = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { label: "Our services", href: "/our-service" },
    { label: "Company", href: "/company" },
    { label: "Resources", href: "/resources" },
    { label: "Budget", href: "/budget" },
    { label: "About us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isDropdownActive =
    pathname.startsWith("/careers") ||
    pathname.startsWith("/partners") ||
    pathname.startsWith("/legal");

  return (
    <nav className="py-6 bg-[#32203C] fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-1/5">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={212}
                height={48}
                placeholder="blur"
                blurDataURL="/Logo.png"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="w-1/2">
            <ul className="flex gap-x-8 relative cursor-pointer">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span
                      className={`font-lucida font-normal text-[16px] transition duration-200 ${
                        pathname === item.href
                          ? "text-[#FFF]"
                          : "text-[#EDEDF2] opacity-70 hover:opacity-100"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}

              {/* Dropdown */}
              <li
                className="font-lucida text-[#EDEDF2] font-normal text-[16px] cursor-pointer relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="flex items-center gap-1">
                  <span
                    className={`transition duration-200 ${
                      isDropdownActive
                        ? "text-[#FAA312]"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    Others
                  </span>
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
                      <Link href="/careers">Careers</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 text-black cursor-pointer">
                      <Link href="/sector">Sectors</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 text-black cursor-pointer">
                      <Link href="/legal">Legal</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Language + Auth Buttons */}
          <div className="w-[30%] flex justify-end gap-x-6 items-center">
            <LanguageSelect />
            <button className="py-[10px] px-4 rounded-[12px] border border-[#FAA312] text-white font-arial text-[18px] transition duration-500 ease-in-out hover:bg-[linear-gradient(315deg,_#FAA312_-148.02%,_rgba(13,_13,_13,_0.00)_197.26%)] cursor-pointer">
              Log in
            </button>
            <button className="py-[10px] px-4 rounded-[12px] border border-[#FAA312] text-white font-arial text-[18px] transition duration-500 ease-in-out hover:bg-[linear-gradient(315deg,_#FAA312_-148.02%,_rgba(13,_13,_13,_0.00)_197.26%)] cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
