import React from "react";
import { motion } from "framer-motion";

function SpecialPageLink({ title }) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className="text-3xl md:text-4xl self-start font-bold py-4"
    >
      {title} &gt;
    </motion.h1>
  );
}

export default SpecialPageLink;
