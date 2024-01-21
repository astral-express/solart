"use client";

import {
  HomeIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "Home",
    href: "/",
    // icon: HomeIcon,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    // icon: BuildingLibraryIcon,
  }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center justify-center p-2",
              {
                "transition ease-linear border-2 border-purple-700 hover:border-purple-500 rounded-lg": pathname === link.href,
                "transition ease-linear border-2 border-transparent hover:border-b-purple-500": pathname !== link.href,
              }
            )}
          >
            {/* <LinkIcon className="w-5 mr-1" /> */}
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
