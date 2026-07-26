import {
  SiCisco,
  SiFortinet,
  SiVmware,
  SiWindows,
  SiPython,
  SiReact,
  SiJavascript,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";

const techStack = [
  { name: "Cisco", icon: <SiCisco /> },
  { name: "Fortinet", icon: <SiFortinet /> },
  { name: "VMware", icon: <SiVmware /> },
  { name: "Windows Server", icon: <SiWindows /> },
  { name: "Python", icon: <SiPython /> },
  { name: "React", icon: <SiReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Linux", icon: <SiLinux /> },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="bg-gray-50 dark:bg-gray-950 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Tech Stack
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Technologies I use to design, secure and manage enterprise infrastructure.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition duration-300"
            >
              <div className="text-5xl text-blue-500 mb-4">
                {tech.icon}
              </div>

              <p className="font-medium text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
