import Label from "@/components/atom/Lable";
import CardWork from "@/components/molecules/CardWork";
import { ourWorks } from "@/config/const";
import React from "react";

export default function OurWork() {
  return (
    <section id="our_work">
      <div className="mx-auto max-w-[var(--breakpoint-xl)] flex flex-col w-full md:px-10 xl:px-20 px-10 py-[120px] bg-white">
        {/* Title */}
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <div className="flex flex-1 flex-col justify-center items-center gap-2">
            <Label>Our Work</Label>
            <span className="text-Title-Section-M text-title">
              Get inspired by our work
            </span>
          </div>
          <span className="text-text-Para-R text-paragraph text-center">
            See how we’ve transformed homes with our expert craftsmanship and
            attention to detail.
          </span>
        </div>
        <div className="mt-[120px] flex flex-col gap-5">
          {ourWorks.map((item, idx) => (
            <CardWork key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
