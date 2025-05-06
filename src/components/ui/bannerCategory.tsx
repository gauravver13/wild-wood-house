"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter((seg) => seg)
    .map((seg, index, arr) => ({
      name: seg.charAt(0).toUpperCase() + seg.slice(1).replaceAll("-", " "),
      href: "/" + arr.slice(0, index + 1).join("/"),
    }));

  return (
    <section className="relative w-full min-h-[60vh] mx-0 mb-10 rounded-none overflow-hidden">
      {/* Background Image */}
      <div className="block inset-0 z-0">
        <Image
          src="/banner2.webp" // 👈 Replace with your background image path
          alt="Banner Background"
          fill
          priority
          className="object-fill w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* optional dark overlay */}
        
      {/* Centered Title */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center drop-shadow-sm">
          {title}
        </h1>
      </div>

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-3 md:px-4 pt-2">

        <nav className="text-sm text-white/80 flex gap-1 items-center flex-wrap">
          <Link href="/" className="hover:text-white font-extralight transition-colors">
            Home
          </Link>
          {pathSegments.map((segment, i) => (
            <span key={i} className="flex items-center">
              <span>/</span>
              <Link
                href={segment.href}
                className="hover:text-white font-extralight capitalize transition-colors"
              >
                {segment.name}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
