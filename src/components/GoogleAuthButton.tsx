import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setAuthToken } from "@/lib/authUtils";
import axios from "axios";

interface GoogleAuthButtonProps {
  action: "Sign up" | "Log in";
}

// replace use Router 

export function GoogleAuthButton({ action }: GoogleAuthButtonProps) {
  const router = useRouter();

  async function handleSignIn() {
    try {
      console.log('Initiating Google sign-in...');
      
      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/"
      });

      console.log('Sign-in result:', result);

      if (result?.error) {
        console.error('Google sign-in failed:', result.error);
        toast.error("Failed to sign in with Google");
        return;
      }

      if (result?.ok) {
        console.log('Google sign-in successful, fetching session...');
        

        //TODO: COME CHECK THIS:
        try {
          const { data } = await axios.get('/api/auth/session');
          console.log('Session data received:', data);

          if (data.token) {
            console.log('Storing token in localStorage...');

            localStorage.setItem("Authorization", data.token);
            sessionStorage.setItem("Authorization", data.token);


            setAuthToken(data.token);
            
            toast.success("Signed in successfully!");
            router.push("/");
          } else {
            console.error('No token found in response:', data);
            toast.error("Failed to get authentication token");
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error('Session fetch error:', error.response?.data);
            toast.error(error.response?.data?.error || "Failed to fetch session");
          } else {
            console.error('Unexpected error:', error);
            toast.error("An unexpected error occurred");
          }
        }
      }
    } catch (error) {
      console.error("Sign in error:", error);
      toast.error("An error occurred during sign in");
    }
  }

  return (
    <Button
      variant="outline"
      className="w-full"
      onClick={handleSignIn}
    >
      <FcGoogle className="mr-2 h-4 w-4" />
      {action} with Google
    </Button>
  );
}