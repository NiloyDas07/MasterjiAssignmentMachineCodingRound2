import React from "react";
import Flag from "react-world-flags";

const UserDetailItems = ({ type, content, nat }) => {
  if (type === "Nationality") {
    return (
      <div>
        <h2 className="font-dmsans text-[0.5625rem] leading-3 text-[hsla(0,0%,0%,0.7)]">
          {type}
        </h2>

        <div className="flex items-center gap-1">
          <Flag code={nat} className="w-4" />
          <p className="font-dmseriftext text-lg leading-6">{content}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-dmsans text-[0.5625rem] leading-3 text-[hsla(0,0%,0%,0.7)]">
        {type}
      </h2>

      <p className="font-dmseriftext text-lg leading-6">{content}</p>
    </div>
  );
};

export default UserDetailItems;
