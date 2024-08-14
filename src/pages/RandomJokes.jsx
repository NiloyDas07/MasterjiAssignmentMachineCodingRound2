import React from "react";
import ChaicodeImageLink from "../components/ChaicodeImageLink";
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
    <div className="flex min-h-svh w-full items-center justify-center bg-randomjokes">
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

      <ChaicodeImageLink className="absolute bottom-8 right-8" />
    </div>
  );
};

export default RandomJokes;
