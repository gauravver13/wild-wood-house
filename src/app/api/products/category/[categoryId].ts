import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { categoryId: string } }) {
  const products = await prisma.product.findMany({
    where: { categoryId: parseInt(params.categoryId) },
  });

  return NextResponse.json(products, { status: 200 });
}
