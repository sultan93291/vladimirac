"use client";
import React from "react";
import Link from "next/link";
import Container from "@/Components/Shared/Container";
import Sectorcard from "@/Components/Reusable/Sectorcard";
import {
  Chemicals,
  Consumption,
  Energy,
  Fairs,
  Industrial,
  Sectoricon,
  Tech,
} from "@/Components/Shared/Icons";

const sectors = [
  {
    icon: <Sectoricon />,
    title: "Automotive",
    description: "Secure, on-time delivery of chassis & parts",
  },
  {
    icon: <Sectoricon />,
    title: "Health",
    description: "GxP-certified cold chain for medicines & devices",
  },
  {
    icon: <Tech />,
    title: "Technology",
    description: "ESD-protected transit for sensitive electronics.",
  },
  {
    icon: <Consumption />,
    title: "Consumption",
    description: "Fast, accurate FMCG distribution with shelf-life care",
  },
  {
    icon: <Chemicals />,
    title: "Chemicals",
    description: "Fully ADR-compliant handling of your hazardous goods",
  },
  {
    icon: <Industrial />,
    title: "Industrial",
    description: "Engineered transport for oversized machinery.",
  },
  {
    icon: <Energy />,
    title: "Energy",
    description: "Safe handling & delivery of heavy energy assets",
  },
  {
    icon: <Fairs />,
    title: "Fairs",
    description: "Secure, on-time delivery of chassis & parts",
  },
];

const Page = () => {
  return (
    <section className="lg:py-20 py-8 2xl:px-0 px-5">
      <Container>
        <h2 className="text-[30px] md:text-[48px] lg:text-[64px] font-bold text-[#FFF] font-arial text-center leading-tight">
          Sectors We Serve
        </h2>
        <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <Link
              key={index}
              href={`/company-with-work?sector=${encodeURIComponent(
                sector.title
              )}`}
              passHref
            >
              <div>
                <Sectorcard
                  icon={sector.icon}
                  title={sector.title}
                  description={sector.description}
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
