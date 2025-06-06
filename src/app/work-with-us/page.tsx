import React from "react";
import Container from "@/Components/Shared/Container";
import Workwithuscard from "@/Components/Reusable/Workwithuscard";


const page = () => {
  return (
    <section className="pt-20">
      <Container>
        <h2 className="text-[64px] font-bold text-white font-arial text-center">
          Work With Us
        </h2>
        <div className="mt-[60px]">
          <h4 className="text-center text-white font-arial text-[32px] font-normal">
            Find your perfect position
          </h4>
          <div className="flex justify-between gap-x-8 mt-[60px]">
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
