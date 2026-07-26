export default function Experience() {
  const experiences = [
    {
      company: "HORIBA India Pvt. Ltd.",
      role: "Network & Server Infrastructure Engineer",
      duration: "October 2025 – Present",
      responsibilities: [
        "Designed and maintained enterprise network infrastructure.",
        "Configured and managed FortiGate Firewalls and VPN connectivity.",
        "Implemented SD-WAN for branch office connectivity.",
        "Managed VMware ESXi virtualization environment.",
        "Administered Windows Server and Active Directory.",
        "Managed Microsoft 365 administration and user management.",
        "Worked with HPE Storage and enterprise backup solutions.",
        "Provided infrastructure support for SAP and enterprise applications.",
      ],
    },
    {
      company: "HORIBA India Pvt. Ltd.",
      role: "IT Infrastructure Trainee",
      duration: "July 2025 – September 2025",
      responsibilities: [
        "Supported enterprise network administration.",
        "Assisted in server management and troubleshooting.",
        "Performed user provisioning and access management.",
        "Prepared infrastructure documentation and standard operating procedures.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white dark:bg-gray-900 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Professional Experience
          </h2>

          <p className="text-gray-500 mt-4">
            My journey in enterprise infrastructure and networking.
          </p>
        </div>

        <div className="space-y-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.role}
                  </h3>

                  <h4 className="text-blue-500 font-semibold mt-1">
                    {exp.company}
                  </h4>
                </div>

                <span className="text-gray-500 mt-4 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-6 space-y-3 list-disc list-inside text-gray-600 dark:text-gray-300">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
