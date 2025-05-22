import Container from "@/Components/Shared/Container";
import { IoArrowForward } from "react-icons/io5";

const page = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-[64px] font-arial font-semibold text-[#FFF]">
            Our Services
          </h2>
          <button
            className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-[180px] text-[18px] text-[#F9F9F9]
           font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group"
          >
            See All{" "}
            <IoArrowForward className="text-[#FFF] group-hover:ml-5 duration-300 ease-in-out" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default page;
