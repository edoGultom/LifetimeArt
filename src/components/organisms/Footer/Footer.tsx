"use client";
import logo from "@/assets/images/logo.svg";
import { menuItemsFooter } from "@/config/const";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section
      id="footer"
      className="mt-4 flex flex-col  mx-5 2xl:mx-auto  max-w-[var(--breakpoint-xl)] bg-background-hero rounded-t-[12px] px-5 py-[60px] md:py-[60px] xl:p-20 "
    >
      <div className="flex flex-col  md:flex-row w-full justify-between text-white ">
        <div className="justify-start">
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-[4.8px]  ">
              <div className="relative w-8 h-8">
                <Image src={logo} alt="logo" fill className="object-cover" />
              </div>
              <span className="text-Logo-M">LifetimeArt</span>
            </div>
          </motion.div>
        </div>
        <div className="mt-10 md:mt-0 flex flex-col gap-[17px]">
          <h4 className="text-Title-Footer-M">Quick links</h4>
          <div className="w-full  grid grid-cols-2 grid-rows-2 space-x-20">
            {menuItemsFooter.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className=" text-Title-Menu-Footer-R text-[var(--GREY_1)]"
              >
                {item.label}
              </Link>
            ))}
            {/* <div className="flex flex-col gap-[13px]">
              <span className="text-Title-Menu-Footer-R text-[var(--GREY_1)]">
                About us
              </span>
              <span className="text-Title-Menu-Footer-R text-[var(--GREY_1)]">
                Our work
              </span>
              <span className="text-Title-Menu-Footer-R text-[var(--GREY_1)]">
                Services
              </span>
            </div>
            <div className="flex flex-col gap-[13px]">
              <span className="text-Title-Menu-Footer-R text-[var(--GREY_1)]">
                Testimonials
              </span>
              <span className="text-Title-Menu-Footer-R text-[var(--GREY_1)]">
                FAQs
              </span>
              <span className="text-Title-Menu-Footer-R text-[var(--GREY_1)]">
                Contact
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="my-10 w-full h-[1px] bg-[var(--GREY_1)]/10" />
      <div className="text-Para-Contact-SB text-white">
        © 2025 LifetimeArt. All rights reserved.
      </div>
    </section>
  );
}
