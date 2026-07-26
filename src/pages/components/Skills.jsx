export default function Skills() {
  const skills = [
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Power BI', src: 'https://img.icons8.com/color/48/power-bi.png' },
    { name: 'Machine Learning', src: 'https://img.icons8.com/fluency/48/brain.png' },
    { name: 'Artificial Intelligence', src: 'https://img.icons8.com/color/96/artificial-intelligence.png' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  const softSkills = [
    { name: 'Communication', emoji: '💬' },
    { name: 'Teamwork', emoji: '🤝' },
    { name: 'Problem Solving', emoji: '🧠' },
    { name: 'Time Management', emoji: '⏱️' }
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-center py-16 px-4 transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Skills</h2>
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-10">Technical Skills</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center space-y-2 transition-transform transform hover:scale-110 duration-300">
            <img src={skill.src} alt={skill.name} className="w-16 h-16 object-contain" />
            <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{skill.name}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-16 mb-6">Soft Skills</h3>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {softSkills.map(skill => (
          <div
            key={skill.name}
            className="flex items-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full shadow px-4 py-2 whitespace-nowrap transition-transform transform hover:scale-105 duration-300"
          >
            <span className="mr-2">{skill.emoji}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
