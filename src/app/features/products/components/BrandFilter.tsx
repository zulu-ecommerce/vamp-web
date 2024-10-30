import BottomSheetModal from "@/app/components/modals/BottomSheetModal";
import { Button } from "@/app/components/elements/Button";
import { FAVORITE_BRANDS } from "@/app/utils/constants";

import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface BrandFilterProps {
  handleClose: () => void;
  modalOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
  brandFilterArray: string[];
  handleBrandFilter: (brand: string) => void;
}
const BrandFilter = ({
  handleClose,
  modalOpen,
  modalRef,
  brandFilterArray,
  handleBrandFilter,
}: BrandFilterProps) => {
  return (
    <BottomSheetModal
      handleClose={handleClose}
      modalOpen={modalOpen}
      modalRef={modalRef}
      title="Brand"
    >
      <div className="flex items-center h-[119.7px] border-b overflow-auto scrollbar-hide border-b-black bg-white gap-4 px-6">
        {FAVORITE_BRANDS.map((brand) => {
          const isSelected = brandFilterArray.includes(brand.name);
          return (
            <button
              type="button"
              key={brand.id}
              onClick={() => handleBrandFilter(brand.name)}
              className={clsx(
                "bg-white-2 px-4 border rounded-[3px] justify-center flex items-center",
                isSelected ? "border-black" : "border-gray-6"
              )}
            >
              <Image
                src={brand.img}
                alt="reboot-monkey-logo"
                className=" invert transition-all min-w-[83px] h-[50px]"
              />
            </button>
          );
        })}
      </div>
      <div className="h-[90px] flex justify-between items-center gap-4 px-6 bg-white-2">
        <Button variant="outline" className="flex-1 w-full">
          Clear
        </Button>
        <Button className="w-full flex-1">View Results(334)</Button>
      </div>
    </BottomSheetModal>
  );
};

export default BrandFilter;
