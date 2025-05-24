import Container from "@/Components/Shared/Container";
import React from "react";
import Banner from "./components/Banner";
import Team from "./components/Team";
import Operations from "./components/Operations";

const page = () => {
  return (
    <section className="pt-20">
      <Container>
        <h1 className="text-[64px] font-bold text-center font-arial text-white">
          About Us
        </h1>
        <div className="mt-[60px]">
          <Banner />
        </div>
        <div className="py-[120px]">
          <Team />
        </div>
      </Container>
      <Operations />
      {/* <History /> */}
    </section>
  );
};

export default page;
