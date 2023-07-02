import {
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

export const getTheme = () => {
  let theme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  theme = JSON.parse(localStorage.getItem("theme")) ?? theme;
  return theme;
};

export default function RootLayout() {
  const [theme, setTheme] = useState(useLoaderData());
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function changeTheme(theme) {
    setTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
    setShowThemeSwitcher(!showThemeSwitcher);
  }

  return (
    <>
      <header className="py-4">
        <div className="center flex items-center justify-between">
          <Link to={"/"} className="flex items-center gap-2 opacity-95">
            <WrenchScrewdriverIcon width={25} className="text-red-400" />
            <h1 className="text-2xl font-bold">Task Manager</h1>
          </Link>
          <div>
            <div className="relative">
              {theme === "dark" ? (
                <SunIcon
                  width={25}
                  className="cursor-pointer opacity-95 "
                  id="theme-btn"
                  onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
                />
              ) : (
                <MoonIcon
                  width={25}
                  className="cursor-pointer opacity-95 0"
                  id="theme-btn"
                  onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
                />
              )}
              {showThemeSwitcher && (
                <div
                  id="theme-switcher"
                  className="absolute right-0 top-12 w-40 element shadow rounded hover-effect"
                >
                  <div
                    className="flex items-center gap-2 p-3 hover-effect cursor-pointer z-30 overflow-hidden hover:bg-gray-200 dark:hover:text-black"
                    onClick={() => changeTheme("light")}
                  >
                    <SunIcon
                      width={25}
                      className="cursor-pointer text-red-500"
                    />
                    <span>Light Mode</span>
                  </div>
                  <div
                    className="flex items-center gap-2 p-3 hover-effect cursor-pointer z-30 hover:bg-gray-200 dark:hover:text-black"
                    onClick={() => changeTheme("dark")}
                  >
                    <MoonIcon
                      width={20}
                      className="cursor-pointer text-red-500"
                    />
                    <span>Dark Mode</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="center">
          <Outlet />
        </div>
      </main>
      <footer className="py-5">
        <div className="center text-center">
          <p className="text-xs">&copy; Benedict 2023</p>
        </div>
      </footer>
    </>
  );
}
