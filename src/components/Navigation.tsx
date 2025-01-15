import React from 'react';
import { Clover } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-dublin-green-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Clover Icon linked to Home */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Clover className="w-8 h-8 text-dublin-gold" />
              <span className="font-bold text-xl">DHS Reunion</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-dublin-gold transition">
              Home
            </Link>
            <Link
              to="/event-details"
              className="hover:text-dublin-gold transition"
            >
              Events
            </Link>
            <Link to="/attendees" className="hover:text-dublin-gold transition">
              Attendees
            </Link>
            <Link to="/gallery" className="hover:text-dublin-gold transition">
              Gallery
            </Link>
            <Link to="/updates" className="hover:text-dublin-gold transition">
              Updates
            </Link>
            <Link to="/playlist" className="hover:text-dublin-gold transition">
              2010 Playlist
            </Link>
            <Link to="/profiles" className="hover:text-dublin-gold transition">
              Profiles
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-dublin-green-dark text-white p-4">
          <Link to="/" className="hover:text-dublin-gold transition" onClick={closeMenu}>
            Home
          </Link>
          <Link
            to="/event-details"
            className="hover:text-dublin-gold transition"
            onClick={closeMenu}
          >
            Event Details
          </Link>
          <Link to="/attendees" className="hover:text-dublin-gold transition" onClick={closeMenu}>
            Attendees
          </Link>
          <Link to="/gallery" className="hover:text-dublin-gold transition" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/updates" className="hover:text-dublin-gold transition" onClick={closeMenu}>
            Updates
          </Link>
          <Link to="/playlist" className="hover:text-dublin-gold transition" onClick={closeMenu}>
            2010 Playlist
          </Link>
          <Link to="/profiles" className="hover:text-dublin-gold transition" onClick={closeMenu}>
            Profiles
          </Link>
        </div>
      )}
    </nav>
  );
}
