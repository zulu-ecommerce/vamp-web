"use client";

import { ArrowDown2 } from "iconsax-react";
import React from "react";
import clsx from "clsx";

import { useComponentVisible } from "@/app/hooks/useComponentVisible";

interface FilterProps {
  options: {
    name: string;
    id: string;
  }[];
  filterId: string;
  setFilterState: React.Dispatch<React.SetStateAction<string>>;
}

export const VariantSelectField = ({
  options,
  filterId,
  setFilterState,
}: FilterProps) => {
  const {
    dropDownButtonRef,
    handleClickOnDropDownButton,
    isComponentVisible,
    ref,
  } = useComponentVisible();

  const handleSelectFilter = (selectedId: string) => {
    setFilterState(selectedId);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClickOnDropDownButton}
        ref={dropDownButtonRef}
        type="button"
        className="border bg-white-2 w-full border-black text-black capitalize font-[500] justify-between whitespace-nowrap text-xs flex items-center gap-2 px-[12px] h-[34px]"
      >
        <p className=" text-sm capitalize transition-all" key={filterId}>
          {filterId}
        </p>
        <div className="">
          <ArrowDown2 color="#000000" size={14} />
        </div>
      </button>
      <div
        className={clsx(
          " w-full z-10 bg-white-200 absolute transition-all mt-2 overflow-hidden bg-white-2",
          isComponentVisible
            ? " max-h-[290px] border border-black overflow-y-auto"
            : "max-h-0 py-0"
        )}
        ref={ref}
      >
        <div className="text-xs">
          {options.map((data) => {
            return (
              <button
                type="button"
                key={data.id}
                className={clsx(
                  "flex items-center px-[21px] w-full gap-4 hover:bg-black/80 hover:text-white text-black py-3"
                )}
                onClick={() => handleSelectFilter(data.id)}
              >
                <p className="text-sm">{data.name}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
