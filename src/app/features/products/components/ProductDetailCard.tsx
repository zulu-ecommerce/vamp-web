"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import voopooCart from "../../../../../public/assets/images/voopooCart.png";
import { VariantSelectField } from "@/app/components/VariantSelectField";

const ProductDetailCard = () => {
  const [isActiveVariant, setIsActiveVariant] = React.useState("green");
  const COLOR_VARIANTS = [
    {
      name: "Green",
      id: "green",
    },
    {
      name: "Red",
      id: "red",
    },
    {
      name: "Black",
      id: "black",
    },
    {
      name: "Floral",
      id: "floral",
    },
    {
      name: "Sunset",
      id: "sunset",
    },
  ];

  return (
    <div className="py-6 bg-white-2 border border-black/5 lg:min-w-[571px] px-6">
      <div className="flex items-center justify-between px-4">
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
      <div className="">
        <div className="flex justify-center">
          <Image src={voopooCart} alt="product" className=" w-[247px] h-auto" />
        </div>
        <div className="w-full">
          <VariantSelectField
            filterId={isActiveVariant}
            options={COLOR_VARIANTS}
            setFilterState={setIsActiveVariant}
          />
          {/* {COLOR_VARIANTS.map((color) => (
            <button
              onClick={() => handleSelectActiveVariant(color.name)}
              key={color.id}
              className={clsx(
                "rounded-[1px] py-1 px-2 text-xs border border-primary uppercase whitespace-nowrap",
                isActiveVariant === color.name.toLowerCase()
                  ? "bg-primary text-white-2 "
                  : "bg-white-2 text-primary"
              )}
              type="button"
            >
              {color.name}
            </button>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
