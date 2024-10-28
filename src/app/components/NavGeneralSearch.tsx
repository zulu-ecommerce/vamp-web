import { Icon, SearchNormal1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import icon1 from "../../../public/assets/icons/icon1.svg";
import icon2 from "../../../public/assets/icons/icon2.svg";
import icon3 from "../../../public/assets/icons/icon3.svg";

interface NavGeneralSearchProps {
  setOpenSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavGeneralSearch = ({ setOpenSideNav }: NavGeneralSearchProps) => {
  const NAV_LINKS = [
    { id: "1", name: "All Products", link: "/products?type=all-products" },
    { id: "2", name: "#Trending🔥", link: "/products?type=trending" },
    { id: "3", name: "Vapes", link: "/products?type=vapes" },
    { id: "4", name: "Lighters", link: "/products?type=lighters" },
    { id: "5", name: "Grinders", link: "/products?type=grinders" },
    { id: "6", name: "Rolling paper", link: "/products?type=rolling-paper" },
    { id: "7", name: "Ashtrays", link: "/products?type=ashtrays" },
    { id: "8", name: "Blunt Wraps", link: "/products?type=blunt-wraps" },
    { id: "9", name: "Backwoods", link: "/products?type=backwoods" },
    { id: "10", name: "Filter Tips", link: "/products?type=filter-tips" },
    { id: "11", name: "Rolling Trays", link: "/products?type=rolling-trays" },
    { id: "12", name: "Pipes", link: "/products?type=pipes" },
    { id: "13", name: "Hookahs", link: "/products?type=hookahs" },
    { id: "14", name: "Stash Jars", link: "/products?type=stash-jars" },
    { id: "15", name: "Odor Control", link: "/products?type=odor-control" },
  ];

  const SOCIAL_LINKS = [
    { id: "1", name: "WhatsApp", link: "https://wa.me", img: icon1 },
    { id: "2", name: "Instagram", link: "https://instagram.com", img: icon2 },
    { id: "3", name: "Twitter", link: "https://twitter.com", img: icon3 },
  ];

  const handleCloseNav = () => {
    setOpenSideNav(false);
  };

  return (
    <div className="">
      <div className="px-[22px]">
        <div className="flex items-center h-[40px] w-full p-1 border border-primary">
          <input
            type="text"
            className="border-none w-full px-2 bg-transparent text-[14px] placeholder:text-[13px] focus:outline-none"
            placeholder="SEARCH FOR AN ITEM, BRAND, COLOR..."
          />
          <div className="w-[30px] min-w-[30px] aspect-square centered bg-primary">
            <SearchNormal1 size="16" color="#FAFAFA" />
          </div>
        </div>
      </div>

      <div className="w-full font-normal space-y-3 h-[calc(100dvh-248px)] mt-8 overflow-auto pl-[22px]">
        {NAV_LINKS.map((link) => (
          <Link
            onClickCapture={handleCloseNav}
            href={link.link}
            key={link.id}
            className="text-base block font-normal py-2 text-black"
          >
            {link.name.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="flex items-center px-[22px] w-full h-[68px] bg-gray-7 justify-between mt-2">
        <p className="text-primary/50">© 2024 • All Rights Reserved</p>
        <div className="flex items-center gap-1">
          {SOCIAL_LINKS.map((link) => (
            <Link
              href={link.link}
              key={link.id}
              className="w-[30px] h-[30px] aspect-square centered rounded-full bg-primary bg-opacity-[0.1]"
            >
              <div className="w-[28px] mi-w-[28px] aspect-square centered rounded-[5px] bg-primary">
                <Image src={link.img} alt={link.name} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavGeneralSearch;
