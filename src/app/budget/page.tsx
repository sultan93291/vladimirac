"use client";

import Istimatecard from "@/Components/Reusable/Istimatecard";
import Container from "@/Components/Shared/Container";
import { Budjet } from "@/Components/Shared/Icons";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import toast from "react-hot-toast";
import useAxios from "@/Hooks/UseAxios";
import useFetchData from "@/Hooks/UseFetchData";
import { useTranslations } from "next-intl";
import { AxiosError, isAxiosError } from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const axiosInstance = useAxios();
  const t = useTranslations("Budget");

  const { data: countryData } = useFetchData<{
    success: boolean;
    message: string;
    data: { id: number; name: string; code: string }[];
  }>("/countries");

  const [fromCountry, setFromCountry] = useState("Spain");
  const [toCountry, setToCountry] = useState("Romania");
  const [fromPostal, setFromPostal] = useState("");
  const [toPostal, setToPostal] = useState("");
  const [merchandise, setMerchandise] = useState("Electronics");
  const [linearMeters, setLinearMeters] = useState("");
  const [weight, setWeight] = useState("");
  const [shippingDate, setShippingDate] = useState("");
  const [isDangerous, setIsDangerous] = useState("No");

  const [loading, setLoading] = useState(false);
  const [showEstimateCards, setShowEstimateCards] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");

  const getCountryId = (name: string) => {
    return countryData?.data.find(c => c.name === name)?.id || null;
  };

  const resetForm = () => {
    setFromCountry("Spain");
    setToCountry("Romania");
    setFromPostal("");
    setToPostal("");
    setMerchandise("Electronics");
    setLinearMeters("");
    setWeight("");
    setShippingDate("");
    
    setIsDangerous("No");
  };
  const router = useRouter();

  const handleEstimateClick = async () => {
     const token = localStorage.getItem("token");

     if (!token) {
       toast.error("Please log in to get an estimate");
       router.push(`/sign-in?redirect=/budget`);
       return;
     }
    if (
      !fromPostal ||
      !toPostal ||
      !linearMeters ||
      !weight ||
    
      !shippingDate
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const loading_country_id = getCountryId(fromCountry);
    const unloading_country_id = getCountryId(toCountry);

    if (!loading_country_id || !unloading_country_id) {
      toast.error("Invalid country selection.");
      return;
    }

    setLoading(true);
    setShowEstimateCards(false);

    const payload = {
      is_ard: isDangerous === "Yes",
      shipping_date: shippingDate,
      ldm: parseFloat(linearMeters),
      gross_weight: parseFloat(weight),
      cargo_type: merchandise,
      unloading_postal_code: toPostal,
      unloading_country_id,
      loading_postal_code: fromPostal,
      loading_country_id,
    };

    try {
      const res = await axiosInstance.post(
        "/calculate_shipping_price",
        payload
      );
      const estimatedValue = res.data?.data;

      if (
        estimatedValue &&
        typeof estimatedValue.total_cost === "number" &&
        typeof estimatedValue.estimated_time === "string"
      ) {
        setEstimatedPrice(`${estimatedValue.total_cost.toFixed(2)} €`);
        setEstimatedTime(estimatedValue.estimated_time);
      } else {
        setEstimatedPrice("N/A");
        setEstimatedTime("N/A");
      }

      toast.success("Estimate created successfully!");
      resetForm();

      setTimeout(() => {
        setLoading(false);
        setShowEstimateCards(true);
      }, 1000);
    } catch (error) {
      setLoading(false);

      if (isAxiosError(error)) {
        const axiosError = error as AxiosError<{
          success: boolean;
          message: string;
        }>;
        const backendMessage = axiosError.response?.data?.message;

        if (backendMessage) {
          toast.error(backendMessage);
        } else {
          toast.error("Failed to create estimate.");
        }

        console.log("Response:", axiosError.response?.data);
      } else {
        toast.error("An unexpected error occurred.");
        console.error("Unknown error:", error);
      }
    }
  };

  return (
    <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-10 xl:px-0">
      <Container>
        <h1 className="text-[30px] sm:text-[40px] md:text-[48px] xl:text-[64px] font-bold text-center font-arial text-white">
          {t("pageTitle")}
        </h1>

        <div className="mt-10 bg-white px-5 sm:px-10 md:px-16 xl:px-[120px] pt-10 pb-6 rounded-[20px]">
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-arial font-bold text-[#13213C] mb-6">
            {t("whereShipping")}
          </h3>

          <form>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* From */}
              <div className="w-full md:w-2/5">
                <h4 className="text-[#000] font-arial text-[20px] md:text-[24px]">
                  {t("shipFrom")}
                </h4>
                <h5 className="text-[#000] font-arial text-[18px] md:text-[20px] my-2">
                  {t("country")}
                </h5>
                <div className="flex gap-4">
                  <div className="relative w-1/2">
                    <select
                      value={fromCountry}
                      onChange={e => setFromCountry(e.target.value)}
                      className="appearance-none w-full py-2 bg-white text-black text-[16px] md:text-[20px] font-arial border-b border-[#BCBCBC] focus:outline-none"
                    >
                      {countryData?.data.map(c => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none">
                      <SlArrowDown />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Postal code"
                    value={fromPostal}
                    onChange={e => setFromPostal(e.target.value)}
                    className="w-1/2 py-2 border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[16px] md:text-[20px] focus:outline-none"
                  />
                </div>
              </div>

              {/* Icon */}
              <div className="self-center md:self-end">
                <div className="bg-[#13213C] w-[52px] h-[46px] rounded-[16px] flex justify-center items-center">
                  <Budjet />
                </div>
              </div>

              {/* To */}
              <div className="w-full md:w-2/5">
                <h4 className="text-[#000] font-arial text-[20px] md:text-[24px]">
                  {t("shipTo")}
                </h4>
                <h5 className="text-[#000] font-arial text-[18px] md:text-[20px] my-2">
                  {t("country")}
                </h5>
                <div className="flex gap-4">
                  <div className="relative w-1/2">
                    <select
                      value={toCountry}
                      onChange={e => setToCountry(e.target.value)}
                      className="appearance-none w-full py-2 bg-white text-black text-[16px] md:text-[20px] font-arial border-b border-[#BCBCBC] focus:outline-none"
                    >
                      {countryData?.data.map(c => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none">
                      <SlArrowDown />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Postal code"
                    value={toPostal}
                    onChange={e => setToPostal(e.target.value)}
                    className="w-1/2 py-2 border-b border-[#BCBCBC] text-[#BCBCBC] font-arial text-[16px] md:text-[20px] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Cargo Inputs */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block mb-2 font-arial text-[18px] text-[#000]">
                  {t("typeMerchandise")}
                </label>
                <select
                  value={merchandise}
                  onChange={e => setMerchandise(e.target.value)}
                  className="w-full py-2 border-b border-[#BCBCBC] text-black text-[16px] font-arial focus:outline-none"
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-arial text-[18px] text-[#000]">
                  {t("linearMeters")}
                </label>
                <input
                  type="number"
                  value={linearMeters}
                  onChange={e => setLinearMeters(e.target.value)}
                  placeholder="Enter meter"
                  className="w-full py-2 border-b border-[#BCBCBC] text-[#BCBCBC] font-arial focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-arial text-[18px] text-[#000]">
                  {t("grossWeight")}
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  placeholder="Enter weight"
                  className="w-full py-2 border-b border-[#BCBCBC] text-[#BCBCBC] font-arial focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-arial text-[18px] text-[#000]">
                  {t("shippingDate")}
                </label>
                <input
                  type="date"
                  value={shippingDate}
                  onChange={e => setShippingDate(e.target.value)}
                  className="w-full py-2 border-b border-[#BCBCBC] text-black font-arial focus:outline-none"
                />
              </div>


              <div>
                <label className="block mb-2 font-arial text-[18px] text-[#000]">
                  {t("isDangerous")}
                </label>
                <select
                  value={isDangerous}
                  onChange={e => setIsDangerous(e.target.value)}
                  className="w-full py-2 border-b border-[#BCBCBC] text-black font-arial focus:outline-none"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={handleEstimateClick}
                className="bg-[#13213C] rounded-[12px] px-5 py-3 font-lucida font-normal text-white cursor-pointer"
              >
                {t("getEstimate")}
              </button>
            </div>
          </form>
        </div>

        {/* Result Cards */}
        <div className="pt-[60px] flex flex-col lg:flex-row gap-6 lg:gap-x-[60px] justify-between">
          {loading ? (
            <>
              <div className="w-full lg:w-1/2 h-[280px] rounded-[16px] bg-gray-300 animate-pulse" />
              <div className="w-full lg:w-1/2 h-[280px] rounded-[16px] bg-gray-300 animate-pulse" />
            </>
          ) : (
            showEstimateCards && (
              <>
                <Istimatecard
                  backgroundImage="/istimate.png"
                  title="Estimate Price"
                  buttonText={estimatedPrice}
                />
                <Istimatecard
                  backgroundImage="/istimate2.png"
                  title="Average Time"
                  buttonText={estimatedTime}
                  buttonColor="#FFF"
                  textColor="#000"
                />
              </>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Page;
