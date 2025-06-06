import React from "react";
import { IconType } from "react-icons";

interface RegulationsCardProps {
  title: string;
  icon: IconType;
  points: string[];
}

const RegulationsCard: React.FC<RegulationsCardProps> = ({
  title,
  icon: Icon,
  points,
}) => {
  return (
    <div className="p-6 bg-[#32203C] rounded-[8px] border border-[#C83C7C] text-white w-[357px]">
      <div className="flex items-center gap-x-2 mb-4 text-[#fff]">
        <Icon className="text-[20px] text-[#C83C7C]" />
        <h3 className="text-[18px] font-lucida font-semibold">{title}</h3>
      </div>
      <ul className="list-disc pl-4 space-y-3 text-[15px] font-lucida text-white">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default RegulationsCard;
