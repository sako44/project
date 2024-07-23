import React from "react";

function Button({ text }) {
  return (
    <>
      <button
        className="bg-primary
       text-white px-6 py-3 mt-4
       rounded-full font-semibold 
         hover:bg-secondary
         hover:scale-90
         transform  duration-300 ease-in-out
       "
      >
        {text}
      </button>
    </>
  );
}

export default Button;
