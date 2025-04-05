import NextAuth, { Session, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
customToken?: string | null;
    };
  }
}

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // async profile(profile) {
      //   // 1. Generate secure password
      //   const defaultPassword = "google_" + Math.random().toString(36).slice(-8);
      //   const hashedPassword = await bcrypt.hash(defaultPassword, 10);

      //   // 2. Upsert user
      //   const user = await prisma.user.upsert({
      //     // Find user by email
      //     where: { email: profile.email },
      //     // Don't update existing users
      //     update: {},
      //     // Create new user if not found
      //     create: {
      //       email: profile.email,
      //       name: profile.name,
      //       image: profile.picture,
      //       password: hashedPassword,
      //     },
      //   });

        
      //   // // 3. Return safe user data
      //   // return {
      //   //   id: user.id.toString(),
      //   //   name: user.name,
      //   //   email: user.email,
      //   //   image: user.image,
      //   // };
      // },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) return null;

        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isValidPassword) return null;

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {

    //check out here what exactly account is
    async jwt({ token, user, account }) {
      if (account && user) {
// Add custom claims to token
        token.userId = user.id;
        // console.log("user", user);
        // console.log("account", account);
// Generate custom JWT
        const customToken = jwt.sign(
          { 
            userId: user.id,
            email: user.email
          },
          process.env.JWT_SECRET!,
          { expiresIn: '1d' }
        );
        
        token.customToken = customToken;
        // console.log("token", token);
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
// Add custom token to session
        session.user.id = token.userId as string;
        session.user.customToken = token.customToken as string;
      }
      console.log("session", session);
      return session;
    },

    async signIn({ user, account }) {
      // console.log("signIn callback:: ", user, account);
      try {
        // Check if the user already exists in DB
        let existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          const password = "zxcvbnm"
          const hashedPassword = await bcrypt.hash(password, 10);
          // Create new user if not found
          existingUser = await prisma.user.create({
              data: {
                email: user.email!,
                name: user.name!,
                image: user.image!,
                password: hashedPassword,
              }
          });
        }

        return true; // Allow login
      } catch (error) {
        console.error("Error saving user:", error);
        return false; // Reject login if DB error
      }
    },
  },
  pages: {
    signIn: '/',
    // signOut: '/',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
