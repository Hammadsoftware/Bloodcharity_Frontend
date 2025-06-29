import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent h-20 pt-6 shadow-md px-4 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold ">🩸Bloodcharity</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-gray-800 font-medium">
          <li><Link to="/" className="hover:text-red-700 text-1xl">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-700 text-1xl">About Us</Link></li>
          <li><Link to="/findblood" className="hover:text-red-700 text-1xl">Find Blood</Link></li>
          <li><Link to="/register" className="hover:text-red-700 text-1xl">Register Now</Link></li>
          <li>
            <Link to="/login" className="border px-4 py-1 rounded hover:bg-red-700 hover:text-white">
              Log In
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-3 bg-white shadow rounded-lg px-4 py-2 space-y-2 text-gray-800">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/find" onClick={toggleMenu}>Find Blood</Link></li>
          <li><Link to="/register" onClick={toggleMenu}>Register Now</Link></li>
          <li>
            <Link to="/login" onClick={toggleMenu} className="block border px-4 py-1 rounded hover:bg-red-700 hover:text-white">
              Log In
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

