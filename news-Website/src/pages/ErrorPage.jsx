import React from "react";
import Header from "../components/Header";

function ErrorPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col items-center p-7">
        <div className="flex p-7 space-x-7 items-center bg-primary rounded-md ">
          <i class="ri-error-warning-fill text-5xl text-white bg-red "></i>
          <div className="flex flex-col space-y-1 ">
            <h1 className="text-xl font-semibold">Error</h1>
            <p className="text-lg ">
              Something went wrong. Please try again later.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
