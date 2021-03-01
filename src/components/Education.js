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
                        <li>Two full-stack projects developed and hosted (one personal and one group)</li>
                        <li>Several lab exercises and unit assessments to test understanding of core concepts</li>
                        <li>Devmountain badge in progress</li>
                    </ul>
                </h2>
                <h2>
                    <strong>University of Utah</strong> // Civil and Environmental Engineering
                    <p className="subheader">Emphasis on environmental engineering and water resources</p>
                    <ul>
                        <li>Multiple research reports written on sustainable materials and water engineering</li>
                        <li>Techinical writing and communication strengths and teaching positions were acquired</li>
                        <li>Senior project was an applied, real-world maximum water harvesting solution</li>
                    </ul>
                </h2>
                <h2>
                    <strong>University of Utah</strong> // Environmental and Sustainability Studies
                    <p className="subheader">Emphasis on renewable energy systems, land management, and climate science</p>
                    <ul>
                        <li>Climate change and renewable energy physics courses were prioritized</li>
                        <li>Social justice topics such as environmental justice and environemntal racism were taught</li>
                        <li>Senior project included drafting a land management proposal for a real nature preserve</li>
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