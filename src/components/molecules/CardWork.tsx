import { OurWork } from "@/types/testimonials";
import Image from "next/image";
import React from "react";
import Label from "../atom/Lable";
import classNames from "classnames";

interface CardWrokProps {
  item: OurWork;
}
export default function CardWork({ item }: CardWrokProps) {
  return (
    <div
      className={classNames(
        "p-5 xl:p-8 flex flex-col md:flex-row gap-10 xl:gap-20 rounded-[12px]",
        item.type === "Kitchen" ? "bg-background-card " : "bg-background-hero"
      )}
    >
      <div className=" md:flex-1 relative w-[255px] h-[255px] md:w-[432px] md:h-[380.28px] lg:w-[560px] lg:h-[492.96px]">
        <Image
          src={item.url}
          alt=""
          fill
          className="object-cover rounded-[12px]"
        />
      </div>
      <div className={classNames("flex-1 flex flex-col gap-[15px]")}>
        <span
          className={classNames(
            "text-Banner-Heading-Mobile-M ",
            item.type === "Kitchen" ? "text-title" : "text-white"
          )}
        >
          {item.name}
        </span>
        <span
          className={classNames(
            "text-Desc-Accordion-R ",
            item.type === "Kitchen" ? "text-paragraph" : "text-white"
          )}
        >
          {item.desc}
        </span>
        <div className="mt-[9px] flex gap-[15px]">
          <Label>{item.type}</Label>
        </div>
      </div>
    </div>
  );
}
