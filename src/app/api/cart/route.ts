import prisma from "@/lib/prisma";
import { authenticate } from "@/middleware/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const decoded = authenticate(request);
  const userId = decoded?.userId;

  const cart = await prisma.cart.findUnique({
    where: { id: Number(userId) },
  });

  return NextResponse.json(cart, { status: 200 });
}



// needs to be changed - more polished
export async function POST(request: NextRequest) {
    const decoded = authenticate(request);
    const userId = decoded?.userId;
    const { productId, quantity }: { productId: number; quantity: number } = await request.json();
  
    const cart = await prisma.cart.upsert({
      where: { id: Number(userId) },
      update: {
        items: {
          push: { productId, quantity },
        },
      },
      create: {
        userId: Number(userId),
        items: [{ productId, quantity }],
        totalAmount: 0,
      },
    });
  
    return NextResponse.json(cart, { status: 201 });
  }