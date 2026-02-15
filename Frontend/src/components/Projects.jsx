function ProjectCard({ project }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="text-gray-600 text-sm mt-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-200 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
