import Link from "next/link";
import BLOG from "@/blog.config";
import formatDate from "@/lib/formatDate";

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article
          key={post.id}
          className="mb-6 lg:p-4 md:p-4 sm:p-0 rounded-lg md:hover:bg-gray-200 md:hover:bg-opacity-40 md:dark:hover:bg-gray-800 md:dark:hover:bg-opacity-50 transition-colors duration-200"
        >
          <header className="flex flex-col mb-2 justify-between md:flex-row md:items-center">
            <h2 className="text-lg md:text-xl font-medium cursor-pointer text-black flex-1 pr-2 dark:text-gray-100">
              <span className="mr-2">{post.title}</span>
              {post.lang && (
                <span className="inline-block translate-y-[-0.1rem] px-1 align-middle rounded text-gray-500 text-sm font-normal w-fit border dark:border-gray-600 dark:text-gray-400">
                  {post.lang}
                </span>
              )}
            </h2>

            <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
              {formatDate(
                post?.date?.start_date || post.createdTime,
                BLOG.lang
              )}
            </time>
          </header>
          <main>
            <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
              {post.summary}
            </p>
          </main>
        </article>
      </a>
    </Link>
  );
};

export default BlogPost;
