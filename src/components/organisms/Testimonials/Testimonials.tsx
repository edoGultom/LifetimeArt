import Card from "@/components/atom/Card";
import Label from "@/components/atom/Lable";
import AutoScrollCards from "@/components/molecules/AutoScrollCards";
import { testimonials } from "@/config/const";
import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="mx-auto max-w-[var(--breakpoint-xl)] flex flex-col w-full bg-white md:px-10 xl:px-20 px-10 ">
        {/* Title */}
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <div className="flex flex-1 flex-col justify-center items-center gap-2">
            <Label>Testimonials</Label>
            <span className="text-Title-Section-M text-title">
              Hear from our clients
            </span>
          </div>
          <span className="text-text-Para-R text-paragraph text-center">
            Hear from our happy clients about their experience working with
            Refit and the quality of our craftsmanship.
          </span>
        </div>
      </div>
      {/* autoscroll animation */}
      <div className="mt-24 mb-[60px]">
        {/* {testimonials.map((item, idx) => (
          <Card
            key={idx}
            item={item}
            className={
              idx % 2 === 0 ? "bg-[var(--BRAND_4)]" : "bg-[var(--GREY_2)]"
            }
          />
        ))} */}
        <AutoScrollCards />
      </div>
    </section>
  );
}
