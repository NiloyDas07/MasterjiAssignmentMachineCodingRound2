import React from "react";

import {
  ChaicodeImageLink,
  RandomUserImageLink,
  JokesImageLink,
} from "../components/";
import { CardsContainer } from "../components/CatsListing";

const CatsListing = () => {
  return (
    <div className="min-h-svh w-full bg-catslisting">
      <div className="min-h-svh w-full bg-black bg-opacity-[42%] py-[5.5svh]">
        <header className="mb-[clamp(1rem,3vw,3.5svh)] max-h-[10svh] pl-10">
          <h1 className="font-dmsans text-[clamp(1.5rem,5vw,3rem)] font-bold leading-[3.90625rem] tracking-tighter text-white">
            Cats around us
          </h1>
        </header>

        <CardsContainer />

        <div className="right-8 top-8 mx-auto mt-2 flex items-center justify-center gap-2 sm-md:absolute">
          <RandomUserImageLink className="" />
          <JokesImageLink />
          <ChaicodeImageLink className="" />
        </div>
      </div>
    </div>
  );
};

export default CatsListing;
