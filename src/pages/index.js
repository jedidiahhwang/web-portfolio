import React from "react"
import { Link } from "gatsby"

import "../sass/container/container.scss";

import AppHeader from "../components/AppHeader.js";
import LandingPage from "../components/LandingPage.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";

const Home = () => {

  return (
    <div className="base-container">
      <AppHeader />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    )
  }

export default Home
