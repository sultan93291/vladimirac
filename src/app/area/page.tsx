"use client";

import Container from "@/Components/Shared/Container";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../../Components/Maps"), {
  ssr: false,
});

const Page = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#13213C" }}>
      <Container>
        <h2 className="text-center font-bold text-white font-arial text-[64px]">
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
