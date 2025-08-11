"use client";
import { useState, ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
}

export default function Accordion({ children }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {Array.isArray(children)
        ? children.map((child, index) =>
            child
              ? {
                  ...child,
                  props: {
                    ...child.props,
                    isOpen: openIndex === index,
                    onToggle: () => toggle(index),
                  },
                }
              : null
          )
        : children}
    </div>
  );
}
