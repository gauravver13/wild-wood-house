import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const category = await prisma.category.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  return NextResponse.json(category, { status: 200 });
}
