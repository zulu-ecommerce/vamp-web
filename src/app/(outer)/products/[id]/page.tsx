import Image from "next/image";
import Link from "next/link";
import React from "react";

import ProductDetailsQuantity from "@/app/features/products/components/ProductDetailsQuantity";
import ProductImageSection from "@/app/features/products/components/ProductImageSection";
import voopoo from "../../../../../public/assets/images/voopoo.svg";

const Page = () => {
  const PRODUCT_DETAILS = {
    name: "VooPoo Argus P1 Pod Vape Kit",
    id: "voopoo-argus-p1-pod-vape-kit",
    price: 15700,
    currency: "₦",
    quantity: 0,
    brand: voopoo,
    description:
      "Designed in a futuristic mechanical style, ARGUS P1 is a work of art and a pod for collection. The PD fast charge shortens the charging time to 18 minutes from 0 to 100% battery. GENE. AI 1.2 Chip adjusts the matching powers by sensing each puff automatically. Plus, VOOPOO 's exclusive flavor interpretation tech brings you the ultimate enjoyment of taste and flavour.",
  };
  return (
    <div className="bg-white-2 relative">
      <div className="container flex items-center justify-between">
        <button
          type="button"
          className="w-[38px] min-w-[38px] centered aspect-square rotate-180 rounded-full border border-gray-7 bg-white-2"
        >
          <img src="/assets/icons/arrowRight.svg" alt="arrowRight" />
        </button>
        <Link href="/product" className="w-6 h-6" type="button">
          <img src="/assets/icons/heart.svg" alt="arrowRight" />
        </Link>
      </div>
      <ProductImageSection />
      <div className="bg-white-3 py-4">
        <div className="container">
          <div className="p-1 rounded-md border border-primary w-fit">
            <Image
              src={PRODUCT_DETAILS.brand}
              alt="reboot-monkey-logo"
              className="max-h-[16px] w-auto invert"
            />
          </div>
          <h1 className="font-neutrif text-[32px] leading-[39.02px] font-bold py-4 border-b border-black/10">
            {PRODUCT_DETAILS.name}
          </h1>
          <h2 className="font-neutrif text-[13px] my-4 font-bold">
            PRODUCT DESCRIPTION
          </h2>
          <p className="text-gray-4">{PRODUCT_DETAILS.description}</p>
        </div>
      </div>
      <div className=" bg-black bottom-0 h-[70px] sticky">
        <div className=" container  flex items-center justify-between">
          <p className="font-screamer text-white text-[40px] font-bold">₦15, 700.00</p>
          <ProductDetailsQuantity quantity={PRODUCT_DETAILS.quantity} />
        </div>
      </div>
    </div>
  );
};

export default Page;
