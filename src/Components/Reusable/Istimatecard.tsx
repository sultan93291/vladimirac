import React from "react";

interface EstimateCardProps {
  backgroundImage: string;
  title?: string;
  buttonText?: string;
  onClick?: () => void;
  buttonColor?: string;
  textColor?: string;
}

const EstimateCard: React.FC<EstimateCardProps> = ({
  backgroundImage,
  title = "Estimate Price",
  buttonText = "Get Estimate",
  onClick,
  buttonColor = "#13213C",
  textColor = "#FFFFFF",
}) => {
  return (
    <div
      className="relative w-full h-[280px] rounded-[16px] bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3 className="text-[32px] font-arial font-bold mb-4 text-white">
        {title}
      </h3>
      <button
        onClick={onClick}
        style={{ backgroundColor: buttonColor, color: textColor }}
        className="rounded-[12px] w-[250px] py-3 font-lucida font-bold cursor-pointer text-[32px]"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default EstimateCard;
