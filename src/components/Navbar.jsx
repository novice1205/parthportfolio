import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg text-white shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 md:py-4 w-full">
        
        {/* Logo with fixed width to prevent overflow */}
        <motion.h1
          className="text-lg sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 cursor-pointer truncate"
          style={{ maxWidth: "200px" }} // Ensuring it doesn't overflow
          whileHover={{ scale: 1.1 }}
        >
          <a href="/">Parth Raheja</a>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3 sm:space-x-6 text-sm sm:text-lg font-semibold">
          {["About", "Projects", "Experience", "Education", "Skills", "Contact"].map((section) => (
            <motion.li key={section} whileHover={{ scale: 1.1 }}>
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={800}
                className="cursor-pointer text-white transition-all hover:text-[#FFD700]"
              >
                {section}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-black/90 shadow-lg py-3 px-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="flex flex-col items-center space-y-3">
            {["About", "Projects", "Experience", "Education", "Skills", "Contact"].map((section) => (
              <motion.li key={section} whileHover={{ scale: 1.1 }}>
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={800}
                  className="cursor-pointer text-lg text-white transition-all hover:text-[#FFD700]"
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;