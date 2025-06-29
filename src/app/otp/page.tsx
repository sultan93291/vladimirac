import { Suspense } from "react";
import OtpPage from "./_components/OtpPage";


export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="text-white text-center py-20">Loading OTP Page...</div>
      }
    >
      <OtpPage/>
    </Suspense>
  );
}
