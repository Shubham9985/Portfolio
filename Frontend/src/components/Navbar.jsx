import { useEffect, useState } from "react";

const sections = ["home", "about", "skills","gallery", "projects", "contact"];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const linkStyle = (id) =>
    `cursor-pointer transition-colors duration-200 ${
      active === id
        ? "text-black font-medium"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="w-full fixed top-0 bg-white border-b border-gray-100 z-50">
      <div className="w-full px-6 sm:px-10 py-6 flex justify-between items-center">

        
        {/* Logo / Name */}
        <h1 className="text-lg font-semibold tracking-tight text-black">
          Shubham
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          <li onClick={() => scrollToSection("home")} className={linkStyle("home")}>Home</li>
          <li onClick={() => scrollToSection("about")} className={linkStyle("about")}>About</li>
          <li onClick={() => scrollToSection("skills")} className={linkStyle("skills")}>Skills</li>
          <li onClick={() => scrollToSection("gallery")} className={linkStyle("gallery")}>Gallery</li>
          <li onClick={() => scrollToSection("projects")} className={linkStyle("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")} className={linkStyle("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
