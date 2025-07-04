"use client";

import { useState } from "react";
import Container from "@/Components/Shared/Container";
import { Phone } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import useAxios from "@/Hooks/UseAxios";
import toast from "react-hot-toast";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const axiosInstance = useAxios();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all the fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post("/contact", form);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending message, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="lg:pt-20 pt-8 pb-[60px] min-h-[600px] 2xl:px-0 px-5">
      <Container>
        <h2 className="lg:text-[48px] text-[30px] font-bold text-white font-arial text-center leading-tight">
          <span className="text-[#FAA312]">Need to transport something?</span>
          <br /> We take care of it. Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row justify-between w-full gap-8 mt-[60px] min-h-[400px]">
          {/* Spain Address */}
          <div className="flex-1 flex flex-col justify-end">
            <h5 className="text-[28px] sm:text-[32px] font-bold font-arial text-white mb-6">
              Spain Address
            </h5>
            <ul className="flex flex-col gap-4 text-white text-[18px] sm:text-[20px] font-lucida">
              <li className="flex gap-4 items-start">
                <FiMail className="mt-1" />
                administracion@savaexpress.com
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="mt-1" />
                +34 935 16 71 71
              </li>
              <li className="flex gap-4 items-start">
                <FaLocationDot className="mt-1" />
                Carrer del Empordá 1-7, 08211 Castellar del Valles
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-white py-12 px-9 rounded-[24px]">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="font-nunito text-[18px] font-semibold text-[#C83C7C]"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jhon Smith"
                    className="mt-2 py-3 px-4 font-nunito text-[16px] font-normal outline-0 border-b-2 border-[#b62b69]/30 text-[#787878] w-full"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-nunito text-[18px] font-semibold text-[#C83C7C]"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    className="mt-2 py-3 px-4 font-nunito text-[16px] font-normal outline-0 border-b-2 border-[#b62b69]/30 text-[#787878] w-full"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="font-nunito text-[18px] font-semibold text-[#C83C7C]"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    className="mt-2 border-2 border-[#C83C7C] rounded-[12px] h-[150px] w-full outline-0 p-3 resize-none"
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="md:col-span-2 w-full py-4 rounded-[50px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  )}
                  {loading ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>

          {/* Romania Address */}
          <div className="flex-1 flex flex-col justify-end">
            <h5 className="text-[28px] sm:text-[32px] font-bold font-arial text-white mb-6">
              Romania Address
            </h5>
            <ul className="flex flex-col gap-4 text-white text-[18px] sm:text-[20px] font-lucida">
              <li className="flex gap-4 items-start">
                <FiMail className="mt-1" />
                administracion@savaexpress.com
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="mt-1" />
                +40 264 43 43 98
              </li>
              <li className="flex gap-4 items-start">
                <FaLocationDot className="mt-1" />
                Strada Suceava 72, 400394 Cluj-Napoca (CLUJ)
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
