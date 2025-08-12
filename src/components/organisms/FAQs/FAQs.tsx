import Label from "@/components/atom/Lable";
import Accordion from "@/components/molecules/Accordion";
import { IconArrowRight } from "@/components/svg";
import { faqs } from "@/config/const";
import Link from "next/link";

export default function FAQs() {
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
            className="mt-14 w-[191.23px] justify-between items-center flex px-4 py-2.5 rounded-4xl  cursor-pointer [background:var(--gradient-bg)]"
          >
            <span className="text-buttonname-M">Get in touch</span>
            <div className="flex items-center justify-center w-10 h-10 bg-background-hero p-[5.86px] rounded-full">
              <IconArrowRight className="stroke-white " />
            </div>
          </Link>
        </div>

        <Accordion
          items={faqs}
          className="flex-1 flex flex-col gap-4"
          itemClassName="py-6 px-5 border border-border1 bg-background-section rounded-[12px] "
        />
      </div>
    </section>
  );
}
