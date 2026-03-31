import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Thrisha Burra</h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-gray-600">
          <a
            href="#about"
            className="hover:bg-indigo-200 rounded-xl p-1.5  transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:bg-indigo-200 rounded-xl p-1.5  transition"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:bg-indigo-200 rounded-xl p-1.5  transition"
          >
            Experience
          </a>
          <a
            href="#education"
            className="hover:bg-indigo-200 rounded-xl p-1.5  transition"
          >
            Education
          </a>
          <a
            href="#contact"
            className="hover:bg-indigo-200 rounded-xl p-1.5  transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-xl p-1  z-30"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-gray-700">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-indigo-100 active:bg-indigo-200 transition"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-indigo-100 active:bg-indigo-200 transition"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-indigo-100 active:bg-indigo-200 transition"
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-indigo-100 active:bg-indigo-200 transition"
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg hover:bg-indigo-100 active:bg-indigo-200 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
