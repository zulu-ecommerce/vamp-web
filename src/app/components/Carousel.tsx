"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import React from "react";
import clsx from "clsx";
import "swiper/css";

import ItemCard from "./ItemCard";

interface CardCarouselsProps {
  cardData: {
    src: string;
    title: string;
    id: string;
  }[];
}
const CardCarousels = ({ cardData }: CardCarouselsProps) => {
  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={false}
        rewind={true}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        className="mySwiper h-[433px]"
      >
        {cardData?.map((card, index) => (
          <SwiperSlide
            key={card.id}
            className={clsx(
              "rounded-lg max-w-[335px] sm:max-w-[335px]",
              index + 1 === cardData.length && "pr-[20px]",
            
            )}
          >
            <ItemCard name={card.title} id={card.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousels;
