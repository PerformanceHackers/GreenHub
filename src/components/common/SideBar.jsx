import React from 'react'
import {Link as LinkS} from 'react-scroll'
import { FaTimes } from "react-icons/fa";

function SideBar({toggle , isOpen}) {
 const styleObject = {
  opacity: isOpen ? "98%" : "0",
  top:  isOpen ? "0" : "-100%"
 }
 return (
  <>
  <aside className="side-container" onClick={toggle} style={styleObject} >
   <div onClick={toggle} className="icon-con">
   <FaTimes onClick={toggle} />
   </div>
   <div className="side-wrapper">
    <ul onClick={toggle} className="side-menu">
     <li className="side-link-item">
     <LinkS 
     onClick={toggle}
     to="home" >Home </LinkS>

     </li>
     <li className="side-link-item">
            <LinkS
            onClick={toggle}
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
          <li className="side-link-item">
            <LinkS
           onClick={toggle}
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
          {/* <li className="side-link-item">
            <LinkS
           
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
          <li className="side-link-item">
            <LinkS
           onClick={toggle}
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
          <li className="side-link-item">
            <LinkS
           onClick={toggle}
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
          <li className="side-link-item">
            <LinkS
           onClick={toggle}
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
   </div>
  </aside>
  </>
 )
}

export default SideBar
