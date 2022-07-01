import React from "react";

export function CharmPerson(props) {
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
        <circle cx="8" cy="6" r="3.25"></circle>
        <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"></path>
      </g>
    </svg>
  );
}
export default CharmPerson;
