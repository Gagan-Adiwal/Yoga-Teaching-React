import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img
            src="images/iconyoga.jpg"
            alt="YogaFlow Logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <h1 className="text-2xl font-bold text-pink-600">YogaFlow</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-pink-600">Home</Link>
          <Link to="/classes" className="hover:text-pink-600">Classes</Link>
          <Link to="/courses" className="hover:text-pink-600">Courses</Link>
          <Link to="/about" className="hover:text-pink-600">About</Link>
          <Link to="/contact" className="hover:text-pink-600">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/classes" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>Classes</Link>
            <Link to="/courses" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link to="/about" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-pink-600" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}



