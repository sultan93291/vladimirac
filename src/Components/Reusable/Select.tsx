import React from "react";
import {
  Select as ShadSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
  bordered?: boolean; // New optional prop
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = "Select an option",
  label,
  onChange,
  value,
  bordered = true, 
}) => {
  return (
    <ShadSelect value={value} onValueChange={onChange}>
      <SelectTrigger
        className={`w-[180px] ${
          bordered ? "border border-[#fff]" : "border-none"
        }`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShadSelect>
  );
};

export default CustomSelect;
