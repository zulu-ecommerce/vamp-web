import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { Loader } from "./Loader";

interface ButtonProps {
  variant?: "primary" | "outline" | "backdrop" | "none" | "secondary" | "danger";
  className?: string;
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  as?: "button" | "link";
  href?: string | undefined;
  target?: string;
  ariaLabel?: string;
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  isLoading = false,
  type = "button",
  className,
  children,
  onClick,
  as = "button",
  href,
  target,
  ariaLabel,
}) => {
  const Tag = as === "button" ? "button" : Link;

  if (as === "link" && !href) {
    throw new Error("href is required when button is used as link");
  }

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      href={as === "link" ? href : undefined}
      target={as === "link" ? target : undefined}
      aria-label={ariaLabel}
      className={clsx(
        className,
        "rounded justify-center font-[500] whitespace-nowrap w-fit focus:outline-none py-3 disabled:cursor-not-allowed gap-2 disabled:opacity-70 cursor-pointer flex items-center gap transition-colors duration-100 text-sm",
        variant === "primary" && "bg-primary text-white-2 font-[400] px-8 ",
        variant === "secondary" && "bg-white-2 text-primary px-8",
        variant === "outline" &&
          "flex items-center text-primary border-primary border justify-center px-8",
        variant === "danger" && "bg-red text-white-2 font-[400] px-8",
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {isLoading && <Loader size="md" className="text-current" />}
      {children}
    </Tag>
  );
};
