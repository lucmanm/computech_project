import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hook/use-cart";
import { cn } from "@/lib/utils";

const SummaryComp = ({ className }: { className?: string }) => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {};

  return (
    <div
      className={cn("rounded-md border bg-white px-4 shadow-sm ", className)}
    >
      <div className="bg-white  py-2 text-lg font-bold ">Order Summary</div>
      <Separator />
      <div className="space-y-4">
        <Currency value={totalPrice} />

        <Button
          onClick={onCheckout}
          className="w-full rounded-full py-2 text-xl"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default SummaryComp;
