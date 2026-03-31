import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HeroAnimation from "../components/HeroAnimation";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Hi, I'm <span className="text-indigo-600">Thrisha Burra</span>
          </h1>

          <h2 className="text-2xl mt-4 text-gray-600">MERN Stack Developer</h2>

          <p className="mt-4 text-gray-500 max-w-lg">
            Full-stack developer building scalable MERN applications with secure
            authentication, role-based access control, and clean, maintainable
            backend architecture — combined with responsive UI and smooth user
            experience.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100"
            >
              Contact
            </a>

            {/* Social Links */}
            <a
              href="https://github.com/thrisha-burra23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border rounded-xl hover:bg-gray-100"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/thrisha-burra/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border rounded-xl hover:bg-gray-100"
            >
              <FaLinkedin />
            </a>
            <div className="mt-6 flex gap-4 text-sm text-gray-500">
              <span>⚡ JWT Auth</span>
              <span>⚡ Role-based Systems</span>
              <span>⚡ Real-time Apps</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}

        <div className="flex justify-center md:justify-end">
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
};

export default Hero;
