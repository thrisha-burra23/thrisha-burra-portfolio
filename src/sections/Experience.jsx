const experiences = [
  {
    role: "MERN Stack Trainee",
    company: "Your Company Name",
    duration: "2024 – Present",
    points: [
      "Built REST APIs using Node.js and Express",
      "Implemented JWT-based authentication system",
      "Worked with MongoDB for data modeling",
      "Integrated Socket.IO for real-time features",
      "Used Redis for caching and performance optimization",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 scroll-mt-24">
      <div className="w-full max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-200 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 relative">
              {/* Dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-indigo-600 rounded-full" />

              {/* Content */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold">{exp.role}</h3>

                <p className="text-gray-500 text-sm">
                  {exp.company} • {exp.duration}
                </p>

                {/* Points */}
                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
