import React from "react";
import { useLocale } from "@/lib/locale";

const MusicCard = ({
  name,
  description,
  bilibili,
  youtube,
  purchase,
  free,
  audio,
  tags,
}) => {
  const locale = useLocale();
  return (
    <div className="w-full p-4 rounded-lg md:hover:bg-gray-200 md:hover:bg-opacity-40 md:dark:hover:bg-gray-800 md:dark:hover:bg-opacity-50  transition-all">
      <div className="c-card block rounded-lg overflow-hidden">
        <div>
          <h2 className="mb-2 font-medium flex items-center justify-between gap-3 text-lg md:text-xl text-black dark:text-gray-100">
            <span>{name}</span>
            {free && (
              <>
                <span className="whitespace-nowrap inline-block px-1 align-middle rounded text-gray-500 text-sm font-normal w-fit border dark:border-gray-600 dark:text-gray-400">
                  {locale.MUSIC.FREE}
                </span>
              </>
            )}
            <span className="flex-1"></span>

            {youtube && (
              <a
                href={youtube}
                target="_blank"
                className="transition-colors text-gray-600 h-5 w-5 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="m170.5 117.9l-56-36A12.1 12.1 0 0 0 96 92v72a11.9 11.9 0 0 0 6.3 10.5a11.3 11.3 0 0 0 5.7 1.5a11.7 11.7 0 0 0 6.5-1.9l56-36a12 12 0 0 0 0-20.2ZM120 142v-28l21.8 14Zm118.2-73.2a28 28 0 0 0-16.9-19.1c-34.9-13.4-90-13.3-93.3-13.3s-58.4-.1-93.3 13.3a28 28 0 0 0-16.9 19.1C15.2 78.9 12 97.5 12 128s3.2 49.1 5.8 59.2a28 28 0 0 0 16.9 19.1c33.5 12.8 85.7 13.3 92.7 13.3h1.2c7 0 59.2-.5 92.7-13.3a28 28 0 0 0 16.9-19.1c2.6-10.1 5.8-28.7 5.8-59.2s-3.2-49.1-5.8-59.2ZM215 181.2a4.4 4.4 0 0 1-2.3 2.7c-29.9 11.5-80.4 11.7-84.4 11.7h-.4c-.5 0-53.6.2-84.6-11.7a4.4 4.4 0 0 1-2.3-2.7c-1.9-7.2-5-23.7-5-53.2s3.1-46 5-53.2a4.4 4.4 0 0 1 2.3-2.7c31-11.9 84.1-11.7 84.6-11.7h.2c.5 0 53.6-.2 84.6 11.7a4.4 4.4 0 0 1 2.3 2.7c1.9 7.2 5 23.7 5 53.2s-3.1 46-5 53.2Z"
                  ></path>
                </svg>
              </a>
            )}
            {bilibili && (
              <a
                href={bilibili}
                target="_blank"
                className="transition-colors text-gray-600 h-5 w-5 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M1.75 5.75h12.5v7.5H1.75z"></path>
                    <path d="M10.75 8.75v1.5m-5.5-1.5v1.5m-.5-7.5l3.25 3l3.25-3"></path>
                  </g>
                </svg>
              </a>
            )}

            {purchase && (
              <a
                href={purchase}
                target="_blank"
                className="transition-colors text-gray-600 h-5 w-5 dark:text-gray-400 hover:text-gray-900  dark:hover:text-gray-300"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="m227 71.1l-16-36a12.2 12.2 0 0 0-11-7.1H56a12.2 12.2 0 0 0-11 7.1l-16 36a13.8 13.8 0 0 0-1 4.9v132a20.1 20.1 0 0 0 20 20h160a20.1 20.1 0 0 0 20-20V76a13.8 13.8 0 0 0-1-4.9ZM192.2 52l5.3 12h-139l5.3-12ZM52 204V88h152v116Zm112.8-60.8a12 12 0 0 1 0 17l-28.3 28.3a12.1 12.1 0 0 1-17 0l-28.3-28.3a12 12 0 0 1 17-17l7.8 7.8v-39a12 12 0 0 1 24 0v39l7.8-7.8a12 12 0 0 1 17 0Z"
                  ></path>
                </svg>
              </a>
            )}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
          {/* {audio?.url && (
            <audio className="w-full mt-2" controls src={audio?.url}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
