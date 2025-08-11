"use client";
import Label from "@/components/atom/Lable";
import { useState } from "react";
import Kitchen from "@/assets/images/kitchen.jpg";
import IcKitchen from "@/assets/images/icon-kitchen.svg";
import IcLoftConversions from "@/assets/images/icon-loft-conversions.svg";
import IcBathRoom from "@/assets/images/icon-bathroom.svg";
import IcExtensions from "@/assets/images/icon-extension.svg";
import IcRestoration from "@/assets/images/icon-restoration.svg";
import IcExternalWork from "@/assets/images/icon-external-works.svg";
import IcPlus from "@/assets/images/icon-add.svg";
import Image from "next/image";
import Accordion from "@/components/molecules/Accordion";
import AccordionItem from "@/components/molecules/AccordionItem";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const services = [
    {
      label: "Kitchens",
      desc: "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
      url: IcKitchen,
    },
    {
      label: "Loft Conversions",
      desc: "Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.",
      url: IcLoftConversions,
    },
    {
      label: "Bathrooms",
      desc: "We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.",
      url: IcBathRoom,
    },
    {
      label: "Extensions",
      desc: "Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.",
      url: IcExtensions,
    },
    {
      label: "Restorations",
      desc: "Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.",
      url: IcRestoration,
    },
    {
      label: "External Work",
      desc: "Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.",
      url: IcExternalWork,
    },
  ];
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
        <div className="flex gap-20 mt-24 w-full">
          {/* Left image */}
          <div className="flex-1 relative w-full xl:w-[600px] xl:h-[685.68px] 2xl:w-[680px] 2xl:h-[777.1px]">
            <Image
              src={Kitchen.src}
              fill
              alt=""
              className="object-cover rounded-[12px]"
            />
          </div>

          {/* Accordion */}
          <div className="flex-1 w-full">
            <Accordion>
              {services.map((item, i) => (
                <AccordionItem
                  key={i}
                  icon={item.url.src}
                  label={item.label}
                  plusIcon={IcPlus.src}
                >
                  {item.desc}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
