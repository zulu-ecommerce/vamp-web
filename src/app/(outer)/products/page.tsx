"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Products = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("type");
  return (
    <div>
      <h1 className="text-[60px] text-primary">{search}</h1>
    </div>
  );
};

export default Products;
