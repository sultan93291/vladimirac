"use client";

import { useSearchParams } from "next/navigation";

const SectorPage = () => {
  const searchParams = useSearchParams();
  const sector = searchParams.get("sector");

  return (
    <section className="">
      <h1 className="lg:text-[64px] text-[40px] font-bold text-center font-arial text-white">
        {sector ? sector : "Sector Details"}
      </h1>
    </section>
  );
};

export default SectorPage;
