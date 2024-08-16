import React from "react";
import { Link } from "react-router-dom";

const RandomUserImageLink = ({ className }) => {
  return (
    <Link
      to="/random-user"
      className={`${className} h-10 w-10 rounded-full bg-black p-2`}
    >
      <span className="sr-only">Go to random user page</span>

      <svg
        className="h-full w-full"
        width="100px"
        height="100px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#C107F6"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <circle
            cx="12"
            cy="6"
            r="4"
            stroke="#C107F6"
            strokeWidth="1.5"
          ></circle>{" "}
          <path
            opacity="1"
            d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
            stroke="#C107F6"
            strokeWidth="1.5"
          ></path>{" "}
        </g>
      </svg>
    </Link>
  );
};

export default RandomUserImageLink;
