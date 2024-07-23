import React from "react";
import "ldrs/zoomies";
function Loading() {
  return (
    <>
      <div className="container mx-auto flex space-y-7 flex-col items-center p-7">
        <h1 className="text-3xl font-semibold">Loading...</h1>
        <l-zoomies
          size="80"
          stroke="5"
          bg-opacity="0.1"
          speed="1.4"
          color="black"
        ></l-zoomies>
      </div>
    </>
  );
}

export default Loading;
