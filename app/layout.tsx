import { Head } from "nextra/components";

import { getPageMap } from "nextra/page-map";

import type { FC, ReactNode } from "react";

import { Figtree } from "next/font/google";

import "./global.css";
import { Metadata } from "next";
import { NextraTheme } from "../components/docs/theme";
import { Navbar } from "@/components/navigation/nav";
import { Footer } from "@/components/navigation/footer";

const font = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "FTCDesign | %s",
  description: "A design system for the FTC community",
};

const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pagemap = await getPageMap();

  return (
    <>
      <html lang="en">
        <Head />
      </html>
      <body className={font.className}>
        <Navbar pageMap={pagemap} />
        {children}
        <Footer />
      </body>
    </>
  );
};

export default RootLayout;
