import { motion } from "framer-motion";
import SS from "../assets/SS.jpg";
import SS4 from "../assets/SS4.jpg";
import SS3 from "../assets/SS3.jpg";
import Cover2 from "../assets/Cover 2.jpg";

const projects = [
  {
    title: "WBPA-QA",
    description: "MERN & React Native app predicting water quality and providing preventive solutions.",
    link: "https://wbpa-qa-by-parth.vercel.app/",
    image: SS4,
  },
  {
    title: "Personalized News Digest",
    description: "AI-powered news aggregator using Nhost, React, and n8n workflow automation.",
    link: "https://newssummarybyparth.netlify.app/",
    image: Cover2,
  },
  {
    title: "PrepPal AI",
    description: "AI-driven flashcard generator that extracts key content from PDFs.",
    link: "https://preppalbyparthnvidit.vercel.app/",
    image: SS,
  },
  {
    title: "Video Summarizer",
    description: "Developed using Phidata and Google Gemini for AI-powered video summarization.",
    link: "https://videosummarizerbyparth.streamlit.app/",
    image: SS3,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 font-poppins text-[#FFD700]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Projects
      </motion.h2>

      {/* Project Cards - 2 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-700 hover:border-[#FFD700] transition-all duration-500 w-full"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.2 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white text-lg px-6 text-center">
              <h3 className="font-bold text-xl mb-2 text-[#FFD700]">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-2 bg-[#FFD700] text-black font-semibold rounded-md text-sm hover:bg-yellow-400 transition transform hover:scale-105"
                >
                  Visit
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
