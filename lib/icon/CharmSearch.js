import React from "react";

export function CharmSearch(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
      className={`h-5 w-5 text-gray-500 dark:text-gray-300 m-auto ${
        props.className || ""
      }`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="m11.25 11.25l3 3"></path>
        <circle cx="7.5" cy="7.5" r="4.75"></circle>
      </g>
    </svg>
  );
}
export default CharmSearch;
