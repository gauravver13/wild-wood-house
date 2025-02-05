import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"

interface GoogleAuthButtonProps {
  action: "Sign up" | "Log in"
}

export function GoogleAuthButton({ action }: GoogleAuthButtonProps) {
  return (
    <Button variant="outline" className="w-full">
      <FcGoogle className="mr-2 h-4 w-4" />
      {action} with Google
    </Button>
  )
}
