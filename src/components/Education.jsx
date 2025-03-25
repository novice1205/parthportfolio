import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "PES University, Bangalore",
      year: "2023 - 2025",
      description: [
        "Received Distinction Award twice during the course.",
        "Studied advanced concepts in Web Development, AI, and Data Science.",
        "Participated in various coding hackathons and technical events.",
      ],
    },
    {
      degree: "Bachelor's in Computer Applications and Mathematics",
      institution: "ARSD College, University of Delhi",
      year: "2020 - 2023",
      description: [
        "Graduated with distinction, excelling in software development.",
        "Developed a library management website for the college.",
        "Actively involved in tech fests and open-source contributions.",
      ],
    },
  ];

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Heading with Animation */}
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 font-poppins text-[#FFD700]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8 px-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 bg-black/40 backdrop-blur-lg rounded-lg shadow-lg border-l-4 border-[#FFD700] transition-all hover:scale-[1.02] hover:shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold font-poppins text-white">
              {edu.degree}
            </h3>
            <p className="text-lg font-medium text-gray-400">
              {edu.institution} <span className="text-[#FFD700]">({edu.year})</span>
            </p>
            <ul className="mt-2 text-gray-300 text-md font-liter list-disc pl-5 space-y-1">
              {edu.description.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Animated Divider */}
      <motion.div
        className="w-32 h-1 bg-[#FFD700] mx-auto mt-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Education;