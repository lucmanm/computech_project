"use client"
import { useCart } from "@/hook/use-cart";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartComp = () => {
  // const [isMounted, setisMounted] = useState(false);
  const { items } = useCart((state) => state);
  // useEffect(() => {
  //   setisMounted(true);
  // }, []);
  // if (!isMounted) {
  //   return null;
  // }
  
  return (
    <Link
      href="/cart"
      className="py-.5 flex items-center justify-center gap-x-1 rounded-full bg-blue-950 px-2 text-slate-100 hover:bg-blue-600 font-bold"
    >
      <ShoppingBagIcon size={32} className="py-1" />
      <span >{items.length}</span>

    </Link>
  );
};

export default CartComp;
