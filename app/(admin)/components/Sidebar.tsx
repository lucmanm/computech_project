"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../../../components/CustomButton";
import { usePathname } from "next/navigation";
import {
  BadgePlus,
  Clapperboard,
  LayoutDashboard,
  Projector,
  SquareStack,
  Trello,
} from "lucide-react";

const SideBarLabels = [
  {
    title: "Dashboard",
    links: [],
  },
  {
    title: "Products",
    links: [
      {
        name: "Products",
        icon: <LayoutDashboard />,
        url: "/dashboard/products",
      },
      {
        name: "Create Product",
        icon: <BadgePlus />,
        url: "/dashboard/products/create",
      },
    ],
  },
  {
    title: "Categories",
    links: [
      {
        name: "Category List",
        icon: <SquareStack />,
        url: "/dashboard/category",
      },
      {
        name: "Create Category",
        icon: <BadgePlus />,
        url: "/dashboard/category/create",
      },
    ],
  },

  {
    title: "Brands",
    links: [
      {
        name: "Brands",
        icon: <Trello />,
        url: "/dashboard/brand",
      },
      {
        name: "Create Brand",
        icon: <BadgePlus />,
        url: "/dashboard/brand/create",
      },
    ],
  },
  {
    title: "Banners",
    links: [
      {
        name: "Slider",
        icon: <Projector />,
        url: "/dashboard/sliders",
      },
      {
        name: "Banners",
        icon: <Clapperboard />,
        url: "/dashboard/banners",
      },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => setIsOpen((prev) => !prev);

  return (
    <aside
      className={`relative h-screen transform space-y-8 overflow-hidden bg-white  shadow-sm ${
        isOpen ? "w-14 transform p-1" : "w-56 p-2"
      } `}
    >
      {/* SideBar header Menu */}
      <div className="flex items-center justify-between border-black py-2 pr-1">
        <Link href="http://localhost:3000/dashboard" onClick={() => {}}>
          <Image
            src={`/computech-landscape-logo.png`}
            alt="computech logo"
            height={24}
            width={110}
          />
        </Link>
        <CustomButton btnType="button" clickHandler={clickHandler}>
          <Image
            src={`/default/burger.svg`}
            alt="burger menu"
            height={24}
            width={24}
          />
        </CustomButton>
      </div>
      <div>
        {/* Sidebar Menu Pages*/}
        {SideBarLabels.map((link) => (
          <div key={link.title} className="space-y-2">
            <p
              className={`rounded px-2 py-2 font-semibold uppercase text-blue-950 ${
                isOpen && "hidden"
              }`}
            >
              {link.title}
            </p>
            {/* Sub Category pages. */}
            {link.links.map((link) => (
              <Link
                key={link.name}
                href={`${link.url}`}
                className={`flex items-center gap-2 truncate  rounded-md py-2 pl-3 font-light capitalize ${
                  pathname === link.url
                    ? " bg-blue-950 text-white"
                    : " hover:bg-blue-600 hover:text-white"
                }`}
              >
                <div>{link.icon}</div>
                <span
                  className={`capatilize font-medium ${isOpen && "hidden"}`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
