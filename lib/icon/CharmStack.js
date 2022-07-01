import React from "react";

export function CharmStack(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="h-5 w-5 text-gray-500 dark:text-gray-300 m-auto"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.75 11L8 14.25L14.25 11M1.75 8L8 11.25L14.25 8M8 1.75L1.75 5L8 8.25L14.25 5z"
      ></path>
    </svg>
  );
}
export default CharmStack;
