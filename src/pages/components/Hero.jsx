import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16"
    >
      {/* Left - Image */}
      <div className="relative flex items-center justify-center">
        {/* Background Glow */}
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 blur-2xl absolute"></div>

        {/* Profile Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center overflow-hidden relative">
          <img
            src={profileImg}
            alt="Shiven Gupta"
            className="w-72 md:w-96 object-cover scale-110"
          />
        </div>
      </div>

      {/* Right - Hero Content */}
      <div className="max-w-2xl text-center md:text-left">
        <p className="text-blue-500 font-semibold uppercase tracking-widest mb-2">
          Welcome to my Portfolio
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-blue-500">Shiven Gupta</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
          Network & Server Infrastructure Engineer
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Designing secure enterprise infrastructure using
          <span className="font-semibold text-blue-500">
            {" "}
            Fortinet, Cisco, VMware, Windows Server, SD-WAN,
          </span>{" "}
          and enterprise networking technologies.
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Currently working at <strong>HORIBA India Pvt. Ltd.</strong> while
          pursuing an{" "}
          <strong>
            MCA in Artificial Intelligence & Machine Learning
          </strong>
          .
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg"
          >
            View Projects
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mt-10 justify-center md:justify-start">
          {[
            "Fortinet",
            "Cisco",
            "VMware",
            "Windows Server",
            "SD-WAN",
            "Python",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
