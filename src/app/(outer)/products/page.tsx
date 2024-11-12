"use client";
import { useSearchParams } from "next/navigation";
import { SearchNormal1 } from "iconsax-react";
import React from "react";

import ProductSection from "@/app/features/products/components/ProductSection";
import BrandFilter from "@/app/features/products/components/BrandFilter";
import PriceFilter from "@/app/features/products/components/PriceFilter";
import FilterTags from "@/app/features/products/components/FilterTags";
import { useComponentVisible } from "@/app/hooks";

const Products = () => {
  const [brandFilterArray, setBrandFilterArray] = React.useState<string[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("type") || "All Products";
  const {
    ref: priceFilterRef,
    isComponentVisible: isPriceFilterVisible,
    setIsComponentVisible: setIsPriceFilterVisible,
    handleClickOnDropDownButton: handleClickOnPriceFilterButton,
  } = useComponentVisible();

  const {
    ref: brandFilterRef,
    isComponentVisible: isBrandFilterVisible,
    setIsComponentVisible: setIsBrandFilterVisible,
    handleClickOnDropDownButton: handleClickOnBrandFilterButton,
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

  const handleBrandFilter = (brand: string) => {
    if (brandFilterArray.includes(brand)) {
      setBrandFilterArray((prev) => prev.filter((item) => item !== brand));
    } else {
      setBrandFilterArray((prev) => [...prev, brand]);
    }
  };

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
      <section className="container md:relative">
        <div className="flex items-center justify-between pt-4 sticky top-24">
          <p className="text-[13px] font-bold bg-[#EBEBEB] px-2 py-1 text-black rounded-[5px]">
            500 PRODUCTS
          </p>
          <div className="flex items-center gap-4 relative">
            <button
              onClick={handleClickOnBrandFilterButton}
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
            <BrandFilter
              handleClose={() => setIsBrandFilterVisible(false)}
              modalOpen={isBrandFilterVisible}
              modalRef={brandFilterRef}
              handleBrandFilter={handleBrandFilter}
              brandFilterArray={brandFilterArray}
            />
            <PriceFilter
              handleClose={() => setIsPriceFilterVisible(false)}
              modalOpen={isPriceFilterVisible}
              modalRef={priceFilterRef}
            />
          </div>
        </div>
        <ProductSection />
      </section>
    </div>
  );
};

export default Products;
