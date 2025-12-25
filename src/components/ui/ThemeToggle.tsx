"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    const htmlElement = document.documentElement;
    const newIsDark = !isDark;
    
    if (newIsDark) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    
    setIsDark(newIsDark);
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center rounded-lg p-2 text-(--text-nav) transition-colors duration-200 hover:bg-(--accent-muted) hover:text-(--text-nav-hover) focus-visible:ring-2 focus-visible:ring-(--focus-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--focus-ring-offset) focus-visible:outline-none"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
