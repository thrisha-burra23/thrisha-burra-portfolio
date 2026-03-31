const experiences = [
  {
    role: "MERN Stack Trainee",
    company: "Student Tribe",
    duration: "June 2025 – Feb 2026",
    points: [
      "Designed and developed RESTful APIs using Node.js and Express for user authentication and complaint management systems",
      "Implemented secure JWT authentication with access and refresh token strategy",
      "Built role-based access control (RBAC) for multiple user roles (Resident, Admin, Staff)",
      "Structured backend using MVC architecture with middleware for validation and authentication",
      "Integrated MongoDB for data modeling and efficient query handling",
      "Used Zod for request validation and error handling",
      // "Worked with Redis for caching and improving API performance",
      // "Implemented real-time features using Socket.IO for live updates",
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
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "JWT",
                    // "Redis",
                    // "Socket.IO",
                  ].map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
