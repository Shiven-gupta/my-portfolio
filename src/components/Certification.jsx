import { useState } from "react";
import Modal from "react-modal";
import pythonImg from "../assets/certification/python.jpg";
import sqlImg from "../assets/certification/sql.jpg";
import trainImg from "../assets/certification/train.jpg";
import "aos/dist/aos.css";

Modal.setAppElement("#root");

export default function Certifications() {
  const certifications = [
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      category: "Programming",
      status: "Completed",
      image: pythonImg,
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      category: "Database",
      status: "Completed",
      image: sqlImg,
    },
    {
      title: "Data Science & Machine Learning",
      issuer: "ShapeMySkills Pvt. Ltd.",
      category: "Artificial Intelligence",
      status: "Completed",
      image: trainImg,
    },
  ];

  const learning = [
    "Microsoft 365 Administration",
    "Microsoft Azure",
    "SAP Basis",
    "Salesforce"
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCert(null);
  };

  return (
    <section
      id="certifications"
      className="bg-gray-50 dark:bg-gray-950 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Certifications
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Certifications and continuous learning that strengthen my expertise
            in enterprise infrastructure, cloud technologies, and modern IT
            solutions.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => openModal(cert)}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="cursor-pointer bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>

                <p className="text-blue-500 font-medium">
                  {cert.issuer}
                </p>

                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {cert.category}
                </p>

                <span className="inline-block mt-4 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm">
                  ✔ {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-blue-500 mb-4">
            Currently Learning & Upskilling
          </h3>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Continuously expanding my expertise in enterprise infrastructure,
            cloud platforms, networking, and business applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {learning.map((item, index) => (
              <span
                key={index}
                className="px-5 py-3 rounded-full border border-blue-500 bg-white dark:bg-gray-900 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Certificate"
          className="max-w-4xl mx-auto mt-10 bg-white dark:bg-gray-900 rounded-2xl p-6 outline-none shadow-2xl"
          overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
        >
          {selectedCert && (
            <div className="text-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />

              <h2 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
                {selectedCert.title}
              </h2>

              <p className="text-blue-500 mt-2">
                {selectedCert.issuer}
              </p>

              <button
                onClick={closeModal}
                className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition"
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
