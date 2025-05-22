import Image from "next/image";
import Container from "./Container";
import { Clock, Home, Phone } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#32203C] rounded-t-[36px] border-t-[3px] border-[#C83C7C] py-[60px]">
      <Container>
        <div className="flex  justify-between">
          <div className="">
            <div className="mb-6">
              <Image
                src="/Logo.png"
                alt="logo"
                width={300}
                height={87}
                className="w-full h-full"
              />
            </div>
            <ul className="flex flex-col gap-3 my-7">
              <li className="flex gap-x-2 font-lucida text-[16px] font-normal text-[#fff]">
                <Phone className="text-white" /> Spain Contract : +34 935 16 71
                71
              </li>
              <li className="flex gap-x-2 font-lucida text-[16px] font-normal text-[#fff]">
                <Home className="text-white" /> Carrer del Empordá 1-7, 08211
                Castellar del Valles
              </li>
              <li className="flex gap-x-2 font-lucida text-[16px] font-normal text-[#fff]">
                <Clock className="text-white" /> Mon-Fri: 9:00 - 18:00
              </li>
              <li className="flex gap-x-2 font-lucida text-[16px] font-normal text-[#fff]">
                <Clock className="text-white" /> Saturday: 9:00 - 12:00
              </li>
            </ul>
          </div>

          <ul className="flex flex-col gap-3 justify-end my-7">
            <li className="flex gap-x-2 font-lucida text-[16px] font-normal text-[#fff]">
              <Phone className="text-white" /> Spain Contract : +34 935 16 71 71
            </li>
            <li className="flex gap-x-2 font-lucida text-[16px] font-normal text-[#fff]">
              <Home className="text-white" /> Carrer del Empordá 1-7, 08211
              Castellar del Valles
            </li>
            <li className="flex gap-x-2 font-lucida text-[16px] font-normal text-[#fff]">
              <Clock className="text-white" /> Mon-Fri: 9:00 - 18:00
            </li>
            <li className="flex gap-x-2 font-lucida text-[16px] font-normal text-[#fff]">
              <Clock className="text-white" /> Saturday: 9:00 - 12:00
            </li>
          </ul>

          <ul className="flex flex-col gap-5">
            <li className="font-jost text-[24px] font-normal text-[#C83C7C]">
              Services
            </li>
            <li className="font-lucida text-[16px] font-normal text-[#BCBCBC] cursor-pointer hover:underline">
              FTL Transport
            </li>
            <li className="font-lucida text-[16px] font-normal text-[#BCBCBC] cursor-pointer hover:underline">
              LTL Transport
            </li>
            <li className="font-lucida text-[16px] font-normal text-[#BCBCBC] cursor-pointer hover:underline">
              Specilaized Transport
            </li>
            <li className="font-lucida text-[16px] font-normal text-[#BCBCBC] cursor-pointer hover:underline">
              Werehousing
            </li>
            <li className="font-lucida text-[16px] font-normal text-[#BCBCBC] cursor-pointer hover:underline">
              Out Of EU
            </li>
          </ul>

          <ul className="flex flex-col gap-5">
            <li className="font-jost text-[24px] font-normal text-[#C83C7C]">
              Legal & Certifications
            </li>
            <li className="font-lucida text-[16px] font-normal text-[#BCBCBC] cursor-pointer hover:underline">
              Privacy Policy
            </li>
            <li className="font-lucida text-[16px] font-normal text-[#BCBCBC] cursor-pointer hover:underline">
              Terms of Service
            </li>
            <li className="font-lucida text-[16px] font-normal text-[#BCBCBC] cursor-pointer hover:underline">
              Certifications
            </li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="h-8 w-8 rounded-full bg-white flex justify-center items-center group hover:bg-[#C83C7C] transition duration-300 cursor-pointer">
              <FaFacebookF className="text-[#C83C7C] group-hover:text-white transition duration-300" />
            </li>
            <li className="h-8 w-8 rounded-full bg-white flex justify-center items-center group hover:bg-[#C83C7C] transition duration-300 cursor-pointer">
              <RiTwitterXLine className="text-[#C83C7C] group-hover:text-white transition duration-300" />
            </li>
            <li className="h-8 w-8 rounded-full bg-white flex justify-center items-center group hover:bg-[#C83C7C] transition duration-300 cursor-pointer">
              <FaYoutube className="text-[#C83C7C] group-hover:text-white transition duration-300" />
            </li>
            <li className="h-8 w-8 rounded-full bg-white flex justify-center items-center group hover:bg-[#C83C7C] transition duration-300 cursor-pointer">
              <FaInstagram className="text-[#C83C7C] group-hover:text-white transition duration-300" />
            </li>
            <li className="h-8 w-8 rounded-full bg-white flex justify-center items-center group hover:bg-[#C83C7C] transition duration-300 cursor-pointer">
              <FaMedium className="text-[#C83C7C] group-hover:text-white transition duration-300" />
            </li>
            <li className="h-8 w-8 rounded-full bg-white flex justify-center items-center group hover:bg-[#C83C7C] transition duration-300 cursor-pointer">
              <FaLinkedinIn className="text-[#C83C7C] group-hover:text-white transition duration-300" />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
