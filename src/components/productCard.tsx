"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import clsx from "clsx";

interface ProductCardProps {
  imageSrc: string;
  secondImageSrc: string;
  title: string;
  price: number;
  link:  string;
}

export default function ProductCard({ imageSrc, secondImageSrc, title, price, link }: ProductCardProps) {
  const [hoverImage, setHoverImage] = useState(imageSrc);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const isLeft = x < rect.width / 2;
    setHoverImage(isLeft ? imageSrc : secondImageSrc);
  };

  const handleMouseLeave = () => {
    setHoverImage(imageSrc);
    setIsHovering(false);
  };

  return (
    <div
      className="flex flex-col w-full h-[70vh] text-center mb-7 overflow-hidden group"
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <figure
        className="relative w-full h-[80%] overflow-hidden bg-white"
        onMouseMove={(e) => {
          handleMouseMove(e);
          setIsHovering(true);
        }}
      >
        <Link href={link} className="block relative w-full h-full">
          <Image
            src={hoverImage}
            alt={title}
            fill
            className="object-contain transition-opacity duration-300 ease-in-out"
            sizes="100vw"
          />
        </Link>

        {/* Modern Hover Dots */}
        {isHovering && (
          <ul className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3 transition-opacity duration-300">
            {[imageSrc, secondImageSrc].map((img, index) => (
              <li
                key={index}
                className={clsx(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  hoverImage === img
                    ? "bg-red-500 w-3 h-3"
                    : "bg-red-300 opacity-60"
                )}
              />
            ))}
          </ul>
        )}
      </figure>

      <div className="flex flex-col justify-center h-[20%] px-4">
        <Link href={link} className="font-medium uppercase text-lg mb-1 truncate">
          {title}
        </Link>
        <span className="text-red-500 font-normal text-sm truncate">
          MRP ₹ {price.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
