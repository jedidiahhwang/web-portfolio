import React from "react"
import { Helmet } from "react-helmet"

import AppHeader from "../components/AppHeader.js";
import LandingPage from "../components/LandingPage.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";

const Home = () => {

  return (
    <div className="base-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jeddy Hwang</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
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
