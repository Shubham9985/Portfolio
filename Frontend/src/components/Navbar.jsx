import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-4 sm:px-8 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold">Shubham</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Projects</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-center">
          <li className="hover:text-gray-400">Home</li>
          <li className="hover:text-gray-400">About</li>
          <li className="hover:text-gray-400">Projects</li>
          <li className="hover:text-gray-400">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
