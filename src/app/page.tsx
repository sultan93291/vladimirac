"use client";
import Cube from "@/Components/Cube/Cube";
import Container from "@/Components/Shared/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <section className="bg-[#13213C] text-white 2xl:px-0 px-5">
      {/* Hero Section */}
      <Container>
        <section className="lg:py-20 py-8">
          <h1 className="lg:text-5xl text-3xl font-bold mb-6 text-center">
            {t("welcomeHeading")}
          </h1>
          <p className="lg:text-lg text-sm text-center max-w-2xl mx-auto">
           {t("welcomeSubtext")}
          </p>
          <div className="mt-10 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/car.png"
              alt="Courier Delivery"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </section>
      </Container>

      <Container>
        <section className="lg:py-16 py-8">
          <h2 className="lg:text-4xl text-3xl font-semibold text-center mb-6">
            Experience Innovation in Logistics
          </h2>
          <p className="text-center mb-20 text-[#BCBCBC]">
            Our 3D cube showcases our rotating capabilities and multi-faceted
            services.
          </p>
          <Cube />
        </section>
      </Container>

      <Container>
        <section className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="mb-10 text-[#BCBCBC] max-w-2xl mx-auto">
            From documents to large shipments, we provide customized delivery
            solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Same Day Delivery", img: "/aboutbanner.png" },
              {
                title: "International Shipping",
                img: "/aboutbanner.png",
              },
              {
                title: "E-commerce Fulfillment",
                img: "/aboutbanner.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1A2C4C] p-6 rounded-xl hover:scale-105 transition duration-300"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={280}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <Container>
        <section className="lg:p-20 p-5 bg-[#0F172A] rounded-t-3xl">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { title: "24/7 Support", icon: "💬" },
              { title: "Real-time Tracking", icon: "📍" },
              { title: "Affordable Pricing", icon: "💰" },
              { title: "Secure Packaging", icon: "📦" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1E293B] p-6 rounded-xl">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* Call to Action Section */}
      <Container>
        <section className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Ship?</h2>
          <p className="mb-8 text-[#BCBCBC]">
            Get started with Sava Logistic today and experience hassle-free
            delivery.
          </p>
          <button className="bg-[#C83C7C] hover:bg-white hover:text-black hover:border-[#C83C7C] text-white px-8 py-3 rounded-full font-semibold transition duration-300 border border-transparent">
            Book a Shipment
          </button>
        </section>
      </Container>
    </section>
  );
}
