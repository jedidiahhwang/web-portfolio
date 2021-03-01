import { Link } from "gatsby"
import React from "react"

import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";

import "../sass/header/header.scss";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
  require("smooth-scroll")('a[href*="#about-page"]')
  require("smooth-scroll")('a[href*="#projects-page"]')
  require("smooth-scroll")('a[href*="#contact-page"]')
}

const AppHeader = () => (
  <header className="header">
    <Link to="/#" className="tag">Home</Link>
    <Link to="/#about-page" className="tag">About</Link>
    <Link to="/#projects-page" className="tag">Projects</Link>
    <Link to="/#contact-page" className="tag">Contact</Link>
  </header>
)

export default AppHeader
