"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import React from "react";
import clsx from "clsx";
import "swiper/css";

import MinimalCardTwo from "./MInimalCardTwo";
import { FLAVOUR_DATA } from "../utils/constant";
import { Button } from "./elements/Button";

const FlavourCarousel = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={false}
        rewind={true}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper h-[393px]"
      >
        {FLAVOUR_DATA.map((card, index) => (
          <SwiperSlide
            key={card.id}
            className={clsx(
              "rounded-lg max-w-[306px] sm:max-w-[335px]",
              index === 0 && "ml-[20px]"
            )}
          >
            <MinimalCardTwo
              key={card.id}
              id={card.id}
              name={card.name}
              img={card.img}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide
          className={clsx(
            "rounded-lg max-w-[306px] sm:max-w-[335px] pr-[20px]"
          )}
        >
          <div className="flex h-full items-end">
            <Button
              variant="secondary"
              className="text-base w-full font-bold flex items-center justify-between"
            >
              See more Flavours{" "}
              <img src="/assets/icons/arrowRight.svg" alt="arrowRight" />
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FlavourCarousel;
