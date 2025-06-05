import Container from "@/Components/Shared/Container";
import { Phone } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const page = () => {
  return (
    <section className="pt-20 pb-[60px]">
      <Container>
        <h2 className="text-[64px] font-bold text-white font-arial text-center">
          Need to transport something?
          <br /> We take care of it. Contact Us
        </h2>
        <div className="flex justify-between w-full gap-8 items-end mt-[60px]">
          <div className="w-[33%]">
            <h5 className="text-[32px] font-bold font-arial text-center text-white">
              Spain Address
            </h5>
            <ul className="flex flex-col gap-3 my-7">
              <li className="flex gap-x-7 items-center font-lucida text-[24px] font-normal text-[#fff]">
                <FiMail className="text-white  font-bold" />{" "}
                administracion@savaexpress.com 71
              </li>
              <li className="flex gap-x-7 items-center font-lucida text-[24px] font-normal text-[#fff]">
                <Phone className="text-white  font-bold" /> +34 935 16 71 71
              </li>
              <li className="flex gap-x-7 items-center font-lucida text-[24px] font-normal text-[#fff]">
                <FaLocationDot className="text-white  font-bold" /> Carrer del
                Empordá 1-7, 08211 Castellar del Valles
              </li>
            </ul>
          </div>
          <div className="w-[33%] bg-[#FFFEFE] py-12 px-9 rounded-[24px]">
            <form action="">
              <div className="grid grid-cols-2 gap-[30px]">
                <div>
                  <h4 className="font-nunito text-[18px] font-semibold text-[#C83C7C]">
                    Your name
                  </h4>
                  <input
                    type="text"
                    placeholder="Jhon Smith"
                    className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 border-b-2 border-[#b62b69]/30 text-[#787878] w-full"
                  />
                </div>
                <div>
                  <h4 className="font-nunito text-[18px] font-semibold text-[#C83C7C]">
                    Your email
                  </h4>
                  <input
                    type="text"
                    placeholder="email@example.com"
                    className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 border-b-2 border-[#b62b69]/30 text-[#787878] w-full"
                  />
                </div>
                <div className="col-span-2">
                  <h4 className="font-nunito text-[18px] font-semibold text-[#C83C7C] pb-1">
                    Your message
                  </h4>
                  <textarea className="border-2 border-[#C83C7C] rounded-[12px] h-[150px] w-full outline-0 p-2"></textarea>
                </div>
                <button className="col-span-2 w-full py-4 rounded-[50px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border hover:border-black duration-500 ease-in-out">
                  Send message
                </button>
              </div>
            </form>
          </div>
          <div className="w-[33%]">
            <h5 className="text-[32px] font-bold font-arial text-center text-white">
              Romania Address
            </h5>
            <ul className="flex flex-col gap-3 my-7">
              <li className="flex gap-x-7 items-center font-lucida text-[24px] font-normal text-[#fff]">
                <FiMail className="text-white  font-bold" />{" "}
                administracion@savaexpress.com
              </li>
              <li className="flex gap-x-7 items-center font-lucida text-[24px] font-normal text-[#fff]">
                <Phone className="text-white  font-bold" /> +40 264 43 43 98
              </li>
              <li className="flex gap-x-7 items-center font-lucida text-[24px] font-normal text-[#fff]">
                <FaLocationDot className="text-white  font-bold" /> Carrer del
                Strada Suceava 72, 400394 Cluj-Napoca (CLUJ)
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
