import React from "react";
import { Link } from "react-router-dom";

function MobileSections({ text,url }) {
  return (
    <Link to={url} className=" uppercase text-lg text-white font-semibold">
      {text}
    </Link>
  );
}

export default MobileSections;
