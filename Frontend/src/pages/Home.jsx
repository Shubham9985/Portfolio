import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Hero from "./Hero";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";  
import WhyIBuild from "../components/WhyIBuild";
import CurrentlyBuilding from "../components/CurrentlyBuilding";

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
        <WhyIBuild />
        <CurrentlyBuilding/>
        <About />
        <Skills />
        <Gallery />
        <Projects />
        <Contact />
        <Footer />


      </div>


    </>
  );
}

export default Home;
