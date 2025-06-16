// components/Shared/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/sign-up") ||
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/forgot-password") ||
    pathname.startsWith("/login-successfull") ||
    pathname.startsWith("/otp") ||
    pathname.startsWith("/reset-password") ||
    pathname.startsWith("/resetpassowrd-succesfull");

  return (
    <>
      {!hideLayout && <Navbar />}
      <div className={hideLayout ? "" : "mt-20"}>{children}</div>
      {!hideLayout && <Footer />}
    </>
  );
}
