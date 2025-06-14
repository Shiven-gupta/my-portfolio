// src/App.js
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certifications from "./components/Certification";
import CustomCursor from "./components/CustomCursor"; 
import ChatBot from "./components/ChatBot"; 

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    window.addEventListener("scroll", AOS.refresh);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-sans scroll-smooth relative">
      <CustomCursor /> {}

      <Header />

      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-12">
          <About />
        </section>

        <section id="skills" className="py-12">
          <Skills />
        </section>

        <section id="projects" className="py-12">
          <Projects />
        </section>

        <section id="certification" className="py-12">
          <Certifications />
        </section>

        <section id="contact" className="py-12">
          <Footer />
        </section>
      </main>
      <ChatBot/>
    </div>
  );
}
