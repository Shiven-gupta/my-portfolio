import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          I'd love to hear from you — reach out via any of the platforms below:
        </p>

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
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
          >
            <FaGithub /> github.com/Shiven-gupta
          </a>
          <a
            href="https://www.linkedin.com/in/gshiven-guptag/"
            target="_blank"
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
          >
            <FaLinkedin /> linkedin.com/in/gshiven-guptag
          </a>
          <a
            href="https://www.hackerrank.com/profile/g_shivengupta_g"
            target="_blank"
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
          >
            <FaHackerrank /> hackerrank.com/g_shivengupta_g
          </a>
        </div>

        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Shiven Gupta • All rights reserved
        </div>
      </div>
    </footer>
  );
}
