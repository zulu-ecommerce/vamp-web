import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import React from "react";
import clsx from "clsx";

import NavGeneralSearch from "../components/NavGeneralSearch";

interface MobileNavbarDrawerProps {
  openSideNav: boolean;
  setOpenSideNav: React.Dispatch<React.SetStateAction<boolean>>;
  ref?: React.RefObject<HTMLDivElement>;
}

export const MobileNavbarDrawer = ({
  openSideNav,
  setOpenSideNav,
}: MobileNavbarDrawerProps) => {
  return (
    // <RemoveScroll
    //   enabled={openSideNav}
    //   removeScrollBar={false}
    //   allowPinchZoom={false}
    // >
    <div
      className={clsx(
        "fixed top-[71px] left-0 box-border delay-100 pt-6 transition-all overflow-y-auto overflow-x-hidden text-primary bg-white-3 h-[calc(100vh-71px)] lg:hidden items-center",
        openSideNav ? "w-screen opacity-100 md:px-10" : "w-0 px-0 "
      )}
    >
      <div>
        <NavGeneralSearch setOpenSideNav={setOpenSideNav} />
      </div>
    </div>
    // </RemoveScroll>
  );
};

export const DesktopNavbar = ({
  openSideNav,
  setOpenSideNav,
  ref,
}: MobileNavbarDrawerProps) => {
  return (
    <div
      className={clsx(
        "absolute delay-100 pt-6 transition-all overflow-y-auto overflow-x-hidden text-primary bg-white-3 left-0 hidden lg:block items-center top-[82px] max-h-[661px] h-[calc(100vh-100px)]",
        openSideNav ? "w-[428px] opacity-100 md:px-10" : "w-0 px-0 "
      )}
    >
      <div>
        <NavGeneralSearch setOpenSideNav={setOpenSideNav} />
      </div>
    </div>
  );
};
