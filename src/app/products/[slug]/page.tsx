import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
// import { products } from "@/lib/"


const products = [
    {
        id: 1,
        name: "Product 1",
        slug: "product-1",
        category: "Category 1",
        price: 100,
        image: "/product-1.jpg",
        description: "Elegant and comfortable furniture piece perfect for modern homes. Features high-quality materials and expert craftsmanship.",
    },
    {
        id: 2,
        name: "Product 2",
        slug: "product-2",
        category: "Category 2",
        price: 200,
        image: "/product-2.jpg",
        description: "Contemporary design meets functionality. Made with sustainable materials and built to last for years to come.",
    },
    {
        id: 3,
        name: "Product 3",
        slug: "product-3",
        category: "Category 1",
        price: 300,
        image: "/product-3.jpg",
        description: "Minimalist aesthetic with maximum comfort. Perfect for both traditional and modern interior settings.",
    },
    {
        id: 4,
        name: "Product 4",
        slug: "product-4",
        category: "Category 2",
        price: 400,
        image: "/product-4.jpg",
        description: "Versatile piece that combines style with practicality. Features durable construction and timeless design.",
    },
    {
        id: 5,
        name: "Product 5",
        slug: "product-5",
        category: "Category 1",
        price: 500,
        image: "/product-5.jpg",
        description: "Premium quality furniture that adds sophistication to any room. Crafted with attention to detail.",
    },
    {
        id: 6,
        name: "Product 6",
        slug: "product-6",
        category: "Category 2",
        price: 600,
        image: "/product-6.jpg",
        description: "Modern design with classic touches. Built for comfort and longevity with premium materials.",
    },
    {
        id: 7,
        name: "Product 7",
        slug: "product-7",
        category: "Category 1",
        price: 700,
        image: "/product-7.jpg",
        description: "Luxurious piece that combines comfort with elegant design. Perfect for upscale interior spaces.",
    },
    {
        id: 8,
        name: "Product 8",
        slug: "product-8",
        category: "Category 2",
        price: 800,
        image: "/product-8.jpg",
        description: "Innovative design meets traditional craftsmanship. Features ergonomic design for optimal comfort.",
    },
    {
        id: 9,
        name: "Product 9",
        slug: "product-9",
        category: "Category 1",
        price: 900,
        image: "/product-9.jpg",
        description: "Statement piece that enhances any living space. Built with sustainable materials and expert attention to detail.",
    },
    {
        id: 10,
        name: "Product 10",
        slug: "product-10",
        category: "Category 2",
        price: 1000,
        image: "/product-10.jpg",
        description: "Premium furniture piece featuring contemporary design and unmatched quality. Perfect for modern luxury homes.",
    },
]


export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <Button className="w-full md:w-auto">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

