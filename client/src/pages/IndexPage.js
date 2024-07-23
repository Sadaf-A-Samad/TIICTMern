import React from "react";
import HeroSlider from "./HeroSlider";
import AboutUs from "./AboutUs";
import Courses from "./Courses";
import Team from "./Team";
import Contact from "./Contact";
import Affiliation from "./Affiliation";
import Footer from "./Footer";

const IndexPage = () => {
  return (
    <>
      <HeroSlider />
      <AboutUs />
      <Courses />
      <Team />
      <Contact />
      <Affiliation />
      <Footer />
    </>
  );
};

export default IndexPage;
