import React from "react";

const CatImage = ({ image, alt }) => {
  return (
    <div className="h-1/2 w-full overflow-hidden">
      <img src={image} alt={alt} className="h-full w-full rounded-t-[18px]" />
    </div>
  );
};

export default CatImage;
