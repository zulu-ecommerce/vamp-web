"use client";

import React from "react";
import clsx from "clsx";
import { Modal } from "@/app/components/Modal";
import { Button } from "@/app/components/elements/Button";
import { Heart } from "iconsax-react";
import CartItemSection from "./CartItemSection";
import ShopItemCard from "../../shop/components/ShopItemCard";
import { SHOP_ITEM_DATA } from "@/app/utils/constants";
import CartCard from "./CartCard";

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
          <button className="rounded-none flex items-center py-[4px] w-full text-[13px] border border-black px-6">
            SHOPPING BAG (4)
          </button>
          <button className="rounded-none flex items-center justify-center gap-4 text-white w-full border-black border py-[4px] text-[13px] bg-black px-6">
            FAVORITES <Heart size={14} color="#E34149" variant="Bold" />
          </button>
        </div>
        <CartItemSection>
          {SHOP_ITEM_DATA.map((item) => {
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
      </Modal>
    </>
  );
};
