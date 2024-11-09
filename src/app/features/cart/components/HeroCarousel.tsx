"use client";
import React from "react";

import { Button } from "@/app/components/elements/Button";
import { PRODUCT_DISPLAY } from "@/app/utils/constants";
import MinimalCard from "@/app/components/MinimalCard";

import hero2Img from "../../../../../public/assets/images/hero2Img.webp";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import SlideIndicator from "@/app/components/SlideIndicator";
import { PerksCarousel, PerksSection } from "@/app/components/PerksCarousel";
import trophy from "../../../../../public/assets/icons/trophy.png";

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const CAROUSEL_DATA = [
    {
      title: "SMOKE LIKE ROYALTY.",
      description: "Smoke With Luxury and Quality Products",
      id: "1",
      description2:
        "We aim at providing you with the smoking experience that you solely deserve. Explore our catalogue of your favorite smoking accessories.",
      buttonText: "See more products",
      buttonLink: "/products",
      img: null,
    },
    {
      title: "ORDER ABROAD PICKUP AT VAMP",
      id: "2",
      description: "Let’s handle your international orders.",
      description2:
        "Vamp Drop is a service that let’s us handle your international orders and deliver your items to your doorstep.",
      buttonText: "Explore Vamp Drop",
      buttonLink: "/vamp-drop",
      img: hero2Img,
    },
  ];

  console.log(activeIndex);

  return (
    <div
      className={clsx(
        "transition-all",
        activeIndex === 0 ? "bg-auto" : "bg-slide-bg bg-no-repeat bg-cover bg-center"
      )}
    >
      <Swiper
        rewind={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper container"
      >
        {CAROUSEL_DATA.map((data, index) => {
          return (
            <SwiperSlide className="pt-12" key={data.id}>
              <div className="flex flex-col container lg:gap-10 lg:flex-row items-start justify-between w-full">
                <div className="">
                  {index === 1 && (
                    <p className="bg-black/5 font-bold px-3 rounded py-1 text-[13px] w-fit">
                      SHOP YOUR FAVORITE STORE
                    </p>
                  )}
                  <h1
                    className={clsx(
                      "",
                      index === 1
                        ? "text-[70px] mt-10 sm:mt-auto xs:text-[80px] xs:leading-[82px] leading-[79px] sm:text-[120px] sm:leading-[120px] 2xl:w-[621px]"
                        : "text-[100px] lg:text-[215px] 2xs:text-[120px] leading-[105px] lg:leading-[172px] 2xl:w-[691px] mx-auto"
                    )}
                  >
                    {data.title}
                  </h1>
                  <p className="text-[20px] sm:text-[24px] hidden lg:block text-primary mt-6 lg:w-[668px]">
                    {data.description}
                  </p>
                  <p className="hidden lg:block text-gray-4 mt-4 w-[513px]">
                    {data.description2}
                  </p>
                  <Button className="text-base !w-[506px] font-bold hidden lg:flex items-center mt-6 justify-between">
                    See more products{" "}
                    <img src="/assets/icons/whiteArrow.svg" alt="arrowRight" />
                  </Button>
                </div>
                <p className="text-[24px] lg:hidden text-primary mt-6 lg:w-[668px]">
                  {data.description}
                </p>
                {data.img ? (
                  <Image
                    src={data.img}
                    alt="hero-img"
                    className="sm:max-w-[541.1px] mx-auto mt-14 lg:mt-0 lg:mx-0"
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-[18px] mt-8 lg:mt-0 sm:min-w-[395px] sm:w-[395px]">
                    {PRODUCT_DISPLAY.map((product) => (
                      <MinimalCard
                        id={product.id}
                        key={product.id}
                        name={product.name}
                        img={product.image}
                      />
                    ))}
                  </div>
                )}
                <p
                  className={clsx(
                    "text-[13px] lg:hidden text-gray-4 sm:mt-4 md:w-[668px] mx-auto",
                    index === 0 ? "mt-4" : "mt-24"
                  )}
                >
                  {data.description2}
                </p>
                <Button
                  className={clsx(
                    "text-base w-full font-bold flex lg:hidden items-center mt-6 justify-between",
                    index === 0 && "mb-10"
                  )}
                >
                  {data.buttonText}{" "}
                  <img src="/assets/icons/whiteArrow.svg" alt="arrowRight" />
                </Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className=" lg:mt-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
            <Image src={trophy} alt="line" className="max-w-[24px]" />
            <h2 className="font-neutrif font-normal">
              Nigeria’s No1. Smoke Shop
            </h2>
          </div>
          <SlideIndicator activeIndex={activeIndex} />
        </div>
        <div className="bg-white-3 mt-10 lg:bg-transparent py-10">
          <div className="lg:hidden">
            <PerksCarousel />
          </div>
          <div className="hidden lg:block">
            <PerksSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
