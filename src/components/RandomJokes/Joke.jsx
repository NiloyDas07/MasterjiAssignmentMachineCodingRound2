import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Joke = () => {
  const [loading, setLoading] = useState(true);
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(false);

  const fetchJoke = async () => {
    try {
      setError(false);
      const res = await axios.get(
        "https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
      );

      setJoke(res.data?.data?.content);
    } catch (error) {
      console.log(error);
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return loading ? (
    <>
      <p className="skeleton h-2 w-11/12 rounded-full"></p>
      <p className="skeleton mt-1 h-2 w-4/5 rounded-full"></p>
    </>
  ) : error ? (
    <div>
      <h2>Whoops! No Laughs Today! 😅</h2>
      <br />
      <p className="font-inter text-sm leading-4">
        It seems our joke machine has taken a coffee break, or maybe it heard
        one too many puns and decided to quit! Don't worry, we're hunting it
        down with a banana peel in hand.
      </p>
      <br />
      <p className="font-inter text-sm leading-4">
        In the meantime, why not try refreshing the page or telling us a joke?
        We promise not to take notes... maybe.
      </p>
    </div>
  ) : (
    <p className="font-inter text-sm leading-4">{joke}</p>
  );
};

export default Joke;
