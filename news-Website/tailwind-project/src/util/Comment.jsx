import React from "react";

function Comment({ name, comment, img }) {
  return (
    <div className=" md:max-lg:py-3 py-10 px-5 text-center items-center justify-start
      flex flex-col space-y-2 border border-solid dark:border-secondary border-primary rounded-md dark:bg-transparent bg-slate-300">
      <img
        className=" -mt-16 mb-5 md:max-lg:-mt-10
       w-16 rounded-full"
        src={img}
        alt=""
      />
      <h2 className="font-bold dark:text-white text-xl">{name}</h2>
      <p className="max-w-[350px] dark:text-stone-400 text-sm"> {comment}</p>
    </div>
  );
}

export default Comment;
