"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "SAR",
});

interface CurrencyProps {
  value?: string | number;
  className?: string | undefined;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className={cn("font-bold text-blue-950", className)}>{formatter.format(Number(value))}</div>;
};

export default Currency;
