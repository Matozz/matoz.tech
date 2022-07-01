import React from "react";

export function CharmBook(props) {
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
        d="M11.75 11.75v2m1.5.5h-9c-.75 0-1.5-.5-1.5-1.5s.75-1.5 1.5-1.5h9v-9.5h-9c-.75 0-1.5.75-1.5 1.5v9.5"
      ></path>
    </svg>
  );
}
export default CharmBook;
