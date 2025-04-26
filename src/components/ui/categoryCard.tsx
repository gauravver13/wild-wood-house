import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  imageUrl: string;
  slug: string;
  title: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function CategoryCard({
  imageUrl,
  slug,
  title,
  imageWidth = 800,
  imageHeight = 300,
}: CategoryCardProps) {
  return (
    <div className="sm:w-full flex basis-4">
      <div className="relative w-full my-7 mx-7">
        <div className="mb-4 relative overflow-hidden m-2">
          <Link href={`/category/${slug}`} className="block transition-all duration-200">
            <Image
              src={imageUrl}
              alt={title}
              width={imageWidth}
              height={imageHeight}
              className="block hover:scale-110 ease-in-out transition-all duration-500 object-cover"
            />
          </Link>
        </div>
        <div className="text-center break-words">
          <Link href={`/category/${slug}`} className="relative text-base mr-4 cursor-pointer font-normal">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}
