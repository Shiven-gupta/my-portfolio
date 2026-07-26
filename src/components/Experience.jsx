export default function Experience() {
  const experiences = [
    {
      role: "Network & Server Infrastructure Engineer",
      company: "HORIBA India Pvt. Ltd.",
      duration: "Oct 2025 – Present",
      responsibilities: [
        "Designed and maintained enterprise network infrastructure.",
        "Configured FortiGate Firewalls, VPNs, and security policies.",
        "Implemented SD-WAN across branch offices.",
        "Administered VMware ESXi virtualization environment.",
        "Managed Windows Server, Active Directory, DNS, and DHCP.",
        "Administered Microsoft 365, Exchange Online, and Entra ID.",
        "Managed HPE Storage and enterprise backup solutions.",
        "Collaborated with global IT teams for SAP infrastructure.",
      ],
    },
    {
      role: "IT Infrastructure Engineer (Trainee)",
      company: "HORIBA India Pvt. Ltd.",
      duration: "Jul 2025 – Sep 2025",
      responsibilities: [
        "Supported enterprise network administration.",
        "Assisted with server deployment and troubleshooting.",
        "Performed user provisioning and access management.",
        "Prepared SOPs and technical documentation.",
        "Provided hardware and software support.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white dark:bg-gray-900 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Professional Experience
          </h2>

          <p className="mt-4 text-gray-500">
            My journey in enterprise networking and infrastructure.
          </p>
        </div>

        <div className="relative border-l-4 border-blue-500 ml-6">

          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 ml-8 relative">

              <div className="absolute -left-12 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>

              <span className="text-sm text-gray-500">
                {exp.duration}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {exp.role}
              </h3>

              <h4 className="text-blue-500 font-semibold">
                {exp.company}
              </h4>

              <ul className="mt-5 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
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
