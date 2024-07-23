import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function HeaderSections({ text, url }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <NavLink
        to={url}
        className={`" text-lg lg:text-lg md:max-xl:px-0  border-b-2 border-transparent text-white font-semibold py-3 px-3
      hover:text-black hover:border-b-2 hover:border-white
        transition duration-500 ease-in-out
     " ${({ isActive }) => (isActive ? "active" : undefined)} `}
        end={text === "Home"}
      >
        {text}
      </NavLink>
    </motion.h1>
  );
}

export default HeaderSections;
