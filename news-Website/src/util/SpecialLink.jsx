import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function SpecialLink({ text, path }) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      to={path}
      className="text-3xl md:text-4xl self-start font-bold py-4
         "
    >
      <Link
        className="underline hover:text-primary transition duration-300 ease-in-out
      "
        to={path}
      >
        {text} &gt;
      </Link>
    </motion.h1>
  );
}

export default SpecialLink;
