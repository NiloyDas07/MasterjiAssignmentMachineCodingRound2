import React from "react";

const RandomUserSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="skeleton circle"></div>
      <div className="skeleton text"></div>
      <div className="skeleton text" style={{ width: "80%" }}></div>
      <div className="mt-7 grid w-full grid-cols-2 gap-4">
        <div className="skeleton text" style={{ height: "50px" }}></div>
        <div className="skeleton text" style={{ height: "50px" }}></div>
        <div className="skeleton text" style={{ height: "50px" }}></div>
        <div className="skeleton text" style={{ height: "50px" }}></div>
        <div className="skeleton text" style={{ height: "50px" }}></div>
        <div className="skeleton text" style={{ height: "50px" }}></div>
      </div>
    </div>
  );
};

export default RandomUserSkeleton;
