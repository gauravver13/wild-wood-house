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

const categories = ["Living Room", "Bedroom", "Dining Room", "Office", "Decor"]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-zinc-200 transition-all duration-300 ease-in-out group">
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-primary transform origin-top scale-y-0 transition-transform duration-300 ease-in-out group-hover:scale-y-100" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="relative z-10 text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-white"
          >
            FurniCraft
          </Link>

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
            {/* Search */}
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
              <SheetContent 
                side="top" 
                className="w-full sm:max-w-2xl mx-auto"
              >
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

            {/* Cart */}
            <Link href="/cart">
              <Button 
                variant="ghost" 
                size="icon"
                className="h-9 w-9 transition-colors duration-300 hover:bg-zinc-100 group-hover:text-white group-hover:hover:bg-white/10"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </Link>

            {/* Profile - Hidden on Mobile */}
            <Link href="/profile" className="hidden sm:block">
              <Button 
                variant="ghost" 
                size="icon"
                className="h-9 w-9 transition-colors duration-300 hover:bg-zinc-100 group-hover:text-white group-hover:hover:bg-white/10"
              >
                <User className="h-4 w-4" />
              </Button>
            </Link>

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
            <div className="flex flex-col space-y-3">
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
                href="/profile"
                className="sm:hidden text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-primary group-hover:text-white/90 hover:group-hover:text-white px-2 py-1.5 rounded-md hover:bg-zinc-100 group-hover:hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}