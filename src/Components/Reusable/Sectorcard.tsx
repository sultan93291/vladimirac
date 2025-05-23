import { ReactNode } from "react";

interface Sectorcardprops {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void; 
}

const Sectorcard: React.FC<Sectorcardprops> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-[rgba(200,60,124,0.10)] px-6 py-8 rounded-[12px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="flex gap-x-2 items-center">
        <div className="h-10 w-10 rounded-full border border-white flex justify-center items-center">
          {icon}
        </div>
        <h3 className="text-[32px] font-arial font-normal text-[#FFF]">
          {title}
        </h3>
      </div>
      <p className="text-[18px] font-lucida font-normal text-[#BCBCBC] pt-3">
        {description}
      </p>
    </div>
  );
};

export default Sectorcard;
