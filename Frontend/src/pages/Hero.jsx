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
  className="min-h-[70vh] md:min-h-screen flex items-center px-6 sm:px-10 bg-white"
>
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}

                <div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-black">
                        Hi, I’m Shubham
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
                            className="px-8 py-3 rounded-lg bg-black text-white
                             hover:bg-gray-800 hover:scale-105 transition duration-200"
                        >
                            View Projects
                        </button>

                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-8 py-3 rounded-lg border border-gray-300
                             hover:bg-gray-100 hover:scale-105 transition duration-200"
                        >
                            Contact Me
                        </button>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-center"
                        >
                            View Resume
                        </a>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex flex-col items-center md:items-end">

                    <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gray-100 
                    flex items-center justify-center overflow-hidden">
                        <img
                            src="/profile.jpg"
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* SOCIAL ICONS */}
                    {/* <div className="flex gap-4 mt-4 text-gray-500 text-xl">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-black transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-black transition"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-black transition"
                        >
                            <FaInstagram />
                        </a>
                    </div> */}

                </div>

            </div>
        </section>
    );
};

export default Hero;