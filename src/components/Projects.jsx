import buddyImg from '../assets/buddy-chat.png';
import iotImg from '../assets/iot.png';
const projects = [
  {
    title: "Buddy Chat AI",
    description: "A fun, slang-speaking virtual buddy built with React and FastAPI using the Groq API. It replies with humor and personalized info.",
    tech: ["React", "FastAPI", "Groq API"],
    image: buddyImg,
    github: "https://github.com/Shiven-gupta/buddy-chat",
    demo: "https://buddy-chatbot101.netlify.app/"
  },
  {
    title: "WLED Automation System",
    description: "A smart LED lighting system using ESP32 and WLED. Features custom UI for light controls, automation modes, and IoT integration.",
    tech: ["ESP32", "Arduino", "WLED", "IoT"],
    image: iotImg,
    github: "https://github.com/Shiven-gupta/Wled-project",
    demo: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100" data-aos="fade-up">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="group bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col transition-all transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 dark:bg-gray-700 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition duration-300"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
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
    </section>
  );
}
