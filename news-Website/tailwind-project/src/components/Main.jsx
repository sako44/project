import React from "react";
import Button from "../util/Button";

function Main() {
  return (
    <>
      <div
        className="container  md:max-lg:px-4 px-12  mx-auto  flex flex-col md:px-32 md:mt-28 md:flex
        md:flex-row-reverse
        gap-10 lg:justify-between items-center
         justify-center"
      >
        <div className="w-10/12 sm:w-full md:w-full lg:w-fit mt-10 ">
          <img
            className="drop-shadow-lg dark:filter-none animate-imageMove"
            src="public/undraw.svg"
            alt=""
          />
        </div>
        <div className=" items-center space-y-5 flex flex-col md:items-start">
          <h1 className="dark:text-white text-4xl md:text-5xl font-bold">
            Welcome to Vite
          </h1>
          <p className="dark:text-stone-400 text-center md:text-start  text-lg max-w-1/2 lg:max-w-[600px]">
            Vite is a build tool that aims to provide a faster and leaner
            development experience for modern web projects.
          </p>
          <Button text="Get Started" />
        </div>
      </div>
    </>
  );
}

export default Main;
