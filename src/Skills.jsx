import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiIntellijidea,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 80 },
      { name: "React", icon: <FaReact className="text-blue-400" />, level: 75 },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Java", icon: <FaJava className="text-red-500" />, level: 85 },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" />, level: 75 },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 80 },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" />, level: 75 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 75 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
      { name: "VS Code", icon: <FaCode className="text-blue-500" />, level: 90 },
      { name: "Postman", icon: <SiPostman className="text-orange-400" />, level: 80 },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-purple-500" />, level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-600 mb-12"
      >
        Skills & Tools
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transform transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">
              {skill.category}
            </h3>
            <ul className="space-y-4">
              {skill.items.map((item) => (
                <li key={item.name} className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="w-full">
                    <p className="text-left font-medium text-gray-300">
                      {item.name}
                    </p>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden mt-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="h-2 bg-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-gray-300 text-sm font-mono">
                    {item.level}%
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-gray-300 text-sm"
      >
        *Hover over cards to explore — skills dynamically animated with Framer Motion ✨
      </motion.p>
    </section>
  );
}
