import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen pt-16">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Thrisha Burra. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
