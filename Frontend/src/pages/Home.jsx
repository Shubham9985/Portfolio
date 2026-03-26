import { useState, useEffect } from "react";
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

  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionChange = (id) => {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* ✅ PASS PROP HERE */}
      <Navbar onNavigate={handleSectionChange} />

      <div className="pt-20">

        <Hero />

        {/* ✅ MOBILE VIEW */}
        {isMobile && activeSection !== "home" && (
          <SectionWrapper>
            {activeSection === "about" && <About />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "gallery" && <Gallery />}
            {activeSection === "projects" && <Projects />}
            {activeSection === "contact" && <Contact />}
          </SectionWrapper>
        )}

        {/* ✅ DESKTOP VIEW */}
        {!isMobile && (
          <>
            <SectionWrapper><WhyIBuild /></SectionWrapper>
            <SectionWrapper><CurrentlyBuilding /></SectionWrapper>
            <SectionWrapper><About /></SectionWrapper>
            <SectionWrapper><Skills /></SectionWrapper>
            <SectionWrapper><Gallery /></SectionWrapper>
            <SectionWrapper><Projects /></SectionWrapper>
            <SectionWrapper><Contact /></SectionWrapper>
          </>
        )}

        <Footer />
        <BackToTop />

      </div>
    </>
  );
}

export default Home;