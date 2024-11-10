import React from "react";

interface CartItemSectionProps {
  children: React.ReactNode;
}
const CartItemSection = ({ children }: CartItemSectionProps) => {
  return (
    <div className="px-5 max-h-[calc(100dvh-208px)] lg:max-h-[calc(100vh-208px)] lg:h-[720px] overflow-auto">
      {children}
    </div>
  );
}

export default CartItemSection;
