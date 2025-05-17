import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  // request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const categoryId = await parseInt(params.id);

    // Validate categoryId
    if (isNaN(categoryId)) {
      return NextResponse.json(
        { error: "Invalid category ID" },
        { status: 400 }
      );
    }

    // First check if category exists
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    // Get products with category details
    const products = await prisma.product.findMany({
      where: { categoryId },
      include: {
        category: {
          select: {
            name: true,
            description: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    });

    // Return formatted response
    return NextResponse.json({
      category: {
        id: category.id,
        name: category.name,
        description: category.description
      },
      products: products,
      count: products.length
    }, { status: 200 });

  } catch (error) {
    console.error("Error fetching products by category:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}