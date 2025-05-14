import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/bannerHero.png",
    title: "AUTHENTIC ARTISANAL AESTHETIC",
  },
  {
    id: 2,
    image: "/plant_nitish.png",
    title: "WILD WOOD HOUSE",
  },
  {
    id: 3,
    image: "/bannerHero1.png",
    title: "AUTHENTIC, ARTISANAL, AESTHETIC",
  },
  {
    id: 4,
    image: "/banner3.png",
    title: "Wood that connects you with Nature",
  },
];

export default function BannerHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images - Layered */}
      {slides.map((slide, index) => (
        <Image
          key={slide.id}
          src={slide.image}
          alt={`Slide ${index + 1}`}
          fill
          quality={100}
          priority={index === 0}
          className={`absolute inset-0 object-cover transition-all duration-1000 ease-in ${
            activeIndex === index
              ? 'opacity-100 scale-100 z-10'
              : 'opacity-0 scale-105 z-0'
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Content */}
      <div className="relative mt-40 z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.3em] uppercase mb-6">
          {slides[activeIndex].title}
        </h1>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition">
          SHOP NOW
        </button>
      </div>

      {/* Dots Navigation - Visual Only */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6 z-20">
        {slides.map((_, idx) => (
          <div key={idx} className="relative w-2 h-2">
            <div
              className={`w-4 h-4 rounded-full bg-white/20 ${
                idx === activeIndex ? 'bg-white' : ''
              }`}
            />
            {idx === activeIndex && (
              <div className="absolute inset-2 flex items-center justify-center">
                <div className="w-full h-full border-4 border-white rounded-full animate-spin-slow" />
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
