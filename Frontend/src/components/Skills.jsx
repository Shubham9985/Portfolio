const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "REST APIs",
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-4 sm:px-8 py-16 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white py-3 px-4 text-center rounded-lg shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
