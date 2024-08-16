import React from "react";

import ChaicodeImageLink from "../components/ChaicodeImageLink";
import { CardsContainer } from "../components/CatsListing";

const CatsListing = () => {
  return (
    <div className="min-h-svh w-full bg-catslisting">
      <div className="min-h-svh w-full bg-black bg-opacity-[42%] py-[5.5svh]">
        <ChaicodeImageLink className="absolute right-8 top-8" />

        <header className="mb-[clamp(1rem,3vw,3.5svh)] max-h-[10svh] pl-10">
          <h1 className="font-dmsans text-[clamp(1.5rem,5vw,3rem)] font-bold leading-[3.90625rem] tracking-tighter text-white">
            Cats around us
          </h1>
        </header>

        <CardsContainer />
      </div>
    </div>
  );
};

export default CatsListing;
