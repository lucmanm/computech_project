import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/custom-icon";
import { useCart } from "@/hook/use-cart";
import { TProduct } from "@/types/type";
import { X } from "lucide-react";
import Image from "next/image";

type TCartItemsProps = {
  data: TProduct
};

const CartItemComp: React.FC<TCartItemsProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    // TODO: Must be always true
    if (data.id) cart.removeItem(data.id);
  };

  return (
    <div className="flex flex-col border shadow-sm bg-white rounded-md">
        <div
          className="flex h-min overflow-hidden rounded-md p-0"
        >
          <Image
            src={
              data.images[0]?.imageUrl === undefined
                ? "/computech-logo.png"
                : data.images[0]?.imageUrl
            }
            alt=""
            width={200}
            height={200}
            className="p-2"
          />
          <div className="flex w-full flex-col justify-between p-4">
            <div className="">
              <h3 className="h3 pr-8 text-slate-950">{data.description}</h3>
              <p className="font-medium text-slate-700">SKU: {data.model}</p>
            </div>

            <Currency value={data.price} className="text-2xl" />
          </div>
          <div className="relative">
            <IconButton
              onClick={onRemove}
              icon={<X size={15} />}
              className="absolute right-4 top-4 hover:border hover:border-red-700 hover:text-red-700"
            />
          </div>
        </div>
    </div>
  );
};

export default CartItemComp;
