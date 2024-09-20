import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

interface BottomSheetModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
}
const BottomSheetModal = ({
  modalOpen,
  handleClose,
  modalRef,
}: BottomSheetModalProps) => {
  return (
    <Modal
      backDropColor="bg-none"
      variant="middle"
      className={clsx(
        "w-full md:w-[746px] bottom-0 border-t border-t-black max-h-[300dvh] h-[282.7px] mx-auto bg-white bg-white-200 px-6 overflow-scroll fixed"
      )}
      showDialog={modalOpen}
      closeModal={handleClose}
      modalRef={modalRef}
    >
      <div className="relative">
        <div className="pb-4 flex bg-white items-center justify-between pt-6 sticky top-0">
          <h3 className="font-medium text-[20px] justify-between text-black">
            Filter
          </h3>
        </div>
      </div>
    </Modal>
  );
};

export default BottomSheetModal;
