import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "gallery", "projects", "contact"];

function Navbar({ onNavigate }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection) setActive(visibleSection);
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    onNavigate?.(id); // ✅ mobile control

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const linkStyle = (id) =>
    `cursor-pointer transition-colors duration-200 ${
      active === id
        ? "text-black font-medium"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className="w-full fixed top-0 bg-white border-b border-gray-200 z-50">
      <div className="w-full px-4 sm:px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-xl font-semibold tracking-tight text-black">
            Shubham
          </h1>
          <span className="text-xs text-gray-500">
            Web Developer • MERN Stack
          </span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm">
          {sections.map((sec) => (
            <li
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={linkStyle(sec)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button
          className="md:hidden text-2xl text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <ul className="flex flex-col gap-4 text-gray-600">
            {sections.map((sec) => (
              <li
                key={sec}
                onClick={() => {
                  setActive(sec);
                  scrollToSection(sec);
                }}
                className="hover:text-black transition"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;