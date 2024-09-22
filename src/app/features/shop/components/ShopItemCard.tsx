"use client";

import Image, { StaticImageData } from "next/image";
import { Add, Minus } from "iconsax-react";
import React from "react";
import Link from "next/link";

interface ShopItemCardProps {
  name: string;
  id: string;
  img: StaticImageData;
  price: string;
}
const ShopItemCard = ({ name, img, price, id }: ShopItemCardProps) => {
  const [quantity, setQuantity] = React.useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  return (
    <Link
      href={`/products/${id}`}
      className="w-[100%] rounded bg-white-2 py-4 flex-col flex gap-4"
    >
      <Image src={img} alt="product" className="w-[80%] mx-auto h-auto" />

      <div className="px-4">
        <div className="bg-white rounded p-4 mt-2">
          <p className="font-bold truncate text-center">{name}</p>
          <p className="font-bold truncate text-center mt-2 text-gray-4">
            {price}
          </p>
          <div className="text-[18px] font-bold flex mt-4 items-center justify-between gap-3 bg-gray-7 p-2 rounded ">
            <button
              onClick={decrement}
              type="button"
              className="w-[28px] font-normal text-[18px] min-w-[28px] aspect-square centered rounded bg-primary"
            >
              <Minus size="22" variant="Linear" color="#FAFAFA" />
            </button>
            <p className="text-primary text">{quantity}</p>
            <button
              onClick={increment}
              type="button"
              className="w-[28px] min-w-[28px] font-normal text-[18px] aspect-square centered rounded bg-primary text-white"
            >
              <Add size="22" variant="Linear" color="#FAFAFA" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopItemCard;
