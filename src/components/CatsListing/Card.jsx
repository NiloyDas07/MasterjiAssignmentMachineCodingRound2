import React from "react";

import { CatDetails, CatImage } from "./";

const Card = ({ cat }) => {
  return (
    <div className="w-[23.4375rem] max-w-[90%] flex-shrink-0 rounded-[18px] bg-white shadow-[2px_2px_8px_0_hsla(0,0%,0%,0.25)]">
      <CatImage image={cat?.image} />
      <CatDetails cat={cat} />
    </div>
  );
};

export default Card;
