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

  const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {String(error)}</p>;

  if (!data?.data?.aboutSection) return <p>No about data found</p>;

  const about = data.data.aboutSection;
  const imgSrc = `${baseURL}${about.image_url}`;

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
