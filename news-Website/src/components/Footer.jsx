import React from "react";
import FooterSections from "../util/FooterSections";
import { motion } from "framer-motion";

function Footer() {
  return (
    <section className="mt-16 bg-zinc-900 text-center text-white">
      <div className="container px-5 py-3 flex flex-col mx-auto text-center">
        <div className="flex flex-col space-y-3 items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="py-3 text-2xl font-bold  text-white flex space-x-1"
          >
            <span className="bg-white px-2 block text-[#ff002b]">B</span>
            <span className="bg-white px-2 block text-[#ff002b]">B</span>
            <span className="bg-white px-2 block text-[#ff002b]">C</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className=""
          >
            <span className="text-primary font-semibold">BBC</span> is where
            tomorrow is realized. It is the essential source of information and
            ideas that make sense of a world in constant transformation. The{" "}
            <span className="text-primary font-semibold">BBC</span> conversation
            illuminates how technology is changing every aspect of our
            lives—from culture to business, science to design. The breakthroughs
            and innovations that we uncover lead to new ways of thinking, new
            connections, and new industries.
          </motion.p>
        </div>
        <hr className="mt-12 mb-2" />
        <footer
          className="py-5 px-5 items-center justify-center space-y-12
         flex flex-col-reverse gap-10 justify-around md:flex-row"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex flex-col  items-center "
          >
            <h1 className="font-semibold text-lg text-primary">
              Follow BBC on:
            </h1>
            <div className="flex space-x-4 ">
              <i class="ri-facebook-fill text-2xl"></i>
              <i class="ri-twitter-x-fill text-2xl"></i>
              <i class="ri-instagram-fill text-2xl"></i>
              <i class="ri-youtube-fill text-2xl"></i>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex  space-x-5 text-lg text-left"
          >
            <nav className="flex flex-col space-y-2">
              <FooterSections text="Home" url="/Home" />
              <FooterSections text="Contact Us" url="/contact-us" />
              <FooterSections text="About Us" url="/about-us" />
            </nav>
            <nav className="flex flex-col space-y-2">
              <FooterSections text="All News" url="/all-news" />
              <FooterSections text="Sport" url="/sport" />
              <FooterSections text="Economy" url="/economy" />
              <FooterSections text="Earth" url="/earth" />
            </nav>
          </motion.div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
