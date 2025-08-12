"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import IcPlus from "@/assets/images/icon-add.svg";

export interface AccordionItem {
  label: string;
  desc: string;
  url?: StaticImageData;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string; // container accordion
  headerclassName?: string; // class for header
  itemClassName?: string; // class each item
  contentClassName?: string; //class eact content
}

export default function Accordion({
  items,
  className,
  headerclassName,
  itemClassName,
  contentClassName,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={clsx("w-full", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.label} className={clsx(itemClassName)}>
            {/* Header */}
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={clsx(
                "flex w-full justify-between items-center gap-5 focus:outline-none",
                headerclassName
              )}
            >
              <div className="flex gap-5 items-center">
                {item.url && (
                  <Image
                    src={item.url}
                    alt={`Icon ${index}`}
                    width={40}
                    height={40}
                  />
                )}
                <span className="text-Title-Accordion-M">{item.label}</span>
              </div>
              <Image
                src={IcPlus}
                alt="Toggle"
                width={18}
                height={18}
                className={clsx(
                  "transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
              />
            </button>

            {/* Content */}
            <div
              className={clsx(
                "overflow-hidden transition-all duration-400 ease-in-out",
                isOpen ? " opacity-100 mt-5" : "max-h-0 opacity-0",
                isOpen && contentClassName
              )}
            >
              <p className="text-paragraph text-Desc-Accordion-R">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
