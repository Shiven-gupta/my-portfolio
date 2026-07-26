import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide"
        >
          <span className="text-blue-600">Shiven</span>{" "}
          <span className="text-gray-900 dark:text-white">Gupta</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">

          <Link
            to="/"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Home
          </Link>

          <a
            href="/#about"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="/#tech-stack"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Tech Stack
          </a>

          <a
            href="/#experience"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Experience
          </a>

          <a
            href="/#projects"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Projects
          </a>

          <Link
            to="/blogs"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Blog
          </Link>

          <a
            href="/#certifications"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Certifications
          </a>

          <a
            href="/#contact"
            className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </a>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Resume Download */}
          <a
            href="/Shiven_Gupta_Resume.pdf"
            download
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-lg transition duration-300"
          >
            📄 Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-11 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition duration-300"
            title="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

      </div>
    </header>
  );
}