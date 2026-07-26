import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16"
    >
      {/* Left - Image */}
      <div className="relative w-64 h-64 flex items-center justify-center md:w-80 md:h-80">
  {/* Background Circle */}
  <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 dark:bg-gray-700 rounded-full shadow-xl" />

  {/* Popping Image */}
  <img
    src={profileImg}
    alt="Shiven Gupta"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 scale-[1.3] w-80 h-80 object-cover z-10"
  />
</div>



      {/* Right - Intro Text */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Shiven Gupta</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I'm a Network & Server Infrastructure Engineer at Horiba India specializing in enterprise networking, virtualization, firewall administration, and server infrastructure.
          I have hands-on experience with FortiGate Firewalls, SD-WAN, Cisco Switching, VMware ESXi, Windows Server, HPE Storage, and enterprise backup solutions. 
          Alongside my professional career, I'm pursuing an MCA in Artificial Intelligence & Machine Learning.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
