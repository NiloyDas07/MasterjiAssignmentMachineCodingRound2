import React from "react";

import ChaicodeImageLink from "../ChaicodeImageLink";

const Footer = () => {
  return (
    <footer className="mt-8 grid w-full grid-cols-3">
      <p
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="col-start-2 self-end justify-self-center font-dmsans text-[0.5rem] font-bold leading-[0.65125rem] text-white text-opacity-40"
      >
        © chai aur code
      </p>

      <ChaicodeImageLink className="justify-self-end" />
    </footer>
  );
};

export default Footer;
