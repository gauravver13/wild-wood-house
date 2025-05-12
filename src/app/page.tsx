"use client"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import CategoryCard from "@/components/ui/categoryCard"
import ProductCard from "@/components/productCard"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import Banner from "@/components/ui/bannerHero"
import BannerHero from "@/components/ui/bannerHero"
import Aboutus from "@/components/AboutUs"






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
          {/* <div className="absolute inset-0">
              <Image
                src="/bannerN.jpg"
                alt="Elegant Furniture Collection"
                fill
                className="object-cover brightness-50"
                sizes="100vw"
                priority
                quality={100}
              />
          </div> */}

        <BannerHero />




          {/* Content Overlay */}
          {/* <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
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
          </div> */}


        </section>

        {/* BRIEFING ABOUT US 
        <section className="relative pt-12 mt-4">
            <div className="mb-5 w-full leading-normal text-center text-primary tracking-wider font-semibold">Welcome to Wild Wood House</div>
            <p className="mb-8 w-full font-light leading-normal text-center text-primary tracking-wider">We celebrate creativity and design, revel in handcrafted beauty and honor culture and community.</p>
            
            <p className=" w-full font-light leading-normal text-center text-primary flex flex-wrap lg:px-44 sm:px-24 md:px-36 tracking-widest">Wild Wood House was born from the desire to create a space where artistic excellence could be celebrated in a myriad ways. It was therefore envisioned as a platform where the spirit of creativity, exquisite design and the magic of craftmanship would all find synergy. Through our gallery ,our carefully crafted products and vibrant events, we aspire to give voice to the joy of artistic expression.</p>
        </section> */}
        <Aboutus />

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
                          link={"/products/abc"}
                        />
                      ))}
                    </div>     
        </section>


        {/* Testimonial Section */}
        <section className="mt-14">
        <h3 className="text-center normal-case text-xl font-normal tracking-widest leading-snug">OUR CLIENTS</h3>
          

          <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </section>

      </main>
    </div>
  )
}




 
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
