export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Passionate about building secure, scalable, and reliable enterprise
            infrastructure.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              I'm a <strong>Network & Server Infrastructure Engineer</strong> at
              <strong> HORIBA India</strong> with hands-on experience in
              enterprise networking, virtualization, firewall administration,
              and server infrastructure.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              My expertise includes <strong>FortiGate Firewalls</strong>,
              <strong> Cisco Networking</strong>,
              <strong> VMware ESXi</strong>,
              <strong> Windows Server</strong>,
              <strong> Active Directory</strong>,
              <strong> HPE Storage</strong>, and enterprise backup solutions. I
              enjoy designing secure infrastructure, solving complex networking
              challenges, and improving system reliability.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Alongside my professional career, I'm pursuing an
              <strong> Master of Computer Applications (MCA)</strong> in
              <strong> Artificial Intelligence & Machine Learning</strong> while
              continuously expanding my expertise in cloud technologies,
              cybersecurity, and enterprise automation.
            </p>
          </div>

          {/* Right - Quick Facts */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-blue-500">1+</h3>
              <p className="mt-2">Years Experience</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-blue-500">HORIBA</h3>
              <p className="mt-2">Current Employer</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-blue-500">MCA</h3>
              <p className="mt-2">AI & Machine Learning</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <h3 className="text-3xl font-bold text-blue-500">Delhi</h3>
              <p className="mt-2">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
