"use client";

import Image from "next/image";
import Container from "./Container";
import { Clock, Home, Phone } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaMedium } from "react-icons/fa6";

const socialIconMap = {
  facebook: (
    <FaFacebookF className="text-[#C83C7C] group-hover:text-white transition duration-300" />
  ),
  twitter: (
    <RiTwitterXLine className="text-[#C83C7C] group-hover:text-white transition duration-300" />
  ),
  youtube: (
    <FaYoutube className="text-[#C83C7C] group-hover:text-white transition duration-300" />
  ),
  instagram: (
    <FaInstagram className="text-[#C83C7C] group-hover:text-white transition duration-300" />
  ),
  medium: (
    <FaMedium className="text-[#C83C7C] group-hover:text-white transition duration-300" />
  ),
  linkedin: (
    <FaLinkedinIn className="text-[#C83C7C] group-hover:text-white transition duration-300" />
  ),
};

const Footer = () => {
  return (
    <footer className="bg-[#32203C] rounded-t-[36px] border-t-[3px] border-[#C83C7C] py-[60px] 2xl:px-0 px-5">
      <Container>
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-y-10">
          {/* Logo + Spain Office */}
          <div className="flex flex-col lg:gap-10 gap-3">
            <Image
              src="/Logo.png"
              alt="logo"
              width={220}
              height={87}
              className="w-full h-auto"
            />
            <ul className="flex flex-col gap-3 text-white text-[14px] font-lucida">
              <li className="flex gap-2">
                <Phone size={16} /> Spain Contact : +34 935 16 71 71
              </li>
              <li className="flex gap-2">
                <Home size={16} /> Carrer del Empordà 1–7, 08211 Castellar del
                Valles
              </li>
              <li className="flex gap-2">
                <Clock size={16} /> Mon-Fri: 9:00 – 18:00
              </li>
              <li className="flex gap-2">
                <Clock size={16} /> Saturday: 9:00 – 12:00
              </li>
            </ul>
          </div>

          {/* Romania Office */}
          <div className="flex flex-col lg:gap-14 gap-3">
            <div className="invisible md:visible block md:h-[56px] h-10" />
            <ul className="flex flex-col gap-3 text-white text-[14px] font-lucida">
              <li className="flex gap-2">
                <Phone size={16} /> Romania Contact : +40 264 43 43 98
              </li>
              <li className="flex gap-2">
                <Home size={16} /> Strada Suceava 72, 400394 Cluj–Napoca (CLUJ)
              </li>
              <li className="flex gap-2">
                <Clock size={16} /> Mon-Fri: 9:00 – 18:00
              </li>
              <li className="flex gap-2">
                <Clock size={16} /> Saturday: 9:00 – 12:00
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-[180px]">
            <h3 className="font-jost text-[18px] text-[#C83C7C] mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-6 text-[#BCBCBC] text-[14px] font-lucida">
              {[
                "FTL Transport",
                "LTL Transport",
                "Specialized Transport",
                "Werehousing",
                "Out Of EU",
              ].map(service => (
                <li key={service} className="hover:underline cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Certifications */}
          <div className="min-w-[180px]">
            <h3 className="font-jost text-[18px] text-[#C83C7C] mb-4">
              Legal & Certifications
            </h3>
            <ul className="flex flex-col gap-6 text-[#BCBCBC] text-[14px] font-lucida">
              {["Privacy Policy", "Terms of Service", "Certifications"].map(
                item => (
                  <li key={item} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="lg:flex lg:flex-col flex items-center gap-3 mt-2">
            {Object.entries(socialIconMap).map(([key, Icon]) => (
              <div
                key={key}
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center group hover:bg-[#C83C7C] transition duration-300 cursor-pointer"
              >
                {Icon}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 text-center">
          <p className="font-lucida text-white text-sm sm:text-base">
            Copyright & Year: © 2025 SAVA. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
