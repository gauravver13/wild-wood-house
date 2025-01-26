// src/types/jwt.d.ts

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }

  export interface JwtPayload {
    userId: Int
  }
}

export {};  // This ensures the file is treated as a module
