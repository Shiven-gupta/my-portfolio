export default function Resume() {
  return (
    <section className="max-w-4xl mx-auto bg-white text-black p-10 shadow-lg my-10 rounded-lg">

      <div className="text-center border-b pb-6">
        <h1 className="text-4xl font-bold">Shiven Gupta</h1>
        <h2 className="text-xl text-gray-600 mt-2">
          Network & Server Infrastructure Engineer
        </h2>

        <div className="mt-4 text-sm">
          <p>📧 g.shivengupta.g@gmail.com</p>
          <p>💼 linkedin.com/in/gshiven-guptag</p>
          <p>🐙 github.com/Shiven-gupta</p>
        </div>
      </div>

      {/* Professional Summary */}

      <section className="mt-8">
        <h3 className="text-2xl font-bold border-b pb-2">
          Professional Summary
        </h3>

        <p className="mt-4 leading-7">
          Network & Server Infrastructure Engineer with hands-on experience
          designing, implementing, and supporting enterprise IT infrastructure.
          Skilled in FortiGate Firewalls, SD-WAN, Cisco Switching, VMware ESXi,
          Microsoft 365, Windows Server, Active Directory, HPE Storage, and
          enterprise backup solutions. Passionate about building secure,
          scalable, and reliable infrastructure while continuously expanding
          expertise in cloud and automation technologies.
        </p>
      </section>

      {/* Experience */}

      <section className="mt-8">
        <h3 className="text-2xl font-bold border-b pb-2">
          Professional Experience
        </h3>

        <div className="mt-6">

          <h4 className="text-xl font-semibold">
            Network & Server Infrastructure Engineer
          </h4>

          <p className="text-gray-600">
            HORIBA India Pvt. Ltd. | Oct 2025 – Present
          </p>

          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Managed enterprise network infrastructure across multiple HORIBA India locations.</li>
            <li>Configured FortiGate Firewalls, VPNs, SD-WAN, and security policies.</li>
            <li>Administered Cisco Switching, VLANs, routing, and enterprise networking.</li>
            <li>Managed VMware ESXi virtualization and Windows Server environments.</li>
            <li>Administered Microsoft 365, Exchange Online, Entra ID, Active Directory, DNS, and DHCP.</li>
            <li>Managed HPE Storage and enterprise backup solutions.</li>
          </ul>

        </div>

        <div className="mt-8">

          <h4 className="text-xl font-semibold">
            IT Infrastructure Engineer (Trainee)
          </h4>

          <p className="text-gray-600">
            HORIBA India Pvt. Ltd. | Jul 2025 – Sep 2025
          </p>

          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Supported enterprise IT infrastructure operations.</li>
            <li>Performed Microsoft 365 user provisioning.</li>
            <li>Assisted in server deployment and troubleshooting.</li>
            <li>Prepared SOPs and technical documentation.</li>
            <li>Provided hardware and software support.</li>
          </ul>

        </div>
      </section>

      {/* Technical Skills */}

      <section className="mt-8">
        <h3 className="text-2xl font-bold border-b pb-2">
          Technical Skills
        </h3>

        <div className="grid grid-cols-2 gap-3 mt-5">

          <p>• FortiGate Firewalls</p>
          <p>• Cisco Switching</p>
          <p>• SD-WAN</p>
          <p>• VPN</p>
          <p>• Windows Server</p>
          <p>• Active Directory</p>
          <p>• VMware ESXi</p>
          <p>• Microsoft 365</p>
          <p>• Exchange Online</p>
          <p>• Entra ID</p>
          <p>• HPE Storage</p>
          <p>• Acronis Backup</p>
          <p>• Python</p>
          <p>• React</p>
          <p>• Git</p>
          <p>• Linux</p>

        </div>
      </section>

      {/* Projects */}

      <section className="mt-8">
        <h3 className="text-2xl font-bold border-b pb-2">
          Projects
        </h3>

        <div className="mt-5">

          <h4 className="font-semibold">
            Buddy Chat AI
          </h4>

          <p className="text-gray-700">
            AI-powered chatbot built using React, FastAPI, and Groq API.
          </p>

          <h4 className="font-semibold mt-5">
            WLED Automation System
          </h4>

          <p className="text-gray-700">
            Smart IoT lighting automation using ESP32 and WLED.
          </p>

        </div>
      </section>

      {/* Certifications */}

      <section className="mt-8">
        <h3 className="text-2xl font-bold border-b pb-2">
          Certifications
        </h3>

        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Python (Basic) - HackerRank</li>
          <li>SQL (Basic) - HackerRank</li>
          <li>Data Science & Machine Learning - ShapeMySkills</li>
        </ul>
      </section>

      {/* Education */}

      <section className="mt-8">
        <h3 className="text-2xl font-bold border-b pb-2">
          Education
        </h3>

        <div className="mt-4">
          <p>
            <strong>Master of Computer Applications (MCA)</strong><br />
            Amity University Online
          </p>

          <p className="mt-4">
            <strong>Bachelor of Computer Applications (BCA)</strong><br />
            Guru Gobind Singh Indraprastha University
          </p>
        </div>
      </section>

    </section>
  );
}
