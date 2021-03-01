import React from "react"
import { Link } from "gatsby"

import "../sass/container/container.scss";

import Header from "../components/Header.js";
import LandingPage from "../components/LandingPage.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";

const Home = () => {

  return (
    <div className="base-container">
      <Header />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </div>
    )
  }

export default Home
