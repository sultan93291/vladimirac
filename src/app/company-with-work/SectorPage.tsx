"use client";

import { useSearchParams } from "next/navigation";

const SectorPage = () => {
  const searchParams = useSearchParams();
  const sector = searchParams.get("sector");

  return (
    <section className="py-20">
      <h1 className="text-[48px] font-bold text-center text-white">
        {sector ? sector : "Sector Details"}
      </h1>
    </section>
  );
};

export default SectorPage;
