import clsx from "clsx";
import { button, div } from "framer-motion/client";
import React from "react";

interface FilterTagsProp {
  tags: string[];
  activeTags: string[];
}
const FilterTags = ({ tags, activeTags }: FilterTagsProp) => {
  return (
    <div className="flex items-center gap-4 overflow-auto scrollbar-hide w-full">
      {tags.map((tag) => {
        const isActiveTag = activeTags.includes(tag);
        return (
          <button
            key={tag}
            className={clsx(
              "rounded-[1px] py-1 px-2 text-sm border border-primary uppercase whitespace-nowrap",
              isActiveTag
                ? "bg-primary text-white-2 "
                : "bg-white-3 text-primary"
            )}
            type="button"
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTags;
