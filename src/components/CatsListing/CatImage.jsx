import React from "react";

const CatImage = ({ image }) => {
  return (
    <div className="h-1/2 w-full overflow-hidden">
      <img src={image} alt="Cat" className="h-full w-full rounded-t-[18px]" />
    </div>
  );
};

export default CatImage;
