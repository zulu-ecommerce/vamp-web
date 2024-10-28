import { SHOP_ITEM_DATA } from "@/app/utils/constants";
import React from "react";
import ShopItemCard from "../../shop/components/ShopItemCard";
import { Button } from "@/app/components/elements/Button";

const ProductSection = () => {
  return (
    <div>
        <div className="grid grid-cols-1 2xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6 gap-4">
          {SHOP_ITEM_DATA.map((item) => {
            return (
              <ShopItemCard
                id={item.id}
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
          <Button variant="outline" className="w-full my-6">
            Load more products
          </Button>
          
    </div>
  );
};

export default ProductSection;
