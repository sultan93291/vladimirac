"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const sector = searchParams.get("sector");

  return (
    <section className="py-20">
      <h1 className="text-[48px] font-bold text-center text-white">
        {sector ? `${sector}` : "Sector Details"}
      </h1>
      {/* You can now use `sector` to load specific data, show content, etc. */}
    </section>
  );
};

export default page;
