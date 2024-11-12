import Image from "next/image";
import React from "react";

import ProductDetailsQuantity from "@/app/features/products/components/ProductDetailsQuantity";
import ProductDetailCard from "@/app/features/products/components/ProductDetailCard";
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
    <div className="bg-white relative sm:pt-10 sm:pb-10">
      <div className="flex flex-col sm:flex-row sm:max-w-[1240px] sm:mx-auto">
        <ProductDetailCard />
        <div className="bg-white-3 py-4 lg:px-8">
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
      </div>
      <div className=" bg-black bottom-0 h-[70px] lg:max-w-[1240px] sm:px-10 lg:mx-auto flex items-center sticky">
        <div className=" container  flex items-center justify-between">
          <p className="font-screamer text-white text-[40px] font-bold">
            ₦15, 700.00
          </p>
          <ProductDetailsQuantity quantity={PRODUCT_DETAILS.quantity} />
        </div>
      </div>
    </div>
  );
};

export default Page;
