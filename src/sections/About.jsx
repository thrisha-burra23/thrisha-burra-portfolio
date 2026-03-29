import SkillBadge from "../components/SkillBadge";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          About Me
        </h2>

        {/* About Text */}
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          I am a MERN stack developer focused on building scalable and real-time
          web applications. I enjoy creating clean UI, efficient backend
          systems, and solving real-world problems through code. Currently, I am
          improving my skills in full-stack development and working on projects
          like complaint management systems.
        </p>
        <div className="mt-6 flex gap-6 text-sm text-gray-500">
          <span>⚡ Full Stack Development</span>
          <span>⚡ Real-time Systems</span>
          <span>⚡ Clean UI</span>
        </div>

        {/* Skills */}
        <div className="mt-12 grid md:grid-cols-4 gap-10">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="React" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="React Query" />
              <SkillBadge name="Zod" />
              <SkillBadge name="React Router" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Node.js" />
              <SkillBadge name="Express" />
              <SkillBadge name="REST APIs" />
            </div>
          </div>

          {/* Database */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Database</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="MongoDB" />
              <SkillBadge name="Redis" />
              <SkillBadge name="MySQL"/>
            </div>
          </div>

          {/* Auth & Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Auth & Services</h3>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="JWT Auth" />
              <SkillBadge name="Socket.IO" />
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
