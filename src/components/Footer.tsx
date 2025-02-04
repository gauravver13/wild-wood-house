"use client"
import Link from "next/link"

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-primary)", color: "var(--color-background)", padding: "2rem 0" }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 style={{ fontSize: "var(--font-size-xl)", fontWeight: "var(--font-weight-bold)", marginBottom: "1rem" }}>
            FurniCraft
          </h3>
          <p>Quality furniture for every home.</p>
        </div>
        <div>
          <h4 style={{ fontSize: "var(--font-size-lg)", fontWeight: "var(--font-weight-bold)", marginBottom: "1rem" }}>
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: "var(--font-size-lg)", fontWeight: "var(--font-weight-bold)", marginBottom: "1rem" }}>
            Contact Us
          </h4>
          <p>123 Furniture Street</p>
          <p>Woodville, CA 90210</p>
          <p>Email: info@furnicraft.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div>
          <h4 style={{ fontSize: "var(--font-size-lg)", fontWeight: "var(--font-weight-bold)", marginBottom: "1rem" }}>
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <Link href="#" style={{ color: "var(--color-background)" }}>
              Facebook
            </Link>
            <Link href="#" style={{ color: "var(--color-background)" }}>
              Instagram
            </Link>
            <Link href="#" style={{ color: "var(--color-background)" }}>
              Twitter
            </Link>
            <Link href="#" style={{ color: "var(--color-background)" }}>
              Pinterest
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-background/20 text-center">
        <p>&copy; 2023 FurniCraft. All rights reserved.</p>
      </div>
    </footer>
  )
}

