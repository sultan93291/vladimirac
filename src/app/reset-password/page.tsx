import { Suspense } from "react";
import ResetPassword from "./_components/ResetPassword";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="text-white text-center py-20">Loading OTP Page...</div>
      }
    >
      <ResetPassword />
    </Suspense>
  );
}
