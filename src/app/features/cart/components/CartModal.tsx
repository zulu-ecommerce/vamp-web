"use client";

import { Heart } from "iconsax-react";
import React from "react";

import { Button } from "@/app/components/elements/Button";
import { SHOP_ITEM_DATA } from "@/app/utils/constants";
import CartItemSection from "./CartItemSection";
import { Modal } from "@/app/components/Modal";
import CartCard from "./CartCard";
import clsx from "clsx";

interface CartModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  modalRef: React.RefObject<HTMLDivElement>;
}

export const CartModal = ({
  modalOpen,
  setModalOpen,
  modalRef,
}: CartModalProps) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal
        variant="right"
        className="sm:w-[428px] w-full bg-white h-screen right-0 absolute max-h-[926px]"
        showDialog={modalOpen}
        closeModal={handleClose}
        modalRef={modalRef}
      >
        <div className="border-b-black border h-[73px] flex items-center justify-between pl-5 pr-1">
          <h2 className="text-[40px] font-bold">BASKET</h2>
          <Button
            onClick={handleClose}
            variant="close"
            className="text-[24px]"
          />
        </div>
        <div className="h-[65px] flex items-center justify-between gap-4 px-5">
          <button
            type="button"
            onClick={() => setIsFavorite(false)}
            className={clsx(
              "rounded-none flex items-center py-[4px] w-full text-[13px] whitespace-nowrap border border-black px-6",
              !isFavorite ? "bg-black text-white" : "bg-white text-black"
            )}
          >
            SHOPPING BAG (4)
          </button>
          <button
            type="button"
            onClick={() => setIsFavorite(true)}
            className={clsx(
              "rounded-none flex items-center justify-center gap-4 w-full border-black border py-[4px] text-[13px] px-6",
              !isFavorite ? "bg-white text-black" : "bg-black text-white"
            )}
          >
            FAVORITES <Heart size={14} color="#E34149" variant="Bold" />
          </button>
        </div>
        <CartItemSection>
          {isFavorite
            ? SHOP_ITEM_DATA.map((item) => {
                return (
                  <CartCard
                    favorite
                    id={item.id}
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                );
              })
            : SHOP_ITEM_DATA.map((item) => {
                return (
                  <CartCard
                    id={item.id}
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                );
              })}
        </CartItemSection>
        <div className="bg-black h-[70px] flex items-center justify-between px-5">
          <div className="mt-2">
            <h2 className="text-[40px] font-bold text-white leading-[22.6px]">
              ₦500, 700.00
            </h2>
            <p className=" text-gray-4 text-[11px] mt-2">
              BEFORE TAXES AND DELIVERY
            </p>
          </div>
          <Button
            variant="outline"
            className="text-[24px] !border-white text-white px-10"
          >
            CHECKOUT
          </Button>
        </div>
      </Modal>
    </>
  );
};
