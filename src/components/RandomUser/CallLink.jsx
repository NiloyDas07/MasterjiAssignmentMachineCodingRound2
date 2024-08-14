import React from "react";

const CallLink = ({ phone }) => {
  return (
    <a
      href={phone}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1"
    >
      {/* Call icon */}
      <span className="grid h-[1.375rem] w-[1.375rem] place-items-center rounded-full bg-black">
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5409 7.57824L9.55867 6.59602C9.26588 6.30558 8.87068 6.14183 8.45828 6.14008C8.04588 6.13832 7.6493 6.29871 7.35405 6.58665C7.19651 6.74509 6.98868 6.84367 6.7663 6.86543C6.54393 6.88718 6.32093 6.83075 6.13567 6.70585C5.40446 6.21785 4.77629 5.59089 4.28688 4.86062C4.16418 4.67329 4.10979 4.4494 4.13289 4.22665C4.15598 4.00391 4.25515 3.79593 4.41368 3.63776C4.69901 3.34223 4.85732 2.94676 4.85473 2.53597C4.85215 2.12519 4.68886 1.73174 4.39984 1.43982L3.41763 0.457607C3.12357 0.164552 2.72534 0 2.31019 0C1.89503 0 1.49681 0.164552 1.20274 0.457607L0.920136 0.740664C-0.553178 2.21399 -0.442903 5.31155 2.62248 8.37518C4.47082 10.224 6.33122 10.9981 7.8398 10.9981C8.28388 11.0129 8.72646 10.9392 9.14175 10.7812C9.55704 10.6232 9.93674 10.3842 10.2587 10.078L10.5418 9.79493C10.8354 9.50073 11.0002 9.10203 11 8.6864C10.9998 8.27077 10.8347 7.8722 10.5409 7.57824ZM9.90958 9.16363L9.62653 9.44669C8.46574 10.6075 5.90351 10.3954 3.25288 7.74432C0.602258 5.09323 0.389743 2.52919 1.55054 1.36839L1.83136 1.08578C1.9578 0.959795 2.12902 0.889057 2.30751 0.889057C2.486 0.889057 2.65721 0.959795 2.78365 1.08578L3.76586 2.068C3.89001 2.19276 3.96047 2.36111 3.96223 2.53711C3.96398 2.71311 3.89688 2.88282 3.77524 3.01003C3.47356 3.31364 3.28537 3.7117 3.24221 4.13753C3.19905 4.56336 3.30354 4.99109 3.53817 5.34905C4.09426 6.18122 4.80935 6.89525 5.64233 7.45011C5.99922 7.68477 6.42582 7.78988 6.85088 7.74787C7.27593 7.70586 7.67371 7.51927 7.97776 7.21928C8.10472 7.09621 8.27492 7.02786 8.45174 7.02895C8.62857 7.03004 8.79791 7.10046 8.92336 7.22509L9.90557 8.20731C9.96887 8.2697 10.0192 8.34399 10.0537 8.42591C10.0882 8.50782 10.1061 8.59575 10.1065 8.68463C10.1069 8.77351 10.0897 8.86159 10.0559 8.94379C10.0221 9.026 9.97236 9.10071 9.90958 9.16363Z"
            fill="white"
          />
        </svg>
      </span>
      <p className="font-dmsans text-[0.5625rem] font-medium">Call me</p>
    </a>
  );
};

export default CallLink;
