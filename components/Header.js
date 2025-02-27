import { useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import BLOG from "../blog.config";
import { useLocale } from "../lib/locale";
import { useTheme } from "../lib/theme";
import { useLayout } from "../lib/layout";
import { useRouter } from "next/router";
import CharmHome from "../lib/icon/CharmHome";
import CharmStack from "../lib/icon/CharmStack";
import CharmPerson from "../lib/icon/CharmPerson";
import CharmCast from "../lib/icon/CharmCast";
import CharmSearch from "../lib/icon/CharmSearch";
import CharmMoon from "../lib/icon/CharmMoon";
import CharmSun from "../lib/icon/CharmSun";
import CharmMusic from "../lib/icon/CharmMusic";

const NavBar = () => {
  const locale = useLocale();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const links = [
    {
      id: 0,
      name: locale.NAV.INDEX,
      to: BLOG.path || "/",
      show: true,
      icon: <CharmHome />,
    },
    {
      id: 1,
      name: locale.NAV.PROJECT,
      to: "/project",
      show: true,
      icon: <CharmStack />,
    },
    {
      id: 2,
      name: locale.NAV.MUSIC,
      to: "/music",
      show: BLOG.showMusic,
      icon: <CharmMusic />,
    },
    {
      id: 3,
      name: locale.NAV.ABOUT,
      to: "/about",
      show: BLOG.showAbout,
      icon: <CharmPerson />,
    },
    {
      id: 4,
      name: locale.NAV.RSS,
      to: "/feed",
      show: true,
      icon: <CharmCast />,
    },
    {
      id: 5,
      name: locale.NAV.SEARCH,
      to: "/search",
      show: true,
      icon: <CharmSearch />,
    },
  ];

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  useEffect(() => {
    const handleThemeChange = (e) => {
      toggleTheme(e.matches ? "light" : "dark");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);
    return window.removeEventListener("change", handleThemeChange);
  }, []);

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <div className="flex items-center flex-shrink-0">
      <Head>
        <meta
          name="theme-color"
          content={
            theme === "dark" ? BLOG.darkBackground : BLOG.lightBackground
          }
        />
      </Head>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-8 h-8 p-1 ml-1 rounded sm:ml-4 hover:scale-110 active:scale-90 transition-transform duration-200"
        onClick={() => toggleTheme(theme)}
      >
        {theme === "light" ? <CharmMoon /> : <CharmSun />}
      </button>
      <ul className="flex flex-row">
        {links.map(
          (link) =>
            link.show && (
              <div key={link.id}>
                <li className="items-center ml-4 text-gray-600 dark:text-gray-200 nav hidden lg:flex">
                  <Link href={link.to}>{link.name}</Link>
                </li>
                <button
                  aria-label={link.name}
                  title={link.name}
                  type="button"
                  className="w-8 h-8 p-1 ml-1 rounded sm:ml-4 hover:scale-110 active:scale-90 flex items-center justify-center transition-transform duration-200 lg:hidden"
                  onClick={() => router.push(link.to)}
                >
                  {link.icon}
                </button>
              </div>
            )
        )}
      </ul>
    </div>
  );
};

const Header = ({ navBarTitle, fullWidth }) => {
  const { setLayout } = useLayout();
  const useSticky = !BLOG.autoCollapsedNavBar;
  const navRef = useRef(null);
  const sentinalRef = useRef([]);
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add("sticky-nav-full");
      } else {
        navRef.current?.classList.remove("sticky-nav-full");
      }
    } else {
      navRef.current?.classList.add("remove-sticky");
    }
  };
  useEffect(() => {
    setLayout({ scrollTopRef: sentinalRef });
    const obvserver = new window.IntersectionObserver(handler);
    obvserver.observe(sentinalRef.current);
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    /* eslint-disable-line */
  }, [sentinalRef]);

  return (
    <>
      <div className="observer-element md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-6 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? "max-w-3xl px-4" : "px-4 md:px-24"
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/" aria-label={BLOG.title} passHref>
            <div className="flex">
              <Image
                width={32}
                height={32}
                src={`https://i0.hdslb.com/bfs/baselabs/e471e5eb3967f8bf1da160ae6a0b3a992c0aebcd.png`}
                alt="Lucky Icon"
                title="Lucky Icon"
                className="hover:scale-110 active:scale-90 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </Link>
          {navBarTitle ? (
            <p className="ml-4 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
          ) : (
            <p className="ml-4 font-medium text-day dark:text-night header-name">
              {BLOG.title},{" "}
              <span className="font-normal">{BLOG.description}</span>
            </p>
          )}
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
