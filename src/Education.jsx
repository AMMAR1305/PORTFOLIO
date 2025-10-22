import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech Information Technology",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    year: "2023 - 2027",
    cgpa: "9.0",
    icon: <FaGraduationCap className="text-indigo-400 text-3xl" />,
  },
  {
    degree: "HSC - Higher Secondary",
    institution: "The Muslim Higher Secondary School, Tirunelveli",
    year: "2023",
    percentage: "82.5%",
    icon: <FaSchool className="text-purple-400 text-3xl" />,
  },
  {
    degree: "SSLC",
    institution: "The Muslim Higher Secondary School, Tirunelveli",
    year: "2021",
    percentage: "85%",
    icon: <FaBook className="text-cyan-400 text-3xl" />,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center px-6"
    >
      <motion.h2
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-600 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-6 shadow-lg flex-1 hover:-translate-y-2 hover:shadow-indigo-500/40 transition transform duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <div className="mb-4">{edu.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-400 mb-1">{edu.year}</p>
              {edu.cgpa && <p className="text-gray-300">CGPA: {edu.cgpa}</p>}
              {edu.percentage && <p className="text-gray-300">Percentage: {edu.percentage}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
