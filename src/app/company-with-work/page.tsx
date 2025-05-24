import { Suspense } from "react";
import SectorPage from "./SectorPage";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="text-white text-center py-20">Loading...</div>}
    >
      <SectorPage />
    </Suspense>
  );
}
