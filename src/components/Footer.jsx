import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-black to-black text-gray-300 py-8 mt-12">
      <motion.div
        className="container mx-auto flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 cursor-pointer">Parth Raheja</h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <motion.a href="https://www.linkedin.com/in/parth-raheja-ba765b230/" target="_blank" rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-blue-400 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a href="https://github.com/novice1205" target="_blank" rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a href="https://x.com/ParthRaheja1205" target="_blank" rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-blue-500 transition-all duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Parth Raheja. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;