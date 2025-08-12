"use client";
import Kitchen from "@/assets/images/kitchen.jpg";
import Label from "@/components/atom/Lable";
import Accordion from "@/components/molecules/Accordion";
import { services } from "@/config/const";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services">
      <div className="mx-auto max-w-[var(--breakpoint-xl)] flex flex-col w-full bg-white md:px-10 xl:px-20 px-10 py-[120px]">
        {/* Title */}
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <div className="flex flex-1 flex-col justify-center items-center gap-2">
            <Label>Services</Label>
            <span className="text-Title-Section-M text-title">What we do</span>
          </div>
          <span className="text-text-Para-R text-paragraph text-center">
            Find out which one of our services fit the needs of your project
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-20 mt-24 w-full">
          {/* Left image */}
          <div className="flex-1 flex items-center w-full h-full md:py-[86.66px] lg:!py-0">
            <div className="relative w-[295px] h-[337.3px] md:w-[432px] md:h-[493.69px] lg:w-[560px] lg:h-[639.97px] xl:w-[600px] xl:h-[685.68px] 2xl:w-[680px] 2xl:h-[777.1px]">
              <Image
                src={Kitchen.src}
                fill
                alt=""
                className="object-cover rounded-[12px]"
              />
            </div>
          </div>

          <Accordion
            items={services}
            className="flex-1 flex flex-col gap-4"
            itemClassName="border-b border-border2"
            contentClassName="pb-8"
            headerclassName="py-5"
          />
        </div>
      </div>
    </section>
  );
}
