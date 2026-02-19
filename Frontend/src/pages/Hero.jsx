const Hero = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white"
        >

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black">
                Hi, I’m Shubham 👋
            </h1>

            <p className="mt-6 text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed">
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

        </section>
    );
};

export default Hero;
