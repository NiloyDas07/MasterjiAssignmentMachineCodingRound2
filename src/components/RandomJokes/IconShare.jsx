import React from "react";

const IconShare = ({ number }) => {
  return (
    <div className="flex items-center gap-1">
      <svg
        width="12"
        height="9"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.93171 0L4.99998 2.10842L4.36344 2.85197L3.39837 1.86906V6.17249C3.39837 6.7327 3.81651 7.19105 4.33171 7.19105H6.89838V8.20961H4.33171C3.30084 8.20961 2.46504 7.298 2.46504 6.17249V1.86906L1.49997 2.85197L0.863434 2.10842L2.93171 0ZM8.53172 1.07968H5.96505V0.0611137H8.53172C9.56259 0.0611137 10.3984 0.972727 10.3984 2.09824V6.40166L11.3635 5.41875L12 6.1623L9.93172 8.27073L7.86345 6.1623L8.49999 5.41875L9.46505 6.40166V2.09824C9.46505 1.53803 9.04692 1.07968 8.53172 1.07968Z"
          fill="#71767B"
        />
      </svg>

      <p className="font-inter text-[0.5rem] leading-[0.605rem] tracking-[0.02em] text-[#71767B]">
        {number}
      </p>
    </div>
  );
};

export default IconShare;
