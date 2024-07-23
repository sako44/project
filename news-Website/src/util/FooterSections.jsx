import React from "react";
import { Link } from "react-router-dom";

function FooterSections({ text,url }) {
  return (
    <Link
      className="hover:text-primary transition duration-300 ease-in-out "
      to={url}
    >
      {text}
    </Link>
  );
}

export default FooterSections;
