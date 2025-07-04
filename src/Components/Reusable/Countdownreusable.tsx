import React from "react";

interface CountdownProps {
  title: string;
  para: string;
  showBorder?: boolean;
}

const CountdownReusable: React.FC<CountdownProps> = ({
  title,
  para,
  showBorder = true,
}) => {
  return (
    <div
      className={`${
        showBorder ? "border-r-2 border-[#FAA312] mx-auto xl:w-[500px] w-fit" : ""
      } px-4`}
    >
      <h2 className="text-[#FAA312] xl:text-[80px] text-[40px] font-bold font-arial text-center">
        {title}
      </h2>
      <p className="lg:text-[28px] text-[22px] font-lucida text-[#FFF] font-normal text-center">
        {para}
      </p>
    </div>
  );
};

export default CountdownReusable;
