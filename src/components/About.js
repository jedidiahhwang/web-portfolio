import React, {useEffect, useState} from "react";

import Summary from "./Summary.js";
import Education from "./Education.js";
import Experience from "./Experience.js";

import "../sass/about/about.scss";

const About = (props) => {
    const [aboutSection, setAboutSection] = useState("");

    useEffect(() => {
        setAboutSection("summary");
    }, [])

    const summary = (e) => {
        e.preventDefault();
        setAboutSection("summary");
    }

    const education = (e) => {
        e.preventDefault();
        setAboutSection("education")
    }

    const experience = (e) => {
        e.preventDefault();
        setAboutSection("experience");
    }

    const highlighted = {
        color: "#00c6cf",
    }

    return (
        <section id="about-page" className="about">
            <h1>About Me</h1>
            <div className="subheader-container">
                {aboutSection === "summary" ?
                    <button style={highlighted} className="about-button" onClick={summary}>Summary</button>
                : <button className="about-button" onClick={summary}>Summary</button>}
                {aboutSection === "education" ? 
                    <button style={highlighted} className="about-button" onClick={education}>Education</button>
                : <button className="about-button" onClick={education}>Education</button>}
                {aboutSection === "experience" ? 
                    <button style={highlighted} className="about-button" onClick={experience}>Experience</button>
                : <button className="about-button" onClick={experience}>Experience</button>}
            </div>
            <div className="about-information">
                {aboutSection === "summary" ?
                    <Summary />
                : null}
                {aboutSection === "education" ?
                    <Education />
                : null}
                {aboutSection === "experience" ?
                    <Experience />
                : null}
            </div>
        </section>
    )
}

export default About