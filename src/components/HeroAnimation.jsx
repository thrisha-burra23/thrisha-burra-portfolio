import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeBlocks = [
  `const developer = {
  name: 'Thrisha Burra',
  role: 'Full Stack Developer',
  currentProject: 'ResiTrack – MERN App 🚀'
};`,

  `const stack = {
  frontend: ['React', 'Tailwind'],
  backend: ['Node.js', 'Express'],
};`,

  `const databases = [
  'MongoDB',
  'MySQL'
];`,

  `const tools = [
  'Git',
  'Appwrite',
  'React Query'
];`,

  `const status = 
  'Open to Opportunities 🚀';`,
];

const HeroAnimation = () => {
  const [text, setText] = useState("");
  const [blockIndex, setBlockIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    let timeout;

    const current = codeBlocks[blockIndex];

    const type = () => {
      setText(current.slice(0, i));
      i++;

      if (i <= current.length) {
        const delay = current[i] === "\n" ? 120 : 30 + Math.random() * 40;

        timeout = setTimeout(type, delay);
      } else {
        // wait before switching block
        timeout = setTimeout(() => {
          setBlockIndex((prev) => (prev + 1) % codeBlocks.length);
        }, 1500);
      }
    };

    type();

    return () => clearTimeout(timeout); // ✅ FIXES GLITCH
  }, [blockIndex]);

  const lines = text.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-gray-200 rounded-xl w-full max-w-md shadow-md overflow-hidden font-mono text-sm"
    >
      {/* VS Code Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-full" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
        </div>
        <span className="text-xs text-gray-500">index.js</span>
      </div>

      {/* Code Area */}
      <div className="flex">
        {/* Line Numbers */}
        <div className="bg-gray-50 text-gray-400 px-2 py-3 text-right select-none">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Code Content */}
        <div className="flex-1 px-3 py-3 text-gray-800 whitespace-pre leading-relaxed">
          {lines.map((line, i) => {
            const isLastLine = i === lines.length - 1;

            return (
              <div key={i} className="flex">
                <span>{line}</span>

                {/* Cursor only on last line */}
                {isLastLine && (
                  <motion.span
                    className="inline-block w-[2px] h-4 bg-black ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroAnimation;
