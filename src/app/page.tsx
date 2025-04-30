"use client"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Footer }  from "@/components/Footer"
import { Button } from "@/components/ui/button"
import CategoryCard from "@/components/ui/categoryCard"
import ProductCard from "@/components/productCard"


const products = [
  {
    id: 1,
    name: "Product 1",
    slug: "product-1",
    category: "Category 1",
    price: 9999,
    image: "/art1.jpg",
    secondImage: "/productmain.webp",
  },
  {
    id: 2,
    name: "Product 2",
    slug: "product-2",
    category: "Category 2",
    price: 19999,
    image: "/art3.jpg",
    secondImage: "/art4.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    slug: "product-3",
    category: "Category 1",
    price: 29999,
    image: "/art2.jpg",
    secondImage: "/productmain.webp",
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />
      
      <main className="flex-grow">

        {/* Hero Section with Banner */}
        <section className="relative h-[600px]">
          {/* Banner Image */}
          <div className="absolute inset-0">
              <Image
                src="/bannerN.jpg"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl pt-64">
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

        {/* BRIEFING ABOUT US  */}
        <section className="relative pt-12 mt-4">
            <div className="mb-5 w-full leading-normal text-center text-primary tracking-wider font-semibold">Welcome to Wild Wood House</div>
            <p className="mb-8 w-full font-light leading-normal text-center text-primary tracking-wider">We celebrate creativity and design, revel in handcrafted beauty and honor culture and community.</p>
            
            <p className=" w-full font-light leading-normal text-center text-primary flex flex-wrap lg:px-44 sm:px-24 md:px-36 tracking-widest">Wild Wood House was born from the desire to create a space where artistic excellence could be celebrated in a myriad ways. It was therefore envisioned as a platform where the spirit of creativity, exquisite design and the magic of craftmanship would all find synergy. Through our gallery ,our carefully crafted products and vibrant events, we aspire to give voice to the joy of artistic expression.</p>
        </section>

        {/* Explore by Category Section  */}
                    <div className="flex relative sm:w-full px-4 flex-col my-24 items-center">
                        <div className="flex flex-col mb-8 ">
                            <div className="w-full mx-auto items-center rounded-xl px-20 py-4">
                                <h3 className=" normal-case text-xl font-normal tracking-widest leading-snug">DISCOVER WILD-WOOD-HOUSE</h3>
                            </div>
                        </div>
        
                        <div className=" relative max-w-none w-full grid px-4 sm:grid-cols-1 md:grid-cols-2">
                            <CategoryCard imageUrl="/category1.png" slug="/where-it-routes" title="" />
                            <CategoryCard imageUrl="/category2.png" slug="/where-it-routes" title="" />
                            <CategoryCard imageUrl="/category2.png" slug="/where-it-routes" title="" />
                            <CategoryCard imageUrl="/category1.png" slug="/where-it-routes" title="" />
                        </div>
                    </div>
        

        {/* Product Section */}
        <section className="w-full items-center py-16">
                    <h3 className="text-center normal-case text-xl font-normal tracking-widest leading-snug mb-16">MOST LOVED</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {products.map((product) => (
                        <ProductCard
                          key={product.id}
                          imageSrc={product.image}
                          secondImageSrc={product.secondImage}
                          title={product.name}
                          price={product.price}
                        />
                      ))}
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
        {/* <section style={{ padding: "4rem 0", backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}>
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
        </section> */}

      </main>
    </div>
  )
}

