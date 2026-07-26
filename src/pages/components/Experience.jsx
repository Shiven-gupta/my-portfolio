export default function Experience() {
  const experiences = [
    {
      role: "Network & Server Infrastructure Engineer",
      company: "HORIBA India Pvt. Ltd.",
      duration: "Oct 2025 – Present",
      responsibilities: [
        "Designed, implemented, and maintained enterprise network infrastructure across multiple HORIBA India locations.",
        "Configured and managed FortiGate Firewalls, IPsec VPNs, SD-WAN, security policies, and routing.",
        "Administered Cisco switches, VLANs, trunking, and enterprise LAN/WAN environments.",
        "Managed VMware ESXi virtualization platform and Windows Server infrastructure.",
        "Administered Microsoft 365, Exchange Online, Entra ID, Active Directory, DNS, and DHCP.",
        "Managed HPE Storage systems and enterprise backup solutions using Acronis.",
        "Provided infrastructure support for SAP, enterprise applications, and branch office connectivity.",
        "Prepared technical documentation, SOPs, and supported IT infrastructure projects across India.",
      ],
    },
    {
      role: "IT Infrastructure Engineer (Trainee)",
      company: "HORIBA India Pvt. Ltd.",
      duration: "Jul 2025 – Sep 2025",
      responsibilities: [
        "Supported enterprise network administration and daily IT infrastructure operations.",
        "Assisted with Windows Server deployment, troubleshooting, and maintenance.",
        "Performed Microsoft 365 user provisioning, access management, and mailbox administration.",
        "Configured network devices, user systems, printers, and enterprise applications.",
        "Prepared technical documentation, knowledge transfer (KT), and standard operating procedures.",
        "Provided Level 1 & Level 2 support for hardware, software, and network-related incidents.",
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Professional Experience
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            My professional journey in enterprise networking, server infrastructure,
            virtualization, Microsoft 365, and IT operations.
          </p>
        </div>

        <div className="relative border-l-4 border-blue-500 ml-6">

          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 ml-8 relative">

              <div className="absolute -left-12 top-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.duration}
              </span>

              <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">
                {exp.role}
              </h3>

              <h4 className="text-blue-500 font-semibold text-lg">
                {exp.company}
              </h4>

              <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
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
