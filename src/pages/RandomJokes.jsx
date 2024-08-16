import React from "react";
import {
  RandomUserImageLink,
  ChaicodeImageLink,
  CatImageLink,
} from "../components/";
import {
  Analytics1,
  Analytics2,
  Container,
  Hr,
  Joke,
  TopBar,
  UserDetails,
} from "../components/RandomJokes";

const RandomJokes = () => {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center gap-2 bg-randomjokes py-2">
      <Container>
        <TopBar />
        <UserDetails />
        <Joke />
        <Analytics1 />
        <Hr />
        <Analytics2 />
        <Hr />

        <p className="mt-5 text-center font-inter text-[0.625rem] font-semibold leading-3 tracking-[-0.02em] text-white text-opacity-40">
          © chai aur code
        </p>
      </Container>

      <div className="bottom-8 right-8 mb-2 mr-8 flex items-center gap-4 self-end sm-md:absolute">
        <RandomUserImageLink />
        <CatImageLink />
        <ChaicodeImageLink />
      </div>
    </div>
  );
};

export default RandomJokes;
