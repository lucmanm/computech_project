import { logoUrl } from "@/lib/constant";
import Link from "next/link";
import { getProductCategory } from "@/lib/actions/getCategory";
import DropdownMenu from "./category-dropdown-menu";
import SearchInput from "./SearchInput";
import { cn } from "@/lib/utils";
import SheetSide from "../sheets/menu-sheet";
import { Heart, ShoppingBagIcon, UserCircle2 } from "lucide-react";
import TopNavigation from "./TopNavigation";
import Logo from "./logo";
import { TBrand, TCategory } from "@/types/type";
import { getBrands } from "@/lib/actions/getBrands";
import CategoryDropdownMenu from "./category-dropdown-menu";
import { useEffect, useState } from "react";
import CartComp from "./cart";

type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = async ({ className }) => {
  const categories: TCategory[] = await getProductCategory();
  const brandData: TBrand[] = await getBrands();

  return (
    <header className={cn("border-b bg-slate-100 md:shadow-md", className)}>
      {/* <TopNavigation/> */}
      <div className="bg-white py-2">
        <div className="flex flex-wrap items-center justify-between space-x-4 px-3 lg:container lg:px-0">
          {/* Side menu */}
          <SheetSide className="rounded-full p-2 hover:bg-blue-950 hover:text-white" />

          {/* Logo */}
          <Logo />
          {/* search input */}
          <SearchInput className="flex-1" />
          <div className="flex items-center justify-center gap-x-2">
            {/* Product Category Menu */}
            <CategoryDropdownMenu
              title="All Category"
              categories={categories}
            />
            {/* <SideBarModal /> */}
          </div>
          {/* Brands Menu */}
          <div className="flex">
            <Link href="/my-account/wishlist">
              <Heart
                size={32}
                className="hidden overflow-visible rounded-full hover:cursor-pointer hover:bg-blue-950 hover:text-white hover:shadow-md"
              />
            </Link>
            <Link href="/sign-in">
              <UserCircle2
                size={32}
                className="hidden overflow-visible rounded-full hover:cursor-pointer hover:bg-blue-950 hover:text-white hover:shadow-md"
              />
            </Link>

            <CartComp />
            
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
