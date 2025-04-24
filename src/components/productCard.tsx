import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: number;
}

export default function ProductCard({ imageSrc, title, price }: ProductCardProps) {
  return (
    <div className="flex flex-col w-full h-[70vh] text-center mb-7">
      <figure className="relative w-full h-full object-cover overflow-hidden">
        <Link href={"#"} className="block relative w-full h-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain transition-opacity duration-200"
            sizes="100vw"
          />
        </Link>

        <ul className="absolute left-0 bottom-4 z-20 flex justify-center w-full">
          <li className="inline-flex w-2 h-2 mx-2 rounded-sm bg-white opacity-60"></li>
          <li className="inline-flex w-2 h-2 mx-2 rounded-sm bg-white opacity-60"></li>
        </ul>
      </figure>

      <div className="flex flex-col justify-center flex-1 p-4">
        <Link href={"#"} className="font-medium uppercase text-lg mb-2">
          {title}
        </Link>
        <span className="text-red-500 font-normal text-sm">MRP ₹ {price.toLocaleString()}</span>
      </div>
    </div>
  );
}
