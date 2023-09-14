"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { Product } from "@/types/table-types";

interface CarProductProps {
  productData: Product;
}

const ProductCard = ({
  productData: { description, price, salePrice },
}: CarProductProps) => {
  return (
    <div className="dt:p-3 my-1 flex w-60 flex-col gap-3 overflow-hidden rounded-lg bg-white p-2 shadow-sm">
      <div className="">
        <Image
          src="/aioimg.jpg"
          width={500}
          height={500}
          alt="all in One Image"
        />
      </div>
      <div>
        <h3 className="tb:text-base line-clamp-2 text-sm">{description}</h3>
      </div>
      <div className="flex">
        <div className="flex">
          <span className="tb:p-0.5 tb:text-lg inline-block self-end pb-1 pr-1 text-xs font-medium">
            SR
          </span>
          <h2 className="leading-0 self-end p-0 font-semibold text-blue-950">
            {price}
          </h2>
        </div>

        <p className="tb:p-0.5 tb:text-lg inline-block self-end pb-1 pl-1 text-xs font-medium text-red-500 line-through">
          {salePrice !== "" && ""}
        </p>
      </div>
      <div className="">
        <div className="mx-auto flex justify-evenly">
          <CustomButton
            btnType="button"
            icon="compare.svg"
            customButtonStyle="bg-slate-100 shadow active:shadow-inner"
          />
          <CustomButton
            btnType="button"
            icon="heart.svg"
            customButtonStyle="bg-slate-100 shadow active:shadow-inner"
          />
          <CustomButton
            btnType="button"
            icon="cart-icon.svg"
            customButtonStyle="bg-slate-100 shadow active:shadow-inner"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
