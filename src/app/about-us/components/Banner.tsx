"use client";
import useFetchData from "@/Hooks/UseFetchData";
import Image from "next/image";
import React from "react";

type AboutSection = {
  image_url: string;
  description: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: {
    aboutSection: AboutSection;
  };
  code: number;
};

const Banner = () => {
  const { data, error, isLoading } = useFetchData<ApiResponse>("/get_about");

  const baseURL = (process.env.NEXT_PUBLIC_IMG_URL || "").replace(/\/$/, "");
  const about = data?.data.aboutSection;

  if (isLoading)
    return (
      <div className="flex justify-center items-center p-10">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        <style>{`
          .loader {
            border-top-color: #C83C7C;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </div>
    );

  if (error) return <p>Error loading data: {String(error)}</p>;

  if (!about) return <p>No about data found</p>;

  const imagePath = about.image_url.startsWith("/")
    ? about.image_url
    : `/${about.image_url}`;

  const imgSrc = `${baseURL}${imagePath}`;

  return (
    <div className="text-white">
      <Image
        src={imgSrc}
        alt="about banner"
        width={800}
        height={400}
        style={{ width: "100%", height: "auto" }}
        priority
      />

      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: about.description }}
      />
    </div>
  );
};

export default Banner;
