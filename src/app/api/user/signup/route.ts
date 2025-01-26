import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, name, password }: { email: string; name: string; password: string } = await request.json();

  if (!email || !password || !name) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  console.log(user, "Congratulation Gaurav! you have successfully signed up");

  return NextResponse.json(user, { status: 201 });
}
