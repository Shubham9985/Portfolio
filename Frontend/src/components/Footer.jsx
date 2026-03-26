import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col items-center gap-6">

        {/* Name */}
        <h3 className="text-lg font-semibold text-black">
          Connect With ME!
        </h3>

        {/* Social Links */}
        <div className="flex gap-6 text-gray-500 text-xl">
          <a
            href="https://github.com/Shubham9985"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black hover:-translate-y-1 transition duration-200"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shubhamkumar0114"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black hover:-translate-y-1 transition duration-200"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/shubhamm0_1/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black hover:-translate-y-1 transition duration-200"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shubham. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;