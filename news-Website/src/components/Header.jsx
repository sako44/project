import React from "react";
import MobileSections from "../util/MobileSections";
import HeaderSections from "../util/HeaderSections";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-[#ff002b] h-24 border-b border-black flex">
        <div
          className="container mx-auto flex px-6 py-8
         md:max-lg:px-0 justify-between items-center lg:px-28"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex  just space-x-3"
          >
            <Link
              to="/"
              className="text-2xl font-bold text-white flex space-x-1"
            >
              <span className="bg-white px-2 block text-[#ff002b]">B</span>
              <span className="bg-white px-2 block text-[#ff002b]">B</span>
              <span className="bg-white px-2 block text-[#ff002b]">C</span>
            </Link>
          </motion.div>

          <nav
            className="hidden absolute z-30 flex flex-col
          space-y-4 py-5
          items-center justify-start top-[100px] bg-zinc-800 w-full left-0"
          >
            <MobileSections text="Home" url="/" />
            <MobileSections text="Sport" url="/sport" />
            <MobileSections text="Earth" url="/earth" />
            <MobileSections text="Economy" url="/economy" />
            <MobileSections text="About Us" url="/about-us" />
            <MobileSections text="Contact Us" url="/contact-us" />
          </nav>
          <nav className="hidden md:flex space-x-3 items-center mt-1  ">
            <HeaderSections text="Home" url="/" />
            <HeaderSections text="Sport" url="/sport" />
            <HeaderSections text="Earth" url="/earth" />
            <HeaderSections text="Economy" url="/economy" />
            <HeaderSections text="About Us" url="/about-us" />
            <HeaderSections text="Contact Us" url="/contact-us" />
          </nav>
          <motion.nav 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, type: "spring" }}
          className="text-zinc-300 ">
            <h1 className="text-xl ">31 °C </h1>
            <i class="ri-sun-fill text-xl"> HATAY</i>
          </motion.nav>
          <i
            onClick={() => {
              document.querySelector("nav").classList.toggle("hidden");
            }}
            class="ri-menu-line text-3xl text-white md:hidden"
          ></i>
        </div>
      </header>
    </>
  );
}
