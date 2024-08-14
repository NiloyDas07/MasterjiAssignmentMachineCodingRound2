import React from "react";
import ReloadButton from "./ReloadButton";
import BackArrow from "./BackArrow";

const Navigation = ({ fetchUser }) => {
  return (
    <header className="mb-[1.875rem] flex w-full justify-between">
      <BackArrow />

      <h1 className="font-dmseriftext font-normal leading-[1.37125rem] opacity-70">
        Profile Overview
      </h1>

      <ReloadButton onClick={fetchUser} />
    </header>
  );
};

export default Navigation;
