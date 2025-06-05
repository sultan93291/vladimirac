"use client";

import Select from "react-select";
import Image from "next/image";
import { useState } from "react";

interface LanguageSelectProps {
  showLabel?: boolean;
  showBorder?: boolean;
}

const flagOptions = [
  {
    value: "en",
    icon: "/flag.png",
    name: "English",
  },
  {
    value: "ro",
    icon: "/romania.png",
    name: "Romania",
  },
  {
    value: "es",
    icon: "/spain.png",
    name: "Spain",
  },
];

const LanguageSelect = ({
  showLabel = true,
  showBorder = false,
}: LanguageSelectProps) => {
  const formattedOptions = flagOptions.map(option => ({
    value: option.value,
    label: (
      <div className="flex items-center gap-2">
        <Image
          src={option.icon}
          alt={option.name}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        {showLabel && (
          <span className="text-[#F2F2F2] text-[16px] font-lucida font-normal">
            {option.name}
          </span>
        )}
      </div>
    ),
  }));

  const [selectedOption, setSelectedOption] = useState(formattedOptions[0]);

  return (
    <div className="w-40">
      <Select
        options={formattedOptions}
        defaultValue={selectedOption}
        onChange={value => setSelectedOption(value!)}
        classNamePrefix="react-select"
        styles={{
          control: base => ({
            ...base,
            backgroundColor: "transparent",
            border: showBorder ? "1px solid #666" : "none",
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
