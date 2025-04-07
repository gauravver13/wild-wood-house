"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { ShoppingCart, User, Search, Menu, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useRouter } from "next/navigation"

const categories = ["Living Room", "Bedroom", "Dining Room", "Office", "Decor"]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // SETISAUTHENTICATED:::
  const [isAuthenticated, setIsAuthenticated] = useState(false) // Add this state
  const router = useRouter()




  // CHECK OUT TODOS: fix this in 1 session 
  // https://www.instagram.com/claymangoindia
  // HOUSE OF THINGS LIKE SEARCH_BAR
  // TODO:    CONSIDER **************************CLAYMANGO************************8
  // TODO: TO DISCUSS OVER NAVBAR: BG-DOWN_LINE-1PX 

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-opacity-100 border-b border-zinc-200 transition-all duration-300 ease-in-out group">
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-red-600 transform origin-top scale-y-0 transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="relative z-10 text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-white"
          >
            FurniCraft
          </Link>

      {/* // HERE SHOULD BE AN AXIOS REQUEST TO CHECK TO SHOW THE USER APPROPRIATE CATEGORY PRODUCTS.  */}
          {/* Desktop Categories */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8 space-x-6 lg:space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase().replace(" ", "-")}`}
                className="relative z-10 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-primary group-hover:text-white/90 hover:group-hover:text-white"
              >
                {category}
              </Link>
            ))}
          </div>


          {/* Right Section */}
          <div className="relative z-10 flex items-center space-x-2 md:space-x-4">

            
            {/* THIS SHOULD BE CHANGE AND STREACH SHOULD BE ON LEFT. */}
            {/* Search Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9 transition-colors duration-300 hover:bg-zinc-100 group-hover:text-white group-hover:hover:bg-white/10"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full max-w-md">
                <SheetHeader className="space-y-4">
                  <SheetTitle>Search Products</SheetTitle>
                  <div className="flex w-full items-center space-x-2">
                    <Input 
                      type="text" 
                      placeholder="Search furniture..." 
                      className="flex-1"
                    />
                    <Button type="submit">Search</Button>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            
            {/* // TODO: MAX URGENT */}
            {/* Profile/Login Button - Hidden on Mobile */}
            {isAuthenticated ? (
              <Link href="/profile" className="hidden sm:block">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9 transition-colors duration-300 hover:bg-zinc-100 group-hover:text-white group-hover:hover:bg-white/10"
                >
                  {/* // THERE SHOULD BE AN ONCLICK FUNCTION THAT LEADS TO PROFILE SECTION.  */}
                  <User className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button 
                variant="ghost"
                className="hidden sm:flex items-center space-x-2 transition-colors duration-300 hover:bg-zinc-100 group-hover:text-white group-hover:hover:bg-white/10"
                onClick={() => router.push('/login')}
              >
                {/* <User className="h-4 w-4 mr-2" /> */}
                <span>Login</span>
              </Button>
            )}



            {/* SEPERATE THIS  */}
            {/* // this should be taken care of  */}
            {/* Cart Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9 transition-colors duration-300 hover:bg-zinc-100 group-hover:text-white group-hover:hover:bg-white/10"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="mr-2 -mt-6 w-full max-w-md text-white">
                <SheetHeader className="bg-pink-400 flex">
                  <SheetTitle className="bg-green-500 mt-2">Shopping Cart
                  </SheetTitle>

                  <SheetDescription>
                    Your cart items appear here
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-0 bg-yellow-500">
                  <div className="space-y-4">
                    {/* Cart Items would go here */}
                    <div className="text-center text-muted-foreground">
                      Your cart is empty
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Total</span>
                      {/* FUNCTIONAL COMPONENT" */}
                      <span className="font-semibold">INR 0.00</span>
                    </div>
                    {/* // SHOULD BE  A LINK  */}
                    <Button className="w-full">
                      Checkout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>




            {/* MOBILE MENU BUTTON  */}
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 md:hidden transition-colors duration-300 hover:bg-zinc-100 group-hover:text-white group-hover:hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>

          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="relative z-10 md:hidden py-4 border-t border-zinc-200 group-hover:border-white/10">
            {/* Mobile Menu Items */}
            <div className="flex flex-col space-y-3">
              {/* load a backend compo in file accordingly  axios request  */}
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-primary group-hover:text-white/90 hover:group-hover:text-white px-2 py-1.5 rounded-md hover:bg-zinc-100 group-hover:hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
              <Link
                href={isAuthenticated ? "/profile" : "/login"}
                className="sm:hidden text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-primary group-hover:text-white/90 hover:group-hover:text-white px-2 py-1.5 rounded-md hover:bg-zinc-100 group-hover:hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {isAuthenticated ? "My Profile" : "Login"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}


// SHOULD I MAKE NAVBAR A SERVER SIDE COMPONENT OR can make the whole landing page best optimised without doing a navbar a server side instead its a client side working in next js.
