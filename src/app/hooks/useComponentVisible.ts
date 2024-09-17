"use client";

import React from "react";

export const useComponentVisible = (initialIsVisible = false) => {
  const [isComponentVisible, setIsComponentVisible] =
    React.useState(initialIsVisible);
  const ref = React.useRef<HTMLDivElement>(null);
  const dropDownButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleHideDropDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOnDropDownButton = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  React.useEffect(() => {
    const handleClickOutside = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e: React.ChangeEvent<HTMLInputElement> | any
    ) => {
      if (
        isComponentVisible &&
        ref.current &&
        !ref.current.contains(e.target) &&
        !dropDownButtonRef?.current?.contains(e.target)
      ) {
        setIsComponentVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleHideDropDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleHideDropDown);
    };
  }, [isComponentVisible]);

  return {
    ref,
    dropDownButtonRef,
    isComponentVisible,
    setIsComponentVisible,
    handleClickOnDropDownButton,
  };
};
