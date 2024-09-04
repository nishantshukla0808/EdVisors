import React from 'react';
import logo from '../assets/eduvisors-logo.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo} // Replace with the actual logo path
            alt="EduVisors"
            style={{ height: '60px', marginRight: '10px' }}
          />
          
        </a>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Dropdowns */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            {/* Admission Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="admissionDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admission
              </a>
              <ul className="dropdown-menu" aria-labelledby="admissionDropdown">
                <li>
                  <a className="dropdown-item" href="#college-details">
                    College Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#application-process">
                    Application Process
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#scholarships">
                    Scholarships
                  </a>
                </li>
              </ul>
            </li>

            {/* Counsellors Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="counsellorsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Counsellors
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="counsellorsDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#national-certification">
                    National Certification Program
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#seminars">
                    Conduct Seminars
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#webinars">
                    Conduct Webinars
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#one-on-one">
                    One-on-One Sessions
                  </a>
                </li>
              </ul>
            </li>

            {/* Blogs Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="blogsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blogs
              </a>
              <ul className="dropdown-menu" aria-labelledby="blogsDropdown">
                <li>
                  <a className="dropdown-item" href="#articles">
                    Articles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#success-stories">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#career-tips">
                    Career Tips
                  </a>
                </li>
              </ul>
            </li>

            {/* About Us Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="aboutUsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutUsDropdown">
                <li>
                  <a className="dropdown-item" href="#core-team">
                    Core Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#advisory">
                    Advisory
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#mission-vision">
                    Mission & Vision
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Log In and Sign Up Buttons */}
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2">Log In</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
