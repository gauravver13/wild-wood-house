import type React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

