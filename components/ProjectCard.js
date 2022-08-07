import React from "react";

const ProjectCard = ({ name, description, source, website, tags }) => {
  return (
    <div className="w-full sm:w-1/2 p-4 rounded-lg md:hover:bg-gray-200 md:hover:bg-opacity-40 md:dark:hover:bg-gray-800 md:dark:hover:bg-opacity-50  transition-all backdrop-blur-sm">
      <div className="c-card block rounded-lg overflow-hidden">
        {/* <div className="cover-wrapper relative pb-48 overflow-hidden">
          <Image
            width="100%"
            height="100%"
            alt=""
            objectFit="cover"
            src={
              "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            }
            className="absolute inset-0 h-full w-full transition-all hover:scale-105"
          />
        </div> */}
        <div>
          <h2 className="mb-2 font-medium flex items-center justify-between gap-3 text-lg md:text-xl text-black dark:text-gray-100">
            <span className="flex-1">{name}</span>
            {source && (
              <a
                href={source}
                target="_blank"
                className="transition-colors text-gray-600 h-5 w-5 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1"
                  ></path>
                </svg>
              </a>
            )}

            {website && (
              <a
                href={website}
                target="_blank"
                className="transition-colors text-gray-600 h-5 w-5 dark:text-gray-400 hover:text-gray-900  dark:hover:text-gray-300"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <circle cx="8" cy="8" r="6.25"></circle>
                    <path d="M2 8.25h12M8.25 14.2C11 11 11 5 8.25 1.8m-.5 12.4C5 11 5 5 7.75 1.8"></path>
                  </g>
                </svg>
              </a>
            )}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
