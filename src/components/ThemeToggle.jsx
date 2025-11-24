// ThemeToggle.jsx
import React, { useState, useEffect } from "react";
import "./ThemeToggle.css"; // Assuming you have some styles for dark mode
const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved preference or default to light mode
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-primary">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
