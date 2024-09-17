import Image, { StaticImageData } from "next/image";
import React from "react";

interface MinimalCardTwoProps {
  name: string;
  id: string;
  img: StaticImageData;
}
const MinimalCardTwo = ({ name, img }: MinimalCardTwoProps) => {
  return (
    <div className="rounded bg-white-2 aspect-square overflow-hidden relative max-w-[306px] h-[393px] pt-6">
      <p className="text-[13px] bg-primary text-white-2 w-fit relative mx-auto z-[1] mt-1 px-3 py-[3px] rounded-[3px] font-normal">
        {name}
      </p>
      <Image src={img} alt={name} className="max-w-[306px] h-auto mt-6" />
      <button
        type="button"
        className="w-[38px] min-w-[38px] centered aspect-square rounded-full bg-primary absolute bottom-8 right-6"
      >
        <img src="/assets/icons/whiteArrow.svg" alt="arrowRight" />
      </button>
    </div>
  );
};

export default MinimalCardTwo;
