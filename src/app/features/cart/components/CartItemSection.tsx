import React from "react";

interface CartItemSectionProps {
  children: React.ReactNode;
}
const CartItemSection = ({ children }: CartItemSectionProps) => {
  return <div className="px-5">{children}</div>;
};

export default CartItemSection;
