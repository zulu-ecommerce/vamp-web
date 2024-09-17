import localFont from "next/font/local";
import type { Metadata } from "next";

import "./globals.css";

const FKScreamer = localFont({
  variable: "--font-fk-screamer",
  display: "swap",
  src: [
    {
      path: "../../public/assets/fonts/FKScreamerTrial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FKScreamerTrial-Medium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FKScreamerTrial-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/FKScreamerTrial-Black.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

const NeutrifStudio = localFont({
  variable: "--font-neutrif-studio",
  display: "swap",
  src: [
    {
      path: "../../public/assets/fonts/NeutrifStudio-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/NeutrifStudio-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/NeutrifStudio-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/NeutrifStudio-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Vamp",
  applicationName: "Vamp",
  category: "Leisure",
  referrer: "origin-when-cross-origin",
  description: "Vamp for smoking",
  publisher: "Vamp",
  creator: "Vamp",
  keywords: [],
  twitter: {
    creator: "Vamp",
    title: "Vamp",
    description: "Vamp for smoking",
    images: {
      url: "",
      alt: "Next.js Logo",
    },
    site: "@Vamp",
    card: "summary_large_image",
  },
  openGraph: {
    title: "Vamp",
    description: "Vamp for smoking",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    videos: [
      {
        url: "",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={FKScreamer.variable}>
      <body className={NeutrifStudio.variable}>{children}</body>
    </html>
  );
}
