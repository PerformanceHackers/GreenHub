import React, { useState } from "react";
import NavBar from "../common/NavBar";
import SideBar from "../common/SideBar";
import Faq from "../Faq/Faq";
import FrontSection from "../FrontSection/FrontSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import Testimonials from "../Testimonials/Testimonials";
import Footer from '../Footer/Footer'
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";

function Home() {
  const [isSideOpen, setIsSideOpen] = useState();
  const toggleSideOpen = () => setIsSideOpen((i) => !i);
  return (
    <>
      <NavBar toggle={toggleSideOpen} />
      <SideBar isOpen={isSideOpen} toggle={toggleSideOpen} />
      <FrontSection />
      <ServiceSection />
      <Testimonials />
      <Portfolio />
      <Faq />
      <Contact />
      <Footer />

      <a href="#" class="shadow btn-primary rounded-circle back-to-top">
  <i class="fa fa-chevron-up"></i>
</a>
    </>
  );
}

export default Home;
