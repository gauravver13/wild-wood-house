"use client"

import { useState, useMemo } from "react"
import ProductCard from "@/components/productCard"

const products = [
  {
    id: 1,
    name: "Product 1",
    slug: "product-1",
    category: "Category 1",
    price: 100,
    image: "/wine-holder.jpg",
    secondImage: "/productmain.webp",
  },
  {
    id: 2,
    name: "Product 2",
    slug: "product-2",
    category: "Category 2",
    price: 200,
    image: "/productmain.webp",
    secondImage: "/productmain.webp",
  },
  {
    id: 3,
    name: "Product 3",
    slug: "product-3",
    category: "Category 1",
    price: 300,
    image: "/wine-holder.jpg",
    secondImage: "/productmain.webp",
  },
  {
    id: 4,
    name: "Product 4",
    slug: "product-4",
    category: "Category 2",
    price: 400,
    image: "/wine-holder.jpg",
    secondImage: "/wine-holder.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    slug: "product-5",
    category: "Category 1",
    price: 500,
    image: "/productmain.webp",
    secondImage: "/wine-holder.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    slug: "product-6",
    category: "Category 2",
    price: 600,
    image: "/wine-holder.jpg",
    secondImage: "/wine-holder.jpg",
  },
  {
    id: 7,
    name: "Product 7",
    slug: "product-7",
    category: "Category 1",
    price: 700,
    image: "/wine-holder.jpg",
    secondImage: "/wine-holder.jpg",
  },
  {
    id: 8,
    name: "Product 8",
    slug: "product-8",
    category: "Category 2",
    price: 800,
    image: "/wine-holder.jpg",
    secondImage: "/wine-holder.jpg",
  },
  {
    id: 9,
    name: "Product 9",
    slug: "product-9",
    category: "Category 1",
    price: 900,
    image: "/wine-holder.jpg",
    secondImage: "/wine-holder.jpg",
  },
  {
    id: 10,
    name: "Product 10",
    slug: "product-10",
    category: "Category 2",
    price: 1000,
    image: "/wine-holder.jpg",
    secondImage: "/wine-holder.jpg",
  },
]

const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )
  }, [searchTerm, selectedCategory, priceRange])

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="flex flex-col md:flex-row gap mb-8">
        {/* Uncomment below for filters */}

        {/* <div className="w-full md:w-1/4 space-y-6">
          <div>
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Price Range</Label>
            <Slider min={0} max={1000} step={50} value={priceRange} onValueChange={setPriceRange} className="mt-2" />
            <div className="flex justify-between mt-2">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div> */}

        <div className="w-full">
          <div className="text-sm text-gray-500 mb-4">
            Showing {filteredProducts.length} of {products.length} products
          </div>

          <div className="flex justify-between mx-12">
            <div className="font-semibold text-md uppercase mb-4">Abcd</div>
            <div className="text-sm text-gray-400 mb-4">{filteredProducts.length} products</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                imageSrc={product.image}
                secondImageSrc={product.secondImage}
                title={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
