import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NewsSection({ title, details, image, date, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
     
      className="flex relative flex-col  w-fit space-y-2 py-2 px-2 items-center"
    >
      <img to={id} className="w-[80%]  " src={image} alt="news" />
      <Link
        to={id}
        className="text-xl w-[80%] font-semibold hover:underline
      "
      >
        {title}
      </Link>
      <p className="font-light w-[80%]">{details}</p>
      <p className=" w-[80%]   text-sm font-semibold">{date}</p>
    </motion.div>
  );
}

export default NewsSection;
