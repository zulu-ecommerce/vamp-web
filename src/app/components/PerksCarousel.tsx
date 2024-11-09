"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import "swiper/css";

import { PERKS_DATA } from "../utils/constants";

export const PerksCarousel = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      navigation={false}
      rewind={true}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper h-[233px]"
    >
      {PERKS_DATA?.map((card, index) => (
        <SwiperSlide
          key={card.id}
          className={clsx(
            "rounded-lg max-w-[289px] sm:max-w-[289px]",
            index + 1 === PERKS_DATA.length && "pr-[20px]",
            index === 0 && "pl-[20px]"
          )}
        >
          <div className=" bg-white-2 py-6 px-6 rounded min-h-[210px]">
            <Image src={card.icon} alt="icon" className="max-w-[24px] h-auto" />
            <p className="text-[20px] font-bold mt-4">{card.title}</p>
            <p className="mt-3">{card.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const PerksSection = () => {
  return (
    <section className="py-10 container grid grid-cols-3 gap-4">
      {PERKS_DATA?.map((card, index) => (
        <div key={card.id} className={clsx("rounded-lg")}>
          <div className=" bg-white-2 py-6 px-6 rounded min-h-[210px]">
            <Image src={card.icon} alt="icon" className="max-w-[24px] h-auto" />
            <p className="text-[20px] font-bold mt-4">{card.title}</p>
            <p className="mt-3">{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
