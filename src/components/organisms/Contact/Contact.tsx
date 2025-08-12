import Label from "@/components/atom/Lable";
import React from "react";
import FormContact from "./FormContact";
import IcTiktok from "@/assets/images/icon-tiktok.svg";
import IcInstagram from "@/assets/images/icon-instagram.svg";
import IcTwiter from "@/assets/images/icon-x.svg";
import Image from "next/image";

export default function Contact() {
  const socialMedia = [
    {
      url: IcTiktok,
    },
    {
      url: IcInstagram,
    },
    {
      url: IcTwiter,
    },
  ];
  return (
    <section
      id="get-in-touch"
      className="flex flex-col md:flex-row mx-5 2xl:mx-auto  max-w-[var(--breakpoint-xl)] bg-background-hero rounded-[12px] px-5 py-[60px] md:py-[60px] xl:p-20 gap-[100px]"
    >
      <div className="flex-1 flex flex-col xl:flex-row w-full gap-20">
        {/* Title */}
        <div className="flex-1 flex flex-col gap-4 w-full items-start">
          <div className="flex flex-col items-start justify-start gap-2">
            <Label>Contact</Label>
            <span className="text-Title-Section-M text-left text-white">
              Get in touch
            </span>
          </div>
          <span className="text-text-Para-R text-left text-[var(--GREY_1)]">
            For any inquiries or to explore your vision further, we invite{" "}
            <br className="hidden lg:block xl:hidden" /> you{" "}
            <br className="hidden xl:block" />
            to contact our professional team using the details provided
            <br className="hidden xl:block" /> below.
          </span>
          <div className="mt-12 flex flex-col gap-4  text-white">
            <div className="flex gap-3">
              <span className="text-Para-Contact-SB">Office</span>
              <span className="text-Para-Quote-R">
                150 Old Park Ln, London W1K 1QZ
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-Para-Contact-SB">Email</span>
              <span className="text-Para-Quote-R">hello@refit.com</span>
            </div>
            <div className="flex gap-3">
              <span className="text-Para-Contact-SB">Telephone</span>
              <span className="text-Para-Quote-R">07716 534984</span>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 text-white">
            <div className="flex flex-col gap-4">
              <span className="text-Para-Contact-SB">Follow us</span>
              <div className="flex  gap-[21.57px]">
                {socialMedia.map((item, i) => (
                  <Image
                    key={i}
                    src={item.url.src}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <FormContact />
      </div>
    </section>
  );
}
