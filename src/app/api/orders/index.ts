import prisma from "@/lib/prisma";
import { authenticate } from "@/middleware/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const decoded = authenticate(request);
  const userId = decoded?.userId;
  const { shippingAddress, items, totalAmount }: { shippingAddress: string; items: any; totalAmount: number } = await request.json();

  const order = await prisma.order.create({
    data: {
      userId: Number(userId),
      shippingAddress,
      items: JSON.stringify(items),
      totalAmount,
    },
  });

  return NextResponse.json(order, { status: 201 });
}

export async function GET(request: NextRequest) {
    const decoded = authenticate(request);
    const userId = decoded?.userId;
  
    const orders = await prisma.order.findMany({ where: { userId: Number(userId) } });
    return NextResponse.json(orders, { status: 200 });
  }