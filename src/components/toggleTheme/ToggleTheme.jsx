"use client";
import { useState, useEffect, use } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-[--secondary-bg-color] bg-[--secondary-bg-color] cursor-pointer rounded-full p-1"
      onClick={() => setDarkTheme(!darkTheme)}
    >
      <FaMoon className="text-white" size={18} />
      <div
        className="absolute flex items-center bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkTheme ? { left: "2px" } : { right: "2px" }}
      >
      </div>
        <BsSunFill className="ml-auto dark:text-yellow-400 text-teal-300" size={18} />
    </div>
  );
};

export default ThemeToggle;
