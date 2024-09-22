"use client";

import { Add, Minus } from "iconsax-react";
import React from "react";

interface ProductDetailsQuantityProps {
  quantity: number;
}
const ProductDetailsQuantity = ({
  quantity: initialQuantity,
}: ProductDetailsQuantityProps) => {
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    setQuantity(initialQuantity);
  }, []);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  return (
    <div className="text-[18px] font-bold flex mt-4 items-center justify-between gap-3 bg-gray-2 p-2 rounded ">
      <button
        onClick={decrement}
        type="button"
        className="w-[28px] font-normal text-[18px] min-w-[28px] aspect-square centered rounded bg-primary"
      >
        <Minus size="22" variant="Linear" color="#FAFAFA" />
      </button>
      <p className="text-white text-base">{quantity}</p>
      <button
        onClick={increment}
        type="button"
        className="w-[28px] min-w-[28px] font-normal text-[18px] aspect-square centered rounded bg-primary text-white"
      >
        <Add size="22" variant="Linear" color="#FAFAFA" />
      </button>
    </div>
  );
};

export default ProductDetailsQuantity;
