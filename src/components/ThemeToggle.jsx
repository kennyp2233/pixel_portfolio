import React, { useState, useEffect } from "react";
function ThemeToggle({ className }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setIsDarkMode(savedTheme === "dark");
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      }
    }, []);
  
    const toggleTheme = () => {
      const newTheme = isDarkMode ? "light" : "dark";
      setIsDarkMode(!isDarkMode);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
    <label className={"flex cursor-pointer gap-2 " + className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="toggle theme-controller toggle-xs"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
}
export default ThemeToggle;