import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-6">
      <div className="flex flex-col gap-4 items-center">
        <a
          href="mailto:g.shivengupta.g@gmail.com"
          className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
        >
          <FaEnvelope /> g.shivengupta.g@gmail.com
        </a>

        <a
          href="https://github.com/Shiven-gupta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
        >
          <FaGithub /> github.com/Shiven-gupta
        </a>

        <a
          href="https://www.linkedin.com/in/gshiven-guptag/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
        >
          <FaLinkedin /> linkedin.com/in/gshiven-guptag
        </a>

        <a
          href="https://www.hackerrank.com/profile/g_shivengupta_g"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
        >
          <FaHackerrank /> hackerrank.com/profile/g_shivengupta_g
        </a>
      </div>
    </footer>
  );
}
