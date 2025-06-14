import { useState } from "react";
import Modal from "react-modal";
import pythonImg from "../assets/certification/python.jpg";
import sqlImg from "../assets/certification/sql.jpg";
import trainImg from "../assets/certification/train.jpg";
import 'aos/dist/aos.css'; // AOS styles

// Set modal root
Modal.setAppElement("#root");

export default function Certifications() {
  const certifications = [
    {
      title: "Python (Basic) - HackerRank",
      image: pythonImg,
    },
    {
      title: "SQL (Basic) - HackerRank",
      image: sqlImg,
    },
    {
      title: "Data science & Machine learning in Python - ShapeMySkills Pvt. Ltd.",
      image: trainImg,
    },
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
    <section id="certifications" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => openModal(cert)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 cursor-pointer transition transform hover:scale-105 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-lg w-full h-48 object-cover mb-4 hover:opacity-90"
              />
              <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Certification Modal"
          className="max-w-3xl mx-auto mt-24 bg-white p-6 rounded-xl shadow-lg outline-none dark:bg-gray-900 dark:text-white"
          overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        >
          {selectedCert && (
            <div className="text-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-[80vh] object-contain rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{selectedCert.title}</h2>
              <button
                onClick={closeModal}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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
