"use client";

import { useRef, useState } from "react";
import Container from "@/Components/Shared/Container";
import { Recapta } from "@/Components/Shared/Icons";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import useAxios from "@/Hooks/UseAxios";
import toast, { Toaster } from "react-hot-toast";

const MAX_RESUME_SIZE = 10 * 1024 * 1024; 

const Appliform = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    position: "",
    agree_privacy_policy: false,
    notRobot: false,
  });

  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");
  console.log(jobId);

  const axiosInstance = useAxios();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      toast.error("Please upload your resume.");
      return;
    }

    if (resumeFile.size > MAX_RESUME_SIZE) {
      toast.error("Resume file size must not exceed 10MB.");
      return;
    }

    if (!jobId) {
      toast.error("Job ID is missing. Please go back and try again.");
      return;
    }

    if (!formData.notRobot || !formData.agree_privacy_policy) {
      toast.error(
        "Please confirm you're not a robot and agree to the privacy policy."
      );
      return;
    }

    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("email", formData.email);
    data.append("position", formData.position);
    data.append("job_placement_id", jobId);
    data.append("resume", resumeFile);
    data.append(
      "agree_privacy_policy",
      formData.agree_privacy_policy ? "1" : "0"
    );

    try {
      const res = await axiosInstance.post("/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data?.success) {
        toast.success("Application submitted successfully!");
        // Optionally clear form here
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          position: "",
          agree_privacy_policy: false,
          notRobot: false,
        });
        setResumeFile(null);
      } else {
        toast.error("Failed to submit application.");
      }
    } catch (error: unknown) {
      console.error("Submit error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="lg:pt-20 pt-10 2xl:px-0 px-5">
      <Container className="lg:w-[800px] w-full mx-auto">
        <Toaster position="top-right" reverseOrder={false} />
        <h2 className="lg:text-[64px] text-[30px] font-bold text-white font-arial text-center">
          Apply For Your Position
        </h2>
        <form
          className="lg:pt-[60px] pt-[30px] lg:px-[100px] px-0"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-nunito text-[18px] font-semibold text-[#fff]">
                First Name
              </h4>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-white text-[#787878] w-full rounded-[8px]"
              />
            </div>
            <div>
              <h4 className="font-nunito text-[18px] font-semibold text-[#fff]">
                Last Name
              </h4>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-white text-[#787878] w-full rounded-[8px]"
              />
            </div>
            <div className="col-span-2">
              <h4 className="font-nunito text-[18px] font-semibold text-[#fff]">
                Email
              </h4>
              <input
                type="email"
                name="email"
                placeholder="yourname@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-white text-[#787878] w-full rounded-[8px]"
              />
            </div>
            <div className="col-span-2">
              <h4 className="font-nunito text-[18px] font-semibold text-[#fff]">
                Position
              </h4>
              <input
                type="text"
                name="position"
                placeholder="Administration"
                value={formData.position}
                onChange={handleChange}
                required
                className="py-3 px-4 font-nunito text-[16px] font-normal outline-0 bg-white text-[#787878] w-full rounded-[8px]"
              />
            </div>
          </div>

          {/* Upload Section */}
          <div className="mt-6 text-center">
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <Image
              src="/upload.png"
              alt="upload"
              width={152}
              height={120}
              className="mx-auto cursor-pointer"
              onClick={handleUploadClick}
            />
            <h5 className="font-arial font-medium text-[16px] text-white pt-4 pb-1">
              Upload Resume
            </h5>
            <h6 className="text-[14px] font-lucida text-[#F9F9F9] font-normal">
              Format: .jpeg, .png & pdf · Max file size: 10 MB
            </h6>
          </div>

          {/* I'm not a robot */}
          <div className="py-6">
            <div className="border-2 border-white px-3 py-2 rounded-[2px] w-[300px] mx-auto flex justify-between items-center">
              <div className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  name="notRobot"
                  checked={formData.notRobot}
                  onChange={handleChange}
                  id="notRobot"
                  className="w-6 h-6 accent-[#C83C7C] cursor-pointer"
                />
                <label
                  htmlFor="notRobot"
                  className="text-white text-[16px] font-lucida cursor-pointer"
                >
                  I’m not a robot
                </label>
              </div>
              <div className="flex flex-col items-center gap-2 justify-center">
                <Recapta />
                <p className="text-[#A6A6A6] font-lucida text-[14px]">
                  Privacy - Terms
                </p>
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div className="flex items-center justify-center gap-x-3">
            <input
              type="checkbox"
              name="agree_privacy_policy"
              checked={formData.agree_privacy_policy}
              onChange={handleChange}
              id="agree"
              className="w-5 h-5 rounded-[6px] appearance-none bg-white checked:bg-[#C83C7C] cursor-pointer"
            />
            <label
              htmlFor="agree"
              className="text-white text-[16px] font-lucida cursor-pointer"
            >
              You agree to our friendly privacy policy.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center py-10">
            <button
              type="submit"
              className="w-[180px] py-4 rounded-[12px] bg-[#C83C7C] text-white font-nunito text-[18px] cursor-pointer border border-[#C83C7C] hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out"
            >
              Submit Application
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Appliform;
