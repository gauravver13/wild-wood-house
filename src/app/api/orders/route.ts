import prisma from "@/lib/prisma";
import { authenticate } from "@/middleware/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const decoded = authenticate(request);
    const userId = decoded?.userId;
    
    const { 
      shippingAddress, 
      items 
    }: { 
      shippingAddress: string; 
      items: Array<{ productId: number; quantity: number }> 
    } = await request.json();

    return await prisma.$transaction(async (tx) => {
      // 1. Validate stock and calculate total
      let totalAmount = 0;
      const orderItemsData = [];

      for (const item of items) {
        const product = await tx.product.findUnique({
          where: { id: item.productId }
        });

        if (!product) {
          throw new Error(`Product ${item.productId} not found`);
        }

        if (product.stock < item.quantity) {
          throw new Error(`Insufficient stock for product ${product.name}`);
        }

        // Add to order items data
        orderItemsData.push({
          productId: item.productId,
          quantity: item.quantity,
          price: product.price
        });

        // Update running total
        totalAmount += product.price * item.quantity;

        // Update product stock
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } }
        });
      }

      // 2. Create order and order items
      const order = await tx.order.create({
        data: {
          userId: Number(userId),
          shippingAddress,
          totalAmount,
          status: "Pending",
          paymentStatus: "Pending",
          items: {
            create: orderItemsData
          }
        }
      });

      // 3. Clear user's cart
      await tx.cart.deleteMany({
        where: { userId: Number(userId) }
      });

      return NextResponse.json({
        success: true,
        data: order
      }, { status: 201 });
    });

  } catch (error) {
    console.error('Order creation failed:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Order creation failed'
    }, { status: 400 });
  }
}