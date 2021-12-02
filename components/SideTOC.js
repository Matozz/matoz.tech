import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const SideTOC = ({
  links: _links,
  posRef,
  anchorName,
  minLevel,
  visibleHeight = 48,
  pause,
}) => {
  const [show, setShow] = useState(false);
  const [anchor, setAnchor] = useState(0);
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
    if (pause) return;
    const Links = [];
    for (let i = 0; i < _links.length; i++) {
      if (_links[i].id === activeLink) {
        Links.push({ ..._links[i], active: true });
      } else Links.push({ ..._links[i], active: false });
    }
    setLinks(Links);

    const active =
      document.getElementById(`link-${activeLink}`)?.offsetTop + 40;

    tocRef.current &&
      tocRef.current.scrollTo({ top: active - 100, behavior: "smooth" });
  }, [activeLink, pause]);

  const handleScrollDirection = () => {
    setActiveLink(getActiveLinkID());
    if (window.scrollY < visibleHeight) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleResize = () => {
    setAnchor(posRef.current.getBoundingClientRect().right);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("scroll", handleScrollDirection);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (links.length === 0) return null;

  return ReactDOM.createPortal(
    <nav
      ref={tocRef}
      className={`toc fixed top-24 bottom-8 overflow-y-auto border-gray-300 dark:border-gray-700 opacity-0 scale-0 lg:opacity-100 lg:scale-100 ${
        show ? "scale-100" : "lg:scale-0 lg:opacity-0"
      }`}
      style={{
        left: anchor + 40 + "px",
        width: "100%",
        transformOrigin: "0 0",
      }}
    >
      <ul
        className="border-gray-300 dark:border-gray-700"
        style={{ borderLeftWidth: 1 }}
      >
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
    </nav>,
    document.body
  );
};

export default SideTOC;
