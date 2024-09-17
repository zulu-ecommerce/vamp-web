import { Add, Minus } from "iconsax-react";
import React from "react";

interface ItemCardProps {
  name: string;
  id: string;
}
const ItemCard = ({ name }: ItemCardProps) => {
  const [quantity, setQuantity] = React.useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);

  return (
    <div className="w-[335px] h-[433px] rounded-[30px] bg-white-2 px-5 py-6 flex-col flex gap-4">
      <div className="w-full flex-1 rounded-[15px] text-black bg-white p-[30px]"></div>

      <div className="flex items-center justify-between gap-5">
        <p className="font-bold">{name}</p>
        <div className="text-[18px] font-bold flex items-center gap-3 text-white bg-primary p-2 rounded-full">
          <button
            onClick={decrement}
            type="button"
            className="w-[34px] font-normal text-[18px]  min-w-[34px] aspect-square centered rounded-full bg-gray-2 "
          >
            <Minus size="24" variant="Linear" color="#FAFAFA" />
          </button>
          <p>{quantity}</p>
          <button
            onClick={increment}
            type="button"
            className="w-[34px] min-w-[34px] font-normal text-[18px] aspect-square centered rounded-full bg-gray-2 text-white"
          >
            <Add size="24" variant="Linear" color="#FAFAFA" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
