import React from "react";

import COVIDImage from "../../images/COVID_Dashboard.png";
import "../../sass/covid/covid.scss";

const COVID_Dashboard = () => {
    return (
        <div className="covid-dashboard">
            <section className="column-one">
                <img
                    id="covid-image"
                    src={COVIDImage}
                />
            </section>
            <section className="column-two">
                <div className="info-container">
                    <h2>
                        <strong>COVID Dashboard</strong> // One stop shop for US COVID-19 data
                    </h2>
                    <article className="projects-info-text">
                        The COVID Dashboard was a group project intended to emulate other COVID Dashboards, but with a simple display and 
                        user-friendly experience. Multiple APIs were used to obtain data, and their corresponding JSON format had to be 
                        manipulated to be applied to the project. An interactive map displaying state and county data as well as graphs were
                        created, as well as tables comparing United States state data as well as United States in comparison to other countries.
                        A Twitter feed of the CovidTracking page as well as a COVID news article list are also rendered.
                    </article>
                    <br></br>
                    <article className="projects-info-text">
                        Note that the news API in use will NOT render in production due to a $449 fee.
                    </article>
                    <br></br>
                    <span className="technologies">
                        JavaScript | HTML | CSS | SASS | Bootstrap | React | Node.js | Express | Axios | Massive | Mapbox | D3/Nivo 
                    </span>
                    <div className="external-links">
                        <a href="https://github.com/covid-dashboard-group/covid-dashboard" target="_blank"><button className="angled-gradient-button">GitHub Repo</button></a>
                        <a href="http://104.248.66.60:4000" target="_blank"><button className="angled-gradient-button">Link</button></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default COVID_Dashboard