import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button - always visible */}
      {isHomePage && (
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Sidebar - appears from left on all screen sizes */}
      {isHomePage && (
        <>
          <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="hero" smooth={true} duration={500} onClick={toggleSidebar}>Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} onClick={toggleSidebar}>About</Link></li>
              <li><Link to="skills" smooth={true} duration={500} onClick={toggleSidebar}>Skills</Link></li>
              <li><Link to="projects" smooth={true} duration={500} onClick={toggleSidebar}>Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={500} onClick={toggleSidebar}>Contact</Link></li>
            </ul>
          </nav>
          {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}
        </>
      )}
    </>
  );
};

export default Navbar;
