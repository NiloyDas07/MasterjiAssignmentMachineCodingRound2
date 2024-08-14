import React, { useEffect, useState, useRef } from "react";
import { Card } from "./";
import axios from "axios";

const CardsContainer = () => {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there are more pages
  const containerRef = useRef(null);

  const fetchCats = async (controller) => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=4`,
        { signal: controller.signal },
      );

      const { data, nextPage } = response.data.data;

      setCats((prevCats) => [...prevCats, ...data]);
      setHasMore(nextPage);
    } catch (error) {
      if (axios.isCancel(error)) return;
      console.log(error);
    }
    setLoading(false);
  };

  // Fetch cats when the page changes
  useEffect(() => {
    const controller = new AbortController();
    fetchCats(controller);

    return () => {
      controller.abort();
    };
  }, [page]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (
        container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 50 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    if (loading || !hasMore) return;

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div
      ref={containerRef}
      className="cat-container--scrollbar flex min-h-[90svh] w-full justify-around gap-4 overflow-x-scroll py-2 pl-10"
    >
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CardsContainer;
