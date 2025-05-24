import { Suspense } from "react";
import SectorPage from "./SectorPage";
import Workcard from "@/Components/Reusable/Workcard";
import Container from "@/Components/Shared/Container";

export default function Page() {
  return (
    <section className="py-20">
      <Container>
        <Suspense
          fallback={
            <div className="text-white text-center">Loading...</div>
          }
        >
          <SectorPage />
          <div className="mt-[60px] grid grid-cols-5 gap-3">
          <Workcard imageSrc="/logo1.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo3.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo4.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo5.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo6.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo7.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo8.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo9.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo10.png" altText="Team Photo" height={180} width={280} />
          </div>
        </Suspense>
      </Container>
    </section>
  );
}
