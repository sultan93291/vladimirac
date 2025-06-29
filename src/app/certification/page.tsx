"use client";

import Container from "@/Components/Shared/Container";
import { Download, Verified, View } from "@/Components/Shared/Icons";
import Spinner from "@/Components/Shared/Spinner";
import useFetchData from "@/Hooks/UseFetchData";
import Image from "next/image";
import React, { useState } from "react";


type Certificate = {
  id: number;
  title: string;
  issued_by: string;
  image: string;
  is_verified: number;
  downloadLink?: string; 
};

type Award = {
  id: number;
  name: string;
  award_subject: string;
  image: string;
  year: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: {
    certificates: Certificate[];
    awards: Award[];
  };
  code: number;
};

const Page = () => {
  const { data, error, isLoading } = useFetchData<ApiResponse>(
    "/certification_data"
  );
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";

  if (isLoading)
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );

  if (error || !data)
    return (
      <p className="text-red-500 text-center py-20">
        Failed to load certification data.
      </p>
    );

  const { certificates, awards } = data.data;

  const handleViewCert = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  const openAwardModal = (award: Award) => {
    setSelectedAward(award);
  };

  const closeAwardModal = () => {
    setSelectedAward(null);
  };

  return (
    <section className="lg:pt-[160px] pt-10 relative z-0 overflow-hidden 2xl:px-0 px-5">
      <Container>
        <div>
          <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold text-pink-500 mb-4 font-arial text-center">
            Certificates & Affiliations
          </h2>
          <p className="text-white font-lucida text-center max-w-[700px] mx-auto">
            We are proud to be recognized for our commitment to safety, quality,
            and professional excellence. Our certifications validate our
            dedication to maintaining the highest industry standards.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mt-10 z-50 relative">
            {certificates.map(cert => (
              <div
                key={cert.id}
                className="rounded-lg p-4 text-white cursor-pointer w-full sm:w-[300px] md:w-[350px] hover:translate-y-2 transition-all duration-300"
              >
                <div
                  className="relative w-full h-[230px]"
                  onClick={() => handleViewCert(cert)}
                >
                  <Image
                    src={`${baseURL}${cert.image}`}
                    alt={cert.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  {cert.is_verified === 1 && (
                    <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded flex gap-x-2 items-center font-lucida">
                      <Verified /> Verified
                    </span>
                  )}
                </div>
                <div className="bg-[#32203C] p-4 rounded-b-lg">
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{cert.issued_by}</p>
                  <div className="flex gap-2 flex-col sm:flex-row">
                    {cert.downloadLink && (
                      <a
                        href={cert.downloadLink}
                        download
                        className="flex-1 text-center text-[#C83C7C] border border-pink-500 rounded py-3 px-4 text-sm flex gap-x-4 items-center justify-center"
                      >
                        <Download />
                        Download
                      </a>
                    )}
                    <button
                      onClick={() => handleViewCert(cert)}
                      className="flex-1 text-center text-[#C83C7C] border border-pink-500 rounded py-3 px-4 text-sm flex gap-x-4 items-center justify-center"
                    >
                      <View />
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Modal */}
          {selectedCert && (
            <div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
              onClick={closeCertModal}
            >
              <div
                className="bg-white p-4 rounded-lg max-w-4xl w-full relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-black text-2xl font-bold"
                  onClick={closeCertModal}
                  aria-label="Close certificate modal"
                >
                  &times;
                </button>
                <Image
                  src={`${baseURL}${selectedCert.image}`}
                  alt={selectedCert.title}
                  width={1000}
                  height={1000}
                  className="w-full max-h-[80vh] object-contain rounded shadow-lg"
                />
              </div>
            </div>
          )}

          <div className="lg:pt-[120px] pt-10 ">
            <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold text-pink-500 mb-4 font-arial text-center">
              Awards & Recognition
            </h2>
            <div className="flex justify-center gap-6 flex-wrap lg:my-[60px] relative z-20">
              {awards.map(award => (
                <div
                  key={award.id}
                  className="relative w-full sm:w-[320px] md:w-[380px] lg:w-[400px] h-[420px] flex items-end justify-center text-center z-50 cursor-pointer"
                  onClick={() => openAwardModal(award)}
                >
                  <Image
                    src="/cframe.png"
                    alt="Frame Background"
                    fill
                    className="object-contain z-0 w-full"
                  />
                  <div className="absolute top-10 left-1/2 -translate-x-1/2">
                    <div className="bg-white p-2 w-[280px] rounded-lg">
                      <Image
                        src={`${baseURL}${award.image}`}
                        alt={award.award_subject}
                        width={308}
                        height={215}
                        className="mx-auto rounded-md shadow-md"
                      />
                    </div>
                    <div className="p-4 bg-[#FAA312]/20 rounded-b-sm mr-3">
                      <div className="mt-4 text-white text-center">
                        <div className="text-yellow-400 text-lg mb-1">
                          🏆 {award.year}
                        </div>
                        <div className="text-sm">{award.award_subject}</div>
                        <div className="font-bold">{award.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Award Modal */}
          {selectedAward && (
            <div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
              onClick={closeAwardModal}
            >
              <div
                className="bg-white p-4 rounded-lg max-w-4xl w-full relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-black text-2xl font-bold"
                  onClick={closeAwardModal}
                  aria-label="Close award modal"
                >
                  &times;
                </button>
                <Image
                  src={`${baseURL}${selectedAward.image}`}
                  alt={selectedAward.award_subject}
                  width={1000}
                  height={800}
                  className="w-full max-h-[80vh] object-contain rounded shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* Decorative lights */}
      <figure className="overflow-hidden absolute -bottom-52 -left-20 z-10">
        <Image
          src="/light.png"
          alt="light"
          width={800}
          height={800}
          className="w-full"
        />
      </figure>
      <figure className="overflow-hidden absolute top-0 -right-20 z-10">
        <Image
          src="/light2.png"
          alt="light"
          width={800}
          height={800}
          className="w-full"
        />
      </figure>
    </section>
  );
};

export default Page;
