import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial value from localStorage (default to false)
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Shiven Gupta</h1>
      <nav className="space-x-6 flex items-center">
        <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a>
        <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
        <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
        <a href="#certifications" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Certifications</a>
        <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</a>

        {/* 🌙 Toggle Button */}
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          title="Toggle Dark Mode"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
