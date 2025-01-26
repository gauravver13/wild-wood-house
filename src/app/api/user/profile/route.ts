import prisma from '@/lib/prisma';
import { authenticate } from '@/middleware/auth';  // Import the authenticate function
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  const decoded = authenticate(request);
  
  if (!decoded || !decoded.userId) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
  }

  const userId = decoded.userId;  // TypeScript knows this is a string

  const { name, address, phone }: { name: string; address: string; phone: string } = await request.json();

  const updatedUser = await prisma.user.update({
    where: { id: Number(userId) },
    data: { name, address, phone },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function GET(request: Request) {
  const decoded = authenticate(request);
  const userId = decoded?.userId;

  const user = await prisma.user.findUnique({ where: { id: Number(userId) } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user, { status: 200 });
}