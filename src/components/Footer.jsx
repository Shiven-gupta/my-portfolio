import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Let's Connect
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm always interested in discussing enterprise infrastructure,
            networking, virtualization, Microsoft 365, and exciting career
            opportunities. Feel free to connect with me.
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">

          <a
            href="mailto:g.shivengupta.g@gmail.com"
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
          >
            <FaEnvelope className="text-2xl text-blue-500" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                g.shivengupta.g@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Shiven-gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
          >
            <FaGithub className="text-2xl text-blue-500" />
            <div>
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                github.com/Shiven-gupta
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/gshiven-guptag/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
          >
            <FaLinkedin className="text-2xl text-blue-500" />
            <div>
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                linkedin.com/in/gshiven-guptag
              </p>
            </div>
          </a>

          <a
            href="https://www.hackerrank.com/profile/g_shivengupta_g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
          >
            <FaHackerrank className="text-2xl text-blue-500" />
            <div>
              <p className="font-semibold">HackerRank</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                hackerrank.com/profile/g_shivengupta_g
              </p>
            </div>
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700 my-12"></div>

        {/* Bottom */}
        <div className="text-center">

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Shiven Gupta. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Designed & Developed by{" "}
            <span className="font-semibold text-blue-500">
              Shiven Gupta
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}
