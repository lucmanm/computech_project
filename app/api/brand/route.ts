import { prisma } from "@/lib/db";
import { brandFormSchema } from "@/types/validation";
import { NextResponse } from "next/server";
import { z } from "zod";


export const GET = async (req: Request) => {
  try {
    const brands = await prisma.brand.findMany();
    return NextResponse.json({ brands }, { status: 200 });
  } catch (error) {
    console.log("ERROR_BRAND", error);
    return NextResponse.json(
      { message: "ERROR_BRAND", error },
      { status: 500 }
    );
  }
};


export async function POST(req: Request) {
  try {


    const body = await req.json();

    const { brand, imageUrl } = brandFormSchema.parse(body);

    const checkbBrandName = await prisma.brand.findFirst({
      where: { brand },
    });

    if (checkbBrandName) {
      return new NextResponse("Brand name Exist", { status: 500 });
    }

    const brandData = await prisma.brand.create({
      data: {
        brand,
        imageUrl,
      },
    });

    return NextResponse.json(
      {
        brand: brandData,
        messsage: "Brand Created Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("ERROR_BRAND", error);
    return NextResponse.json(
      { message: "ERROR_BRAND" },
      { status: 500 }
    );
  }
}
