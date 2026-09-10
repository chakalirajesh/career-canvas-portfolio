import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="page-navbar">
      <div className="nav-logo">Rajesh Chakali</div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
        </li>
        <li>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
        </li>
        <li>
          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>

      <a href="mailto:rajeshchakali01@gmail.com" className="nav-hire">
        Hire Me
      </a>
    </nav>
  );
}

export default Navbar;
