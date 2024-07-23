import React from "react";
import Comment from "../util/Comment";

function Comments() {
  return (
    <>
      <section className="flex flex-col md:max-lg:space-y-16 space-y-12 mt-24">
       <div className="flex flex-col space-y-5">
       <h1 className="text-4xl font-bold text-center text-black dark:text-white">
          "Comments"
        </h1>
        <h2 className=" text-xl md:text-2xl text-center dark:text-stone-200">
          Comments from users and beneficiaries of vite.
        </h2>
       </div>
        <div className="justify-center md:px-32 md:max-lg:px-4 container mx-auto flex flex-col md:flex md:flex-row
         space-y-10 w-10/12  md:w-full md:space-y-0 md:space-x-5 ">
          <Comment
            name="Debbie O'Brien"
            comment="Have been working with CSS for over ten years and Tailwind just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain."
            img="public/user-1.jpg"
          />
          <Comment
            name="Ryan Florence"
            comment="I feel like an idiot for not using Tailwind CSS until now."
            img="public/user-2.jpg"
          />
          <Comment
            name="Guillermo Rauch"
            comment="If I had to recommend a way of getting into programming today, it would be HTML + CSS with Tailwind CSS."
            img="public/user-3.jpg"
          />
        </div>
      </section>
    </>
  );
}

export default Comments;
