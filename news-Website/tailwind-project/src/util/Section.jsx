import React from "react";

function Section({ text }) {
  return (
    <>
      <a
        href="/"
        className="dark:text-white text-black hover:text-primary md:text-xl text-lg dark:hover:text-primary
        cursor-pointer transition duration-300
        "
      >
        {text}
      </a>
    </>
  );
}

export default Section;
