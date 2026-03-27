import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/projects")
  //     .then(res => res.json())
  //     .then(data => setProjects(data));
  // }, []);

  const projectList = projects;



  return (
    <section id="projects" className="w-full px-2 sm:px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectList.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
