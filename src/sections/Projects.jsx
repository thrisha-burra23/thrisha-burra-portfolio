import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "ResiTrack(Ongoing)",
    description:
      "A scalable MERN-based complaint management system designed for apartment communities. Built secure authentication using JWT access and refresh tokens, implemented role-based access control, and developed RESTful APIs for complaint lifecycle management. Structured backend using MVC architecture with Zod validation and MongoDB integration.",
    tech: ["React", "Node", "MongoDB", "Socket.IO"],
    github: "https://thrisha-burra23.github.io/Simons-Challenge-game/",
    live: "#",
    featured: true,
  },
  {
    title: "CoPath",
    description: "A full-featured carpooling web application built with React and Appwrite, enabling users to find and share rides efficiently. Implemented authentication, role-based dashboards (User, Driver, Admin), and real-time data synchronization. Managed server state using React Query and enhanced user experience with responsive UI, validations, and dynamic updates.",
    tech: ["React","Appwrite","React Query"],
    github: "https://github.com/thrisha-burra23/CoPath",
    live: "#",
  },
  {
    title: "Simon Say's Game",
    description: "A JavaScript-based interactive memory game where users repeat increasingly complex sequences. Implemented core game logic, state management, and event handling for user interactions. Designed a responsive UI with visual feedback and animations to enhance gameplay experience.",
    tech: ["HTML","CSS","JavaScript"],
    github: "https://github.com/thrisha-burra23/Simons-Challenge-game",
    live: "https://thrisha-burra23.github.io/Simons-Challenge-game/",
  },
  {
    title: "Portfolio",
    description: "A static frontend project built using HTML and CSS to demonstrate layout design and styling skills. Focused on clean UI structure, responsive design principles, and effective use of CSS for building visually appealing web pages.",
    tech: ["React"],
    github: "https://github.com/thrisha-burra23/thrisha-burra-portfolio",
    live: "#",
  },
   {
    title: "FastTrack",
    description: "A static frontend project built using HTML and CSS to demonstrate layout design and styling skills. Focused on clean UI structure, responsive design principles, and effective use of CSS for building visually appealing web pages.",
    tech: ["HTML","CSS"],
    github: "https://github.com/thrisha-burra23/FetchFastWebsite",
    live: "https://thrisha-burra23.github.io/FetchFastWebsite",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border rounded-lg hover:bg-gray-100"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;