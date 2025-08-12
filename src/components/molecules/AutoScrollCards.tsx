import { testimonials } from "@/config/const";
import React from "react";
import Card from "../atom/Card";

export default function AutoScrollCards() {
  return (
    <div className="space-y-12">
      {/* Section 1: scroll from right to left */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-[31px] animate-scroll-left">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <Card
              key={idx}
              item={item}
              className={
                idx % 2 === 0 ? "bg-[var(--BRAND_4)]" : "bg-[var(--GREY_2)]"
              }
            />
          ))}
        </div>
      </div>

      {/* Section 2: scroll from left to right */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-[31px] animate-scroll-right">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <Card
              key={idx}
              item={item}
              className={
                idx % 2 === 0 ? "bg-[var(--BRAND_4)]" : "bg-[var(--GREY_2)]"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
