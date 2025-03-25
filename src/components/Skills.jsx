import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaCode, FaServer, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiTensorflow, SiFlask } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-300" /> },
  { name: "Java", icon: <FaJava className="text-orange-600" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
  { name: "Machine Learning", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "API Development", icon: <FaServer className="text-indigo-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "C/C++", icon: <FaCode className="text-red-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-14 font-poppins text-[#FFD700]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900 px-6 py-4 rounded-xl shadow-md flex flex-col items-center text-lg font-semibold
            text-gray-200 border border-gray-700 hover:border-[#FFD700] transition-all duration-500 hover:scale-110 hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;