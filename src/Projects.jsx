import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Image assets removed (use /vite.svg placeholder or add your own images under public/) 

import Litigatax from "./assets/Litigatax.jpg";
import images from "./assets/images.jpeg";
 import fds from "./assets/fds.avif";
import epiq from "./assets/epiq.jpg";

const projects = [
  {
    name: "Litigatax E-Court Management",
    tech: "MERN Stack",
    desc: "A fully responsive E-Court management platform for legal professionals to manage cases and documents efficiently.",
    details: "This project allows case filing, scheduling hearings, document management, and secure authentication for users and admins.",
    image: Litigatax,
    code: "https://github.com/AMMAR1305/lexify-ecourt",
  },
  {
    name: "Image Recognition Chatbot",
    tech: "React, Node.js, TensorFlow",
    desc: "A chatbot that recognizes images and responds intelligently using machine learning.",
    details: "Users can upload images, and the chatbot identifies objects and provides contextual responses using pre-trained ML models.",
    image: images,
    code: "https://github.com/AMMAR1305/ImageRecogonition",
  },
  {
    name: "Fraud Detection System",
    tech: "Spring Boot, MySQL",
    desc: "A backend system detecting anomalies in transactions using predictive algorithms.",
    details: "Uses historical transaction data to flag suspicious activities and provides an admin dashboard for monitoring.",
    image: fds,
    code: "https://github.com/AMMAR1305/Fraud-Detection",
  },
  {
    name: "Cultural Explorer",
    tech: "Node.js, MongoDB, Bootstrap",
    desc: "A web portal for exploring cultural events, heritage sites, and local experiences.",
    details: "Users can browse events, join community activities, and submit reviews. Integrated with maps and event notifications.",
    image: epiq,
    code: "https://github.com/AMMAR1305/EpiQ",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center px-6"
    >
      <motion.h2
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-600 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={project.image }
              alt={project.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-2">{project.tech}</p>
                <p className="text-gray-300 mb-4">{project.desc}</p>
              </div>
              <div className="flex justify-center gap-4 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition transform hover:scale-105"
                >
                  View Details
                </button>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-medium transition transform hover:scale-105"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl max-w-lg w-full p-8 text-left relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-indigo-400 mb-4">{selectedProject.name}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.details}</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition transform hover:scale-105"
                >
                  Close
                </button>
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition transform hover:scale-105"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
