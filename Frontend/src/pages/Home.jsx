import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m Shubham 👋
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
          Full Stack Developer (MERN) building scalable and user-friendly web
          applications.
        </p>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />

    </>
  );
}

export default Home;
