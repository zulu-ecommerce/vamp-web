import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "/public/assets/images/logo.svg";

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
    <footer className="container bg-primary py-10 text-sm text-white">
      <p>© Vamp.com • 2024 All Rights Reserved</p>
      <div className="mt-10">
        {NAV_LINKS.map((link) => {
          return (
            <Link className="mt-3 block" key={link.id} href={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="mt-10">
        {SOCIAL_LINKS.map((link) => {
          return (
            <Link key={link.id} href={link.href} className="mt-3 block">
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="mt-10 space-y-4">
        <p className="">Admiralty Mall, Shop 2,</p>
        <p className="">Admiralty Rd, Eti-Osa, Lekki,</p>
        <p className="">Lagos.</p>
        <p className="">Nigeria.</p>
      </div>
      <Image
        src={logo}
        alt="Vamp-logo"
        className="mt-10"
        style={{ width: "100%", height: "auto" }}
      />
    </footer>
  );
};

export default Footer;
