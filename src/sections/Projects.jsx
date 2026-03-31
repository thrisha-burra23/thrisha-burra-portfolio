import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    image: "/ResiTrack.png",
    title: "ResiTrack – Complaint Management System",
    description:
      "A scalable MERN-based complaint management system designed for apartment communities. Implemented JWT authentication with access and refresh tokens, role-based access control (Resident, Admin, Staff), and RESTful APIs for complaint lifecycle management. Structured backend using MVC architecture with Zod validation and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Zod"],
    github: "https://github.com/thrisha-burra23/ResiTrack",
    live: "#",
    featured: true,
  },
  {
    image: "/CoPath.png",
    title: "CoPath",
    description:
      "Built a full-featured carpooling web application with authentication, role-based dashboards (User, Driver, Admin), and real-time data synchronization using Appwrite. Managed server state using React Query and enhanced UX with responsive design, validations, and dynamic updates.",
    tech: ["React", "Tailwind", "Appwrite", "React Query"],
    github: "https://github.com/thrisha-burra23/CoPath",
    live: "https://copath-one.vercel.app/",
  },
  {
    image: "/simonssays.png",
    title: "Simon Say's Game",
    description:
      "A JavaScript-based interactive memory game with dynamic sequence generation, user input validation, and level progression. Designed a responsive UI with visual feedback and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/thrisha-burra23/Simons-Challenge-game",
    live: "https://thrisha-burra23.github.io/Simons-Challenge-game/",
  },
  {
    image: "/portfolio.png",
    title: "Portfolio",
    description:
      "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion. Features responsive design, smooth animations, dynamic code typing effect, and EmailJS integration for contact functionality.",
    tech: ["React"],
    github: "https://github.com/thrisha-burra23/thrisha-burra-portfolio",
    live: "https://thrisha-burra-portfolio.vercel.app/",
  },
  {
    image: "/FetchFast.png",
    title: "FetchFast",
    description:
      "A static frontend website built using HTML and CSS, focused on layout design, responsiveness, and clean UI structure for showcasing web design fundamentals.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/thrisha-burra23/FetchFastWebsite",
    live: "https://thrisha-burra23.github.io/FetchFastWebsite",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16  px-6 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 pl-3">Projects</h2>

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
            className="px-6 py-2 border rounded-lg hover:bg-blue-200 transition"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
