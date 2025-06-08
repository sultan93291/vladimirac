import Container from "@/Components/Shared/Container";
import { Download, Verified, View } from "@/Components/Shared/Icons";
import { certificates } from "@/Data/Data";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="pt-[160px] relative overflow-hidden">
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
          <div className="flex gap-x-8 flex-wrap justify-between mt-10">
            {certificates?.map((cert, index) => (
              <div
                key={index}
                className=" rounded-lg p-4 text-white cursor-pointer w-[350px] hover:translate-y-2 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-[230px] object-cover rounded-t-lg"
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
                      className="flex-1 text-center  text-[#C83C7C] border border-pink-500 rounded py-3 px-4 text-sm flex gap-x-4 items-center justify-center"
                    >
                      <Download />
                      Download
                    </a>
                    <a
                      href={cert.viewLink}
                      target="_blank"
                      className="flex-1 text-center  text-[#C83C7C] rounded py-3 px-4 text-sm border border-pink-500 flex gap-x-4 items-center justify-center"
                    >
                      <View />
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-[120px]">
            <h2 className="text-6xl font-bold text-pink-500 mb-4 font-arial text-center">
              Awards & Recognition
            </h2>

            <div className="flex justify-center gap-8 flex-wrap my-[120px]">
              <div className="relative w-[400px] h-[420px] flex items-end justify-center text-center">
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
                      alt="Certificate"
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
              <div className="relative w-[400px] h-[420px] flex items-end justify-center text-center">
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
                      alt="Certificate"
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
              <div className="relative w-[400px] h-[420px] flex items-end justify-center text-center">
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
                      alt="Certificate"
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
            </div>
          </div>
        </div>
      </Container>
      <figure className="overflow-hidden">
        <Image
          src="/light.png"
          alt="light"
          width={800}
          height={800}
          className="absolute -bottom-52 -left-20 overflow-hidden"
        />
      </figure>
      <figure className="overflow-hidden">
        <Image
          src="/light2.png"
          alt="light"
          width={800}
          height={800}
          className="absolute top-0 -right-20 overflow-hidden"
        />
      </figure>
    </section>
  );
};

export default page;
