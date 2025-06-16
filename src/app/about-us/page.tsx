import Container from "@/Components/Shared/Container";
import React from "react";
import Banner from "./components/Banner";
import Team from "./components/Team";
import Operations from "./components/Operations";
import History from "./components/History";

const page = () => {
  return (
    <section className="lg:pt-20 pt-10 2xl:px-0 px-5">
      <Container>
        <h1 className="lg:text-[64px] text-[35px] font-bold text-center font-arial text-white">
          About Us
        </h1>
        <div className="lg:mt-[60px] mt-8">
          <Banner />
        </div>
        <div className="lg:py-[120px] py-[50px]">
          <Team />
        </div>
      </Container>
      <Operations />
      <Container>
      <History />
      </Container>
    </section>
  );
};

export default page;
