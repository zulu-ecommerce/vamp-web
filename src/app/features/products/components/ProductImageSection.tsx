"use client";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

import voopooCart from "../../../../../public/assets/images/voopooCart.png";

const ProductImageSection = () => {
  const [isActiveVariant, setIsActiveVariant] = React.useState("");
  const COLOR_VARIANTS = [
    {
      name: "Green",
      id: "1",
    },
    {
      name: "Red",
      id: "2",
    },
    {
      name: "Black",
      id: "3",
    },
    {
      name: "Floral",
      id: "4",
    },
    {
      name: "Sunset",
      id: "5",
    },
  ];
  const handleSelectActiveVariant = (variant: string) => {
    setIsActiveVariant(variant.toLowerCase());
  };
  return (
    <div className="py-6">
      <div className="container">
        <div className="flex justify-center">
          <Image src={voopooCart} alt="product" className=" w-[247px] h-auto" />
        </div>
        <div className="flex items-center gap-4 justify-between">
          {COLOR_VARIANTS.map((color) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageSection;
