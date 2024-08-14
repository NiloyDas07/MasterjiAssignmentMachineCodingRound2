import React from "react";

const IconSave = ({ number }) => {
  return (
    <div className="flex items-center gap-1">
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.14032 1.33006C0.14032 0.595869 0.661894 0 1.30559 0H6.43277C7.07647 0 7.59804 0.595869 7.59804 1.33006V11.1406L3.86918 8.10275L0.14032 11.1406V1.33006ZM1.30559 1.06405C1.17694 1.06405 1.07253 1.1811 1.07253 1.33006V9.07636L3.86918 6.79397L6.66583 9.07636V1.33006C6.66583 1.1811 6.56142 1.06405 6.43277 1.06405H1.30559Z"
          fill="#71767B"
        />
      </svg>

      <p className="font-inter text-[0.5rem] leading-[0.605rem] tracking-[0.02em] text-[#71767B]">
        {number}
      </p>
    </div>
  );
};

export default IconSave;
