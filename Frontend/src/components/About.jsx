function About() {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-8 py-16  bg-gray-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I’m a Full Stack Developer specializing in the MERN stack. I enjoy
            building scalable backend systems and clean, responsive user
            interfaces. I’m focused on writing maintainable code and delivering
            real-world products.
          </p>
        </div>

        {/* Placeholder for image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-48 h-48 sm:w-60 sm:h-60 
                rounded-full border border-gray-200 shadow-sm 
                overflow-hidden bg-white">

            <img
              src="/projects/about.jpeg"
              alt="about"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
