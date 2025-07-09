"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Authbanner = () => {
  const t = useTranslations("AuthBanner");

  return (
    <div className="w-full h-screen bg-[url('/authbg.png')] bg-cover bg-center bg-no-repeat p-[120px]">
      <Image
        src="/Logo.png"
        alt="logo"
        width={300}
        height={87}
        className="object-contain"
      />
      <h3 className="text-[64px] font-arial font-normal text-white pt-[60px]">
        {t("heading")}
      </h3>
      <p className="font-lucida text-white text-[24px] font-normal pt-[130px]">
        {t("subheading")}
      </p>
    </div>
  );
};

export default Authbanner;
