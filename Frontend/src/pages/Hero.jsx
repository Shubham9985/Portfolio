const Hero = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-6 sm:px-10 bg-white"
        >
            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black">
                        Hi, I’m Shubham
                    </h1>

                    <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
                        Full Stack Developer (MERN) focused on building scalable backend systems
                        and clean, user-friendly interfaces.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="px-8 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
                        >
                            View Projects
                        </button>

                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center md:justify-end">
                    <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">

                        {/* Replace src with your image */}
                        <img
                            src="/profile.jpg"
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