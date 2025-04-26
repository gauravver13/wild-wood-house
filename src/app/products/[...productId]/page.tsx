import Link from "next/link";

export default function NotFoundPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
          Page not found
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-10">
          The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.
        </p>
        <Link href={"/"}>
            <button className="bg-[#A03E22] hover:bg-[#822e18] text-white font-semibold py-3 px-8 rounded-full transition">
            CONTINUE SHOPPING
            </button>
        </Link>
      </div>
    );
  }
  