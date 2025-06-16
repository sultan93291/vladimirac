import React from "react";
import Container from "@/Components/Shared/Container";
import Workwithuscard from "@/Components/Reusable/Workwithuscard";

const page = () => {
  return (
    <section className="lg:py-20 py-8 2xl:px-0 px-5">
      <Container>
        <h2 className="lg:text-[64px] text-[30px] font-bold text-white font-arial text-center">
          Work With Us
        </h2>
        <div className="lg:mt-[60px] mt-5">
          <h4 className="text-center text-white font-arial lg:text-[32px] text-[24px] font-normal">
            Find your perfect position
          </h4>
          <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Workwithuscard
              backgroundImage="/work.png"
              title="Freight Forwarder"
              subtitle="Logistics / Road Export"
              location="Castellar del Vallès, Spain"
            />
            <Workwithuscard
              backgroundImage="/work.png"
              title="Road Export Coordinator"
              subtitle="Logistics / Inventory Management"
              location="Castellar del Vallès, Spain"
            />
            <Workwithuscard
              backgroundImage="/work.png"
              title="Finance Assistant"
              subtitle="Finance"
              location="Cluj-Napoca, Romania"
            />
            <Workwithuscard
              backgroundImage="/work.png"
              title="Forklift Operator"
              subtitle="Warehouse"
              location="Castellar del Vallès, Spain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
