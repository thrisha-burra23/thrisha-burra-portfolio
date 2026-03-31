import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science",
    college: "Kamala Institute of Technology and Science",
    year: "2021 – 2025",
    cgpa: "7.61 CGPA",
  },
  {
    degree: "Intermediate (12th)",
    college: "IPS Prime Junior COllege",
    year: "2019 – 2021",
    cgpa: "97.2%",
  },
  {
    degree: "SSC (10th)",
    college: "Saint Thomas High School",
    year: "2019 ",
    cgpa: "10 GPA",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full" />

          {education.map((edu, index) => (
            <div
              key={index}
              className={`mb-8 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[45%] bg-gray-50 p-4 rounded-xl shadow"
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>

                <p className="text-gray-500 text-sm">{edu.college}</p>

                <p className="text-gray-400 text-sm mt-1">{edu.year}</p>

                {edu.college ===
                  "Kamala Institute of Technology and Science" && (
                  <p className="text-gray-500 text-sm mt-2">
                    <span className="text-gray-600">Relevant coursework:</span> Data Structures, Web Development
                  </p>
                )}

                <p className="text-indigo-600 font-medium mt-2">{edu.cgpa}</p>
                
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
