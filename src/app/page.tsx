"use client"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow ">
        {/* Hero Section with Banner */}
        <section className="relative h-[600px]">
          {/* Banner Image */}
          <div className="absolute inset-0">
            <Image
              src="/banner1.jpg"
              alt="Elegant Furniture Collection"
              fill
              className="object-cover brightness-50"
              sizes="100vw"
              priority
              quality={100}
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
              Transform Your Space with Elegant Furniture
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl">
              Discover our curated collection of stylish and comfortable pieces for every room.
            </p>
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-gray-100 transition-colors px-8 py-3 text-lg"
            >
              Shop Now
            </Button>
          </div>
        </section>

        {/* Product Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "var(--color-background)" }}>
          <div className="container mx-auto">
            <h2
              style={{
                fontSize: "var(--font-size-3xl)",
                fontWeight: "var(--font-weight-bold)",
                textAlign: "center",
                marginBottom: "3rem",
              }}
            >
              Our Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "white",
                    padding: "1.5rem",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Product ${i}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3
                    style={{
                      fontSize: "var(--font-size-xl)",
                      fontWeight: "var(--font-weight-bold)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Elegant Furniture Piece
                  </h3>
                  <p style={{ color: "var(--color-text)", marginBottom: "1rem" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button variant="outline">View Details</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secure and Trust Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "var(--color-secondary)" }}>
          <div className="container mx-auto text-center">
            <h2
              style={{ fontSize: "var(--font-size-3xl)", fontWeight: "var(--font-weight-bold)", marginBottom: "2rem" }}
            >
              Shop with Confidence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "var(--font-weight-bold)",
                    marginBottom: "1rem",
                  }}
                >
                  Secure Payments
                </h3>
                <p>Your transactions are always safe and encrypted.</p>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "var(--font-weight-bold)",
                    marginBottom: "1rem",
                  }}
                >
                  Free Shipping
                </h3>
                <p>Enjoy free shipping on orders over $500.</p>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "var(--font-weight-bold)",
                    marginBottom: "1rem",
                  }}
                >
                  Easy Returns
                </h3>
                <p>30-day return policy for your peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "var(--color-background)" }}>
          <div className="container mx-auto">
            <h2
              style={{
                fontSize: "var(--font-size-3xl)",
                fontWeight: "var(--font-weight-bold)",
                textAlign: "center",
                marginBottom: "3rem",
              }}
            >
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "white",
                    padding: "1.5rem",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p style={{ marginBottom: "1rem" }}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
                  </p>
                  <p style={{ fontWeight: "var(--font-weight-bold)" }}>- Happy Customer {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Award Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}>
          <div className="container mx-auto text-center">
            <h2
              style={{ fontSize: "var(--font-size-3xl)", fontWeight: "var(--font-weight-bold)", marginBottom: "2rem" }}
            >
              Award-Winning Furniture
            </h2>
            <p style={{ fontSize: "var(--font-size-xl)", marginBottom: "2rem" }}>
              Recognized for our quality and design excellence
            </p>
            <div className="flex justify-center space-x-8">
              <div>
                <Image src="/placeholder.svg?height=100&width=100" alt="Award 1" width={100} height={100} />
                <p style={{ marginTop: "0.5rem" }}>Best Design 2023</p>
              </div>
              <div>
                <Image src="/placeholder.svg?height=100&width=100" alt="Award 2" width={100} height={100} />
                <p style={{ marginTop: "0.5rem" }}>Customer Choice 2023</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

