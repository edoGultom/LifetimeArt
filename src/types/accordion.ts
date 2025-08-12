import { StaticImageData } from "next/image";

export interface AccordionItem {
    label: string;
    desc: string;
    url?: StaticImageData;
  }