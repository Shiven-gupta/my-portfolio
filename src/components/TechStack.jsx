import cisco from "../assets/tech/cisco.svg";
import fortinet from "../assets/tech/fortinet.svg";
import vmware from "../assets/tech/vmware.svg";
import microsoft365 from "../assets/tech/microsoft365.svg";
import python from "../assets/tech/python.svg";
import react from "../assets/tech/react.svg";
import javascript from "../assets/tech/javascript.svg";
import git from "../assets/tech/git.svg";
import linux from "../assets/tech/linux.svg";

const categories = [
  {
    title: "Networking",
    tech: [
      { name: "Cisco", icon: cisco },
      { name: "Fortinet", icon: fortinet },
    ],
  },

  {
    title: "Microsoft",
    tech: [
      { name: "Microsoft 365", icon: microsoft365 },
    ],
  },

  {
    title: "Virtualization",
    tech: [
      { name: "VMware ESXi", icon: vmware },
    ],
  },

  {
    title: "Development",
    tech: [
      { name: "Python", icon: python },
      { name: "React", icon: react },
      { name: "JavaScript", icon: javascript },
      { name: "Git", icon: git },
    ],
  },

  {
    title: "Operating Systems",
    tech: [
      { name: "Linux", icon: linux },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="bg-gray-50 dark:bg-gray-950 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Tech Stack
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Technologies I use to design, secure, and manage enterprise infrastructure.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category.title} className="mb-14">

            <h3 className="text-2xl font-semibold text-blue-500 mb-6">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

              {category.tech.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 object-contain mb-4"
                  />

                  <h4 className="font-semibold text-center text-gray-800 dark:text-gray-200">
                    {tech.name}
                  </h4>
                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
