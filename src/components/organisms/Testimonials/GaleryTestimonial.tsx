"use client";
import Citation from "@/components/atom/Citation";
import { IconStar } from "@/components/svg";
import { Testimonial } from "@/types/testimonials";
import classNames from "classnames";
import { FC, useRef, useState } from "react";

type CardProps = {
  className?: string;
  items: Testimonial[];
};

const GaaleryTestimonial: FC<CardProps> = ({ className, items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // Ukuran lebar satu card, diasumsikan sama semua
  const cardWidth = 347; // Sesuaikan dengan width min-w di Card (2xl:min-w-[347px])

  // Update current slide berdasarkan scroll position
  const onScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrent(index);
  };

  // Scroll ke slide tertentu saat klik dot
  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={classNames("w-full ", className)}>
      <div
        ref={containerRef}
        onScroll={onScroll}
        className="flex overflow-x-auto scroll-smooth  scrollbar-none gap-7 p-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[295px] h-[315px]  border border-[var(--BORDER_1)] p-8 rounded-[12px] scroll-snap-align-start flex flex-col gap-7"
          >
            <div className="flex-1 flex flex-col gap-[9px] overflow-hidden">
              <div className="flex gap-[5.67px]">
                {Array.from({ length: item.rate }).map((_, idx) => (
                  <IconStar key={idx} className="fill-background-hero" />
                ))}
              </div>
              <div className="flex text-Desc-Accordion-R text-paragraph whitespace-normal">
                {item.desc}
              </div>
            </div>
            <div className="flex-none">
              <Citation name={item.name} url={item.url} />
            </div>
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-3 mt-4">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              current === idx ? "bg-[var(--BRAND_1)]" : "bg-[var(--GREY_1)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GaaleryTestimonial;
