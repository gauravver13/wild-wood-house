// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";

// export default function AuthButton() {
//   const { data: session } = useSession();

//   return session ? (
//     <div>
//       <p>Welcome, {session.user?.name}!</p>
//       <button onClick={() => signOut()}>Sign Out</button>
//     </div>
//   ) : (
//     <button onClick={() => signIn("google")}>Sign In</button>
//   );
// }
