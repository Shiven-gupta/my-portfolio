import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Let's Connect
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          I'm always interested in discussing enterprise infrastructure,
          networking, cloud technologies, and exciting opportunities.
          Feel free to connect with me.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col gap-5 items-center mb-10">

          <a
            href="mailto:g.shivengupta.g@gmail.com"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaEnvelope className="text-xl" />
            g.shivengupta.g@gmail.com
          </a>

          <a
            href="https://github.com/Shiven-gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaGithub className="text-xl" />
            github.com/Shiven-gupta
          </a>

          <a
            href="https://www.linkedin.com/in/gshiven-guptag/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-xl" />
            linkedin.com/in/gshiven-guptag
          </a>

          <a
            href="https://www.hackerrank.com/profile/g_shivengupta_g"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-400 transition"
          >
            <FaHackerrank className="text-xl" />
            hackerrank.com/profile/g_shivengupta_g
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer Bottom */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Shiven Gupta. All Rights Reserved.
        </p>

        <p className="text-gray-600 text-sm mt-2">
          Designed & Developed by <span className="text-blue-400 font-medium">Shiven Gupta</span>
        </p>

      </div>
    </footer>
  );
}
