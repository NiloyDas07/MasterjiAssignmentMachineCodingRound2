import React from "react";

const CommentIcon = ({ number }) => {
  return (
    <div className="flex items-center gap-1">
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.09653C0 1.83319 1.79873 0 4.01753 0H6.20873C8.46216 0 10.2885 1.86392 10.2885 4.16309C10.2885 5.67881 9.48198 7.07163 8.18262 7.80388L4.14049 10.0877V8.19817H4.10687C1.85344 8.24938 0 6.40082 0 4.09653ZM4.01753 1.02413C2.3528 1.02413 1.00376 2.40159 1.00376 4.09653C1.00376 5.82219 2.39396 7.20988 4.08428 7.17404L4.26044 7.16892H5.14425V8.34667L7.6973 6.90777C8.67647 6.35473 9.28474 5.305 9.28474 4.16309C9.28474 2.42719 7.90759 1.02413 6.20873 1.02413H4.01753Z"
          fill="#71767B"
        />
      </svg>

      <p className="font-inter text-[0.5rem] leading-[0.605rem] tracking-[0.02em] text-[#71767B]">
        {number}
      </p>
    </div>
  );
};

export default CommentIcon;
