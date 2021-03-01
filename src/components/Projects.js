import React, {useEffect, useState} from "react";

import CovidDashboard from "./IndividualProjects/COVID_Dashboard.js";
import Explorify from "./IndividualProjects/Explorify.js";
import Cinelist from "./IndividualProjects/Cinelist.js";

import "../sass/projects/projects.scss";

const Projects = (props) => {
    const [projectsSection, setProjectsSection] = useState("");

    useEffect(() => {
        setProjectsSection("COVID Dashboard");
    }, [])

    const covid = (e) => {
        e.preventDefault();
        setProjectsSection("COVID Dashboard");
    }

    const explorify = (e) => {
        e.preventDefault();
        setProjectsSection("Explorify")
    }

    const nodb = (e) => {
        e.preventDefault();
        setProjectsSection("NoDB Cinelist");
    }

    const highlighted = {
        color: "#00c6cf",
    }

    return (
        <section id="projects-page" className="projects">
            <h1>Projects</h1>
            <div className="subheader-container">
                {projectsSection === "COVID Dashboard" ?
                    <button style={highlighted} className="projects-button" onClick={covid}>COVID Dashboard</button>
                : <button className="projects-button" onClick={covid}>COVID Dashboard</button>}
                {projectsSection === "Explorify" ? 
                    <button style={highlighted} className="projects-button" onClick={explorify}>Explorify</button>
                : <button className="projects-button" onClick={explorify}>Explorify</button>}
                {projectsSection === "NoDB Cinelist" ? 
                    <button style={highlighted} className="projects-button" onClick={nodb}>Cinelist</button>
                : <button className="projects-button" onClick={nodb}>Cinelist</button>}
            </div>
            <div className="project-information">
                {projectsSection === "COVID Dashboard" ? 
                    <CovidDashboard />
                : null}
                {projectsSection === "Explorify" ? 
                    <Explorify />
                : null}
                {projectsSection === "NoDB Cinelist" ? 
                    <Cinelist />
                : null}
            </div>
        </section>
    )
}

export default Projects