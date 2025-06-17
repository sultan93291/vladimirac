"use client";

import Container from "@/Components/Shared/Container";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../../Components/Maps"), {
  ssr: false,
});

const Page = () => {
  return (
    <section className="lg:py-20 py-8 2xl:px-0 px-5" style={{ backgroundColor: "#13213C" }}>
      <Container>
        <h2 className="text-center font-bold text-white font-arial lg:text-[64px] text-[30px]">
          Destinations covered
        </h2>

        <div
          className="mt-12 h-[500px] w-full rounded-lg overflow-hidden border border-gray-300"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <MapComponent />
        </div>
      </Container>
    </section>
  );
};

export default Page;
