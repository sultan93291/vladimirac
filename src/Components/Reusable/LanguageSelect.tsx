"use client";

import Select from "react-select";
import Image from "next/image";
import { useState } from "react";

const options = [
  {
    value: "en",
    label: (
      <div className="flex items-center gap-3">
        <Image
          src="/flag.png"
          alt="EN"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-[#F2F2F2] text-[16px] font-lucida font-normal">
          English
        </span>
      </div>
    ),
  },
  {
    value: "ro",
    label: (
      <div className="flex items-center gap-2">
        <Image
          src="/romania.png"
          alt="RO"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-[#F2F2F2] text-[16px] font-lucida font-normal">
          Romania
        </span>
      </div>
    ),
  },
  {
    value: "es",
    label: (
      <div className="flex items-center gap-3">
        <Image
          src="/spain.png"
          alt="ES"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-[#F2F2F2] text-[16px] font-lucida font-normal">
          Spain
        </span>
      </div>
    ),
  },
];

const LanguageSelect = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="w-40">
      <Select
        options={options}
        defaultValue={selectedOption}
        onChange={value => setSelectedOption(value!)}
        classNamePrefix="react-select"
        styles={{
          control: base => ({
            ...base,
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none",
            cursor: "pointer",
          }),
          menu: base => ({
            ...base,
            backgroundColor: "#32203C",
            borderRadius: "8px",
            zIndex: 9999,
            padding: "4px 0",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#3e2a49" : "transparent",
            color: "#F2F2F2",
            cursor: "pointer",
          }),
          dropdownIndicator: base => ({
            ...base,
            color: "#F2F2F2",
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
          singleValue: base => ({
            ...base,
            color: "#F2F2F2",
          }),
        }}
      />
    </div>
  );
};

export default LanguageSelect;
