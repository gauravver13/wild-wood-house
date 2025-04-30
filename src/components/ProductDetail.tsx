"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function ProductDetailPage() {
  const { slug } = useParams()

  // Dummy data (replace this with a real fetch)
  const product = {
    title: "Elegant Armchair",
    price: "₹24,999",
    description:
      "This armchair offers the perfect blend of luxury and comfort, crafted with premium fabric and a sleek modern silhouette.",
    features: [
      "Premium velvet upholstery",
      "Ergonomic support",
      "Available in 3 colors",
      "10-year warranty",
    ],
    image: "/banner1.jpg", // Replace with actual product image
  }

  return (
    <main className="flex-grow py-12 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* Image Section */}
        <div className="rounded overflow-hidden shadow-md bg-white dark:bg-zinc-800">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="w-full object-cover rounded"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{product.title}</h1>
          <p className="text-xl text-pink-600 font-semibold">{product.price}</p>
          <p className="text-zinc-700 dark:text-zinc-300">{product.description}</p>

          <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-1">
            {product.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <div className="pt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

