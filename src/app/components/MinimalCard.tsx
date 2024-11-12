import Image, { StaticImageData } from "next/image";
import React from "react";

interface MinimalCardProps {
  name: string;
  id: string;
  img: StaticImageData;
}
const MinimalCard = ({ name, img }: MinimalCardProps) => {
  return (
    <div className="rounded bg-white-2 aspect-square overflow-hidden relative max-w-[300px] p-3">
      <p className="text-base relative z-[1] mt-1 px-2 font-normal">
        {name}
      </p>
      <Image
        src={img}
        alt={name}
        style={{ width: "90%", height: "90%", objectFit: "contain" }}
        className="absolute top-6 left-1/2 transform -translate-x-1/2"
      />
      <button className="w-[38px] min-w-[38px] centered aspect-square rounded-full border border-gray-7 bg-white-2 absolute bottom-2 right-2">
        <img src="/assets/icons/arrowRight.svg" alt="arrowRight" />
      </button>
    </div>
  );
};

export default MinimalCard;
