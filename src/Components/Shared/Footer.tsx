"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { Clock, Home, Phone } from "lucide-react";
import useFetchData from "@/Hooks/UseFetchData";

const Footer = () => {
  // Fetch social links
  const {
    data: socialData,
  } = useFetchData<{
    success: boolean;
    data: {
      id: number;
      social_media: string;
      social_media_icon: string;
      profile_link: string;
      status: string;
    }[];
  }>("/social-links");

  // Fetch site settings
  const {
    data: siteData,
  } = useFetchData<{
    success: boolean;
    data: {
      logo: string;
      copyright_text: string;
      phone: string;
      phone2: string;
      address: string;
      address2: string;
      opening_time: string;
      opening_time2: string;
      opening_time3: string;
      opening_time4: string;
    };
  }>("/site-settings");

  const settings = siteData?.data;
  const logoURL = settings?.logo
    ? `${process.env.NEXT_PUBLIC_IMG_URL || ""}${settings.logo}`
    : "/Logo.png";

  return (
    <footer className="bg-[#32203C] rounded-t-[36px] border-t-[3px] border-[#C83C7C] py-[60px] px-5 2xl:px-0">
      <Container>
        <div className="flex flex-wrap justify-between gap-y-10">
          {/* Logo + Spain Office */}
          <div className="flex flex-col lg:gap-10 gap-3 max-w-sm">
            <Image
              src={logoURL}
              alt="logo"
              width={220}
              height={87}
              className="w-full h-auto object-contain"
              priority
            />
            <ul className="flex flex-col gap-3 text-white text-[14px] font-lucida">
              <li className="flex gap-2">
                <Phone size={16} /> {settings?.phone || "Spain Contact"}
              </li>
              <li className="flex gap-2">
                <Home size={16} /> {settings?.address}
              </li>
              <li className="flex gap-2">
                <Clock size={16} /> {settings?.opening_time}
              </li>
              <li className="flex gap-2">
                <Clock size={16} /> {settings?.opening_time2}
              </li>
            </ul>
          </div>

          {/* Romania Office */}
          <div className="flex flex-col lg:gap-14 gap-3 max-w-sm ">
            <div className="invisible md:visible block md:h-[56px] h-10" />
            <ul className="flex flex-col gap-3 text-white text-[14px] font-lucida">
              <li className="flex gap-2">
                <Phone size={16} /> {settings?.phone2 || "Romania Contact"}
              </li>
              <li className="flex gap-2">
                <Home size={16} /> {settings?.address2}
              </li>
              <li className="flex gap-2">
                <Clock size={16} /> {settings?.opening_time3}
              </li>
              <li className="flex gap-2">
                <Clock size={16} /> {settings?.opening_time4}
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

          {/* Legal */}
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
            {socialData?.data?.map(link => (
              <Link
                key={link.id}
                href={link.profile_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center group hover:bg-[#C83C7C] transition duration-300 cursor-pointer">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_URL || ""}${
                      link.social_media_icon
                    }`}
                    alt={link.social_media}
                    width={20}
                    height={20}
                    className="group-hover:invert transition duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center">
          <p className="font-lucida text-white text-sm sm:text-base">
            {settings?.copyright_text || "© 2025 SAVA. All Rights Reserved."}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
