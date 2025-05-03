"use client";
import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12">
      {/* Product Image */}
      <div className="bg-white rounded-lg shadow-sm">
        <Image
          src="/art4.jpg" // Replace with your actual image
          alt="ABHRAKA HAND PAINTED PLATTER"
          width={700}
          height={700}
          className="object-contain rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500">
          <a href="/" className="underline">Home</a> / ABHRAKA HAND PAINTED PLATTER
        </nav>

        {/* Title & Price */}
        <h1 className="text-3xl font-semibold tracking-tight text-gray-800">
          ABHRAKA HAND PAINTED PLATTER
        </h1>
        <div>
          <p className="text-xl font-bold text-[#963c1e]">MRP ₹ 2,150.00</p>
          <p className="text-sm text-gray-400">Inclusive of all taxes</p>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          Geometry and nature merge in this wooden serving platter, where madder,
          henna, and indigo find harmony in hand-painted squares, creating a timeless
          accent for your dining table.
        </p>

        {/* Wishlist + Quantity */}
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-[#963c1e] hover:bg-[#963c1e]/10 transition">
            <Heart />
          </button>

          <div className="flex items-center border border-gray-300 rounded-full px-4 py-1">
            <button
              className="text-xl font-bold"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              −
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className="text-xl font-bold"
              onClick={() => setQuantity(q => q + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <button className="w-full py-3 border-2 border-[#963c1e] rounded-full text-[#963c1e] font-semibold hover:bg-[#963c1e]/10 transition">
            ADD TO CART
          </button>
          <button className="w-full py-3 rounded-full bg-[#963c1e] text-white font-bold hover:bg-[#7d2f16] transition">
            BUY IT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
