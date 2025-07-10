"use client";

import Select from "react-select";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface LanguageSelectProps {
  showLabel?: boolean;
  showBorder?: boolean;
}

interface RawOption {
  value: string;
  icon: string;
  name: string;
}

interface FormattedOption {
  value: string;
  label: React.ReactNode;
}

// Original language data
const rawFlagOptions: RawOption[] = [
  {
    value: "en",
    icon: "/flag.png",
    name: "English",
  },
  {
    value: "ro",
    icon: "/romania.png",
    name: "Romanian",
  },
  {
    value: "es",
    icon: "/spain.png",
    name: "Spanish",
  },
];

// Formatted options for react-select
const formattedOptions: FormattedOption[] = rawFlagOptions.map(option => ({
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
      <span className="text-[#F2F2F2] text-[16px] font-lucida font-normal">
        {option.name}
      </span>
    </div>
  ),
}));

const LanguageSelect = ({ showBorder = false }: LanguageSelectProps) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<FormattedOption | null>(
    null
  );

  useEffect(() => {
    const lang = Cookies.get("lang") || "en";
    const found = formattedOptions.find(opt => opt.value === lang);
    if (found) setSelectedOption(found);
  }, []);

  const handleChange = (option: FormattedOption | null) => {
    if (!option) return;
    setSelectedOption(option);
    Cookies.set("lang", option.value, { path: "/" });
    router.refresh();
  };

  return (
    <div className="w-40">
      <Select
        options={formattedOptions}
        value={selectedOption}
        onChange={handleChange}
        classNamePrefix="react-select"
        styles={{
          control: base => ({
            ...base,
            backgroundColor: "transparent",
            border: showBorder ? "1px solid #fff" : "none",
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
