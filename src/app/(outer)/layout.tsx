import React, { Suspense } from "react";
import { Navbar } from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <div className="bg-white">
        {/* <ContactUsModalProvider> */}
        <Navbar />
        <div className="pt-[80px] lg:pt-[100px]">
          <div id="modal-root" />
        </div>
        {children}
        <Footer />
      </div>
    </Suspense>
  );
}
