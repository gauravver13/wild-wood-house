import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/jwt";
import { NextResponse } from 'next/server';


// check here for bcrypt and i bcryptjs

export async function POST(request: Request) {
  const { email, password }: { email: string; password: string } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = generateToken(user.id);

  console.log('TOKEN:', token);
  console.log('USER:', user);

  return NextResponse.json({ token }, { status: 200 });
}
