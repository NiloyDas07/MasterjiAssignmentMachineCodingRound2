import React from "react";
import { Link } from "react-router-dom";

const JokesImageLink = ({ className }) => {
  return (
    <Link
      to="/random-jokes"
      className={`${className} block h-10 w-10 rounded-full bg-black p-2`}
    >
      <span className="sr-only"> Go to random jokes page</span>

      <svg
        fill="#C107F6"
        width="105px"
        height="105px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
          <path d="M12 18c4 0 5-4 5-4H7s1 4 5 4zm5.555-9.168-1.109-1.664-3 2a1.001 1.001 0 0 0 .108 1.727l4 2 .895-1.789-2.459-1.229 1.565-1.045zm-6.557 1.23a1 1 0 0 0-.443-.894l-3-2-1.11 1.664 1.566 1.044-2.459 1.229.895 1.789 4-2a.998.998 0 0 0 .551-.832z"></path>
        </g>
      </svg>
    </Link>
  );
};

export default JokesImageLink;
