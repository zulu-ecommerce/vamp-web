import Image, { StaticImageData } from "next/image";
import React from "react";

interface ItemCardMiniProps {
  name: string;
  id: string;
  image: StaticImageData;
}
const ItemCardMini = ({ name, image }: ItemCardMiniProps) => {
  return (
    <div className="w-[199px] h-[273px] rounded-[20px] bg-white-2 flex flex-col gap-4 py-4 px-5 justify-between">
      <div>
        <Image
          src={image}
          alt={name}
          width={159}
          height={159}
          className="rounded-[20px]"
        />
      </div>
      <span className="w-full py-6 rounded-[20px] bg-white text-primary text-sm text-center flex items-center justify-center">
        {name}
      </span>
    </div>
  );
};

export default ItemCardMini;
