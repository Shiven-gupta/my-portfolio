import buddyImg from "../assets/buddy-chat.png";
import iotImg from "../assets/iot.png";

const professionalProjects = [
  {
    title: "Enterprise SD-WAN Deployment",
    description:
      "Designed and implemented SD-WAN connectivity across multiple branch offices using FortiGate Firewalls with SLA-based routing, automatic failover, and IPsec VPN tunnels.",
    tech: ["FortiGate", "SD-WAN", "BGP", "IPsec VPN"],
  },
  {
    title: "Enterprise Firewall Administration",
    description:
      "Configured and managed FortiGate Firewalls including firewall policies, NAT, VPN connectivity, routing, and enterprise security configurations.",
    tech: ["Fortinet", "Firewall", "VPN", "NAT", "Security"],
  },
  {
    title: "Microsoft 365 Administration",
    description:
      "Managed Microsoft 365 administration including Exchange Online, Entra ID, user provisioning, licensing, shared mailboxes, and distribution groups.",
    tech: [
      "Microsoft 365",
      "Exchange Online",
      "Entra ID",
      "Azure AD",
    ],
  },
  {
    title: "VMware Infrastructure Management",
    description:
      "Managed VMware ESXi virtualization environment including virtual machines, storage allocation, snapshots, networking, and enterprise backup integration.",
    tech: [
      "VMware ESXi",
      "Windows Server",
      "Virtualization",
      "Storage",
    ],
  },
  {
    title: "Enterprise Network Infrastructure",
    description:
      "Configured Cisco switching infrastructure including VLANs, trunk links, Layer 2 networking, and secure enterprise network segmentation.",
    tech: ["Cisco", "VLAN", "Switching", "Networking"],
  },
];

const personalProjects = [
  {
    title: "Buddy Chat AI",
    description:
      "A fun AI-powered virtual assistant built using React, FastAPI, and the Groq API with natural conversations and personalized responses.",
    tech: ["React", "FastAPI", "Groq API"],
    image: buddyImg,
    github: "https://github.com/Shiven-gupta/buddy-chat",
    demo: "https://buddy-chatbot101.netlify.app/",
  },
  {
    title: "WLED Automation System",
    description:
      "An ESP32-based IoT lighting automation project featuring a custom interface, automation modes, and smart lighting control.",
    tech: ["ESP32", "Arduino", "WLED", "IoT"],
    image: iotImg,
    github: "https://github.com/Shiven-gupta/Wled-project",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="text-4xl font-bold text-center mb-14"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>

        {/* Professional Projects */}

        <div className="mb-16">

          <h3 className="text-3xl font-bold text-blue-500 mb-8">
            Professional Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {professionalProjects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
              >
                <span className="inline-block mb-4 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium">
                  Professional Experience
                </span>

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Personal Projects */}

        <div>

          <h3 className="text-3xl font-bold text-purple-500 mb-8">
            Personal Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {personalProjects.map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                className="group bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <span className="inline-block mb-4 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium">
                    Personal Project
                  </span>

                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                      GitHub
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                      >
                        Live Demo
                      </a>
                    )}

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
