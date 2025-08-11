"use client";
import List1 from "@/assets/images/list-1.jpg";
import List2 from "@/assets/images/list-2.jpg";
import List3 from "@/assets/images/list-3.jpg";
import List4 from "@/assets/images/list-4.jpg";
import List5 from "@/assets/images/list-5.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ImageGalery() {
  const images = [List1, List2, List3, List4, List5];
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const itemWidth =
      containerRef.current.querySelector("div > img")?.clientWidth ?? 0;
    const gap = 32; // jarak antar gambar (px)
    const index = Math.round(scrollLeft / (itemWidth + gap));
    setActiveIndex(index);
  };

  // Auto-center saat pertama load
  useEffect(() => {
    if (containerRef.current) {
      const itemWidth =
        containerRef.current.querySelector("div > img")?.clientWidth ?? 0;
      const gap = 32;
      containerRef.current.scrollLeft = activeIndex * (itemWidth + gap);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth gap-8 scroll"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center flex justify-center items-center"
          >
            <Image
              src={src}
              alt={`Slide ${i}`}
              width={400}
              height={500}
              className="w-[320px] h-[400px] xl:w-[400px] xl:h-[500px] object-cover "
            />
          </div>
        ))}
      </div>

      {/* Dots (hanya sm) */}
      <div className="flex gap-2 mt-4 sm:flex md:hidden">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeIndex === i ? "bg-[var(--BRAND_1)]" : "bg-[var(--GREY_1)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
