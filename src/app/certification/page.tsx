"use client";
import Container from "@/Components/Shared/Container";
import { Download, Verified, View } from "@/Components/Shared/Icons";
import { certificates, Certificate } from "@/Data/Data";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [selectedAward, setSelectedAward] = useState<number | null>(null);

  const handleView = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const openAwardModal = (index: number) => {
    setSelectedAward(index);
  };

  const closeAwardModal = () => {
    setSelectedAward(null);
  };

  return (
    <section className="pt-[160px] relative z-0 overflow-hidden">
      <Container>
        <div>
          <h2 className="text-6xl font-bold text-pink-500 mb-4 font-arial text-center">
            Certificates & Affiliations
          </h2>
          <p className="text-white font-lucida text-center max-w-[700px] mx-auto">
            We are proud to be recognized for our commitment to safety, quality,
            and professional excellence. Our certifications validate our
            dedication to maintaining the highest industry standards.
          </p>

          <div className="flex gap-x-8 flex-wrap justify-between mt-10 z-50 relative">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="rounded-lg p-4 text-white cursor-pointer w-[350px] hover:translate-y-2 transition-all duration-300"
              >
                <div
                  className="relative w-full h-[230px]"
                  onClick={() => handleView(cert)}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  {cert.verified && (
                    <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded flex gap-x-2 items-center font-lucida">
                      <Verified /> Verified
                    </span>
                  )}
                </div>
                <div className="bg-[#32203C] p-4 rounded-b-lg">
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Issued by: {cert.issuer}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={cert.downloadLink}
                      download
                      className="flex-1 text-center text-[#C83C7C] border border-pink-500 rounded py-3 px-4 text-sm flex gap-x-4 items-center justify-center"
                    >
                      <Download />
                      Download
                    </a>
                    <button
                      onClick={() => handleView(cert)}
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

          {selectedCert && (
            <div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
              onClick={closeModal}
            >
              <div
                className="bg-white p-4 rounded-lg max-w-4xl w-full relative"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-black text-2xl font-bold"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full rounded shadow-lg"
                />
              </div>
            </div>
          )}

          <div className="pt-[120px]">
            <h2 className="text-6xl font-bold text-pink-500 mb-4 font-arial text-center">
              Awards & Recognition
            </h2>
            <div className="flex justify-center gap-8 flex-wrap my-[120px] relative z-20">
              {[1, 2, 3].map((_, idx) => (
                <div
                  key={idx}
                  className="relative w-[400px] h-[420px] flex items-end justify-center text-center z-50 cursor-pointer"
                  onClick={() => openAwardModal(idx)}
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
                        src="/certificate1.png"
                        alt="Award"
                        width={308}
                        height={215}
                        className="mx-auto rounded-md shadow-md"
                      />
                    </div>
                    <div className="p-4 bg-[#FAA312]/20 rounded-b-sm mr-3">
                      <div className="mt-4 text-white text-center">
                        <div className="text-yellow-400 text-lg mb-1">
                          🏆 2022
                        </div>
                        <div className="text-sm">Best Logistics Partner</div>
                        <div className="font-bold">Mom Nadia</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedAward !== null && (
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
                >
                  &times;
                </button>
                <Image
                  src="/certificate1.png"
                  alt="Award Zoom"
                  width={1000}
                  height={800}
                  className="w-full h-full rounded shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </Container>

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
