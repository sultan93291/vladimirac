import Image from "next/image";

interface WorkcardProps {
  imageSrc: string;
  altText: string;
  height?: number;
  width?: number;
}

const Workcard: React.FC<WorkcardProps> = ({
  imageSrc,
  altText,
  height = 200,
  width = 300,
}) => {
  return (
    <div className="bg-[#252442] rounded-[16px] px-[69px] py-[31px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex justify-center items-center">
      <Image src={imageSrc} alt={altText} height={height} width={width} />
    </div>
  );
};

export default Workcard;
