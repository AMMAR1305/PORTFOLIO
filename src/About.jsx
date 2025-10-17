import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center px-6"
    >
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-600 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* About Paragraph */}
      <motion.p
        className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm a passionate <span className="text-indigo-400 font-semibold">Full Stack Developer</span> 
        dedicated to building <span className="text-purple-400 font-semibold">interactive, scalable, and user-friendly </span> 
         web applications using modern technologies like React, Node.js, Express, MongoDB, and Java.
      </motion.p>

      {/* Highlight Cards */}
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
        <motion.div
          className="bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-lg max-w-sm hover:-translate-y-2 hover:shadow-indigo-500/50 transition transform duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-indigo-400 mb-3">🎯 What I Do</h3>
          <p className="text-gray-300">
            Build responsive web apps, integrate APIs, and optimize performance for seamless user experiences.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-lg max-w-sm hover:-translate-y-2 hover:shadow-purple-500/50 transition transform duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-purple-400 mb-3">🚀 My Approach</h3>
          <p className="text-gray-300">
            Focus on clean code, scalability, and delivering high-quality, user-centered solutions.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-lg max-w-sm hover:-translate-y-2 hover:shadow-cyan-500/50 transition transform duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-3">🌱 Continuous Learning</h3>
          <p className="text-gray-300">
            Always exploring new tools and technologies to enhance my skills and deliver better solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
