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
import BackToTop from "../components/BackToTop";
import SectionWrapper from "../components/SectionWrapper";

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

        <Hero />
        <SectionWrapper>
          <WhyIBuild />
        </SectionWrapper>

        <SectionWrapper>
          <CurrentlyBuilding />
        </SectionWrapper>

        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <Skills />
        </SectionWrapper>

        <SectionWrapper>
          <Gallery />
        </SectionWrapper>

        <SectionWrapper>
          <Projects />
        </SectionWrapper>

        <SectionWrapper>
          <Contact />
        </SectionWrapper>
        <Footer />
        <BackToTop />

      </div>


    </>
  );
}

export default Home;
