import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { orderId, amount, method }: { orderId: number; amount: number; method: string } = await request.json();

  const payment = await prisma.payment.create({
    data: {
      orderId,
      amount,
      method,
      status: "Pending",
    },
  });

  return NextResponse.json(payment, { status: 201 });
}
