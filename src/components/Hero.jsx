import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
import { Link } from "react-scroll"; // Import react-scroll Link
import backgroundImage from "../assets/CoverImage3.jpg"; // Ensure the correct path

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Parallax Effect

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center overflow-hidden px-4 sm:px-6"
    >
      {/* Background Image with Scroll Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y: backgroundY,
          backgroundSize: "cover",
        }}
      />

      {/* Dark Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl px-6">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-poppins"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ color: "#FFD700" }}
        >
          Hi, I'm <span className="text-yellow-100">Parth Raheja</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-light mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ color: "#FFD700" }}
        >
          <Typewriter
            words={["Full Stack Developer", "AI/ML Enthusiast", "Problem Solver"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* Call to Action Button */}
        <motion.div
          className="mt-8 sm:mt-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={800} // Adjust duration for smooth scroll effect
            offset={-50} // Adjust offset if needed
            className="px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-yellow-500 hover:bg-yellow-600 text-yellow-50 font-semibold rounded-lg shadow-md transition-all duration-300 cursor-pointer"
          >
            View My Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 flex flex-col items-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span className="text-xs sm:text-sm text-gray-300">Scroll Down</span>
        <div className="w-4 h-7 sm:w-5 sm:h-8 border-2 border-yellow-400 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;