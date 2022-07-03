import React from "react";

export function CharmMusic(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="h-5 w-5 text-gray-500 dark:text-gray-300 m-auto"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <circle cx="4" cy="12" r="2.25"></circle>
        <circle cx="12" cy="11" r="2.25"></circle>
        <path d="M6.25 12V2.75l8-1V11"></path>
      </g>
    </svg>
  );
}
export default CharmMusic;
