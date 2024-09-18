import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import React from "react";
import clsx from "clsx";

import NavGeneralSearch from "../components/NavGeneralSearch";

interface MobileNavbarDrawerProps {
  openSideNav: boolean;
  ref: React.RefObject<HTMLDivElement>;
  setOpenSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileNavbarDrawer = ({ openSideNav, ref, setOpenSideNav }: MobileNavbarDrawerProps) => {
  return (
    <FocusLock>
      <RemoveScroll>
        <div
          ref={ref}
          className={clsx(
            "fixed top-[71px] left-0 box-border delay-100 pt-6 transition-all overflow-y-auto overflow-x-hidden text-primary bg-white-3 h-[calc(100vh-71px)] lg:hidden items-center",
            openSideNav ? "w-screen opacity-100 md:px-10" : "w-0 px-0 "
          )}
        >
          <div>
            <NavGeneralSearch setOpenSideNav={setOpenSideNav}/>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
};

export default MobileNavbarDrawer;
