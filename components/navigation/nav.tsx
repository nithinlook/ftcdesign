"use client";

import { usePathname } from "next/navigation";
import type { PageMapItem } from "nextra";
import { Anchor, Search } from "nextra/components";
import { normalizePages } from "nextra/normalize-pages";
import type { FC } from "react";
import { Input } from "../ui/input";

export const Navbar: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname();
  const { topLevelNavbarItems } = normalizePages({
    list: pageMap,
    route: pathname,
  });

  return (
    <nav className="px-8 py-8 border-b shadow-lg bg-white">
      <div className="grid grid-cols-3 gap-4 justify-between items-center">
        <div className="col-span-1">FTCDesign</div>
        <div className="col-span-1">
          <Search />
        </div>
        <div className="col-span-1"></div>
      </div>
    </nav>
  );
};
