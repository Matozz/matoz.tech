import Link from "next/link";
import BLOG from "@/blog.config";
import formatDate from "@/lib/formatDate";

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article
          key={post.id}
          className="mb-6 p-4 rounded-lg hover:bg-gray-200 hover:bg-opacity-40 dark:hover:bg-gray-800 dark:hover:bg-opacity-50 transition-colors duration-200"
        >
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
              {post.title}
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
