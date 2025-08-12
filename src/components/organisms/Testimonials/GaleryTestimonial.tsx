"use client";
import Card from "@/components/atom/Card";
import { testimonials } from "@/config/const";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GaleryTestimonial() {
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
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center flex justify-center items-center"
          >
            <Image
              src={item.url}
              alt={`Slide ${i}`}
              width={400}
              height={500}
              className="w-[320px] h-[400px] xl:w-[400px] xl:h-[500px] object-cover "
            />
          </div>
          //   <Card
          //     key={i}
          //     item={item}
          //     className={
          //       i % 2 === 0 ? "bg-[var(--BRAND_4)]" : "bg-[var(--GREY_2)]"
          //     }
          //   />
        ))}
      </div>

      {/* Dots (hanya sm) */}
      <div className="flex gap-2 mt-4 sm:flex md:hidden">
        {testimonials.map((_, i) => (
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
