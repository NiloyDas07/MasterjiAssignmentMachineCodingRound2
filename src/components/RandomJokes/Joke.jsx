import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Joke = () => {
  const [loading, setLoading] = useState(true);
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const res = await axios.get(
        "https://api.freeapi.app/api/v1/public/randomjokes/joke/random",
      );

      setJoke(res.data?.data?.content);
    } catch (error) {
      console.log(error);
      setJoke(
        "Error: The world reminds you to stop wasting time here 😂. You can try refreshing the page if you still feel like you have too much time 🤷.",
      );
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return loading ? (
    <>
      <p className="skeleton text"></p>
      <p className="skeleton text"></p>
    </>
  ) : (
    <p className="font-inter text-sm leading-4">{joke}</p>
  );
};

export default Joke;
