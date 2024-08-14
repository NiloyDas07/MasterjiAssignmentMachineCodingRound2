import React from "react";

const UserImage = ({ image, title }) => {
  return (
    <div className="relative mb-4">
      {/* User profile image */}
      <div className="h-[6.25rem] w-[6.25rem] border-black">
        <img
          src={image}
          alt="User"
          className="rounded-full shadow-[1px_1px_4px_0_hsla(0,0%,0%,0.25)]"
        />
      </div>

      {/* User name title */}
      <span className="absolute -right-4 -top-2 rounded-full bg-black px-2 py-1 font-dmseriftext text-[0.5rem] font-normal leading-[0.685625rem] text-white">
        {title}
      </span>
    </div>
  );
};

export default UserImage;
