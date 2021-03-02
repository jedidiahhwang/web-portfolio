import { Link } from "gatsby"
import React, {useEffect, useState} from "react"

import "../sass/landingpage/landingpage.scss";

import backgroundImage from "../images/Detail Shot.jpg";

const LandingPage = (props) => {

    return (
        <section className="landing-page">
            <img
                id="background-image"
                src={backgroundImage}
            />
            <div className="welcome-box">
                <h1>Hello</h1>
                <h1>I'm Jeddy Hwang</h1>
                <span className="intro">
                    and I'm a <strong>web developer</strong>
                    </span>  
            </div>
        </section>
    )
}

export default LandingPage