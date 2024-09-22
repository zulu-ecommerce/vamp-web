import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

interface BottomSheetModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  title: string;
}
const BottomSheetModal = ({
  modalOpen,
  handleClose,
  modalRef,
  children,
  title,
}: BottomSheetModalProps) => {
  return (
    <Modal
      backDropClass="bg-none"
      variant="middle"
      className={clsx(
        "w-full md:w-[746px] bottom-0 border-t border-t-black max-h-[282.7px] mx-auto bg-white fixed"
      )}
      showDialog={modalOpen}
      closeModal={handleClose}
      modalRef={modalRef}
    >
      <div className="px-6 h-[73px] flex items-center border-b bg-white-2 border-b-black">
        <h2 className="uppercase text-[40px] leading-[22.6px]">{title}</h2>
      </div>
      {children}
    </Modal>
  );
};

export default BottomSheetModal;
