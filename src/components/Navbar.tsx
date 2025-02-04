"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = ["Living Room", "Bedroom", "Dining Room", "Office", "Outdoor", "Decor"]

export function Navbar() {
  return (
    <nav style={{ backgroundColor: "var(--color-background)", padding: "1rem 0" }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          style={{
            fontSize: "var(--font-size-2xl)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-primary)",
          }}
        >
          FurniCraft
        </Link>
        <ul className="hidden md:flex space-x-6">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/category/${category.toLowerCase().replace(" ", "-")}`}
                style={{ color: "var(--color-text)" }}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}

