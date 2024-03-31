import { MessageCircle } from "lucide-react";

import { TProduct } from "@/types/type";
import Link from "next/link";

type InfoProps = {
  prodoctData: TProduct
};

const Info: React.FC<InfoProps> = ({ prodoctData }) => {
  return (
    <div className="flex flex-col justify-between md:h-full">
      <div className="">
        {/* <Image
          src={brand.imageUrl}
          width={48}
          height={48}
          alt={brand.brand}
          className="rounded-md"
        /> */}
        <h1 className="h1 text-base font-bold text-gray-900">{prodoctData.description}</h1>
        <h2 className="text-sm text-gray-900 lg:text-xl">Model No: {prodoctData.model}</h2>
      </div>
      <div className="w-full">
        <hr className="my-4" />
        <Link
        href={"https://api.whatsapp.com/send/?phone=%2B966562617554&text&type=phone_number&app_absent=0"}
          className="flex bg-green-500 rounded-full py-3 justify-center gap-x-2 items-center text-slate-100"
        >
          <MessageCircle size={20} />
          <span className="text-xl font-bold">WhatsApp</span>
        </Link>
      </div>
    </div>
  );
};

export default Info;
