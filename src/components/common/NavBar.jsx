import React from "react";
import logo from "../../assets/images/logo.png";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";

function NavBar({toggle}) {


  return (
    <nav className="nav-main shadow">
      <div className="nav-container">
        <div className="nav-logo">
          <Link className="link" to="/">
            <img className="nav-logo-image" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="mobile-icon" onClick={toggle}>
          <i className="fa fa-bars"></i>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <LinkS
              className="nav-links"
              to="home"
              // smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-20}
              activeClass="active"
            >
              Home
            </LinkS>
          </li>
          <li className="nav-item">
            <LinkS
              className="nav-links"
              to="services"
              // smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-20}
              activeClass="active"
            >
              Services
            </LinkS>
          </li>
          <li className="nav-item">
            <LinkS
              className="nav-links"
              to="testimonials"
              // smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-20}
              activeClass="active"
            >
              Testimonials
            </LinkS>
          </li>
          {/* <li className="nav-item">
            <LinkS
              className="nav-links"
              to="ongoing"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-20}
              activeClass="active"
            >
              Ongoing Projects
            </LinkS>
          </li> */}
          <li className="nav-item">
            <LinkS
              className="nav-links"
              to="portfolio"
              // smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-20}
              activeClass="active"
            >
              Portfolio
            </LinkS>
          </li>
          <li className="nav-item">
            <LinkS
              className="nav-links"
              to="faq"
              // smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-20}
              activeClass="active"
            >
              Faq
            </LinkS>
          </li>
          <li className="nav-item">
            <LinkS
              className="nav-links"
              to="contact"
              // smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-20}
              activeClass="active"
            >
              Contact
            </LinkS>
          </li>
        </ul>
      <div className="nav-button-container">
      <button className="btn btn-nav-phone">
       +91&nbsp;9550498423 <span><i class="fa fa-phone"></i></span>
      </button>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
