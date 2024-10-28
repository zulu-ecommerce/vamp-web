"use client";

import React from "react";
import clsx from "clsx";

const SlideIndicator = () => {
  const [activeSlide, setActiveSlide] = React.useState(1);
  const slides = [1, 2];

  return (
    <div className="flex items-center gap-1">
      {slides.map((slide) => {
        return (
          <div
            className={clsx(
              "h-[5px] rounded-[1px] transition-all duration-500",
              activeSlide === slide
                ? "bg-black w-[65px]"
                : "bg-black/10 w-[26px]"
            )}
            key={slide}
          />
        );
      })}
    </div>
  );
};

export default SlideIndicator;
