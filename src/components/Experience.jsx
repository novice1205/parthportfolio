import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Research and Development Intern",
      company: "cHEAL, PES University",
      date: "Mar 2024 - Present",
      description:
        "Working in Healthcare Engineering, developing projects in the healthcare domain to enhance medical technology and patient care solutions.",
    },
    {
      title: "Web Developer",
      company: "MD Farms",
      date: "Feb - Mar 2024",
      description:
        "Designed a modern WordPress website, integrating custom HTML and JavaScript for enhanced functionality and responsiveness.",
    },
    {
      title: "Web Developer",
      company: "Kudrat NGO",
      date: "July - Aug 2023",
      description:
        "Developed a WordPress website with custom HTML, CSS, and JavaScript. Managed hosting on Digital Ocean, ensuring security and performance.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 font-poppins text-[#FFD700]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#FFD700] h-full hidden md:block"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative md:w-1/2 w-full p-6 bg-black/50 backdrop-blur-md rounded-lg shadow-lg border border-[#FFD700] transition-all hover:scale-105 hover:shadow-2xl ${
              index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
            } mb-16`} // Increased gap between experiences
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.2 }}
          >
            {/* Connector Dot */}
            <div
              className={`absolute w-6 h-6 bg-[#FFD700] rounded-full top-1/2 transform -translate-y-1/2 ${
                index % 2 === 0 ? "-left-8 md:-left-12" : "-right-8 md:-right-12"
              }`}
            ></div>

            <h3 className="text-2xl font-semibold text-white">
              {exp.title} - <span className="text-[#FFD700] font-medium">{exp.company}</span>
            </h3>
            <p className="text-gray-400 text-sm mb-3">{exp.date}</p>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;