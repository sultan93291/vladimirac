import { Suspense } from "react";
import Appliform from "./_components/Appliform";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="text-white text-center py-20">Loading...</div>}
    >
      <Appliform />
    </Suspense>
  );
}
