import React from "react";

const Name = ({ first, last }) => {
  return (
    <h2 className="mb-4 text-center font-donegalone text-2xl leading-[1.875rem] tracking-tighter">{`${first} ${last}`}</h2>
  );
};

export default Name;
