import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

interface BottomSheetModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  title: string;
  className?: string;
}
const BottomSheetModal = ({
  modalOpen,
  handleClose,
  modalRef,
  children,
  className,
  title,
}: BottomSheetModalProps) => {
  return (
    <div
      ref={modalRef}
      className={clsx(
        "w-full sm:w-[603px] sm:top-10 left-0 sm:-left-[500px] overflow-hidden mx-auto bg-white fixed bottom-0 sm:bottom-auto sm:absolute transition-all duration-300",
        modalOpen ? "max-h-[282.7px] border-t border-t-black sm:border sm:border-black" : "max-h-[0px]",
        className
      )}
    >
      <div className="px-6 h-[73px] flex items-center border-b bg-white-2 border-b-black">
        <h2 className="uppercase text-[40px] leading-[22.6px] text-black">{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default BottomSheetModal;
