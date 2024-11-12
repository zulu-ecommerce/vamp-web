import { Location } from "iconsax-react";
import Image from "next/image";
import React from "react";

import ShopItemCard from "../features/shop/components/ShopItemCard";
import {
  FAVORITE_BRANDS,
  SHOP_ITEM_DATA,
} from "../utils/constants";
import { Button } from "../components/elements/Button";

import locationColored from "../../../public/assets/icons/locationColored.svg";
import HeroCarousel from "../features/cart/components/HeroCarousel";
import FlavourCarousel from "../components/FlavourCarousel";
import LocationMap from "../components/map/LocationMap";
import {
  InfinitySection,
  InfinitySection2,
} from "../components/InfinitySection";

export default function Home() {
  return (
    <div className="">
      <section className="bg-[#F4F4F4]">
        <HeroCarousel />
      </section>
      <section className="container lg:flex lg:justify-between py-10 sm:py-36 bg-white-3 lg:bg-white">
        <div className="lg:w-[415px]">
          <p className="bg-[#EBEBEB] font-bold px-3 rounded py-1 text-[13px] w-fit">
            SHOP YOUR FAVORITE BRANDS
          </p>
          <h2 className="text-[100px] 2xs:text-[120px] lg:text-[190px] leading-[100px] lg:leading-[152px] mt-4">
            BUY BY BRAND
          </h2>
          <p className="mt-4">
            We have also made it easy for you to shop your favorite brands in
            our store. Shop Vamp <strong>&quot;by brand&quot;</strong>
          </p>
          <Button className="text-base w-full font-bold hidden lg:flex items-center mt-6 justify-between">
            See more brands{" "}
            <img src="/assets/icons/whiteArrow.svg" alt="arrowRight" />
          </Button>
        </div>
        <div className="mt-10 lg:mt-0 grid grid-cols-2 lg:grid-cols-3 items-center gap-4">
          {FAVORITE_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="bg-white w-full px-4 rounded justify-center flex items-center h-[116px] group transition-all lg:border lg:"
            >
              <Image
                src={brand.img}
                alt="reboot-monkey-logo"
                className=" invert transition-all w-full max-w-[110px] h-auto"
              />
            </div>
          ))}
        </div>
        <Button className="text-base w-full font-bold flex lg:hidden items-center mt-6 justify-between">
          See more brands{" "}
          <img src="/assets/icons/whiteArrow.svg" alt="arrowRight" />
        </Button>
      </section>
      <section className="bg-primary">
        <div className="container text-white pt-20 pb-10">
          <p className="bg-gray-3 font-bold px-3 rounded py-1 text-[13px] w-fit">
            EXPERIENCE UNIQUE FLAVORS
          </p>
          <h2 className="text-[100px] lg:text-[190px] 2xs:text-[120px] leading-[100px] lg:leading-[152px] lg:w-[786px] mt-4">
            FLAVOR INFUSED VAPES
          </h2>
          <p className="mt-4 lg:w-[454px] lg:mt-6">
            We have the most flavorful vapes. Discover some of most our popular
            flavor infused vapes.
          </p>
        </div>
      </section>
      <section className="bg-primary pb-20">
        <div className="container">
          <FlavourCarousel />
        </div>
      </section>
      <section className="bg-white-3">
        <div className=" container py-10 sm:py-32 lg:flex lg:items-start lg:justify-between lg:gap-10">
          <div className="lg:sticky lg:top-24">
            <p className="bg-[#EBEBEB] font-bold px-3 rounded py-1 text-[13px] w-fit">
              GET IT All IN ONE BIG HOUSE
            </p>
            <h2 className="text-[100px] lg:w-[520px] lg:text-[190px] lg:leading-[152px] 2xs:text-[120px] leading-[100px] mt-4">
              ALL YOUR SMOKING NEEDS{" "}
            </h2>
            <p className="mt-4 lg:w-[411px]">
              We have also made it easy for you to shop your favorite brands in
              our store. Shop Vamp <strong>&quot;by brand&quot;</strong>
            </p>
            <Button className="text-base w-full font-bold hidden lg:flex items-center mt-6 justify-between">
              See more products{" "}
              <img src="/assets/icons/whiteArrow.svg" alt="arrowRight" />
            </Button>
          </div>
          <div className="grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-3 mt-6 lg:mt-0 gap-4 lg:w-[563px]">
            {SHOP_ITEM_DATA.map((item) => {
              return (
                <ShopItemCard
                  id={item.id}
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
          <Button className="text-base w-full font-bold flex lg:hidden items-center mt-6 justify-between">
            See more products{" "}
            <img src="/assets/icons/whiteArrow.svg" alt="arrowRight" />
          </Button>
        </div>
      </section>
      <section className="bg-white-2">
        <div className="container py-10 sm:py-32 lg:flex lg:items-stretch lg:gap-10 lg:justify-between">
          <div className="">
            <p className="bg-[#EBEBEB] font-bold px-3 rounded py-1 text-[13px] w-fit">
              LOCATED IN THE HEART OF LAGOS
            </p>
            <h2 className="text-[100px] lg:w-[520px] lg:text-[190px] lg:leading-[152px] 2xs:text-[120px] leading-[100px] mt-4">
              {" "}
              GIVE US A VISIT IN LAGOS
            </h2>
            <p className="mt-4 lg:w-[533px]">
              Craving a premium smoke experience that goes beyond the web? Head
              down to our Lagos store and discover a world of exceptional
              smoking accessories!
            </p>
          </div>
          <div className="bg-gray-7 w-full lg:w-[558px] h-[500px] mt-8 lg:mt-0 lg:h-auto rounded-[10px] overflow-hidden">
            <LocationMap />
            <div className="rounded bg-white w-[90%] mx-auto z-[12] p-4 -mt-[220px] relative group">
              <div className="bg-green rounded flex items-center gap-4 w-fit px-2 py-1">
                <Location color="#FAFAFA" size={14} variant="Bold" />
                <p className="text-[13px] text-white">Admiralty Mall, Shop 2</p>
              </div>
              <p className="text-[20px] font-bold my-1">Vamp Shop, Lekki</p>
              <p className="text-gray-4 text-[13px]">Open Monday - Sunday</p>
              <Button
                as="link"
                target="_blank"
                href="https://www.google.com/maps/place/Vamp/@6.4478113,3.4675068,17z/data=!4m7!3m6!1s0x103bf5467664fe95:0x6671f321a6a245bc!4b1!8m2!3d6.4478113!4d3.4700817!16s%2Fg%2F11v459v7tq?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                className="text-base w-full pl-2 !h-[50px] font-medium flex items-center mt-8 justify-between"
              >
                <Image
                  src={locationColored}
                  className="w-[35px] h-auto"
                  alt="location-icon"
                />
                <div className="flex items-center gap-4">
                  <p> View on Map</p>
                  <img
                    src="/assets/icons/whiteArrow.svg"
                    alt="arrowRight"
                    className="group-hover:translate-x-2 transition"
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white-2 py-20">
        <div className="container lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="bg-[#EBEBEB] font-bold px-3 rounded py-1 text-[13px] w-fit">
              SHOP WITH CONFIDENCE
            </p>
            <h2 className="text-[100px] lg:w-[682px] lg:text-[200px] lg:leading-[197.8px] 2xs:text-[120px] leading-[100px] mt-4 mb-8">
              DELIVERY IN NO TIME⚡️
            </h2>
          </div>
          <div className="lg:w-[394px]">
            <p className="mt-4 text-gray-4">
              Waiting can be a drag. That&apos;s why we prioritize fast and
              efficient delivery. Get your essential smoking accessories quickly
              so you can enjoy them sooner.
            </p>
            <button className="border-[3px] py-[6px] pr-[6px] mt-8 w-full flex justify-between items-center text-[24px] pl-6 rounded border-black">
              Shop Vamp Now
              <div className="w-[72px] h-[72px] min-w-[72px] centered rounded bg-black">
                <img
                  src="/assets/icons/whiteArrow.svg"
                  alt="arrowRight"
                  className="h-[23px]"
                />
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="py-4 sm:py-6 bg-white-2">
        <InfinitySection />
        <InfinitySection2 />
      </section>
    </div>
  );
}
