import { Suspense } from "react";
import SectorPage from "./SectorPage";
import Workcard from "@/Components/Reusable/Workcard";
import Container from "@/Components/Shared/Container";

export default function Page() {
  return (
    <section className="lg:py-20 py-5 2xl:px-0 px-5">
      <Container>
        <Suspense
          fallback={
            <div className="text-white text-center">Loading...</div>
          }
        >
          <SectorPage />
          <div className="mt-[60px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo5.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          <Workcard imageSrc="/logo2.png" altText="Team Photo" height={180} width={280} />
          </div>
        </Suspense>
      </Container>
    </section>
  );
}
