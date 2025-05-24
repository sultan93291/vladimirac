import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Image
        src="/aboutbanner.png"
        alt="aboutbanner"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <p className="text-[24px] font-lucida font-normal text-white pt-10 w-full">
        At <span className="text-[#C83C7C]">SAVA Logistics</span>, we’re all
        about making transport easy and reliable across Europe. Our fantastic
        team is here to provide great service, helping businesses with smooth
        road transport, customs support, and smart logistics planning. Whether
        you’re shipping from Spain to Germany or Italy to Romania, we’ve got
        your back with CMR-insured shipments, a modern fleet, and loads of
        market know-how. We don’t just move things — we create lasting
        partnerships, ensuring every delivery arrives safely, on time, and with
        a friendly touch.
      </p>
    </div>
  );
};

export default Banner;
