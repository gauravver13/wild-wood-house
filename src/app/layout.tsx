import { Navbar } from "@/components/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Merriweather_Sans } from "next/font/google"
// import { ThemeProvider } from "@/components/ui/theme-provider"
import type React from "react"
import { Footer } from "@/components/Footer"


const merriweather = Merriweather_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FurniCraft",
  description: "Elegant Furniture for Your Home"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        {/* <ThemeProvider> */}
        <Navbar />
          {children}
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  )
}