import React from "react";

function FooterSections({ text }) {
  return (
    <>
      <a
        href="#"
        className="hover:text-secondary cursor-pointer transition duration-300"
      >
        {text}
      </a>
    </>
  );
}

export default FooterSections;
