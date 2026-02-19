function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl
           hover:border-cyan-400/40 transition"
>
      
      <h3 className="text-lg font-semibold">
        {project.title}
      </h3>

      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
        {project.description}
      </p>

      <div className="text-xs bg-black border border-gray-800 px-2 py-1 rounded-md"
>
        {project.techStack?.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-sm">
        <a href={project.github} className="text-black hover:underline">
          GitHub
        </a>
        <a href={project.live} className="text-black hover:underline">
          Live
        </a>
      </div>
    </div>
  );
}


export default ProjectCard;
