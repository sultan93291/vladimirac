import Image from "next/image";
import Container from "./Container";
import { Clock, Home, Phone } from "lucide-react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#32203C] rounded-t-[36px] border-t-[3px] border-[#C83C7C] py-[60px] 2xl:px-0 px-5">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between flex-wrap">
          {/* Logo + Info */}
          <div className="md:max-w-[300px]">
            <div className="mb-6 w-full max-w-[220px] md:max-w-[300px]">
              <Image
                src="/Logo.png"
                alt="logo"
                width={300}
                height={87}
                className="w-full h-auto"
              />
            </div>
            <ul className="flex flex-col gap-3 my-4">
              <li className="flex gap-x-2 font-lucida text-[16px] text-white">
                <Phone className="text-white" /> +40 264 43 43 98
              </li>
              <li className="flex gap-x-2 font-lucida text-[16px] text-white">
                <Home className="text-white" />
                Strada Suceava 72, 400394 Cluj-Napoca (CLUJ)
              </li>
              <li className="flex gap-x-2 font-lucida text-[16px] text-white">
                <Clock className="text-white" /> Mon-Fri: 9:00 - 18:00
              </li>
              <li className="flex gap-x-2 font-lucida text-[16px] text-white">
                <Clock className="text-white" /> Saturday: 9:00 - 12:00
              </li>
            </ul>
          </div>

          {/* Services */}
          <ul className="flex flex-col gap-3 min-w-[150px]">
            <li className="font-jost text-[24px] text-[#C83C7C]">Services</li>
            {[
              "FTL Transport",
              "LTL Transport",
              "Specilaized Transport",
              "Werehousing",
              "Out Of EU",
            ].map(item => (
              <li
                key={item}
                className="font-lucida text-[16px] text-[#BCBCBC] cursor-pointer hover:underline"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Legal */}
          <ul className="flex flex-col gap-3 min-w-[150px]">
            <li className="font-jost text-[24px] text-[#C83C7C]">
              Legal & Certifications
            </li>
            {["Privacy Policy", "Terms of Service", "Certifications"].map(
              item => (
                <li
                  key={item}
                  className="font-lucida text-[16px] text-[#BCBCBC] cursor-pointer hover:underline"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Social Icons */}
          <ul className="flex gap-3 flex-wrap">
            {[
              FaFacebookF,
              RiTwitterXLine,
              FaYoutube,
              FaInstagram,
              FaMedium,
              FaLinkedinIn,
            ].map((Icon, index) => (
              <li
                key={index}
                className="h-8 w-8 rounded-full bg-white flex justify-center items-center group hover:bg-[#C83C7C] transition duration-300 cursor-pointer"
              >
                <Icon className="text-[#C83C7C] group-hover:text-white transition duration-300" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <p className="font-lucida text-white text-sm sm:text-base">
            © 2025 SAVA. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
