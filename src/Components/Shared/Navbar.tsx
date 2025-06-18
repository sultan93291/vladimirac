"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { GiCrossedSabres } from "react-icons/gi";

const LanguageSelect = dynamic(() => import("../Reusable/LanguageSelect"), {
  ssr: false,
});

const Navbar = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Our services", href: "/our-service" },
    { label: "Company", href: "/about-us" },
    { label: "Resources", href: "/resources" },
    { label: "Budget", href: "/budget" },
    { label: "About us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isDropdownActive =
    pathname.startsWith("/careers") ||
    pathname.startsWith("/sector") ||
    pathname.startsWith("/legal");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setShowDropdown(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="lg:py-6 py-3 fixed top-0 left-0 w-full z-50 2xl:px-0 px-5 bg-[#32203C]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-5">
            <IoMenu
              className="xl:hidden bg-white p-2 rounded-lg text-3xl cursor-pointer hover:bg-pink-500 hover:text-white duration-300 text-[#32203C]"
              onClick={() => setIsMenuOpen(true)}
            />
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

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center justify-center gap-10 ml-5">
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-white font-arial text-[16px] hover:text-[#FAA312] cursor-pointer ${
                  pathname === item.href ? "text-[#FAA312]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Others Dropdown for desktop */}
            <div
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div
                className={`flex items-center gap-1 text-white text-[16px] font-arial cursor-pointer ${
                  isDropdownActive ? "text-[#FAA312]" : ""
                }`}
              >
                Others
                <ChevronDown size={14} />
              </div>

              {showDropdown && (
                <ul className="absolute top-full left-0 mt-2 bg-[#3b2d46] text-white shadow-lg rounded-md py-2 px-4 z-50">
                  <li>
                    <Link
                      href="/careers"
                      className="block py-1 hover:text-[#FAA312]"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sector"
                      className="block py-1 hover:text-[#FAA312]"
                    >
                      Sectors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal"
                      className="block py-1 hover:text-[#FAA312]"
                    >
                      Legal
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Right section */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelect />
            <Link href="/sign-in">
              <button className="px-4 py-3 border cursor-pointer font-arial border-[#FAA312] rounded-md text-white text-sm hover:bg-[#FAA312] transition">
                Log in
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="px-4 py-3 cursor-pointer font-arial border border-[#FAA312] rounded-md text-white text-sm bg-[#FAA312]/20 hover:bg-[#FAA312] transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/10 bg-opacity-40 z-40" />
      )}

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full lg:w-[30%] w-[70%] bg-[#32203C] z-[999] transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-end items-center border-b border-gray-700">
          <button
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <GiCrossedSabres />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6">
          {navItems.map(item => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-lucida ${
                  pathname === item.href ? "text-[#FAA312]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Others in mobile drawer */}
          <li className="font-lucida text-white text-lg">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShowDropdown(prev => !prev)}
            >
              <span
                className={`transition duration-200 ${
                  isDropdownActive ? "text-[#FAA312]" : "opacity-80"
                }`}
              >
                Others
              </span>
              <ChevronDown size={16} />
            </div>

            {showDropdown && (
              <ul className="mt-2 ml-4 space-y-2">
                <li>
                  <Link
                    href="/careers"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white opacity-80 hover:opacity-100"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sector"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white opacity-80 hover:opacity-100"
                  >
                    Sectors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white opacity-80 hover:opacity-100"
                  >
                    Legal
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="mt-auto px-6 pb-6 flex flex-col gap-4">
          <LanguageSelect />
          <Link href="/sign-in">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-2 rounded-[12px] border border-[#FAA312] text-white font-arial text-[18px] hover:bg-[#FAA312] transition"
            >
              Log in
            </button>
          </Link>
          <Link href="/sign-up">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-2 rounded-[12px] border border-[#FAA312] text-white font-arial text-[18px] hover:bg-[#FAA312] transition"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
