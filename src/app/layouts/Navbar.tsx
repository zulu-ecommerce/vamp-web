"use client";

import { usePathname } from "next/navigation";
import { Bag, Profile } from "iconsax-react";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { useComponentVisible } from "../hooks";

import MobileNavbarDrawer from "./MobileNavbarDrawer";
import logo from "/public/assets/images/logo.svg";
import ProfileDrawerModal from "../components/ProfileDrawerModal";

export const Navbar = () => {
  const pathname = usePathname();
  const {
    dropDownButtonRef,
    isComponentVisible: openSideNav,
    setIsComponentVisible: setOpenSideNav,
  } = useComponentVisible();

  const {
    ref: profileButtonRef,
    isComponentVisible: openProfileModal,
    setIsComponentVisible: setOpenProfileModal,
    handleClickOnDropDownButton: handleOpenProfileModal,
  } = useComponentVisible();

  const NAV_LINKS = [
    // {
    //   name: "",
    //   id: "1",
    //   icon: Shop,
    //   href: "/shop",
    // },
    {
      name: "",
      id: "2",
      icon: Bag,
      href: "/cart",
    },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="flex items-center justify-between transition-all bg-primary  top-0 h-[81px] fixed z-[100] w-full"
    >
      <div className="flex items-center container py-4 h-full justify-between transition-all text-tertiary relative z-[100]">
        <button
          aria-label={openSideNav ? "close navigation" : "open navigation"}
          className="pr-2 z-[100]"
          ref={dropDownButtonRef}
          type="button"
        >
          <Hamburger
            toggled={openSideNav}
            toggle={setOpenSideNav}
            label="Show menu"
            easing="ease-in"
            rounded
            size={28}
            color="#FAFAFA"
            duration={0.3}
          />

          {/* logo backdrop */}
        </button>
        <Link className={clsx("")} href="/">
          <Image
            src={logo}
            alt="Vamp-logo"
            style={{ width: "118.64px", height: "auto" }}
          />
        </Link>
        <div className="text-white items-center flex gap-2 text-tertiary">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                href={link.href}
                className="flex centered gap-4 min-w-[44px] w-[44px] rounded-full aspect-square bg-primary bg-opacity-[0.03]"
                key={link.id}
              >
                <link.icon size={24} color="#FAFAFA" variant="Bold" />
              </Link>
            );
          })}
          <button
            onClick={handleOpenProfileModal}
            type="button"
            className="flex centered gap-4 rounded-full"
          >
            <Profile size={24} color="#FAFAFA" variant="Bold" />
          </button>
        </div>
        {/* mobile navbar */}
      </div>

      <ProfileDrawerModal
        handleClose={() => setOpenProfileModal(false)}
        modalOpen={openProfileModal}
        modalRef={profileButtonRef}
      />
      <MobileNavbarDrawer
        openSideNav={openSideNav}
        setOpenSideNav={setOpenSideNav}
      />
    </nav>
  );
};
