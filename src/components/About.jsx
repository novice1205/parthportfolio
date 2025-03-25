import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 text-center bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold text-[#FFD700] mb-6">About Me</h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hi, I'm <span className="text-[#C9A000] font-semibold">Parth Raheja</span>, a MERN Stack Developer and AI/ML enthusiastw  
          passionate about building scalable web applications and exploring the world of AI & Machine Learning.
        </motion.p>

        <motion.p
          className="text-md text-gray-400 mt-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          🚀 Tech Stack: React, Node.js, Express, MongoDB, Flask, Tailwind CSS. <br/> 
          🎯 Interests: Web Development, AI/ML, Data Science.  
        </motion.p>

        {/* Animated Divider */}
        <motion.div
          className="w-32 h-1 bg-[#C9A000] mx-auto mt-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
};

export default About;