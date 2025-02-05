import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed">
      <Link href="/" className="text-2xl font-serif font-bold">Wild-Wood-House</Link>
      
      <div className="flex items-center space-x-4 w-1/3">
        <Input type="text" placeholder="Search..." className="w-full px-4 py-2 border rounded-md" />
      </div>
      
      <div className="flex items-center space-x-4">
        <Link href="/cart">
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
        </Link>
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/signup">
          <Button>Signup</Button>
        </Link>
        <Link href="/profile">
          <User className="w-6 h-6 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
}


const categories = ["Living Room", "Bedroom", "Dining Room", "Office", "Outdoor", "Decor"]