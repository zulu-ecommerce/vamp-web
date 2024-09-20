"use client";
import { useSearchParams } from "next/navigation";
import { Filter, SearchNormal1 } from "iconsax-react";
import React from "react";
import FilterTags from "@/app/features/products/components/FilterTags";
import ProductSection from "@/app/features/products/components/ProductSection";
import BottomSheetModal from "@/app/features/products/components/BottomSheetModal";
import { useComponentVisible } from "@/app/hooks";

const Products = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("type") || "All Products";
  const {
    ref: priceFilterRef,
    isComponentVisible: isPriceFilterVisible,
    setIsComponentVisible: setIsPriceFilterVisible,
    handleClickOnDropDownButton: handleClickOnPriceFilterButton,
  } = useComponentVisible();

  const FILTER_TAGS = [
    "All Products",
    "#Trending🔥",
    "Vapes",
    "Lighters",
    "Grinders",
    "Rolling paper",
    "Ashtrays",
    "Blunt Wraps",
    "Backwoods",
    "Filter Tips",
    "Rolling Trays",
    "Pipes",
    "Hookahs",
    "Stash Jars",
    "Odor Control",
  ];

  return (
    <div className="bg-white-3">
      <section className="container pt-6">
        <div className="">
          <div className="flex items-center h-[40px] w-full p-1 border border-primary">
            <input
              type="text"
              className="border-none w-full px-2 bg-transparent text-[14px] placeholder:text-[13px] focus:outline-none"
              placeholder="SEARCH FOR AN ITEM, BRAND, COLOR..."
            />
            <div className="w-[30px] min-w-[30px] aspect-square centered bg-primary">
              <SearchNormal1 size="16" color="#FAFAFA" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <FilterTags tags={FILTER_TAGS} activeTags={[search]} />
        </div>
        <h1 className="text-primary leading-[80px] mt-6 uppercase text-[100px] truncate">
          {search}
        </h1>
      </section>
      <section className="container">
        <div className="flex items-center justify-between pt-4">
          <p className="text-[13px] font-bold bg-[#EBEBEB] px-2 py-1 text-black rounded-[5px]">
            500 PRODUCTS
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="underline underline-offset-2 text-[13px] text-black"
            >
              BRAND
            </button>
            <button
              onClick={handleClickOnPriceFilterButton}
              type="button"
              className="underline underline-offset-2 text-[13px] text-black"
            >
              PRICE
            </button>
          </div>
        </div>
        <ProductSection />
      </section>
      <BottomSheetModal
        modalOpen={isPriceFilterVisible}
        handleClose={() => setIsPriceFilterVisible(false)}
        modalRef={priceFilterRef}
      />
    </div>
  );
};

export default Products;
