import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const code = `const developer = {
  name: 'Thrisha Burra',
  role: 'Full Stack Developer',
  experience: 'MERN + REST APIs',

  skills: {
    frontend: ['React', 'Tailwind', 'Responsive UI'],
    backend: ['Node.js', 'Express', 'REST APIs'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['Git', 'VS Code', 'Appwrite']
  },

  strengths: [
    'Authentication (JWT)',
    'Zod Validation',
    'Role-based Access Control',
    'Scalable Architecture'
  ]
};

const projects = [
  'ResiTrack – Complaint Management System',
  'CoPath – Carpooling App',
  'Simons Game'
];

function buildApps() {
  return 'Clean UI + Secure + Scalable';
}`;

const HeroAnimation = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const type = () => {
      setText(code.slice(0, i));
      i++;

      if (i <= code.length) {
        setTimeout(type, 50); // typing speed
      } else {
        // restart after delay
        setTimeout(() => {
          i = 0;
          type();
        }, 1500);
      }
    };

    type();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-gray-200 text-gray-800 p-5 rounded-xl w-full max-w-md font-mono text-sm shadow-md whitespace-pre-wrap leading-relaxed"
    >
      {/* Editor header */}
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 bg-red-400 rounded-full" />
        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
        <div className="w-3 h-3 bg-green-400 rounded-full" />
      </div>

      {/* Typed code */}
      {text}

      {/* Cursor */}
      <motion.span
        className="inline-block w-[2px] h-4 bg-gray-800 ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
};

export default HeroAnimation;