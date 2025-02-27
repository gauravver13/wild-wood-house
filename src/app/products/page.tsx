"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
import Link from "next/link"
// import { products } from "@/lib/products"

const products = [
    {
        id: 1,
        name: "Product 1",
        slug: "product-1",
        category: "Category 1",
        price: 100,
        image: "/product-1.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        slug: "product-2",
        category: "Category 2",
        price: 200,
        image: "/product-2.jpg",
    },
    {
        id: 3,
        name: "Product 3",
        slug: "product-3",
        category: "Category 1",
        price: 300,
        image: "/product-3.jpg",
    },
    {
        id: 4,
        name: "Product 4",
        slug: "product-4",
        category: "Category 2",
        price: 400,
        image: "/product-4.jpg",
    },
    {
        id: 5,
        name: "Product 5",
        slug: "product-5",
        category: "Category 1",
        price: 500,
        image: "/product-5.jpg",
    },
    {
        id: 6,
        name: "Product 6",
        slug: "product-6",
        category: "Category 2",
        price: 600,
        image: "/product-6.jpg",
    },
    {
        id: 7,
        name: "Product 7",
        slug: "product-7",
        category: "Category 1",
        price: 700,
        image: "/product-7.jpg",
    },
    {
        id: 8,
        name: "Product 8",
        slug: "product-8",
        category: "Category 2",
        price: 800,
        image: "/product-8.jpg",
    },
    {
        id: 9,
        name: "Product 9",
        slug: "product-9",
        category: "Category 1",
        price: 900,
        image: "/product-9.jpg",
    },
    {
        id: 10,
        name: "Product 10",
        slug: "product-10",
        category: "Category 2",
        price: 1000,
        image: "/product-10.jpg",
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
        product.price <= priceRange[1],
    )
  }, [searchTerm, selectedCategory, priceRange])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/4 space-y-6">
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
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="text-sm text-gray-500 mb-4">
            Showing {filteredProducts.length} of {products.length} products
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{product.name}</CardTitle>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-lg font-bold">${product.price}</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

