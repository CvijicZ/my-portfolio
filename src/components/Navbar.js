import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const navbarCollapse = navbarCollapseRef.current;
    if (navbarCollapse) {
      new window.bootstrap.Collapse(navbarCollapse);
    }
  }, []);

  const closeNavbar = () => {
    const navbarCollapse = navbarCollapseRef.current;
    if (navbarCollapse) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg custom-navbar-color">
      <div className="container-fluid">
        {/* Logo section */}
        <span className="navbar-text text-light d-flex align-items-center">
          Made with React&nbsp;
          <i className="fab fa-react" style={{ color: '#61dafb', fontSize: '1.5rem', fontWeight: 'bold' }}></i>
        </span>
        {/* Navbar toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Centered Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="header"
                smooth={true}
                duration={300}
                spy={true}
                offset={-80}
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                smooth={true}
                duration={300}
                spy={true}
                offset={-70}
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="projects"
                smooth={true}
                duration={300}
                spy={true}
                offset={-70}
                onClick={closeNavbar}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                smooth={true}
                duration={300}
                spy={true}
                offset={-70}
                onClick={closeNavbar}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Social Media Icons */}
          <div className="d-flex me-3">
            <a
              href="https://www.linkedin.com/in/zoran-cvijic/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="fab fa-linkedin fa-2x custom-icon-hover" style={{ color: '#0a66c2' }}></i>
            </a>
            <a
              href="mailto:cvijiczoran4@gmail.com"
              className="me-3"
            >
              <i className="fas fa-envelope fa-2x text-warning custom-icon-hover"></i>
            </a>
            <a
              href="https://github.com/CvijicZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <i className="fab fa-github fa-2x custom-icon-hover"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
