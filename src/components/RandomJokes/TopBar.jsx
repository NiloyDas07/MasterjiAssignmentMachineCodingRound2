import React from "react";
import BackButton from "./BackButton";

const TopBar = () => {
  return (
    <div className="mb-6 flex items-center gap-7">
      <BackButton />
      <h1 className="font-inter font-bold leading-5">Post</h1>
    </div>
  );
};

export default TopBar;
