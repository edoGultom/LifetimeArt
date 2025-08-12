import Label from "@/components/atom/Lable";
import Accordion from "@/components/molecules/Accordion";
import React from "react";
import IcPlus from "@/assets/images/icon-add.svg";
import { IconArrowRight } from "@/components/svg";
import Link from "next/link";

export default function FAQs() {
  const FAQs = [
    {
      label: "What area are you based in?",
      desc: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
      label: "How long does a typical project take?",
      desc: "Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process.",
    },
    {
      label: "Do you offer free quotes?",
      desc: "Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.",
    },
    {
      label: "Will I need planning permission for my project?",
      desc: "This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.",
    },
    {
      label: "Do you provide a guarantee for your work?",
      desc: "Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.",
    },
    {
      label: "Can I stay in my home while the work is being done?",
      desc: "In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.",
    },
    {
      label: "How do I get started with a project?",
      desc: "Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.",
    },
  ];
  return (
    <section id="faq">
      <div className="mx-auto max-w-[var(--breakpoint-xl)] flex flex-col xl:flex-row w-full bg-white md:px-10 xl:px-20 px-10 py-[120px] gap-20">
        {/* Title */}
        <div className="flex-1 flex flex-col gap-4 w-full items-center xl:items-start">
          <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start gap-2">
            <Label>FAQs</Label>
            <span className="text-Title-Section-M text-title text-center xl:text-left">
              Answering <br className="block md:hidden" />
              Your <br className="block md:hidden xl:block" />
              Questions
            </span>
          </div>
          <span className="text-text-Para-R text-paragraph text-center xl:text-left">
            Got more questions? Send us your enquiry below
          </span>
          <Link
            href="#get-in-touch"
            className="mt-14 w-[191.23px] justify-between items-center flex px-4 py-2.5 rounded-4xl bg-background-button/10 cursor-pointer"
          >
            <span className="text-buttonname-M">Get in touch</span>
            <div className="flex items-center justify-center w-10 h-10 bg-background-hero p-[5.86px] rounded-full">
              <IconArrowRight className="stroke-white " />
            </div>
          </Link>
        </div>

        <Accordion
          items={FAQs}
          className="flex-1 flex flex-col gap-4"
          itemClassName="py-6 px-5 border border-border1 bg-background-section rounded-[12px] "
        />
      </div>
    </section>
  );
}
