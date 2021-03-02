import React from "react";

import "../sass/footer/footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Designed by Jeddy Hwang</p>
            <p>Developed on Gatsby.js</p>
            <p>Deployed on AWS Amplify</p>
            <p>
                Logo by <a href="https://www.instagram.com/jasonj1206/?hl=en"><strong>Jason Jiang</strong></a>
            </p>
        </footer>
    )
}

export default Footer