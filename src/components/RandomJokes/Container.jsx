import React from "react";

const Container = ({ children }) => {
  return (
    <div className="min-h-[17.0625rem] w-[32.75rem] max-w-[90%] rounded-xl bg-black px-7 py-5 text-white shadow-[2px_2px_4px_0_hsla(0,0%,0%,0.25)]">
      {children}
    </div>
  );
};

export default Container;
