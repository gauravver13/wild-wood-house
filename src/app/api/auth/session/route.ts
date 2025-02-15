import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import jwt from "jsonwebtoken";
import axios from "axios";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);
    
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "No active session" },
        { status: 401 }
      );
    }

    // console.log('Session user:', session.user);
    // console.log('Session Token:', session.token);

    // Generate JWT token
    const token = jwt.sign(
      {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name
      },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    // Create response data
    const responseData = {
      user: session.user,
      token,
      isAuthenticated: true
    };

    // Log for debugging
    console.log('Session response:', responseData);

    return NextResponse.json(responseData);

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
      return NextResponse.json(
        { error: error.response?.data || "Authentication failed" },
        { status: error.response?.status || 500 }
      );
    }

    console.error('Session error:', error);
    return NextResponse.json(
      { error: "Failed to process authentication" },
      { status: 500 }
    );
  }
}