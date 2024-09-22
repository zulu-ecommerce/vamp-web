import React from "react";

import BottomSheetModal from "@/app/components/BottomSheetModal";
import SliderInput from "@/app/components/form/SliderInput";
import { Button } from "@/app/components/elements/Button";

interface PriceFilterProps {
  handleClose: () => void;
  modalOpen: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
}
const PriceFilter = ({
  handleClose,
  modalOpen,
  modalRef,
}: PriceFilterProps) => {
  return (
    <BottomSheetModal
      handleClose={handleClose}
      modalOpen={modalOpen}
      modalRef={modalRef}
      title="Price"
    >
      <div className="flex items-center h-[119.7px] border-b overflow-auto scrollbar-hide border-b-black bg-white gap-4 px-6">
        <SliderInput max={200000} min={0} currency="NGN" />
      </div>
      <div className="h-[90px] flex justify-between items-center gap-4 px-6 bg-white-2">
        <Button variant="outline" className="flex-1 w-full">
          Clear
        </Button>
        <Button className="w-full flex-1">View Results (334)</Button>
      </div>
    </BottomSheetModal>
  );
};

export default PriceFilter;
