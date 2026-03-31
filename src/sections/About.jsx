import SkillBadge from "../components/SkillBadge";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 scroll-mt-24 "
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          About Me
        </h2>

        {/* About Text */}
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          Full-stack developer specializing in building scalable MERN
          applications with secure authentication, role-based access control,
          and clean backend architecture. Experienced in designing REST APIs,
          implementing JWT-based auth flows, and structuring applications using
          MVC patterns. Passionate about creating responsive user interfaces
          while ensuring performance, scalability, and maintainability in
          real-world applications.
        </p>
        <div className="mt-6 flex gap-6 text-sm text-gray-500 flex-wrap">
          <span>⚡ Clean UI</span>
          <span>⚡ JWT Authentication</span>
          <span>⚡ Role-Based Systems</span>
          <span>⚡ REST API Design</span>
          <span>⚡ Scalable Backend</span>
        </div>

        {/* Skills */}
        <div className="mt-12 grid md:grid-cols-4 gap-10">
          {/* Frontend */}
          <div >
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="React" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="React Query" />
              <SkillBadge name="React Router" />
            </div>
          </div>

          {/* Backend */}
          <div >
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Node.js" />
              <SkillBadge name="Express" />
              <SkillBadge name="REST APIs" />
              <SkillBadge name="JWT" />
              <SkillBadge name="Zod" />
              <SkillBadge name="MVC Architecture" />
            </div>
          </div>

          {/* Database */}
          <div >
            <h3 className="text-xl font-semibold mb-4">Database</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="MongoDB" />
              <SkillBadge name="Redis" />
              <SkillBadge name="MySQL" />
            </div>
          </div>

          {/* Tools & Services */}
         <div >
            <h3 className="text-xl font-semibold mb-4 ">Tools & Services</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Socket.IO" />
              <SkillBadge name="Appwrite" />
              <SkillBadge name="Postman" />
              <SkillBadge name="Git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
