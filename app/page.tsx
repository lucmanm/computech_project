"use client";
import ProductCategory from "@/components/ProductCategory";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden  border border-black">
      <Slider />
      <ProductCategory/>
    </main>
  );
}
