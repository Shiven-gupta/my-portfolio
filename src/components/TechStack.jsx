import cisco from "../assets/tech/cisco.svg";
import fortinet from "../assets/tech/fortinet.svg";
import vmware from "../assets/tech/vmware.svg";
import python from "../assets/tech/python.svg";
import react from "../assets/tech/react.svg";
import javascript from "../assets/tech/javascript.svg";
import git from "../assets/tech/git.svg";
import linux from "../assets/tech/linux.svg";

const techStack = [
  { name: "Cisco", icon: cisco },
  { name: "Fortinet", icon: fortinet },
  { name: "VMware", icon: vmware },
  { name: "Python", icon: python },
  { name: "React", icon: react },
  { name: "JavaScript", icon: javascript },
  { name: "Git", icon: git },
  { name: "Linux", icon: linux },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="bg-gray-50 dark:bg-gray-950 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Technologies I use to build, secure, and manage enterprise
            infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">

          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain mb-5"
              />

              <h3 className="font-semibold text-lg text-center">
                {tech.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
