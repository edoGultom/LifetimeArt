import { OurWork } from "@/types/testimonials";
import Image from "next/image";
import React from "react";

interface CardWrokProps {
  item: OurWork;
}
export default function CardWork({ item }: CardWrokProps) {
  return (
    <div className="bg-background-card p-5 xl:p-8 flex flex-col md:flex-row gap-10 xl:gap-20 rounded-[12px] ">
      <div className="flex-1 relative w-[255px] h-[255px] md:w-[432px] md:h-[380.28px] lg:w-[560px] lg:h-[492.96px]">
        <Image
          src={item.url}
          alt=""
          fill
          className="object-cover rounded-[12px]"
        />
      </div>
      <div className="flex-1 flex flex-col gap-[15px]">
        <span className="text-Banner-Heading-Mobile-M text-title">
          {item.name}
        </span>
        <span className="text-Desc-Accordion-R text-paragraph">
          {item.desc}
        </span>
      </div>
    </div>
  );
}
