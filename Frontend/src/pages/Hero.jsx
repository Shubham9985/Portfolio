import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Hero = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <section
  id="home"
  className="min-h-[70vh] md:min-h-screen flex items-center px-4 sm:px-8 bg-white"
>
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-6 items-center">

                {/* LEFT CONTENT */}

                <div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-black">
                        Hi, I’m 'Shubham'
                    </h1>
                    <p className="mt-4 text-sm tracking-wide text-gray-400 uppercase">
                        Engineering products from zero to launch
                    </p>

                    <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
                        Product Builder • Focused Engineer
                    </p>

                    <div className="hidden sm:flex mt-6 sm:mt-10 flex-col sm:flex-row gap-4">

                        <button
                            onClick={() => scrollToSection("projects")}
                            className="px-6 py-3 rounded-lg bg-black text-white
                             hover:bg-gray-800 hover:scale-105 transition duration-200"
                        >
                            View Projects
                        </button>

                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-6 py-3 rounded-lg border border-gray-300
                             hover:bg-gray-100 hover:scale-105 transition duration-200"
                        >
                            Contact Me
                        </button>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-center"
                        >
                            View Resume
                        </a>

                    </div>
                    {/* <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
                        Web Developer • Problem Solving
                    </p> */}
                </div>

                {/* RIGHT IMAGE */}
               <div className="flex flex-col items-center mt-8 md:mt-0">

  <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 
                  rounded-full border border-gray-300 shadow-sm 
                  flex items-center justify-center overflow-hidden bg-white
                  transition duration-300 hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-gray-300 p-1">
    
    <img
      src="/projects/shubham.png"
      alt="profile"
      className="w-full h-full object-cover"
    />
    
  </div>

</div>

            </div>
        </section>
    );
};

export default Hero;