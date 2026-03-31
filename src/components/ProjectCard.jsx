const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition group">
      {/* Image placeholder */}
      {/* <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-4 group-hover:scale-105 transition" /> */}
      <div className="h-50 rounded-xl overflow-hidden mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>

      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="text-gray-600 text-sm mt-2">{project.description}</p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((t, i) => (
          <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 text-sm hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 text-sm hover:underline"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
