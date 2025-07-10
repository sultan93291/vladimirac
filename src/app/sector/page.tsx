"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/Components/Shared/Container";
import Sectorcard from "@/Components/Reusable/Sectorcard";
import useFetchData from "@/Hooks/UseFetchData";
import Spinner from "@/Components/Shared/Spinner";

interface Sector {
  id: number;
  title: string;
  sub_title: string;
  icon: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: Sector[];
  code: number;
}

const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";

const Page = () => {
  const { data: apiResponse, isLoading } =
    useFetchData<ApiResponse>("/get_sectors");

  if (isLoading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  const sectors = apiResponse?.data || [];

  return (
    <section className="lg:py-20 py-8 2xl:px-0 px-5">
      <Container>
        <h2 className="text-[30px] md:text-[48px] lg:text-[64px] font-bold text-[#FFF] font-arial text-center leading-tight">
          Sectors We Serve
        </h2>

        <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <Link
              key={sector.id}
              href={`/sector/${sector.id}?title=${encodeURIComponent(
                sector.title
              )}`}
            >
              <div className="cursor-pointer">
                <Sectorcard
                  index={index} // ✅ fixed: pass index here
                  icon={
                    <Image
                      src={baseURL + sector.icon}
                      alt={sector.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  }
                  title={sector.title}
                  description={sector.sub_title}
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Page;
