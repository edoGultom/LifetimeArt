"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import hamburger from "@/assets/images/icon-hamburger.svg";
import closeMenu from "@/assets/images/icon-close-menu.svg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "@/config/const";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTopXL, setIsAtTopXL] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isXL = window.innerWidth >= 1440;

      // Cek posisi top + ukuran XL
      setIsAtTopXL(currentScrollY === 0 && isXL);

      if (currentScrollY > lastScrollY && currentScrollY > 110) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Trigger awal
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav
      //   className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 sm:bg-background-hero  ${
      //     showHeader || isOpen
      //       ? "translate-y-0 bg-background-hero"
      //       : "-translate-y-full xl:!bg-transparent"
      //   } `}
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 
        ${showHeader || isOpen ? "translate-y-0" : "-translate-y-full"} 
        ${
          isAtTopXL ? "!bg-transparent" : "bg-background-hero"
        } sm:bg-background-hero`}
    >
      <div
        className={`mx-auto max-w-[var(--breakpoint-xl)] flex justify-between xl:px-20 md:px-[30px] px-5 pt-5 md:pt-0 md:h-24 xl:h-[118px] text-white 
            transition-all duration-500 ease-in-out transform`}
      >
        {/* Logo */}
        <motion.div
          className="hidden md:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-[4.8px] xl:mt-[43px] md:mt-8 ">
            <div className="relative w-8 h-8">
              <Image src={logo} alt="logo" fill className="object-cover" />
            </div>
            <span className="text-Logo-M text-white">LifetimeArt</span>
          </div>
        </motion.div>

        {/* Menu Desktop */}
        <motion.div
          className="hidden md:flex space-x-[30px] xl:mt-10 md:my-[29px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className=" text-white group relative hover:text-[var(--BRAND_3)] transition p-2.5 pr-[9.64] text-Menu-M"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--BRAND_3)] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          ))}
        </motion.div>

        {/* Hamburger Button */}
        <AnimatePresence>
          <motion.div
            className="flex md:hidden justify-between items-center w-full px-5 py-[15px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex gap-[4.8px] ">
              <div className="relative w-8 h-8">
                <Image src={logo} alt="logo" fill className="object-cover" />
              </div>
              <span className="text-Logo-M text-white">LifetimeArt</span>
            </div>
            <button
              className="text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <Image src={closeMenu} alt="" width={24} height={24} />
              ) : (
                <Image src={hamburger} alt="" width={24} height={24} />
              )}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed top-[82px] w-full z-50 md:hidden bg-background-hero/60 backdrop-blur-[10px] h-screen text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-10 pt-20  flex flex-col gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className=" text-white group relative hover:text-[var(--BRAND_3)] transition text-Menu-R"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--BRAND_3)] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
