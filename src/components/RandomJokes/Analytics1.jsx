import React from "react";

const Analytics1 = () => {
  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 60);
    const amOrPm = Math.random() < 0.5 ? "AM" : "PM";

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  };

  const getRandomDate = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const year = Math.floor(Math.random() * (2025 - 2000 + 1)) + 2020;
    const monthIndex = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 31) + 1;

    const month = months[monthIndex];
    const formattedDay = day.toString().padStart(2, "0");

    return `${month} ${formattedDay}, ${year}`;
  };

  const getRandomViews = () => {
    const views = Math.floor(Math.random() * 1000000000);

    if (views >= 1000000000) {
      return `${(views / 1000000000).toFixed(1)}B`;
    } else if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    } else {
      return `${views}`;
    }
  };

  return (
    <p className="mb-3 mt-6 font-inter text-[0.625rem] leading-3 tracking-[-0.02em] text-[#71767B]">
      {getRandomTime()} • {getRandomDate()} •{" "}
      <span className="font-semibold text-white">{getRandomViews()}</span> Views
    </p>
  );
};

export default Analytics1;
