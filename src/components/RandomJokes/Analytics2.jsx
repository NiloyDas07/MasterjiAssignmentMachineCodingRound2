import React from "react";
import { CommentIcon, IconLike, IconSave, IconShare, IconUpload } from "./";

const Analytics2 = () => {
  const getRandomNumber = () => {
    const views = Math.floor(Math.random() * 1000000000);

    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    } else {
      return `${views}`;
    }
  };

  return (
    <div className="mx-auto mb-3 mt-3 flex w-11/12 justify-between">
      <CommentIcon number={getRandomNumber()} />
      <IconShare number={getRandomNumber()} />
      <IconLike number={getRandomNumber()} />
      <IconSave number={getRandomNumber()} />
      <IconUpload />
    </div>
  );
};

export default Analytics2;
