import { useState } from "react";
import BlogPost from "@/components/BlogPost";
import Container from "@/components/Container";
import Tags from "@/components/Tags";
import PropTypes from "prop-types";
import { useLocale } from "@/lib/locale";
import CharmSearch from "@/lib/icon/CharmSearch";

const SearchLayout = ({ tags, posts, currentTag }) => {
  const locale = useLocale();
  const [searchValue, setSearchValue] = useState("");
  let filteredBlogPosts = [];
  if (posts) {
    filteredBlogPosts = posts.filter((post) => {
      const tagContent = post.tags ? post.tags.join(" ") : "";
      const searchContent = post.title + post.summary + tagContent;
      return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  return (
    <Container>
      <div className="relative">
        <input
          type="text"
          placeholder={
            currentTag ? locale.SEARCH.IN(currentTag) : locale.SEARCH.ALL
          }
          className="block w-full border px-3 pr-10 py-2 border-gray-300 bg-white text-black dark:bg-night dark:border-gray-600 dark:text-gray-100 rounded"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <CharmSearch className="absolute right-3 top-3" />
      </div>
      <Tags tags={tags} currentTag={currentTag} />
      <div className="article-container my-8">
        {!filteredBlogPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">No posts found.</p>
        )}
        {filteredBlogPosts.slice(0, 20).map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
};
SearchLayout.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string,
};
export default SearchLayout;
