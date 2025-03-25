import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaMedal, FaAward } from "react-icons/fa";

const achievements = [
  { title: "LeetCode 300+ Problems", description: "Solved 300+ problems and earned 9 badges.", icon: <FaCode className="text-yellow-400 text-3xl" /> },
  { title: "2nd Place - PESU Hackathon", description: "Secured 2nd place in PESU MCA Mini Hackathon.", icon: <FaTrophy className="text-blue-400 text-3xl" /> },
  { title: "3rd Place - UI/UX Event", description: "Achieved 3rd place in Christ University Gateways 2023.", icon: <FaMedal className="text-red-400 text-3xl" /> },
  { title: "Distinction Award (Twice)", description: "Received distinction award twice in my Master's degree.", icon: <FaAward className="text-green-400 text-3xl" /> },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 font-poppins text-[#FFD700]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Achievements
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
        {achievements.map((achieve, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 flex items-center space-x-4
            hover:border-yellow-500 hover:scale-105 transition-all duration-500"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {achieve.icon}
            <div>
              <h3 className="text-xl font-semibold">{achieve.title}</h3>
              <p className="text-gray-400 mt-2">{achieve.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;