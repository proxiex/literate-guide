"use client";
import React, { Suspense, createContext, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { FaMoon, FaPen } from "react-icons/fa6";
import { HiSun } from "react-icons/hi";
import Link from "next/link";

export const ThemeContext = createContext();
function Layout({ children, hidden = false }) {
  const [theme, setTheme] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menu, setmenu] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("themeMode") === "dark") {
        setIsDarkMode(true); // Set isDarkMode to true if dark mode is in localStorage
        setTheme("dark"); // Set theme to dark
        document.documentElement.classList.add("dark"); // Add dark class to the document root
      } else {
        setIsDarkMode(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newMode = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    setTheme(newMode);
    localStorage.setItem("themeMode", newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
  };
  return (
    <>
      {!hidden && <Header setMenu={setmenu} />}
{/* 
      <Link
        href={"/contact"}
        className="fixed bottom-4 right-4 z-[999] p-5 contactUs-icon rounded-full"
      >
        <FaPen className="text-" />
      </Link> */}

      {!menu && (
        <>
          <div className="overflow-x-hidden">{children}</div>
          {!hidden && <Footer />}
        </>
      )}
    </>
  );
}

export default Layout;

const data = [
  {
    id: "dark",
    title: <FaMoon />,
  },

  {
    id: "light",
    title: <HiSun />,
  },
];
