import React from "react";

import chaiCodeImage from "../assets/images/chaiCodeImage.png";

const ChaicodeImageLink = ({ className }) => {
  return (
    <a href="https://www.chaicode.com" className={`${className}`}>
      <span className="sr-only">Go to chaicode website</span>
      <img src={chaiCodeImage} alt="chaicode" className="w-[3.75rem]" />
    </a>
  );
};

export default ChaicodeImageLink;
