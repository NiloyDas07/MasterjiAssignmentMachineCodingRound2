import React from "react";

import { CatDetails, CatImage } from "./";

const Card = ({ cat }) => {
  return (
    <div className="cat-card aspect-[375/643] h-full w-auto max-w-[90%] flex-shrink-0 rounded-[18px] bg-white shadow-[2px_2px_8px_0_hsla(0,0%,0%,0.25)]">
      <CatImage image={cat?.image} />
      <CatDetails cat={cat} />
    </div>
  );
};

export default Card;
