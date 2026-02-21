const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-5 shadow-sm 
                    hover:bg-white hover:shadow-md 
                    transition duration-300">
      
      <h3 className="text-lg font-semibold text-black">
        {project.title}
      </h3>

      <p className="text-gray-500 text-sm mt-2 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.techStack?.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-white px-3 py-1 rounded-full text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-black transition"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;