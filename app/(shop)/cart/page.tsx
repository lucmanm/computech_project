"use client";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "../_components/Container";
import { useCart } from "@/hook/use-cart";
import CartItemComp from "./_components/cart-items";
import SummaryComp from "./_components/summary";

const CartPage = () => {
  const cart = useCart();
  return (
    <Container classname="flex flex-col gap-y-2 ">
      <span className="border bg-white px-4 py-4 rounded-md text-2xl font-bold shadow-sm">

        Shopping Cart
      </span>
      {cart.items.length === 0 ? (
        <div className="w-full border bg-white text-center text-xl shadow-sm">
          No added item
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-9 space-y-2">
            {cart.items.map((data, index) => (
              <CartItemComp key={index} data={data} />
            ))}
          </div>
          <SummaryComp className="col-span-3" />
        </div>
      )}
    </Container>
  );
};

export default CartPage;
