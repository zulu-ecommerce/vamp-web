import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo2 from "/public/assets/images/logo2.svg";
import clsx from "clsx";

const Footer = () => {
  const NAV_LINKS = [
    {
      name: "Shop",
      id: "1",
      href: "/shop",
    },
    {
      name: "About us",
      id: "2",
      href: "/about-us",
    },
    {
      name: "Contact us",
      id: "3",
      href: "/contact-us",
    },
    {
      name: "Login",
      id: "4",
      href: "/login",
    },
  ];

  const SOCIAL_LINKS = [
    {
      name: "Instagram",
      id: "3",
      href: "https://instagram.com",
    },
    {
      name: "X",
      id: "2",
      href: "https://twitter.com",
    },
    {
      name: "Facebook",
      id: "1",
      href: "https://facebook.com",
    },
    {
      name: "Tiktok",
      id: "4",
      href: "https://tiktok.com",
    },
  ];

  return (
    <footer className=" bg-primary ">
      <div className="pt-10 container text-sm text-white overflow-hidden">
        <div className="lg:flex lg:items-start lg:justify-between lg:mb-20">
          <p>© Vamp.com • 2024 All Rights Reserved</p>
          <div className="lg:flex lg:items-start gap-20">
            <div className="mt-10 lg:mt-0">
              {NAV_LINKS.map((link, index) => {
                return (
                  <Link
                    className={clsx("block", index > 0 && "mt-3")}
                    key={link.id}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="mt-10 lg:mt-0">
              {SOCIAL_LINKS.map((link, index) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={clsx("block", index > 0 && "mt-3")}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="my-10 lg:mt-0 space-y-4">
              <p className="">Admiralty Mall, Shop 2,</p>
              <p className="">Admiralty Rd, Eti-Osa, Lekki,</p>
              <p className="">Lagos.</p>
              <p className="">Nigeria.</p>
            </div>
          </div>
        </div>
        <Image
          src={logo2}
          alt="Vamp-logo"
          className=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
