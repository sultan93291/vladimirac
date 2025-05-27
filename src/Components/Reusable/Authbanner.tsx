import Image from "next/image";
import React from "react";

const Authbanner = () => {
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
        Reliable Logistics & Supply Chain Solutions
      </h3>
      <p className="font-lucida text-white text-[24px] font-normal pt-[130px]">
        We deliver your goods safely, quickly, and efficiently — across the
        europe.
      </p>
    </div>
  );
};

export default Authbanner;
