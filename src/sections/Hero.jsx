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

          <h2 className="text-2xl mt-4 text-gray-600">
            MERN Stack Developer
          </h2>

          <p className="mt-4 text-gray-500 max-w-lg">
            I build scalable MERN applications with real-time features,
            clean UI, and performance-focused architecture.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
            >
              Resume
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
              className="p-3 border rounded-xl hover:bg-gray-100"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/thrisha-burra/"
              target="_blank"
              className="p-3 border rounded-xl hover:bg-gray-100"
            >
              <FaLinkedin />
            </a>
          </div>

          
        </motion.div>

        {/* RIGHT */}
        
        <HeroAnimation/>

      </div>
    </section>
  );
};

export default Hero;