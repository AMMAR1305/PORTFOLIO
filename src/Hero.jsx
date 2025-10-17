import { motion } from "framer-motion";
import resume from "./assets/ammar.pdf";
import photo from "./assets/photo.jpg"
export default function Hero() {

 const resumeLink = resume;
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row justify-center items-center min-h-screen px-6 md:px-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center md:text-left overflow-hidden"
    >
      {/* Developer Image */}
      <motion.img
        src= {photo}
        alt="Ammar"
        className="w-56 h-56 md:w-80 md:h-80 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.4)] border-2 border-indigo-500 object-cover mb-8 md:mb-0 md:mr-12"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      />

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-600 drop-shadow-lg">
          Hi, I'm Ammar 👋
        </h1>

        <p className="mt-5 text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
          I'm a <span className="text-indigo-400 font-semibold">Full Stack Developer </span> 
          dedicated to crafting efficient, user-friendly, and visually striking web applications.
        </p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white rounded-xl font-semibold transition-transform hover:scale-105 shadow-lg shadow-indigo-500/20"
          >
            🚀 View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white rounded-xl font-semibold transition-transform hover:scale-105"
          >
            📩 Contact Me
          </a>
          <a
            href={resumeLink  }
            download = "Ammar.pdf"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-xl font-semibold transition-transform hover:scale-105 border border-gray-700"
          >
            📄 Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-6 flex justify-center md:justify-start space-x-8 text-3xl text-indigo-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/ammar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition-transform hover:scale-110"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/ammar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition-transform hover:scale-110"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:ammar@example.com"
            className="hover:text-indigo-300 transition-transform hover:scale-110"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
