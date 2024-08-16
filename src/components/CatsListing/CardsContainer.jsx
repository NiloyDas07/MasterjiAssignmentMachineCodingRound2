import React, { useEffect, useState, useRef, useCallback } from "react";
import { Card } from "./";
import axios from "axios";

// Debounce function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const CardsContainer = () => {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [limitState, setLimitState] = useState(null);
  const containerRef = useRef(null);

  const calculateLimit = () => {
    console.log("calculateLimit called");
    const container = containerRef.current;
    if (container) {
      const containerHeight = container.clientHeight;
      const cardAspectRatio = 375 / 643;
      const cardWidth = containerHeight * cardAspectRatio;
      const containerWidth = container.clientWidth;
      const res = Math.ceil(containerWidth / cardWidth) + 1;

      setLimitState(res);

      return res;
    }
    return 4; // Default limit
  };

  const fetchCats = useCallback(
    async (signal) => {
      if (!hasMore || loading) return;

      setLoading(true);
      try {
        const limit = limitState || calculateLimit();

        const response = await axios.get(
          `https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=${limit}`,
          { signal },
        );

        const { data, nextPage } = response.data.data;

        setHasMore(nextPage);
        if (nextPage) setPage((prevPage) => prevPage + 1);
        setCats((prevCats) => [...prevCats, ...data]);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    },
    [hasMore, loading, page],
  );

  // Initial fetch
  useEffect(() => {
    const controller = new AbortController();
    fetchCats(controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  // Scroll event listener
  useEffect(() => {
    if (loading) return;

    const handleScroll = debounce(() => {
      const container = containerRef.current;
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 150
      ) {
        fetchCats();
      }
    }, 100);

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [loading, fetchCats]);

  return (
    <div
      ref={containerRef}
      className="cat-scrollbar cat-scrollbar--container flex h-[75svh] w-full justify-around gap-4 overflow-x-scroll px-10 py-2"
    >
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
      {loading && (
        <div className="loader-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
