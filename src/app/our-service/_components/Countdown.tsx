import React from "react";
import Countdownreusable from "@/Components/Reusable/Countdownreusable";

const Countdown = () => {
  return (
    <section className="flex justify-between">
      <Countdownreusable title=" 98% " para="on-time delivery" />
      <Countdownreusable
        title="14 years"
        para="Trusted Operational Experience"
      />
      <Countdownreusable
        title="Euro 6 Fleet"
        para="Eco-Compliant Trucks"
        showBorder={false}
      />
    </section>
  );
};
export default Countdown;
