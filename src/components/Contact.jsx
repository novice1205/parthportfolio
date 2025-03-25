import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white text-center">
      <motion.h2
        className="text-5xl font-bold text-[#FFD700] mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Let's collaborate! Reach out to me via email or connect on social media.
      </motion.p>

      {/* Email and Resume Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Email Button */}
        <motion.a
          href="mailto:parthraheja1205@gmail.com"
          className="inline-flex items-center space-x-3 px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full shadow-md
          hover:bg-[#FFC300] transition-all duration-300 text-lg"
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope />
          <span>Email Me</span>
        </motion.a>

        {/* Download Resume Button */}
        <motion.a
          href="/Parth_Raheja_Resume.pdf"
          download="Parth Raheja Resume.pdf"
          className="inline-flex items-center space-x-3 px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full shadow-md
          hover:bg-[#FFC300] transition-all duration-300 text-lg"
          whileHover={{ scale: 1.1 }}
        >
          <FaDownload />
          <span>Download Resume</span>
        </motion.a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <motion.a
          href="https://www.linkedin.com/in/parth-raheja-ba765b230/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-400 hover:text-blue-400 transition-all duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/novice1205"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-400 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://x.com/ParthRaheja1205"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-400 hover:text-blue-500 transition-all duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <FaTwitter />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;