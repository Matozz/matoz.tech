import React, { useEffect, useRef, useState } from "react";

const SideTOC = ({
  links: _links,
  anchorName,
  minLevel,
  visibleHeight = 48,
}) => {
  const [show, setShow] = useState(false);
  const [links, setLinks] = useState(_links);
  const [activeLink, setActiveLink] = useState(null);
  const tocRef = useRef();

  const getActiveLinkID = () =>
    Array.from(document.querySelectorAll(`.${anchorName}`))
      .map((anchor) => ({
        top: anchor.getBoundingClientRect().top,
        id: anchor.id,
      }))
      .filter((item) => item.top <= 10)
      .sort((a, b) => b.top - a.top)[0]?.id;

  useEffect(() => {
    setLinks(
      _links.reduce((prev, curr) => {
        if (curr.id === activeLink) {
          prev.push({ ...curr, active: true });
        } else prev.push({ ...curr, active: false });
        return prev;
      }, [])
    );

    const active =
      document.getElementById(`link-${activeLink}`)?.offsetTop + 40;

    tocRef.current &&
      tocRef.current.scrollTo({ top: active - 100, behavior: "smooth" });
  }, [activeLink, _links]);

  const handleScrollDirection = () => {
    setActiveLink(getActiveLinkID());
    if (window.scrollY < visibleHeight) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // const handleResize = () => {
  //   setAnchor(posRef.current.getBoundingClientRect().right);
  // };

  useEffect(() => {
    // handleResize();
    window.addEventListener("scroll", handleScrollDirection);
    // window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
      // window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (links.length === 0) return null;

  return (
    <div
      ref={tocRef}
      className={`toc fixed top-24 hidden lg:block bottom-8 w-[inherit] origin-[0_0] overflow-y-auto border-gray-300 dark:border-gray-700 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <ul className="border-gray-300 dark:border-gray-700 border-l-[2px]">
        {links.map(({ id, title, level, active }) => (
          <li
            key={id}
            id={`link-${id}`}
            className={active ? "active-anchor-link" : ""}
            style={{ marginLeft: level - minLevel + "rem" }}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SideTOC);
