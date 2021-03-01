import React from "react";

import "../sass/education/education.scss";

const Education = () => {
    return (
        <div className="education-section">
            <section className="column-one">
                <h2>
                    <strong>Devmountain</strong> // Full-Stack Student Web Developer
                    <p className="subheader">Intensive 3-month course focusing on JavaScript, HTML/CSS, and React</p>
                    <ul>
                        <li>Explorify - A music genre expanding full-stack application taking advantage of Spotify's public API</li>
                        <li>COVID Dashboard - A group project designed for users to easily access the latest COVID-19 data and news</li>
                        <li>Several lab exercises and unit assessments to test understanding of core concepts</li>
                        <li>Devmountain badge in progress</li>
                    </ul>
                </h2>
                <h2>
                    <strong>University of Utah</strong> // Civil and Environmental Engineering
                    <p className="subheader">Emphasis on environmental engineering and water resources</p>
                    <ul>
                        <li>Multiple research reports written on sustainable materials, water engineering, and environmental engineering</li>
                        <li>Techinical writing and communication strengths demonstrated through coursework and a teacher's assistant position</li>
                        <li>Senior project was an applied, real-world, maximum water harvesting solution through the Salt Lake Department of Public Utilities</li>
                    </ul>
                </h2>
                <h2>
                    <strong>University of Utah</strong> // Environmental and Sustainability Studies
                    <p className="subheader">Emphasis on renewable energy systems, land management, and climate science</p>
                    <ul>
                        <li>Climate change, renewable energy physics, and atmospheric science courses were prioritized</li>
                        <li>Understanding of social environmental topics such as environmental justice, racism, and sociology/ethics were demonstrated through research papers</li>
                        <li>Senior project included drafting a land management proposal for a real nature preserve near Park City, Utah</li>
                    </ul>
                </h2>
            </section>
            <div className="vl"></div>
            <section className="column-two">
                <section className="top-side">
                    <img
                        src={require("../images/Setup3.jpg")}
                        id="setup-photo"
                    />
                </section>
                <section className="bottom-side">
                    <img
                        src={require("../images/Graduation.jpeg")}
                        className="photo graduation"
                    />
                    <img
                        src={require("../images/Field_Work.jpg")}
                        className="photo field-work"
                    />
                </section>
            </section>
        </div>
    )
}

export default Education