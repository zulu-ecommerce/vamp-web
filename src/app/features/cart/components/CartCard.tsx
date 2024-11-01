"use client";

import Image, { StaticImageData } from "next/image";
import { Add, Heart, Minus, Trash } from "iconsax-react";
import React from "react";
import Link from "next/link";

interface CartCardProps {
  name: string;
  id: string;
  img: StaticImageData;
  price: string;
  favorite?: boolean;
}
const CartCard = ({
  name,
  img,
  price,
  id,
  favorite = false,
}: CartCardProps) => {
  const [quantity, setQuantity] = React.useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  return (
    <Link
      href={`/products/${id}`}
      className="w-[100%] rounded overflow-hidden p-5 bg-white border border-gray-7 flex items-center gap-4 mt-4 relative"
    >
      {favorite ? (
        <button
          type="button"
          className="w-[30px] min-w-[30px] aspect-square centered hover:bg-gray-200 rounded-full absolute right-2 top-2"
        >
          <Heart size={16} color="#E34149" variant="Bold" />
        </button>
      ) : (
        <button
          type="button"
          className="w-[30px] min-w-[30px] aspect-square centered hover:bg-gray-200 rounded-full absolute right-2 top-2"
        >
          <Trash size={16} color="#E34149" variant="Outline" />
        </button>
      )}

      <div className="min-w-[137px] bg-white-2 rounded w-[137px] h-[137px] flex items-center justify-center">
        <Image src={img} alt="product" className=" mx-auto h-auto" />
      </div>

      <div className="px-4">
        <div className="text-left rounded">
          <p className="font-bold line-clamp-2 ">{name}</p>
          <p className="font-bold truncate  mt-1 text-gray-4">{price}</p>
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

export default CartCard;
