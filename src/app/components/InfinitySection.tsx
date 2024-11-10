import clsx from "clsx";
import React from "react";
import { Button } from "./elements/Button";

import vc1 from "../../../public/assets/images/vc1.webp";
import vc2 from "../../../public/assets/images/vc2.webp";
import vc3 from "../../../public/assets/images/vc3.webp";
import vc4 from "../../../public/assets/images/vc4.webp";
import vc5 from "../../../public/assets/images/vc5.webp";
import vc6 from "../../../public/assets/images/vc6.webp";
import vc7 from "../../../public/assets/images/vc7.webp";
import vc8 from "../../../public/assets/images/vc8.webp";
import Image from "next/image";

export const InfinitySection = () => {
  const CONTENT = [
    {
      image: vc1,
      id: 1,
    },
    {
      image: vc2,
      id: 2,
    },
    {
      image: vc3,
      id: 3,
    },
    {
      image: vc4,
      id: 4,
    },
  ];

  return (
    <div className="w-full flex items-center justify-between overflow-hidden gap-4 sm:gap-6 ribbon-container">
      <div className="flex-1 flex justify-around gap-4 sm:gap-6 ribbon">
        {CONTENT.map((content) => {
          return (
            <Image
              src={content.image}
              alt={`vc${content.id}`}
              key={content.id}
              className="max-w-[184px] sm:max-w-[440px] h-auto"
            />
          );
        })}
      </div>
      <div className="flex-1 flex justify-around gap-4 sm:gap-6 ribbon">
        {CONTENT.map((content) => {
          return (
            <Image
              src={content.image}
              alt={`vc${content.id}`}
              key={content.id}
              className="max-w-[184px] sm:max-w-[440px] h-auto"
            />
          );
        })}
      </div>
    </div>
  );
};

const CONTENT_TWO = [
  {
    img: vc5,
    id: "5",
  },
  {
    img: vc6,
    id: "6",
  },
  {
    img: vc7,
    id: "7",
  },
  {
    img: vc8,
    id: "8",
  },
];

export const InfinitySection2 = () => {
  return (
    <div className="w-full mt-4 sm:mt-6 flex items-center justify-between overflow-hidden gap-4 sm:gap-6 overall-card-container">
      <div className="flex-1 flex justify-around gap-4 sm:gap-6 card-container">
        {CONTENT_TWO.map((content, index) => {
          return (
            <Image
              src={content.img}
              alt={`vc${content.id}`}
              key={content.id}
              className="max-w-[184px] sm:max-w-[440px] h-auto"
            />
          );
        })}
      </div>
      <div className="flex-1 flex justify-around gap-4 sm:gap-6 card-container">
        {CONTENT_TWO.map((content, index) => {
          return (
            <Image
              src={content.img}
              alt={`vc${content.id}`}
              key={content.id}
              className="max-w-[184px] sm:max-w-[440px] h-auto"
            />
          );
        })}
      </div>
    </div>
  );
};
