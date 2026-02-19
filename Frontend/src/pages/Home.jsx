import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Hero from "./Hero";


function Home() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };


  return (
    <>
      <Navbar />

      <div className="pt-20" >
        
        <Hero/>
        <About />
        <Skills />
        <Projects />
        <Contact />

      </div>


    </>
  );
}

export default Home;
