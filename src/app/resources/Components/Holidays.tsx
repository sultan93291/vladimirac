import LanguageSelect from "@/Components/Reusable/LanguageSelect";
import CustomSelect from "@/Components/Reusable/Select";
import React from "react";

const Yearoption = [
  { label: "2025", value: "2025" },
  { label: "2026", value: "2026" },
  { label: "2027", value: "2027" },
  { label: "2028", value: "2028" },
  { label: "2029", value: "2029" },
];
const Monthoption = [
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
];

const Holidays = () => {
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-2 items-center">
        <h3 className="text-white font-nunito text-[29px]">Country : </h3>
        <LanguageSelect showBorder={true} showLabel={false} />
      </div>
      <div className="">
        <CustomSelect
          options={Yearoption}
          label="Fruits"
          placeholder="Select a year"
          value={year}
          onChange={setYear}
        />
      </div>
      <div className="">
        <CustomSelect
          options={Monthoption}
          label="Fruits"
          placeholder="Select a Month"
          value={month}
          onChange={setMonth}
        />
      </div>
      <div className="">
        <input
          type="search"
          placeholder="search "
          className="bg-[#C83C7C] rounded-[8px] py-2 px-4 text-[#F9F9F9] font-lucida w-[150px]"
        />
      </div>
    </div>
  );
};

export default Holidays;
